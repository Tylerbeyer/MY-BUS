Plan of Action (A "getting started again" checklist):

1. Start the SSH Tunnel: This is the first and most critical step for database access. I will provide the command again and remind them it needs to run in a separate terminal.
    ssh -L 3307:127.0.0.1:3306 remoteconnect@mybus.sccwy.com@63.250.38.156 -p 21
    ssh -v -i ~/.ssh/id_rsa -L 3307:127.0.0.1:3306 LOCOL@63.250.38.156 -p 21098
    ssh -v -i ~/.ssh/id_rsa -L 3307:127.0.0.1:3306 -p 21098 LOCOL@mybus.sccwy.com@63.250.38.156
    ssh -v -i ~/.ssh/id_rsa -L 3307:127.0.0.1:3306 -p 21098 sccwyqcw@63.250.38.156

2.Verify/Update .env: Remind them to ensure the backend/.env file is configured to use the tunnel (DB_HOST=127.0.0.1, DB_PORT=3307).
3.Verify Backend Dependencies: Before running the backend, it's prudent to ensure dependencies are correct. I'll provide the composer install --ignore-platform-reqs command again as a "just in case" step.
4.Run Backend Database Migrations: Once the tunnel is up and dependencies are verified, run php artisan migrate to ensure the database is connected and schema is up to date.
5. Start the Backend Server: Provide the php artisan serve command.
Start the Frontend Server: Remind them how to start the Vite dev server (npm run dev). I'll need to include cd frontend for this command.


puttygen /mnt/c/Users/tyler/Downloads/LOCOLnew.ppk -O private-openssh -o ~/.ssh/id_rsa