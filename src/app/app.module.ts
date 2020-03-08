import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateWarningComponent } from './create-warning/create-warning.component';
import { WarningDetailsComponent } from './warning-details/warning-details.component';
import { WarningListComponent } from './warning-list/warning-list.component';
import { UpdateWarningComponent } from './update-warning/update-warning.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CreateWarningComponent,
    WarningDetailsComponent,
    WarningListComponent,
    UpdateWarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
