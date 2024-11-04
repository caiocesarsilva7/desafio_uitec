import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'http://localhost:8000/api/transactions';

    constructor(private http: HttpClient) { }

    getTransactions(type?: string): Observable<Transaction[]> {
      const url = type ? `${this.apiUrl}?type=${type}` : this.apiUrl;
        return this.http.get<Transaction[]>(url);
    }

    createTransaction(transaction: Transaction): Observable<Transaction> {
        return this.http.post<Transaction>(this.apiUrl, transaction);
    }

    updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
        return this.http.put<Transaction>(`${this.apiUrl}/${id}`, transaction);
    }

    deleteTransaction(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

