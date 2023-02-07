import { Injectable } from '@angular/core';

console.warn("Service-three is bundled, even if it is not being used. It doesn't have < ProvidedIn:'root' >.")

@Injectable({
  providedIn: 'root'
})
export class ServiceThree {
  constructor() { }
}
