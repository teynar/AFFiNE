import { Container } from '@blocksuite/global/di';

import { defaultBlockMarkdownAdapterMatchers } from './block-matcher';
import { inlineDeltaToMarkdownAdapterMatchers } from './delta-converter/inline-delta';
import { markdownInlineToDeltaMatchers } from './delta-converter/markdown-inline';

export function createDefaultMarkdownAdapterProvider() {
  const container = new Container();
  [
    ...markdownInlineToDeltaMatchers,
    ...inlineDeltaToMarkdownAdapterMatchers,
    ...defaultBlockMarkdownAdapterMatchers,
  ].forEach(ext => {
    ext.setup(container);
  });
  return container.provider();
}
