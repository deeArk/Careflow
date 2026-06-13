---
description: >-
  Environment variables, local commands, authentication, and API endpoints for
  Careflow.
icon: sliders
---

# Configuration and API

Use this page for exact setup values and API details.

### Use this page for

* environment variables
* local development commands
* authentication request format
* common API endpoints

## Tech stack

Careflow is documented with this stack baseline:

* Frontend: React, Vue, or Flutter Web
* Backend: Node.js and Express
* Database: MongoDB or MySQL
* Authentication: JWT-based authentication

{% hint style="info" %}
Align these values with the real implementation if the repository diverges from this baseline.
{% endhint %}

## Environment variables

Create a `.env` file in the backend project root with:

```bash
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

| Variable       | Description                                    |
| -------------- | ---------------------------------------------- |
| `PORT`         | Local backend server port                      |
| `DATABASE_URL` | Connection string for the application database |
| `JWT_SECRET`   | Secret used to sign authentication tokens      |

{% hint style="warning" %}
Keep `.env` values local and secret. Do not commit real credentials.
{% endhint %}

## Local commands

Use these commands during local development:

{% tabs %}
{% tab title="Backend" %}
```bash
npm install
npm run dev
```
{% endtab %}

{% tab title="Frontend" %}
```bash
cd client
npm install
npm start
```
{% endtab %}

{% tab title="Production build" %}
```bash
npm run build
```
{% endtab %}
{% endtabs %}

## API base URL

```
http://localhost:5000/api
```

Use this as the local prefix for the endpoints below.

## Authentication

### Login

`POST /auth/login`

Use these login paths in the UI:

* First-time user — selects a role, then changes the password before entering the product.
* Returning user — signs in directly with email and password, with no role selection.

Request:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

Response:

```json
{
  "token": "jwt_token",
  "user": {
    "id": "123",
    "role": "admin"
  }
}
```

Use the returned token for authenticated requests if the implementation requires an authorization header.

## Patients

| Endpoint        | Method | Purpose              |
| --------------- | ------ | -------------------- |
| `/patients`     | `POST` | Create patient       |
| `/patients`     | `GET`  | Get all patients     |
| `/patients/:id` | `GET`  | Get a single patient |

## Queue

| Endpoint | Method | Purpose              |
| -------- | ------ | -------------------- |
| `/queue` | `POST` | Add patient to queue |
| `/queue` | `GET`  | Get queue list       |

## Consultation

| Endpoint                   | Method | Purpose                  |
| -------------------------- | ------ | ------------------------ |
| `/consultation`            | `POST` | Add consultation         |
| `/consultation/:patientId` | `GET`  | Get consultation history |

## Billing

| Endpoint           | Method | Purpose          |
| ------------------ | ------ | ---------------- |
| `/billing/invoice` | `POST` | Generate invoice |
| `/billing/payment` | `POST` | Process payment  |

### Read next

* [Run Careflow locally](../getting-started/run-careflow-locally.md)
* [Glossary](glossary.md)
