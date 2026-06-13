# STAFF\_USER\_GUIDE

## Introduction

CareFlow is a clinic management system designed for small community health centres and private clinics in Nigeria. It supports patient registration, appointments, consultations, billing, and reporting through a centralized platform, with local data storage that preserves records and progress during periods of internet disruption, and syncs when connectivity is restored.

All patients follow this flow:

**Registration → Queue → Call Patient → Consultation → Vitals → Services → Invoice → Payment → Completion**

***

## Registration

<details>

<summary>Register a New Patient</summary>

#### Steps:

1. Open **Registration**
2. Click **New Patient**
3. Enter patient details:
   * Full Name
   * Date of Birth
   * Gender
   * Phone Number
   * Address (optional)
4. Click **Save**
5. System creates patient profile

</details>

<details>

<summary>Search Patient</summary>

#### Steps:

1. Open Registration
2. Enter patient name or phone number
3. Select patient from results
4. Open patient profile

</details>

***

## Queue Management

<details>

<summary>Add Patient to Queue</summary>

#### Steps:

1. Open patient profile
2. Click **Add to Queue**
3. Select department
4. Choose priority (Normal / High / Emergency)
5. Click **Confirm**
6. Patient appears in Queue Dashboard

</details>

<details>

<summary>View Queue Status</summary>

#### Steps:

1. Open Queue Dashboard
2. View patient statuses:
   * Waiting
   * Called
   * In Consultation
   * Completed

</details>

***

## Call Patient

<details>

<summary>Call Patient into Consultation</summary>

#### Steps:

1. Open Queue Dashboard
2. Locate patient in Waiting list
3. Click **Call**
4. System updates status to **Called**
5. Patient is notified to proceed

</details>

<details>

<summary>Recall Patient</summary>

#### Steps:

1. Locate patient in Called list
2. Click **Recall**
3. System re-sends notification

</details>

***

## Consultation

<details>

<summary>Start Consultation</summary>

#### Steps:

1. Select patient from Called list
2. Click **Start Consultation**
3. Patient status changes to **In Consultation**

</details>

***

## Vitals

<details>

<summary>Record Patient Vitals</summary>

#### Steps:

1. Open Consultation
2. Click **Vitals**
3. Click **Add Vitals**
4. Enter:
   * Blood Pressure
   * Temperature
   * Pulse Rate
   * Oxygen Saturation
   * Weight
5. Click **Save**

</details>

***

## Consultation Notes

<details>

<summary>Record Clinical Notes</summary>

#### Steps:

1. Enter symptoms
2. Add diagnosis
3. Save notes

</details>

<details>

<summary>Prescribe Medication</summary>

#### Steps:

1. Click **Add Prescription**
2. Select medication
3. Enter dosage and duration
4. Save

</details>

<details>

<summary>Request Lab Test</summary>

#### Steps:

1. Click **Lab Request**
2. Select test type
3. Submit request

</details>

***

## Services

<details>

<summary>Add Service</summary>

#### Steps:

1. Open Consultation
2. Click **Add Service**
3. Select service type
4. Confirm selection

</details>

***

## Invoice

<details>

<summary>Generate Invoice</summary>

#### Steps:

1. Open patient record
2. Click **Create Invoice**
3. System auto-fills services
4. Click **Generate Invoice**

</details>

<details>

<summary>Edit Invoice</summary>

#### Steps:

1. Open Invoice
2. Click **Edit**
3. Modify items
4. Save changes

</details>

***

## Payment

<details>

<summary>Record Payment</summary>

#### Steps:

1. Open Invoice
2. Click **Record Payment**
3. Select payment method
4. Enter amount
5. Confirm payment

</details>

<details>

<summary>Issue Receipt</summary>

#### Steps:

1. Open payment
2. Click **Generate Receipt**
3. Download or print

</details>

<details>

<summary>Close Invoice</summary>

#### Steps:

1. Confirm full payment
2. Click **Close Invoice**
3. Mark as completed

</details>

***

## Completion

<details>

<summary>Complete Patient Visit</summary>

#### Steps:

1. Ensure consultation is completed
2. Ensure invoice is paid
3. Click **Mark as Completed**
4. Patient exits workflow

</details>

***

## User Management

<details>

<summary>Create Staff User</summary>

#### Steps:

1. Open Settings
2. Click **Add User**
3. Enter staff details
4. Assign role:
   * Doctor
   * Nurse
   * Receptionist
   * Admin
5. Save user

</details>

***

## Support

<details>

<summary>Report an Issue</summary>

#### Steps:

1. Contact system administrator
2. Submit support ticket
3. Refresh system and retry action

</details>

***

## System Rule

All patients must follow:

**Registration → Queue → Call → Consultation → Vitals → Services → Invoice → Payment → Completion**

No step should be skipped.
