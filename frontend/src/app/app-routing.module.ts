import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction/new', component: TransactionFormComponent },
  { path: 'transaction/edit/:id', component: TransactionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }