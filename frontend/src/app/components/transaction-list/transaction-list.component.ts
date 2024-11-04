import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-transaction-list',
    template: `
        <div class="container mt-4">
        <div class="mb-3">
        <select class="form-select" (change)="filterTransactions($event)">
                <option value="">Todas as transações</option>
                <option value="income">Receitas</option>
                <option value="expense">Despesas</option>
            </select>
        </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let transaction of transactions">
                        <td>{{transaction.transaction_date | date}}</td>
                        <td>{{transaction.description}}</td>
                        <td>{{transaction.category}}</td>
                        <td [ngClass]="{'text-danger': transaction.amount < 0, 'text-success': transaction.amount > 0}">
                            {{transaction.amount | currency:'BRL'}}
                        </td>
                        <td>
                            <button class="btn btn-sm btn-primary me-2" (click)="editTransaction(transaction)">
                                Editar
                            </button>
                            <button class="btn btn-sm btn-danger" (click)="deleteTransaction(transaction.id)">
                                Excluir
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class TransactionListComponent implements OnInit {
    transactions: Transaction[] = [];
    
    @Output() edit = new EventEmitter<Transaction>();  // Emissor de evento de edição

    constructor(
      private transactionService: TransactionService,
      private router: Router
  ) {}

    ngOnInit() {
        this.loadTransactions();
    }

    loadTransactions(type?: string) {
        this.transactionService.getTransactions(type)
            .subscribe(transactions => {
                this.transactions = transactions;
            });
    }

    filterTransactions(event: any) {
      const type = event.target.value; // income ou expense
      this.loadTransactions(type);
    }

    editTransaction(transaction: Transaction) {
      this.router.navigate(['dashboard/']);
      this.edit.emit(transaction);
    }

    deleteTransaction(id?: number) {
        if (id && confirm('Tem certeza que deseja excluir esta transação?')) {
            this.transactionService.deleteTransaction(id)
                .subscribe(() => {
                    this.loadTransactions();
                });
        }
    }
}