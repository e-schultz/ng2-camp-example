import { Injectable, ApplicationRef } from '@angular/core';
import { reimmutify } from './store';

const environment: any = window || this;

// An angularified version of the Redux DevTools chrome extension.
@Injectable()
export class DevTools {
  constructor(private appRef: ApplicationRef) {}

  enhancer = () => {
    if (!environment.devToolsExtension) {
      return null;
    }

    // Make sure changes from dev tools update angular's view.
    environment.devToolsExtension.listen(() => this.appRef.tick());
    return environment.devToolsExtension({
      deserializeState: reimmutify,
    });
  }
}
