---
description: Generate invoices, apply service charges, confirm payment, and issue receipts.
icon: gear
---

# Billing and payments

This guide covers the cashier workflow in Careflow. It starts after patient consultation and service assignment are complete.

{% hint style="info" %}
Billing quality depends on upstream data. Vitals, complaints, diagnosis, treatment details, and assigned services should be complete before invoice generation.
{% endhint %}

### Use this guide when you need to

* generate a patient invoice
* confirm payment status
* issue or recheck a receipt

## Before you start

You'll need:

* A completed or in-progress patient visit
* Recorded services or billable items
* Access to billing and payment actions

## Steps

{% stepper %}
{% step %}
#### Generate the invoice

Create an invoice for the patient visit. The invoice should include consultation costs and any assigned services.

{% hint style="info" %}
Review each invoice line item before you continue. Confirm the total amount, then use the billing actions to record or collect payment.
{% endhint %}
{% endstep %}

{% step %}
#### Review charges

Confirm that every expected service charge appears on the invoice before payment is recorded.
{% endstep %}

{% step %}
#### Record payment

Capture the payment against the invoice and confirm the transaction in the system.
{% endstep %}

{% step %}
#### Issue receipt

After confirmation, generate the receipt and provide it to the patient.

{% hint style="info" %}
After payment is confirmed, open the receipt actions. Then download, print, or send the receipt using the available delivery option.
{% endhint %}
{% endstep %}

{% step %}
#### Track unpaid bills

If payment is not completed, keep the invoice visible as unpaid so staff can follow up later.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Do not record payment before you confirm the invoice contents. Fix missing or incorrect charges first.
{% endhint %}

## Core billing capabilities

Careflow supports these billing tasks:

* Auto-generate invoices
* Add service charges
* Track unpaid bills
* Record payments
* Confirm payment status
* Generate receipts

### Read next

* [Patient journey](patient-journey.md)
* [Configuration and API](../reference/configuration-and-api.md)

## Common checks

<details>

<summary>Invoice is missing expected charges</summary>

Check whether the clinician or service workflow actually assigned the billable service to the visit.

</details>

<details>

<summary>Payment was recorded but the bill still looks unpaid</summary>

Confirm the payment was saved successfully and linked to the correct invoice.

</details>

<details>

<summary>Receipt is needed after the visit is closed</summary>

Open the billed visit, confirm the payment record, and regenerate the receipt if the implementation supports it.

</details>
