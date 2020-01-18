import { ContentLayoutComponent } from './layout/content/content.component';
import { AppRoutes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FarmaciaServiceClient } from './shared/services/farmacias.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true})
  ],
  providers: [
    FarmaciaServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
