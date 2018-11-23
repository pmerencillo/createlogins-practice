import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateformComponent } from './createform/createform.component';
import { LookupformComponent } from './lookupform/lookupform.component';
import { SitecontentsComponent } from './sitecontents/sitecontents.component';
import { SitebackupsComponent } from './sitebackups/sitebackups.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateformComponent,
    LookupformComponent,
    SitecontentsComponent,
    SitebackupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
