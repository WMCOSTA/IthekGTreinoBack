
2. Instalar dependências
pnpm install

3. Subir o banco
docker-compose up -d

4. Rodar migrations
pnpm exec prisma migrate dev

ERRO!!

PS C:\Ithek-Projetos\FullStackClub\Saas-FullStack\bootcamp-treinos> pnpm exec prisma migrate dev       

Loaded Prisma config from prisma.config.ts.

Prisma schema loaded from prisma\schema.prisma.
Error: The datasource.url property is required in your Prisma config file when using prisma migrate dev.
Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c, line 76


5. Iniciar a API em desenvolvimento
pnpm dev
O servidor sobe na porta 8081 e passa a recarregar automaticamente quando você alterar o código.

6. Variáveis de ambiente (opcional)
Crie um .env com, por exemplo:

DATABASE_URL – conexão do PostgreSQL
BETTER_AUTH_SECRET
BETTER_AUTH_URL



