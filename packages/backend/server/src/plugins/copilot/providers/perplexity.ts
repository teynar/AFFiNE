import assert from 'node:assert';

import { metrics } from '../../../base';
import {
  CopilotCapability,
  CopilotChatOptions,
  CopilotProviderType,
  CopilotTextToTextProvider,
  PromptMessage,
} from '../types';

export type PerplexityConfig = {
  apiKey: string;
};

interface Message {
  role: 'assistant';
  content: string;
}

interface Choice {
  message: Message;
  delta: Message;
}

interface PerplexityResponse {
  citations: string[];
  choices: Choice[];
}

export class PerplexityProvider implements CopilotTextToTextProvider {
  static readonly type = CopilotProviderType.Perplexity;

  static readonly capabilities = [CopilotCapability.TextToText];

  static assetsConfig(config: PerplexityConfig) {
    return !!config.apiKey;
  }

  constructor(private readonly config: PerplexityConfig) {
    assert(PerplexityProvider.assetsConfig(config));
  }

  readonly availableModels = [
    'llama-3.1-sonar-small-128k-online',
    'llama-3.1-sonar-large-128k-online',
    'llama-3.1-sonar-huge-128k-online',
  ];

  get type(): CopilotProviderType {
    return PerplexityProvider.type;
  }

  getCapabilities(): CopilotCapability[] {
    return PerplexityProvider.capabilities;
  }

  injectCitations(response: PerplexityResponse) {
    const { content } = response.choices[0].message;
    const { citations } = response;
    // Match both [[n]] and [n] patterns
    // Ignore already formatted citations
    const regex = /\[{1,2}(\d+)\]{1,2}(?!\()/g;
    return content.replace(regex, (match: string, reference: string) => {
      const index = parseInt(reference, 10) - 1;
      if (index >= 0 && index < citations.length) {
        const url = citations[index];
        return `[[${index + 1}](${url})]`;
      }
      return match;
    });
  }

  async isModelAvailable(model: string): Promise<boolean> {
    return this.availableModels.includes(model);
  }

  async generateText(
    messages: PromptMessage[],
    model: string = 'llama-3.1-sonar-small-128k-online',
    options: CopilotChatOptions = {}
  ): Promise<string> {
    //await this.checkParams({ messages, model, options });
    try {
      metrics.ai.counter('chat_text_calls').add(1, { model });
      console.log('===> messages: ', messages);
      const sMessages = messages
        .map(({ content, role }) => ({ content, role }))
        .filter(({ content }) => typeof content === 'string');
      console.log('===> sMessages: ', sMessages);

      const options = {
        method: 'POST',
        headers: {
          Authorization: this.config.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
        }),
      };
      const response = await fetch(
        'https://api.perplexity.ai/chat/completions',
        options
      );
      const json = await response.json();
      console.log('===> json: ', JSON.stringify(json));
      const result = this.injectCitations(json);
      console.log('===> result: ', result);
      return result;
    } catch (e: any) {
      metrics.ai.counter('chat_text_errors').add(1, { model });
      throw e;
    }
  }

  async *generateTextStream(
    messages: PromptMessage[],
    model: string = 'llama-3.1-sonar-small-128k-online',
    options: CopilotChatOptions = {}
  ): AsyncIterable<string> {
    console.log('===> messages: ', JSON.stringify(messages));
    const result = await this.generateText(messages, model, options);
    yield result;
    return;
    //await this.checkParams({ messages, model, options });
    /*
    try {
      metrics.ai.counter('chat_text_stream_calls').add(1, { model });
      const options = {
        method: 'POST',
        headers: {
          Authorization: this.config.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
        }),
      };
      const response = await fetch(
        'https://api.perplexity.ai/chat/completions',
        options
      );

      //yield result.json().choices[0].message.content
      const reader = response.body.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = new TextDecoder().decode(value);
        yield chunk;
      }
    } catch (e) {
      metrics.ai.counter('chat_text_stream_errors').add(1, { model });
      throw e;
    }
      */
  }
}
