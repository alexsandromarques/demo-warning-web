import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastoListComponent } from './gasto/gasto-list/gasto-list.component';
import { GastoDetailsComponent } from './gasto/gasto-details/gasto-details.component';
import { GastoFormComponent } from './gasto/gasto-form/gasto-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'gasto', pathMatch: 'full' },
  { path: 'gastos', component: GastoListComponent },
  { path: 'inserir', component: GastoFormComponent },
  { path: 'update/:id', component: GastoFormComponent },
  { path: 'details/:id', component: GastoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
