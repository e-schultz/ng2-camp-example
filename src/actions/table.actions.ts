
import {
  PARTY_SEATED,
  ORDER_STARTED,
  ORDER_COMPLETED,
  ORDER_DELIVERED,
  ITEM_ADDED,
  ITEM_REMOVED,
  BILL_PAID,
  TABLE_CLEANED } from '../constants';

import { Injectable } from '@angular/core';
import { IAppState } from '../reducers';
import { NgRedux } from 'ng2-redux';


@Injectable()
export class TableActions {
  constructor(private _ngRedux: NgRedux<IAppState>) { }

  /*
  The action creators are sort of like the command saying 'to do' something.
  The event (ie: type) that is returned as a result is the 'what was done',
  this is what gets sent to your reducers later on, and should reflect
  what has happened in the system.
  
  */

  seatParty = (partyId, tableId) => {
    return this._ngRedux.dispatch({
      type: PARTY_SEATED,
      payload: {
        partyId: parseInt(partyId, 10),
        tableId: parseInt(tableId, 10)
      }
    });
  };

  startOrder = (tableId) => {
    return this._ngRedux.dispatch({
      type: ORDER_STARTED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  };

  completeOrder = (tableId) => {
    return this._ngRedux.dispatch({
      type: ORDER_COMPLETED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  };

  deliverOrder = (tableId) => {

    return this._ngRedux.dispatch({
      type: ORDER_DELIVERED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

  addItemToOrder = (tableId, menuId) => {

    return this._ngRedux.dispatch({
      type: ITEM_ADDED,
      payload: {
        tableId: parseInt(tableId, 10),
        menuId: menuId
      }
    });
  }

  removeItemFromOrder = (tableId, menuId) => {
    this._ngRedux.dispatch({
      type: ITEM_REMOVED,
      payload: {
        tableId: parseInt(tableId, 10),
        menuId: menuId
      }
    });
  };

  payBill = (tableId) => {
    return this._ngRedux.dispatch({
      type: BILL_PAID,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  };

  cleanTable = (tableId) => {
    return this._ngRedux.dispatch({
      type: TABLE_CLEANED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  };
}

