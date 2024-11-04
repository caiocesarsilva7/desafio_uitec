import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
    selector: 'app-transaction-form',
    template: `
        <div class="container mt-4">
            <form [formGroup]="transactionForm" (ngSubmit)="onSubmit()">
                <div class="mb-3">
                    <label class="form-label">Descrição</label>
                    <input type="text" class="form-control" formControlName="description">
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Valor</label>
                    <input type="number" class="form-control" formControlName="amount">
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Tipo</label>
                    <select class="form-select" formControlName="type">
                        <option value="income">Receita</option>
                        <option value="expense">Despesa</option>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Categoria</label>
                    <select class="form-select" formControlName="category">
                        <option value="Aluguel">Aluguel</option>
                        <option value="Pagamento">Pagamento</option>
                        <option value="Prolabore">Prolabore</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Data</label>
                    <input type="date" class="form-control" formControlName="transaction_date">
                </div>
                
                <button type="submit" class="btn btn-primary" [disabled]="!transactionForm.valid">
                    {{ editMode ? 'Atualizar' : 'Cadastrar' }}
                </button>
            </form>
        </div>
    `
})
export class TransactionFormComponent implements OnInit {
    transactionForm: FormGroup;
    editMode = false;
    editId?: number;

    constructor(
        private fb: FormBuilder,
        private transactionService: TransactionService
    ) {
        this.transactionForm = this.fb.group({
            description: ['', Validators.required],
            amount: ['', [Validators.required, Validators.min(0)]],
            type: ['income', Validators.required],
            category: ['', Validators.required],
            transaction_date: ['', Validators.required]
        });
    }

    ngOnInit() {}

    setEditMode(transaction: Transaction) {
        this.editMode = true;
        this.editId = transaction.id;
        this.transactionForm.patchValue({
            description: transaction.description,
            amount: Math.abs(transaction.amount),
            type: transaction.amount < 0 ? 'expense' : 'income',
            category: transaction.category,
            transaction_date: transaction.transaction_date
        });
    }

    onSubmit() {
        if (this.transactionForm.valid) {
            if (this.editMode && this.editId) {
                this.transactionService.updateTransaction(this.editId, this.transactionForm.value)
                    .subscribe(() => {
                        this.resetForm();
                    });
            } else {
                this.transactionService.createTransaction(this.transactionForm.value)
                    .subscribe(() => {
                        this.resetForm();
                    });
            }
        }
    }

    resetForm() {
        this.transactionForm.reset();
        this.editMode = false;
        this.editId = undefined;
    }
}