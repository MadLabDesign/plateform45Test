import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromViews from './views';
import * as fromComponents from './components';
const routes: Routes = [
  {path: 'home', component: fromViews.HomeComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
