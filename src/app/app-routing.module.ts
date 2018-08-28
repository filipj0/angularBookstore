import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BorrowComponent} from "./borrow/borrow.component";
import {ReturnComponent} from "./return/return.component";
import {CheckedOutComponent} from "./checked-out/checked-out.component";
import {LateFeesComponent} from "./late-fees/late-fees.component";

const routes:Routes = <Routes>[
  {
    path: '',
    component: BorrowComponent
  },
  {
    path: 'return',
    component: ReturnComponent
  },
  {
    path: 'checked-out',
    component: CheckedOutComponent
  },
  {
    path: 'late-fees',
    component: LateFeesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
