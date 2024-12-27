import type { ExtensionType } from '@blocksuite/block-std';

import { EmbedYoutubeBlockHtmlAdapterExtension } from './html.js';
import { EmbedYoutubeBlockMarkdownAdapterExtension } from './markdown.js';
import { EmbedYoutubeBlockNotionHtmlAdapterExtension } from './notion-html.js';
import { EmbedYoutubeBlockPlainTextAdapterExtension } from './plain-text.js';

export const EmbedYoutubeBlockAdapterExtensions: ExtensionType[] = [
  EmbedYoutubeBlockHtmlAdapterExtension,
  EmbedYoutubeBlockMarkdownAdapterExtension,
  EmbedYoutubeBlockPlainTextAdapterExtension,
  EmbedYoutubeBlockNotionHtmlAdapterExtension,
];
