import { effects as blockAttachmentEffects } from '@blocksuite/affine-block-attachment/effects';
import { effects as blockBookmarkEffects } from '@blocksuite/affine-block-bookmark/effects';
import { effects as blockEdgelessTextEffects } from '@blocksuite/affine-block-edgeless-text/effects';
import { effects as blockEmbedEffects } from '@blocksuite/affine-block-embed/effects';
import { effects as blockFrameEffects } from '@blocksuite/affine-block-frame/effects';
import { effects as blockImageEffects } from '@blocksuite/affine-block-image/effects';
import { effects as blockLatexEffects } from '@blocksuite/affine-block-latex/effects';
import { effects as blockListEffects } from '@blocksuite/affine-block-list/effects';
import { effects as blockNoteEffects } from '@blocksuite/affine-block-note/effects';
import { effects as blockParagraphEffects } from '@blocksuite/affine-block-paragraph/effects';
import { effects as blockSurfaceEffects } from '@blocksuite/affine-block-surface/effects';
import { effects as componentAiItemEffects } from '@blocksuite/affine-components/ai-item';
import { BlockSelection } from '@blocksuite/affine-components/block-selection';
import { BlockZeroWidth } from '@blocksuite/affine-components/block-zero-width';
import { effects as componentCaptionEffects } from '@blocksuite/affine-components/caption';
import { effects as componentContextMenuEffects } from '@blocksuite/affine-components/context-menu';
import { effects as componentDatePickerEffects } from '@blocksuite/affine-components/date-picker';
import { effects as componentDragIndicatorEffects } from '@blocksuite/affine-components/drag-indicator';
import { FilterableListComponent } from '@blocksuite/affine-components/filterable-list';
import { IconButton } from '@blocksuite/affine-components/icon-button';
import { effects as componentPortalEffects } from '@blocksuite/affine-components/portal';
import { effects as componentRichTextEffects } from '@blocksuite/affine-components/rich-text';
import { SmoothCorner } from '@blocksuite/affine-components/smooth-corner';
import { effects as componentToggleButtonEffects } from '@blocksuite/affine-components/toggle-button';
import { ToggleSwitch } from '@blocksuite/affine-components/toggle-switch';
import { effects as componentToolbarEffects } from '@blocksuite/affine-components/toolbar';
import { effects as widgetScrollAnchoringEffects } from '@blocksuite/affine-widget-scroll-anchoring/effects';
import type { BlockComponent } from '@blocksuite/block-std';
import { effects as stdEffects } from '@blocksuite/block-std/effects';
import { effects as dataViewEffects } from '@blocksuite/data-view/effects';
import { effects as inlineEffects } from '@blocksuite/inline/effects';
import type { BlockModel } from '@blocksuite/store';

