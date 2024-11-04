export interface Transaction {
    id?: number;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
    transaction_date: string;
    created_at?: string;
    updated_at?: string;
}