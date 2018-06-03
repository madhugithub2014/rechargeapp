export class Offer {
    id:string;
    names:string[];    
    description:string;
    pack:any[];
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}