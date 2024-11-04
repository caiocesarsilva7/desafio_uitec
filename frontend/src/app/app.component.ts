import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Sistema Financeiro</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/transactions" routerLinkActive="active">Transações</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/transaction/new" routerLinkActive="active">Nova Transação</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}