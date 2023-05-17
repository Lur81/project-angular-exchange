import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesPageComponent } from './exchanges-page/exchanges-page.component';

const routes: Routes = [
  {
    path: "exchanges", component: ExchangesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
