---
description: Get Careflow running locally in a few steps.
icon: bolt
---

# Quickstart

This quickstart gets Careflow running as fast as possible. It covers the minimum setup for local development.

{% hint style="success" %}
**Estimated time: 5–10 minutes.** You need the repository, npm, and a valid database URL.
{% endhint %}

## Steps

{% stepper %}
{% step %}
#### Clone the repository

```bash
git clone https://github.com/deeArk/Careflow.git
cd Careflow
```
{% endstep %}

{% step %}
#### Install dependencies

Install the backend dependencies from the project root. Then install the frontend dependencies from the `client` directory.

{% tabs %}
{% tab title="Backend" %}
```bash
npm install
```
{% endtab %}

{% tab title="Frontend" %}
```bash
cd client
npm install
```
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
#### Create the environment file

Create a `.env` file in the backend project and add the required values.

```bash
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```
{% endstep %}

{% step %}
#### Start the app

Run the backend first. Then start the frontend from the `client` directory.

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

{% hint style="info" %}
The API base URL is `http://localhost:5000/api`.
{% endhint %}
{% endstep %}
{% endstepper %}

## What's next

Use these pages next:

{% content-ref url="run-careflow-locally.md" %}
[run-careflow-locally.md](run-careflow-locally.md)
{% endcontent-ref %}

{% content-ref url="../core-concepts/core-concepts.md" %}
[core-concepts.md](../core-concepts/core-concepts.md)
{% endcontent-ref %}

{% content-ref url="../reference/configuration-and-api.md" %}
[configuration-and-api.md](../reference/configuration-and-api.md)
{% endcontent-ref %}
