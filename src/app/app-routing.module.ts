import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningListComponent } from './warning-list/warning-list.component';
import { CreateWarningComponent } from './create-warning/create-warning.component';
import { UpdateWarningComponent } from './update-warning/update-warning.component';
import { WarningDetailsComponent } from './warning-details/warning-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'warning', pathMatch: 'full' },
  { path: 'warnings', component: WarningListComponent },
  { path: 'add', component: CreateWarningComponent },
  { path: 'update/:id', component: UpdateWarningComponent },
  { path: 'details/:id', component: WarningDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
