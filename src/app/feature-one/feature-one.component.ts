import { ServiceOne } from './../service-one.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent {
  constructor(_serviceOne: ServiceOne) {}

}
