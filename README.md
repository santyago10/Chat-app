To run this app you need:
1. Install PostgreSQL;
2. Create database 'Chat-app' in pgadmin ( or change database to your in '.env' file )
3. Change database configuration in .env file to your (my config:
{ POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=142505
POSTGRES_DB=Chat-app
PORT=5000 } );
4. Launch command prompt and run cd Chat -> npm install -> npm run dev ;
5. Add two users to PostgreSQL 'user' database in pgadmin;
6. Run cd client -> yarn install -> yarn start
7. Remove "strict: true" in 'client/tsconfig.json' file ( if added );