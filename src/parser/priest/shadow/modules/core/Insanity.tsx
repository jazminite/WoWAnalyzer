import Analyzer from 'parser/core/Analyzer';
import RESOURCE_TYPES from 'game/RESOURCE_TYPES';
import { EnergizeEvent } from 'parser/core/Events';

class Insanity extends Analyzer {
  _insanityEvents: any = [];

  on_toPlayer_energize(event: EnergizeEvent) {
    if (event.resourceChangeType === RESOURCE_TYPES.INSANITY.id) {
      this._insanityEvents = [
        ...this._insanityEvents,
        event,
      ];
    }
  }

  get events() {
    return this._insanityEvents;
  }
}

export default Insanity;
