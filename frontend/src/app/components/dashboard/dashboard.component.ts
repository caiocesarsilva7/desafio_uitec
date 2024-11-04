import { Component, ViewChild } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <app-transaction-form #transactionForm></app-transaction-form>
        </div>
        <div class="col-12 mt-4">
        <app-transaction-list (edit)="onEditTransaction($event)"></app-transaction-list>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  @ViewChild('transactionForm') transactionFormComponent!: TransactionFormComponent;
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
) {}
    onEditTransaction(transaction: Transaction) {
        console.log("Transação recebida para edição:", transaction);
        this.transactionFormComponent.setEditMode(transaction);  // Chama o método de edição do formulário
    }

    }
