import { BookmarkBlockMarkdownAdapterExtension } from '@blocksuite/affine-block-bookmark';
import {
  EmbedFigmaBlockMarkdownAdapterExtension,
  EmbedGithubBlockMarkdownAdapterExtension,
  EmbedLinkedDocBlockMarkdownAdapterExtension,
  EmbedLoomBlockMarkdownAdapterExtension,
  EmbedSyncedDocBlockMarkdownAdapterExtension,
  EmbedYoutubeBlockMarkdownAdapterExtension,
} from '@blocksuite/affine-block-embed';
import { ImageBlockMarkdownAdapterExtension } from '@blocksuite/affine-block-image';
import { LatexBlockMarkdownAdapterExtension } from '@blocksuite/affine-block-latex';
import { ListBlockMarkdownAdapterExtension } from '@blocksuite/affine-block-list';
import { ParagraphBlockMarkdownAdapterExtension } from '@blocksuite/affine-block-paragraph';

import { CodeBlockMarkdownAdapterExtension } from '../../../code-block/adapters/markdown.js';
import { DatabaseBlockMarkdownAdapterExtension } from '../../../database-block/adapters/markdown.js';
import { DividerBlockMarkdownAdapterExtension } from '../../../divider-block/adapters/markdown.js';
import { RootBlockMarkdownAdapterExtension } from '../../../root-block/adapters/markdown.js';

export const defaultBlockMarkdownAdapterMatchers = [
  EmbedFigmaBlockMarkdownAdapterExtension,
  EmbedGithubBlockMarkdownAdapterExtension,
  EmbedLinkedDocBlockMarkdownAdapterExtension,
  EmbedLoomBlockMarkdownAdapterExtension,
  EmbedSyncedDocBlockMarkdownAdapterExtension,
  EmbedYoutubeBlockMarkdownAdapterExtension,
  ListBlockMarkdownAdapterExtension,
  ParagraphBlockMarkdownAdapterExtension,
  BookmarkBlockMarkdownAdapterExtension,
  CodeBlockMarkdownAdapterExtension,
  DatabaseBlockMarkdownAdapterExtension,
  DividerBlockMarkdownAdapterExtension,
  ImageBlockMarkdownAdapterExtension,
  LatexBlockMarkdownAdapterExtension,
  RootBlockMarkdownAdapterExtension,
];
