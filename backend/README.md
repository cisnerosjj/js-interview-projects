# Sparrest.js

A [json-server](https://github.com/typicode/json-server) fork to enjoy developing frontend apps without a real backend, but with JWT auth.

## Setup

1. Create/update a `db.json` file with the entities of your DB. paco, jorge and admin passwords are '1234'
2. Install dependencies with npm install
3. Run the server with `npm start` 
4. Register a user with `POST /auth/register { username: "username", password: "password" }` 
4. Login to obtain your JWT token: `POST /auth/login { username: "luke", password: "skywalker" }`
5. Start using `json-server` routes in `/api/<json-server routes>`. You'll need to auth every request by adding an HTTP header: `Authorization: Bearer <JWT token>`

## Uploading files

You can upload files by making a multipart POST request with a file field (with file contents) to `/upload`.
