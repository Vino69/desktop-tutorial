import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatBadgeModule]
})
export class AppRoutingModule { }
