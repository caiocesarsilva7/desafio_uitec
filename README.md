# desafio_uitec
Desafio para vaga de estagio
Para configurar e executar a aplicação, siga os passos descritos abaixo:

1. Requisitos
   
Software: Utilize o Laragon como ambiente de desenvolvimento.

Banco de Dados: MySQL 8.0.31.

Back-end: Laravel 11.

Front-end: Angular 18.

2. Instalação e Configuração
   
Instale o Laragon e os demais softwares listados acima.

Clone o repositório do desafio disponível no meu GitHub.

Abra o Laragon e clique em Root para acessar a pasta principal.

Copie as pastas backend e frontend do repositório clonado e cole-as na pasta root do Laragon.

3. Executando a Aplicação
   
Abra o Laragon e, no terminal, execute os comandos para iniciar o back-end:

  cd backend 
  
  php artisan migrate
  
  php artisan serve
  
  Esses comandos irão configurar e iniciar o banco de dados.

No terminal, abra um novo console e inicie o front-end com os comandos:

cd frontend

ng serve

4. Acesso à Aplicação
   
Abra o navegador e acesse http://localhost:4200/dashboard para visualizar o dashboard da aplicação.

Esses passos garantirão que a aplicação esteja configurada e funcionando corretamente no ambiente local.
