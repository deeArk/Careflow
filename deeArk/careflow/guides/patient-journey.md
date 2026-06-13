---
description: Follow one outpatient visit from registration through payment and completion.
icon: globe
---

# Patient journey

This guide shows the standard Careflow visit path for an outpatient clinic.

{% hint style="success" %}
The core goal is continuity. Every stage should update the same patient record and visit workflow.
{% endhint %}

{% hint style="info" %}
Careflow supports two sign-in paths. First-time users select their role, then change their password before continuing. Returning users sign in directly and do not select a role again.
{% endhint %}

## Journey overview

The default patient flow is:

1. Patient arrives at the clinic.
2. Reception registers or updates the patient profile.
3. The patient is added to the queue.
4. The patient is called for clinical intake.
5. Vitals and consultation details are captured in one connected workflow.
6. Services are assigned if needed.
7. Billing generates the invoice.
8. Payment is processed.
9. The visit is marked complete.

## Step-by-step

{% stepper %}
{% step %}
#### Register the patient

Reception creates a patient record or updates an existing one. This gives the visit a valid patient identity and history anchor.

{% hint style="info" %}
Use the patient registration form to enter identity, contact, and emergency details. Save the record before moving to check-in or queue actions.
{% endhint %}

{% hint style="info" %}
Use patient search before creating a new record. Review the matched results and open the correct profile before check-in.
{% endhint %}
{% endstep %}

{% step %}
#### Add the patient to the queue

Careflow generates or assigns a queue position. Staff can then track waiting order and priority handling in real time.
{% endstep %}

{% step %}
#### Capture intake and consultation

The nurse, doctor, or intake staff member captures vitals and clinical findings in one connected workflow.

Some clinics keep vitals and consultation as separate handoffs. Others complete both in one screen or one continuous flow. Either model works if the same visit record stays active.

Typical intake and consultation data includes:

* Blood pressure, temperature, pulse, and weight
* Chief complaint
* Diagnosis and prescription or treatment plan

{% hint style="info" %}
Record vitals before the clinician finalizes the consultation.
{% endhint %}

{% hint style="info" %}
Complete the vitals fields first. Then record the complaint, diagnosis, and treatment details in the same visit before sending the patient to billing.
{% endhint %}

{% hint style="info" %}
Save the clinical entry and confirm the visit stays linked to the same patient record. Then hand the patient over to billing.
{% endhint %}
{% endstep %}

{% step %}
#### Assign services

If the patient needs tests, procedures, or other billable services, assign them from the service module and track completion.
{% endstep %}

{% step %}
#### Generate billing and collect payment

The cashier reviews the recorded services, generates an invoice, records payment, and issues a receipt.
{% endstep %}

{% step %}
#### Complete the visit

Once payment is confirmed, mark the visit complete so the full history remains available for future follow-up.
{% endstep %}
{% endstepper %}

## Staff workflow by role

### Receptionist

* Register patient
* Assign queue number
* Schedule appointments

### Nurse

* Call patient for intake
* Record vitals or support clinical intake
* Prepare the patient for clinician review

### Doctor

* Review or confirm vitals
* Complete consultation
* Record complaints, diagnosis, and treatment

### Cashier

* Generate invoice
* Process payment
* Issue receipt

### Admin

* Manage users
* Monitor system activity
* Configure services and pricing
