import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BorrowComponent} from "./borrow/borrow.component";
import {ReturnComponent} from "./return/return.component";

const routes:Routes = <Routes>[
  {
    path: '',
    component: BorrowComponent
  },
  {
    path: 'return',
    component: ReturnComponent
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
