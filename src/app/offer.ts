export class Offer {

    amount:number;
    description = '';
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
