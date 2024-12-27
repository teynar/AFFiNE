import type { ExtensionType } from '@blocksuite/block-std';

import { EmbedLoomBlockHtmlAdapterExtension } from './html.js';
import { EmbedLoomBlockMarkdownAdapterExtension } from './markdown.js';
import { EmbedLoomBlockNotionHtmlAdapterExtension } from './notion-html.js';
import { EmbedLoomBlockPlainTextAdapterExtension } from './plain-text.js';

export const EmbedLoomBlockAdapterExtensions: ExtensionType[] = [
  EmbedLoomBlockHtmlAdapterExtension,
  EmbedLoomBlockMarkdownAdapterExtension,
  EmbedLoomBlockPlainTextAdapterExtension,
  EmbedLoomBlockNotionHtmlAdapterExtension,
];
