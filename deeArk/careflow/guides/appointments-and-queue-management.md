---
description: Manage bookings, daily schedules, queue numbers, and patient flow in Careflow.
icon: calendar-days
---

# Appointments and queue management

This guide covers how Careflow handles appointment booking and real-time queue movement during a clinic day.

{% hint style="info" %}
Appointments plan the day. The queue runs the live visit order.
{% endhint %}

### Use this guide when you need to

* book or move appointments
* check patients in for the day
* manage waiting order during busy periods

## Appointment workflow

Use appointments to prepare for expected patient volume and staff allocation.

### Core tasks

* Book new appointments
* Reschedule existing appointments
* Cancel appointments when needed
* Review the daily schedule

### Recommended flow

{% stepper %}
{% step %}
#### Create the appointment

Reception records the patient, visit date, and expected consultation slot.
{% endstep %}

{% step %}
#### Confirm the schedule

Review the day's bookings and identify high-volume periods before clinic opens.

{% hint style="info" %}
<img src="../.gitbook/assets/Screenshot_13-6-2026_8326_www.figma.com (1).jpeg" alt="Daily dashboard view" data-size="original">

Use the daily dashboard to review patient volume, revenue, and outstanding payments before clinic activity peaks.
{% endhint %}
{% endstep %}

{% step %}
#### Update changes early

Reschedule or cancel appointments as soon as the patient or clinic changes availability.
{% endstep %}
{% endstepper %}

## Queue workflow

The queue begins when the patient arrives and is checked in.

### Core capabilities

* Auto-generated queue order
* Priority-based handling
* Real-time queue updates

### Standard queue flow

1. Patient arrives.
2. Staff confirms the patient record.
3. Careflow assigns or confirms the queue number.
4. Staff monitor waiting order and priority cases.
5. The nurse or intake staff calls the patient for vitals.
6. After vitals are complete, the patient moves into consultation.

Monitor the live queue to track waiting patients, queue order, and urgent priority cases in real time.

{% hint style="warning" %}
An appointment does not place the patient in the live queue. Check-in starts the queue workflow.
{% endhint %}

## Daily operating tips

* Keep appointment status updated before arrival.
* Only add arrived patients to the live queue.
* Move patients to vitals before consultation starts.
* Use priority handling consistently across staff.
* Review queue backlog during peak periods.

### Read next

* [Patient journey](patient-journey.md)
* [Billing and payments](billing-and-payments.md)

## Common issues

<details>

<summary>A patient has an appointment but is missing from the queue</summary>

Appointments do not replace check-in. Add the patient to the queue after arrival.

</details>

<details>

<summary>The queue order looks wrong</summary>

Check whether a priority case was inserted or whether duplicate patient entries were created.

</details>

<details>

<summary>A patient needs to be moved to another day</summary>

Update the appointment record and remove the patient from the active queue if they have not been seen.

</details>
