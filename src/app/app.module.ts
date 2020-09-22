import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastoFormComponent } from './gasto/gasto-form/gasto-form.component';
import { GastoDetailsComponent } from './gasto/gasto-details/gasto-details.component';
import { GastoListComponent } from './gasto/gasto-list/gasto-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    GastoFormComponent,
    GastoDetailsComponent,
    GastoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CurrencyMaskModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
