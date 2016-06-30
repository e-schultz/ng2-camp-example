import { Injectable } from '@angular/core';
const localStorage = require('store');

@Injectable()
export class PartyService {
  constructor() {
    localStorage.set('partyId', 0);
  }

  /**
   * Get the next party ID to be used. In a real application, we might
   * do an API call and return the result. For the sake of the demo,
   * we are just using local storage to keep track of the id.
   * @return {integer} The next party id
   */

  getNextPartyId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let partyId = localStorage.get('partyId') as number;
      partyId = typeof partyId === 'undefined' ? 1 : ++partyId;
      localStorage.set('partyId', partyId);
      resolve(partyId);
    });
  }
}