import { EmbedCardEditCaptionEditModal } from './_common/components/embed-card/modal/embed-card-caption-edit-modal.js';
import { EmbedCardCreateModal } from './_common/components/embed-card/modal/embed-card-create-modal.js';
import { EmbedCardEditModal } from './_common/components/embed-card/modal/embed-card-edit-modal.js';
import { registerSpecs } from './_specs/register-specs.js';
import { AffineCodeUnit } from './code-block/highlight/affine-code-unit.js';
import {
  CodeBlockComponent,
  type CodeBlockConfig,
} from './code-block/index.js';
import { DataViewBlockComponent } from './data-view-block/index.js';
import { CenterPeek } from './database-block/components/layout.js';
import { DatabaseTitle } from './database-block/components/title/index.js';
import { BlockRenderer } from './database-block/detail-panel/block-renderer.js';
import { NoteRenderer } from './database-block/detail-panel/note-renderer.js';
import { effects as blockDatabaseEffects } from './database-block/effects.js';
import {
  DatabaseBlockComponent,
  type DatabaseBlockService,
} from './database-block/index.js';
import {
  LinkCell,
  LinkCellEditing,
} from './database-block/properties/link/cell-renderer.js';
import { LinkNode } from './database-block/properties/link/components/link-node.js';
import {
  RichTextCell,
  RichTextCellEditing,
} from './database-block/properties/rich-text/cell-renderer.js';
import { IconCell } from './database-block/properties/title/icon.js';
import {
  HeaderAreaTextCell,
  HeaderAreaTextCellEditing,
} from './database-block/properties/title/text.js';
import { DividerBlockComponent } from './divider-block/index.js';
import { EdgelessAutoCompletePanel } from './root-block/edgeless/components/auto-complete/auto-complete-panel.js';
import { EdgelessAutoComplete } from './root-block/edgeless/components/auto-complete/edgeless-auto-complete.js';
import { EdgelessToolIconButton } from './root-block/edgeless/components/buttons/tool-icon-button.js';
import { EdgelessToolbarButton } from './root-block/edgeless/components/buttons/toolbar-button.js';
import { EdgelessColorPickerButton } from './root-block/edgeless/components/color-picker/button.js';
import { EdgelessColorPicker } from './root-block/edgeless/components/color-picker/color-picker.js';
import { EdgelessColorCustomButton } from './root-block/edgeless/components/color-picker/custom-button.js';
import { EdgelessConnectorHandle } from './root-block/edgeless/components/connector/connector-handle.js';
import {
  NOTE_SLICER_WIDGET,
  NoteSlicer,
} from './root-block/edgeless/components/note-slicer/index.js';
import { EdgelessAlignPanel } from './root-block/edgeless/components/panel/align-panel.js';
import { CardStylePanel } from './root-block/edgeless/components/panel/card-style-panel.js';
import {
  EdgelessColorButton,
  EdgelessColorPanel,
  EdgelessTextColorIcon,
} from './root-block/edgeless/components/panel/color-panel.js';
import { EdgelessFontFamilyPanel } from './root-block/edgeless/components/panel/font-family-panel.js';
import { EdgelessFontWeightAndStylePanel } from './root-block/edgeless/components/panel/font-weight-and-style-panel.js';
import { EdgelessLineWidthPanel } from './root-block/edgeless/components/panel/line-width-panel.js';
import { NoteDisplayModePanel } from './root-block/edgeless/components/panel/note-display-mode-panel.js';
import { EdgelessNoteShadowPanel } from './root-block/edgeless/components/panel/note-shadow-panel.js';
import { EdgelessOneRowColorPanel } from './root-block/edgeless/components/panel/one-row-color-panel.js';
import { EdgelessScalePanel } from './root-block/edgeless/components/panel/scale-panel.js';
import { EdgelessShapePanel } from './root-block/edgeless/components/panel/shape-panel.js';
import { EdgelessShapeStylePanel } from './root-block/edgeless/components/panel/shape-style-panel.js';
import { EdgelessSizePanel } from './root-block/edgeless/components/panel/size-panel.js';
import { StrokeStylePanel } from './root-block/edgeless/components/panel/stroke-style-panel.js';
import {
  EDGELESS_NAVIGATOR_BLACK_BACKGROUND_WIDGET,
  EdgelessNavigatorBlackBackgroundWidget,
} from './root-block/edgeless/components/presentation/edgeless-navigator-black-background.js';
import {
  EDGELESS_DRAGGING_AREA_WIDGET,
  EdgelessDraggingAreaRectWidget,
} from './root-block/edgeless/components/rects/edgeless-dragging-area-rect.js';
import {
  EDGELESS_SELECTED_RECT_WIDGET,
  EdgelessSelectedRectWidget,
} from './root-block/edgeless/components/rects/edgeless-selected-rect.js';
import { EdgelessConnectorLabelEditor } from './root-block/edgeless/components/text/edgeless-connector-label-editor.js';
import { EdgelessFrameTitleEditor } from './root-block/edgeless/components/text/edgeless-frame-title-editor.js';
import { EdgelessGroupTitleEditor } from './root-block/edgeless/components/text/edgeless-group-title-editor.js';
import { EdgelessShapeTextEditor } from './root-block/edgeless/components/text/edgeless-shape-text-editor.js';
import { EdgelessTextEditor } from './root-block/edgeless/components/text/edgeless-text-editor.js';
import { EdgelessBrushMenu } from './root-block/edgeless/components/toolbar/brush/brush-menu.js';
import { EdgelessBrushToolButton } from './root-block/edgeless/components/toolbar/brush/brush-tool-button.js';
import { EdgelessSlideMenu } from './root-block/edgeless/components/toolbar/common/slide-menu.js';
import { EdgelessConnectorMenu } from './root-block/edgeless/components/toolbar/connector/connector-menu.js';
import { EdgelessConnectorToolButton } from './root-block/edgeless/components/toolbar/connector/connector-tool-button.js';
import { EdgelessDefaultToolButton } from './root-block/edgeless/components/toolbar/default/default-tool-button.js';
import {
  EDGELESS_TOOLBAR_WIDGET,
  EdgelessToolbarWidget,
} from './root-block/edgeless/components/toolbar/edgeless-toolbar.js';
import { EdgelessEraserToolButton } from './root-block/edgeless/components/toolbar/eraser/eraser-tool-button.js';
import { EdgelessFrameMenu } from './root-block/edgeless/components/toolbar/frame/frame-menu.js';
import { EdgelessFrameToolButton } from './root-block/edgeless/components/toolbar/frame/frame-tool-button.js';
import { EdgelessLassoToolButton } from './root-block/edgeless/components/toolbar/lasso/lasso-tool-button.js';
import { EdgelessLinkToolButton } from './root-block/edgeless/components/toolbar/link/link-tool-button.js';
import { MindMapPlaceholder } from './root-block/edgeless/components/toolbar/mindmap/mindmap-importing-placeholder.js';
import { EdgelessMindmapMenu } from './root-block/edgeless/components/toolbar/mindmap/mindmap-menu.js';
import { EdgelessMindmapToolButton } from './root-block/edgeless/components/toolbar/mindmap/mindmap-tool-button.js';
import { EdgelessNoteMenu } from './root-block/edgeless/components/toolbar/note/note-menu.js';
import { EdgelessNoteSeniorButton } from './root-block/edgeless/components/toolbar/note/note-senior-button.js';
import { EdgelessNoteToolButton } from './root-block/edgeless/components/toolbar/note/note-tool-button.js';
import { EdgelessFrameOrderButton } from './root-block/edgeless/components/toolbar/present/frame-order-button.js';
import { EdgelessFrameOrderMenu } from './root-block/edgeless/components/toolbar/present/frame-order-menu.js';
import { EdgelessNavigatorSettingButton } from './root-block/edgeless/components/toolbar/present/navigator-setting-button.js';
import { EdgelessPresentButton } from './root-block/edgeless/components/toolbar/present/present-button.js';
import { PresentationToolbar } from './root-block/edgeless/components/toolbar/presentation-toolbar.js';
import { EdgelessToolbarShapeDraggable } from './root-block/edgeless/components/toolbar/shape/shape-draggable.js';
import { EdgelessShapeMenu } from './root-block/edgeless/components/toolbar/shape/shape-menu.js';
import { EdgelessShapeToolButton } from './root-block/edgeless/components/toolbar/shape/shape-tool-button.js';
import { EdgelessShapeToolElement } from './root-block/edgeless/components/toolbar/shape/shape-tool-element.js';
import { OverlayScrollbar } from './root-block/edgeless/components/toolbar/template/overlay-scrollbar.js';
import { AffineTemplateLoading } from './root-block/edgeless/components/toolbar/template/template-loading.js';
import { EdgelessTemplatePanel } from './root-block/edgeless/components/toolbar/template/template-panel.js';
import { EdgelessTemplateButton } from './root-block/edgeless/components/toolbar/template/template-tool-button.js';
import { EdgelessTextMenu } from './root-block/edgeless/components/toolbar/text/text-menu.js';
import { EdgelessRootPreviewBlockComponent } from './root-block/edgeless/edgeless-root-preview-block.js';
import {
  AFFINE_AI_PANEL_WIDGET,
  AFFINE_EDGELESS_COPILOT_WIDGET,
  AFFINE_EMBED_CARD_TOOLBAR_WIDGET,
  AFFINE_FORMAT_BAR_WIDGET,
  AffineAIPanelWidget,
  AffineDocRemoteSelectionWidget,
  AffineDragHandleWidget,
  AffineEdgelessZoomToolbarWidget,
  AffineFormatBarWidget,
  AffineImageToolbarWidget,
  AffineInnerModalWidget,
  AffineModalWidget,
  AffinePageDraggingAreaWidget,
  AffinePieMenuWidget,
  AffineSlashMenuWidget,
  AffineSurfaceRefToolbar,
  EdgelessCopilotToolbarEntry,
  EdgelessCopilotWidget,
  EdgelessRemoteSelectionWidget,
  EdgelessRootBlockComponent,
  EmbedCardToolbar,
  FramePreview,
  PageRootBlockComponent,
  PreviewRootBlockComponent,
  type RootBlockConfig,
  type RootService,
} from './root-block/index.js';
import { AIFinishTip } from './root-block/widgets/ai-panel/components/finish-tip.js';
import { GeneratingPlaceholder } from './root-block/widgets/ai-panel/components/generating-placeholder.js';
import {
  AIPanelAnswer,
  AIPanelDivider,
  AIPanelError,
  AIPanelGenerating,
  AIPanelInput,
} from './root-block/widgets/ai-panel/components/index.js';
import { effects as widgetCodeToolbarEffects } from './root-block/widgets/code-toolbar/effects.js';
import { AFFINE_DOC_REMOTE_SELECTION_WIDGET } from './root-block/widgets/doc-remote-selection/index.js';
import { DragPreview } from './root-block/widgets/drag-handle/components/drag-preview.js';
import { DropIndicator } from './root-block/widgets/drag-handle/components/drop-indicator.js';
import { AFFINE_DRAG_HANDLE_WIDGET } from './root-block/widgets/drag-handle/consts.js';
import {
  AFFINE_EDGELESS_AUTO_CONNECT_WIDGET,
  EdgelessAutoConnectWidget,
} from './root-block/widgets/edgeless-auto-connect/edgeless-auto-connect.js';
import { EdgelessCopilotPanel } from './root-block/widgets/edgeless-copilot-panel/index.js';
import { AFFINE_EDGELESS_REMOTE_SELECTION_WIDGET } from './root-block/widgets/edgeless-remote-selection/index.js';
import { AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET } from './root-block/widgets/edgeless-zoom-toolbar/index.js';
import { ZoomBarToggleButton } from './root-block/widgets/edgeless-zoom-toolbar/zoom-bar-toggle-button.js';
import { EdgelessZoomToolbar } from './root-block/widgets/edgeless-zoom-toolbar/zoom-toolbar.js';
import { effects as widgetEdgelessElementToolbarEffects } from './root-block/widgets/element-toolbar/effects.js';
import { effects as widgetFrameTitleEffects } from './root-block/widgets/frame-title/effects.js';
import { AffineImageToolbar } from './root-block/widgets/image-toolbar/components/image-toolbar.js';
import { AFFINE_IMAGE_TOOLBAR_WIDGET } from './root-block/widgets/image-toolbar/index.js';
import { AFFINE_INNER_MODAL_WIDGET } from './root-block/widgets/inner-modal/inner-modal.js';
import { effects as widgetMobileToolbarEffects } from './root-block/widgets/keyboard-toolbar/effects.js';
import { effects as widgetLinkedDocEffects } from './root-block/widgets/linked-doc/effects.js';
import { Loader } from './root-block/widgets/linked-doc/import-doc/loader';
import { AffineCustomModal } from './root-block/widgets/modal/custom-modal.js';
import { AFFINE_MODAL_WIDGET } from './root-block/widgets/modal/modal.js';
import { AFFINE_PAGE_DRAGGING_AREA_WIDGET } from './root-block/widgets/page-dragging-area/page-dragging-area.js';
import { PieNodeCenter } from './root-block/widgets/pie-menu/components/pie-node-center.js';
import { PieNodeChild } from './root-block/widgets/pie-menu/components/pie-node-child.js';
import { PieNodeContent } from './root-block/widgets/pie-menu/components/pie-node-content.js';
import { PieCenterRotator } from './root-block/widgets/pie-menu/components/rotator.js';
import { AFFINE_PIE_MENU_WIDGET } from './root-block/widgets/pie-menu/index.js';
import { PieMenu } from './root-block/widgets/pie-menu/menu.js';
import { PieNode } from './root-block/widgets/pie-menu/node.js';
import { AFFINE_SLASH_MENU_WIDGET } from './root-block/widgets/slash-menu/index.js';
import {
  InnerSlashMenu,
  SlashMenu,
} from './root-block/widgets/slash-menu/slash-menu-popover.js';
import { AFFINE_SURFACE_REF_TOOLBAR } from './root-block/widgets/surface-ref-toolbar/surface-ref-toolbar.js';
import {
  AFFINE_VIEWPORT_OVERLAY_WIDGET,
  AffineViewportOverlayWidget,
} from './root-block/widgets/viewport-overlay/viewport-overlay.js';
import {
  MindmapRootBlock,
  MindmapSurfaceBlock,
  MiniMindmapPreview,
} from './surface-block/mini-mindmap/index.js';
import { effects as blockSurfaceRefEffects } from './surface-ref-block/effects.js';
import {
  EdgelessSurfaceRefBlockComponent,
  SurfaceRefBlockComponent,
} from './surface-ref-block/index.js';
import { SurfaceRefGenericBlockPortal } from './surface-ref-block/portal/generic-block.js';
import { SurfaceRefNotePortal } from './surface-ref-block/portal/note.js';

