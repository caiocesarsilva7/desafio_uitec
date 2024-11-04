<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $query = Transaction::query();
        
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }
        
        return $query->orderBy('transaction_date', 'desc')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'type' => 'required|in:income,expense',
            'category' => 'required|string',
            'transaction_date' => 'required|date'
        ]);

        // Se for despesa, converte para valor negativo
        if ($validated['type'] === 'expense') {
            $validated['amount'] = -abs($validated['amount']);
        } else {
            $validated['amount'] = abs($validated['amount']);
        }

        return Transaction::create($validated);
    }

    public function update(Request $request, Transaction $transaction)
    {
        $validated = $request->validate([
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'type' => 'required|in:income,expense',
            'category' => 'required|string',
            'transaction_date' => 'required|date'
        ]);

        if ($validated['type'] === 'expense') {
            $validated['amount'] = -abs($validated['amount']);
        } else {
            $validated['amount'] = abs($validated['amount']);
        }

        $transaction->update($validated);
        return $transaction;
    }

    public function destroy(Transaction $transaction)
    {
        $transaction->delete();
        return response()->json(['message' => 'Transaction deleted']);
    }
}