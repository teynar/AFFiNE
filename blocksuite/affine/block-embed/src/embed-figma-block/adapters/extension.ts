import type { ExtensionType } from '@blocksuite/block-std';

import { EmbedFigmaBlockHtmlAdapterExtension } from './html.js';
import { EmbedFigmaBlockMarkdownAdapterExtension } from './markdown.js';
import { EmbedFigmaBlockNotionHtmlAdapterExtension } from './notion-html.js';
import { EmbedFigmaBlockPlainTextAdapterExtension } from './plain-text.js';

export const EmbedFigmaBlockAdapterExtensions: ExtensionType[] = [
  EmbedFigmaBlockHtmlAdapterExtension,
  EmbedFigmaBlockMarkdownAdapterExtension,
  EmbedFigmaBlockPlainTextAdapterExtension,
  EmbedFigmaBlockNotionHtmlAdapterExtension,
];