export function effects() {
  registerSpecs();

  stdEffects();
  inlineEffects();

  blockNoteEffects();
  blockAttachmentEffects();
  blockBookmarkEffects();
  blockFrameEffects();
  blockListEffects();
  blockParagraphEffects();
  blockEmbedEffects();
  blockSurfaceEffects();
  dataViewEffects();
  blockImageEffects();
  blockDatabaseEffects();
  blockSurfaceRefEffects();
  blockLatexEffects();
  blockEdgelessTextEffects();

  componentCaptionEffects();
  componentContextMenuEffects();
  componentDatePickerEffects();
  componentPortalEffects();
  componentRichTextEffects();
  componentToolbarEffects();
  componentDragIndicatorEffects();
  componentToggleButtonEffects();
  componentAiItemEffects();

  widgetScrollAnchoringEffects();
  widgetMobileToolbarEffects();
  widgetLinkedDocEffects();
  widgetFrameTitleEffects();
  widgetEdgelessElementToolbarEffects();
  widgetCodeToolbarEffects();

  customElements.define('affine-database-title', DatabaseTitle);
  customElements.define('data-view-header-area-icon', IconCell);
  customElements.define('affine-database-link-cell', LinkCell);
  customElements.define('affine-database-link-cell-editing', LinkCellEditing);
  customElements.define('data-view-header-area-text', HeaderAreaTextCell);
  customElements.define(
    'data-view-header-area-text-editing',
    HeaderAreaTextCellEditing
  );
  customElements.define('affine-code-unit', AffineCodeUnit);
  customElements.define('affine-database-rich-text-cell', RichTextCell);
  customElements.define(
    'affine-database-rich-text-cell-editing',
    RichTextCellEditing
  );
  customElements.define('center-peek', CenterPeek);
  customElements.define('database-datasource-note-renderer', NoteRenderer);
  customElements.define('database-datasource-block-renderer', BlockRenderer);
  customElements.define('affine-page-root', PageRootBlockComponent);
  customElements.define('affine-preview-root', PreviewRootBlockComponent);
  customElements.define('affine-code', CodeBlockComponent);
  customElements.define('mini-mindmap-preview', MiniMindmapPreview);
  customElements.define('mini-mindmap-surface-block', MindmapSurfaceBlock);
  customElements.define('affine-data-view', DataViewBlockComponent);
  customElements.define('affine-edgeless-root', EdgelessRootBlockComponent);
  customElements.define('affine-divider', DividerBlockComponent);
  customElements.define('edgeless-copilot-panel', EdgelessCopilotPanel);
  customElements.define(
    'edgeless-copilot-toolbar-entry',
    EdgelessCopilotToolbarEntry
  );
  customElements.define(
    'affine-edgeless-surface-ref',
    EdgelessSurfaceRefBlockComponent
  );
  customElements.define(
    'edgeless-color-custom-button',
    EdgelessColorCustomButton
  );
  customElements.define('edgeless-connector-handle', EdgelessConnectorHandle);
  customElements.define('edgeless-zoom-toolbar', EdgelessZoomToolbar);
  customElements.define(
    'affine-edgeless-root-preview',
    EdgelessRootPreviewBlockComponent
  );
  customElements.define('affine-custom-modal', AffineCustomModal);
  customElements.define('affine-database', DatabaseBlockComponent);
  customElements.define('affine-surface-ref', SurfaceRefBlockComponent);
  customElements.define('pie-node-child', PieNodeChild);
  customElements.define('pie-node-content', PieNodeContent);
  customElements.define('pie-node-center', PieNodeCenter);
  customElements.define('pie-center-rotator', PieCenterRotator);
  customElements.define('affine-slash-menu', SlashMenu);
  customElements.define('inner-slash-menu', InnerSlashMenu);
  customElements.define('generating-placeholder', GeneratingPlaceholder);
  customElements.define('ai-finish-tip', AIFinishTip);
  customElements.define('ai-panel-divider', AIPanelDivider);
  customElements.define(NOTE_SLICER_WIDGET, NoteSlicer);
  customElements.define(
    EDGELESS_NAVIGATOR_BLACK_BACKGROUND_WIDGET,
    EdgelessNavigatorBlackBackgroundWidget
  );
  customElements.define('zoom-bar-toggle-button', ZoomBarToggleButton);
  customElements.define(
    EDGELESS_DRAGGING_AREA_WIDGET,
    EdgelessDraggingAreaRectWidget
  );
  customElements.define('icon-button', IconButton);
  customElements.define('affine-pie-menu', PieMenu);
  customElements.define('loader-element', Loader);
  customElements.define('edgeless-brush-menu', EdgelessBrushMenu);
  customElements.define(
    'surface-ref-generic-block-portal',
    SurfaceRefGenericBlockPortal
  );
  customElements.define('edgeless-brush-tool-button', EdgelessBrushToolButton);
  customElements.define(
    'edgeless-connector-tool-button',
    EdgelessConnectorToolButton
  );
  customElements.define('affine-pie-node', PieNode);
  customElements.define(
    'edgeless-default-tool-button',
    EdgelessDefaultToolButton
  );
  customElements.define('surface-ref-note-portal', SurfaceRefNotePortal);
  customElements.define('edgeless-connector-menu', EdgelessConnectorMenu);
  customElements.define('smooth-corner', SmoothCorner);
  customElements.define('toggle-switch', ToggleSwitch);
  customElements.define('ai-panel-answer', AIPanelAnswer);
  customElements.define(
    'edgeless-eraser-tool-button',
    EdgelessEraserToolButton
  );
  customElements.define('edgeless-frame-menu', EdgelessFrameMenu);
  customElements.define('edgeless-frame-tool-button', EdgelessFrameToolButton);
  customElements.define('ai-panel-input', AIPanelInput);
  customElements.define('ai-panel-generating', AIPanelGenerating);
  customElements.define('edgeless-link-tool-button', EdgelessLinkToolButton);
  customElements.define('edgeless-mindmap-menu', EdgelessMindmapMenu);
  customElements.define('edgeless-lasso-tool-button', EdgelessLassoToolButton);
  customElements.define('affine-filterable-list', FilterableListComponent);
  customElements.define('ai-panel-error', AIPanelError);
  customElements.define(
    EDGELESS_SELECTED_RECT_WIDGET,
    EdgelessSelectedRectWidget
  );
  customElements.define('mindmap-import-placeholder', MindMapPlaceholder);
  customElements.define(
    'edgeless-note-senior-button',
    EdgelessNoteSeniorButton
  );
  customElements.define('edgeless-align-panel', EdgelessAlignPanel);
  customElements.define('card-style-panel', CardStylePanel);
  customElements.define(
    'embed-card-caption-edit-modal',
    EmbedCardEditCaptionEditModal
  );
  customElements.define('edgeless-color-button', EdgelessColorButton);
  customElements.define('edgeless-color-panel', EdgelessColorPanel);
  customElements.define('edgeless-text-color-icon', EdgelessTextColorIcon);
  customElements.define('embed-card-create-modal', EmbedCardCreateModal);
  customElements.define('embed-card-edit-modal', EmbedCardEditModal);
  customElements.define(
    'edgeless-mindmap-tool-button',
    EdgelessMindmapToolButton
  );
  customElements.define('edgeless-note-tool-button', EdgelessNoteToolButton);
  customElements.define('edgeless-note-menu', EdgelessNoteMenu);
  customElements.define('edgeless-line-width-panel', EdgelessLineWidthPanel);
  customElements.define('affine-database-link-node', LinkNode);
  customElements.define(
    'edgeless-frame-order-button',
    EdgelessFrameOrderButton
  );
  customElements.define('edgeless-frame-order-menu', EdgelessFrameOrderMenu);
  customElements.define(
    'edgeless-auto-complete-panel',
    EdgelessAutoCompletePanel
  );
  customElements.define(
    'edgeless-navigator-setting-button',
    EdgelessNavigatorSettingButton
  );
  customElements.define('edgeless-present-button', EdgelessPresentButton);
  customElements.define('edgeless-color-picker', EdgelessColorPicker);
  customElements.define('overlay-scrollbar', OverlayScrollbar);
  customElements.define('affine-template-loading', AffineTemplateLoading);
  customElements.define(
    'edgeless-color-picker-button',
    EdgelessColorPickerButton
  );
  customElements.define('edgeless-auto-complete', EdgelessAutoComplete);
  customElements.define(
    'edgeless-font-weight-and-style-panel',
    EdgelessFontWeightAndStylePanel
  );
  customElements.define('edgeless-note-shadow-panel', EdgelessNoteShadowPanel);
  customElements.define('edgeless-templates-panel', EdgelessTemplatePanel);
  customElements.define('edgeless-text-menu', EdgelessTextMenu);
  customElements.define('edgeless-template-button', EdgelessTemplateButton);
  customElements.define('edgeless-tool-icon-button', EdgelessToolIconButton);
  customElements.define('edgeless-size-panel', EdgelessSizePanel);
  customElements.define('edgeless-scale-panel', EdgelessScalePanel);
  customElements.define('edgeless-font-family-panel', EdgelessFontFamilyPanel);
  customElements.define('edgeless-shape-panel', EdgelessShapePanel);
  customElements.define('note-display-mode-panel', NoteDisplayModePanel);
  customElements.define('edgeless-toolbar-button', EdgelessToolbarButton);
  customElements.define('frame-preview', FramePreview);
  customElements.define('presentation-toolbar', PresentationToolbar);
  customElements.define('edgeless-shape-menu', EdgelessShapeMenu);
  customElements.define('stroke-style-panel', StrokeStylePanel);
  customElements.define('edgeless-shape-tool-button', EdgelessShapeToolButton);
  customElements.define(
    'edgeless-connector-label-editor',
    EdgelessConnectorLabelEditor
  );
  customElements.define('block-zero-width', BlockZeroWidth);
  customElements.define(
    'edgeless-shape-tool-element',
    EdgelessShapeToolElement
  );
  customElements.define('edgeless-shape-text-editor', EdgelessShapeTextEditor);
  customElements.define(
    'edgeless-group-title-editor',
    EdgelessGroupTitleEditor
  );
  customElements.define('affine-drag-preview', DragPreview);
  customElements.define(EDGELESS_TOOLBAR_WIDGET, EdgelessToolbarWidget);
  customElements.define('edgeless-shape-style-panel', EdgelessShapeStylePanel);
  customElements.define(
    'edgeless-frame-title-editor',
    EdgelessFrameTitleEditor
  );
  customElements.define(
    'edgeless-one-row-color-panel',
    EdgelessOneRowColorPanel
  );
  customElements.define('edgeless-text-editor', EdgelessTextEditor);
  customElements.define('affine-image-toolbar', AffineImageToolbar);
  customElements.define('affine-drop-indicator', DropIndicator);
  customElements.define('mini-mindmap-root-block', MindmapRootBlock);
  customElements.define('affine-block-selection', BlockSelection);
  customElements.define('edgeless-slide-menu', EdgelessSlideMenu);
  customElements.define(
    'edgeless-toolbar-shape-draggable',
    EdgelessToolbarShapeDraggable
  );

  customElements.define(AFFINE_AI_PANEL_WIDGET, AffineAIPanelWidget);
  customElements.define(AFFINE_EMBED_CARD_TOOLBAR_WIDGET, EmbedCardToolbar);
  customElements.define(AFFINE_INNER_MODAL_WIDGET, AffineInnerModalWidget);
  customElements.define(
    AFFINE_DOC_REMOTE_SELECTION_WIDGET,
    AffineDocRemoteSelectionWidget
  );
  customElements.define(AFFINE_MODAL_WIDGET, AffineModalWidget);
  customElements.define(
    AFFINE_PAGE_DRAGGING_AREA_WIDGET,
    AffinePageDraggingAreaWidget
  );
  customElements.define(AFFINE_DRAG_HANDLE_WIDGET, AffineDragHandleWidget);
  customElements.define(AFFINE_PIE_MENU_WIDGET, AffinePieMenuWidget);
  customElements.define(AFFINE_EDGELESS_COPILOT_WIDGET, EdgelessCopilotWidget);

  customElements.define(AFFINE_IMAGE_TOOLBAR_WIDGET, AffineImageToolbarWidget);
  customElements.define(AFFINE_SLASH_MENU_WIDGET, AffineSlashMenuWidget);
  customElements.define(
    AFFINE_EDGELESS_REMOTE_SELECTION_WIDGET,
    EdgelessRemoteSelectionWidget
  );
  customElements.define(
    AFFINE_VIEWPORT_OVERLAY_WIDGET,
    AffineViewportOverlayWidget
  );
  customElements.define(
    AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET,
    AffineEdgelessZoomToolbarWidget
  );
  customElements.define(AFFINE_SURFACE_REF_TOOLBAR, AffineSurfaceRefToolbar);
  customElements.define(
    AFFINE_EDGELESS_AUTO_CONNECT_WIDGET,
    EdgelessAutoConnectWidget
  );
  customElements.define(AFFINE_FORMAT_BAR_WIDGET, AffineFormatBarWidget);
}

declare global {
  namespace BlockSuite {
    interface CommandContext {
      focusBlock?: BlockComponent | null;
      anchorBlock?: BlockComponent | null;
      updatedBlocks?: BlockModel[];
    }
    interface BlockConfigs {
      'affine:code': CodeBlockConfig;
      'affine:page': RootBlockConfig;
    }
    interface BlockServices {
      'affine:page': RootService;
      'affine:database': DatabaseBlockService;
    }
  }
}
