import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceThree } from './service-three.service';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatureHomeComponent } from './feature-home/feature-home.component';

const ROUTES: Routes = [
  { path: '', component: FeatureHomeComponent },
  { path: 'feature_one', component: FeatureOneComponent },
  { path: 'feature_two', component: FeatureTwoComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ServiceThree],
  bootstrap: [AppComponent]
})
export class AppModule { }