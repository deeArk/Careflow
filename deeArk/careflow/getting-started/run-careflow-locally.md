---
description: >-
  Set up the backend and frontend, configure local environment variables, and
  verify the app works.
icon: compass
---

# Run Careflow locally

This guide goes deeper than the [Quickstart](quickstart.md). By the end, you'll have a local Careflow environment and a simple validation plan.

{% hint style="info" %}
Careflow is documented here as a web application with a backend API, frontend client, database connection, and JWT-based authentication.
{% endhint %}

## 1. Prepare the project

Clone the repository and install dependencies in both app layers.

```bash
git clone https://github.com/deeArk/Careflow.git
cd Careflow
npm install
cd client
npm install
```

## 2. Configure environment variables

Create a `.env` file in the backend project root.

```bash
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

Use a real database connection string before you start the API.

{% hint style="warning" %}
Do not commit real secrets. Keep local and production values separate.
{% endhint %}

## 3. Start the services

Run the backend from the project root. Run the frontend from `client`.

{% tabs %}
{% tab title="Backend" %}
```bash
npm run dev
```
{% endtab %}

{% tab title="Frontend" %}
```bash
npm start
```
{% endtab %}
{% endtabs %}

## 4. Verify the app

Use this basic smoke test after startup:

1. Open the frontend.
2. Sign in through the login screen.
   * If this is the first login, select the role, then complete the required password change.
   * If this is a returning login, sign in directly with no role selection.
3. Register a patient.
4. Add the patient to the queue.
5. Record vitals.
6. Complete a consultation and create a bill.

If you test the API directly, use the local base URL:

```bash
http://localhost:5000/api
```

## 5. Build for production

When you need a production build, run:

```bash
npm run build
```

## Where to go next

Continue with these pages:

{% content-ref url="../guides/patient-journey.md" %}
[patient-journey.md](../guides/patient-journey.md)
{% endcontent-ref %}

{% content-ref url="../core-concepts/roles-and-permissions.md" %}
[roles-and-permissions.md](../core-concepts/roles-and-permissions.md)
{% endcontent-ref %}

{% content-ref url="../reference/configuration-and-api.md" %}
[configuration-and-api.md](../reference/configuration-and-api.md)
{% endcontent-ref %}
