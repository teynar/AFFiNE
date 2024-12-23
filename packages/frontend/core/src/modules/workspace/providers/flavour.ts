import type { WorkerInitOptions } from '@affine/nbstore/worker/client';
import type { DocCollection } from '@blocksuite/affine/store';
import {
  type BlobStorage,
  createIdentifier,
  type DocStorage,
  type LiveData,
} from '@toeverything/infra';

import type { WorkspaceProfileInfo } from '../entities/profile';
import type { Workspace } from '../entities/workspace';
import type { WorkspaceMetadata } from '../metadata';

export interface WorkspaceFlavourProvider {
  flavour: string;

  deleteWorkspace(id: string): Promise<void>;

  createWorkspace(
    initial: (
      docCollection: DocCollection,
      blobStorage: BlobStorage,
      docStorage: DocStorage
    ) => Promise<void>
  ): Promise<WorkspaceMetadata>;

  workspaces$: LiveData<WorkspaceMetadata[]>;

  /**
   * means the workspace list is loading. if it's true, the workspace page will show loading spinner.
   */
  isRevalidating$?: LiveData<boolean>;

  /**
   * revalidate the workspace list.
   *
   * will be called when user open workspace list, or workspace not found.
   */
  revalidate?: () => void;

  getWorkspaceProfile(
    id: string,
    signal?: AbortSignal
  ): Promise<WorkspaceProfileInfo | undefined>;

  getWorkspaceBlob(id: string, blob: string): Promise<Blob | null>;

  getEngineWorkerInitOptions(workspaceId: string): WorkerInitOptions;

  onWorkspaceInitialized?(workspace: Workspace): void;
}

export interface WorkspaceFlavoursProvider {
  workspaceFlavours$: LiveData<WorkspaceFlavourProvider[]>;
}

export const WorkspaceFlavoursProvider =
  createIdentifier<WorkspaceFlavoursProvider>('WorkspaceFlavoursProvider');
