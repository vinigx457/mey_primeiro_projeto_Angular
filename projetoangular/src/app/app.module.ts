import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { OlarAngularComponent } from './ola-angular/ola-angular.component';
import { OlaAngularCliComponent } from './ola-angular-cli/ola-angular-cli.component';

@NgModule({
  declarations: [AppComponent, OlarAngularComponent, OlaAngularCliComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
