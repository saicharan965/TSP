import { Injectable } from '@angular/core';

console.warn("Service-two is not bundled because it's not used. It has < ProvidedIn:'root' >.")

@Injectable({
  providedIn: 'root'
})
export class ServiceTwo {
  constructor() { }
}
