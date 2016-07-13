import { PARTY_JOINED, PARTY_LEFT } from '../../constants';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { PartyService } from '../../services/party';

@Injectable()
export class LineupActions {
  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _party: PartyService) {}

  joinLine = ({ numberOfPeople, partyName }) => {
    return this._party.getNextPartyId().then(partyId => {
      return this._ngRedux.dispatch({
        type: PARTY_JOINED,
        payload: {
          partyId: partyId,
          numberOfPeople,
          partyName
        }
      });
    });
  };

  leaveLine = ({ partyId }) => {
    return this._ngRedux.dispatch({
      type: PARTY_LEFT,
      payload: {
        partyId: parseInt(partyId, 10)
      }
    });
  }
}
