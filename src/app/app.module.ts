import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorrowComponent } from './borrow/borrow.component';
import { ReturnComponent } from './return/return.component';
import { LateFeesComponent } from './late-fees/late-fees.component';
import { CheckedOutComponent } from './checked-out/checked-out.component';
import { MenuComponent } from './menu/menu.component';
import { CheckOut } from './entities/checkout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {Globals} from "./testData/global";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BorrowComponent,
    ReturnComponent,
    LateFeesComponent,
    CheckedOutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
