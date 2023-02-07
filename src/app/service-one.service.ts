import { Injectable } from '@angular/core';

console.warn("Service-one is bundled because it's being used in atleast one component.")

@Injectable({
  providedIn: 'root'
})
export class ServiceOne {
  constructor() {
    console.warn("Service-one instantiated.")
  }
}
