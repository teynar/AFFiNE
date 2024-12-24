import {
  createSignalFromObservable,
  type Signal,
} from '@blocksuite/affine-shared/utils';
import { LiveData, Service } from '@toeverything/infra';

import type { GlobalStateService } from '../../storage';

const AI_NETWORK_SEARCH_KEY = 'AINetworkSearch';

export class AINetworkSearchService extends Service {
  constructor(private readonly globalStateService: GlobalStateService) {
    super();

    const { signal: enabled, cleanup } = createSignalFromObservable<
      boolean | undefined
    >(this.enabled$, false);
    this.enabled = enabled;
    this.disposables.push(cleanup);
  }

  enabled: Signal<boolean | undefined>;

  enabled$ = LiveData.from(
    this.globalStateService.globalState.watch<boolean>(AI_NETWORK_SEARCH_KEY),
    false
  );

  setEnabled = (enabled: boolean) => {
    this.globalStateService.globalState.set(AI_NETWORK_SEARCH_KEY, enabled);
  };
}
