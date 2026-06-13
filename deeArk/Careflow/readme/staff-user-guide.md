# Staff User Guide

CareFlow is a clinical workflow management platform that enables healthcare providers to efficiently manage patient flow, from registration and assessment to treatment and care completion.

The system is designed to streamline healthcare operations, improve patient experience, and ensure that every patient follows a structured clinical workflow.

Use the [Support center](../support/help_center.md) for common issues and quick answers.

All patients follow this flow:

**Registration → Queue → Call Patient → Vitals → Consultation → Services → Invoice → Payment → Completion**

***

## Login

<details>

<summary>Sign in to CareFlow</summary>

{% stepper %}
{% step %}
## Open the website
{% endstep %}

{% step %}
## Select **Login**
{% endstep %}

{% step %}
## Enter your email
{% endstep %}

{% step %}
## Enter your password
{% endstep %}

{% step %}
## Optional: select **Remember me**
{% endstep %}

{% step %}
## Click **Login**
{% endstep %}

{% step %}
## Select your role to continue

Choose the role assigned to your account.

* Receptionist / Nurse
* Doctor / Clinician
* Cashier
* Administrator
{% endstep %}

{% step %}
## Open your dashboard

The system opens the **Dashboard** for your role.
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Sign out</summary>

{% stepper %}
{% step %}
## Open your profile menu
{% endstep %}

{% step %}
## Click **Logout**
{% endstep %}

{% step %}
## Return to the login page
{% endstep %}
{% endstepper %}

</details>

***

## Registration

<details>

<summary>Register a New Patient</summary>

{% stepper %}
{% step %}
## Open the **New Patient Registration Screen**
{% endstep %}

{% step %}
## Click **New Patient**
{% endstep %}

{% step %}
## Enter patient details

* Full Name
* Date of Birth
* Gender
* Phone Number
* Address (optional)
{% endstep %}

{% step %}
## Click **Save**
{% endstep %}

{% step %}
## System creates patient profile
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Search Patient</summary>

{% stepper %}
{% step %}
## Open the **Patient Search and Retrieval Screen**
{% endstep %}

{% step %}
## Enter patient name or phone number
{% endstep %}

{% step %}
## Select patient from results
{% endstep %}

{% step %}
## Open the patient record
{% endstep %}
{% endstepper %}

</details>

***

## Queue Management

<details>

<summary>Add Patient to Queue</summary>

{% stepper %}
{% step %}
## Open patient profile
{% endstep %}

{% step %}
## Click **Add to Queue**
{% endstep %}

{% step %}
## Select department
{% endstep %}

{% step %}
## Choose priority (Normal / High / Emergency)
{% endstep %}

{% step %}
## Click **Confirm**
{% endstep %}

{% step %}
## Patient appears in Queue Dashboard
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>View Queue Status</summary>

{% stepper %}
{% step %}
## Open Queue Dashboard
{% endstep %}

{% step %}
## View patient statuses

* Waiting
* Called
* In Consultation
* Completed
{% endstep %}
{% endstepper %}

</details>

***

## Call Patient

<details>

<summary>Call Patient into Consultation</summary>

{% stepper %}
{% step %}
## Open Queue Dashboard
{% endstep %}

{% step %}
## Locate patient in Waiting list
{% endstep %}

{% step %}
## Click **Call**
{% endstep %}

{% step %}
## System updates status to **Called**
{% endstep %}

{% step %}
## Patient is notified to proceed
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Recall Patient</summary>

{% stepper %}
{% step %}
## Locate patient in Called list
{% endstep %}

{% step %}
## Click **Recall**
{% endstep %}

{% step %}
## System re-sends notification
{% endstep %}
{% endstepper %}

</details>

***

## Consultation

<details>

<summary>Start Consultation</summary>

{% stepper %}
{% step %}
## Select patient from Called list
{% endstep %}

{% step %}
## Click **Start Consultation**
{% endstep %}

{% step %}
## Patient status changes to **In Consultation**
{% endstep %}
{% endstepper %}

</details>

***

## Vitals

<details>

<summary>Record Patient Vitals</summary>

{% stepper %}
{% step %}
## Open Consultation
{% endstep %}

{% step %}
## Click **Vitals**
{% endstep %}

{% step %}
## Click **Add Vitals**
{% endstep %}

{% step %}
## Enter

* Blood Pressure
* Temperature
* Pulse Rate
* Oxygen Saturation
* Weight
{% endstep %}

{% step %}
## Click **Save**
{% endstep %}
{% endstepper %}

</details>

***

## Quick consult

<details>

<summary>Record Clinical Notes</summary>

{% stepper %}
{% step %}
## Open the **Quick Consult Form Screen**
{% endstep %}

{% step %}
## Enter symptoms
{% endstep %}

{% step %}
## Add diagnosis
{% endstep %}

{% step %}
## Save notes
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Prescribe Medication</summary>

{% stepper %}
{% step %}
## Open the **Quick Consult Form Screen**
{% endstep %}

{% step %}
## Click **Add Prescription**
{% endstep %}

{% step %}
## Select medication
{% endstep %}

{% step %}
## Enter dosage and duration
{% endstep %}

{% step %}
## Save
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Request Lab Test</summary>

{% stepper %}
{% step %}
## Open the **Quick Consult Form Screen**
{% endstep %}

{% step %}
## Click **Lab Request**
{% endstep %}

{% step %}
## Select test type
{% endstep %}

{% step %}
## Submit request
{% endstep %}
{% endstepper %}

</details>

***

## Services

<details>

<summary>Add Service</summary>

{% stepper %}
{% step %}
## Open Consultation
{% endstep %}

{% step %}
## Click **Add Service**
{% endstep %}

{% step %}
## Select service type
{% endstep %}

{% step %}
## Confirm selection
{% endstep %}
{% endstepper %}

</details>

***

## Patient billing

<details>

<summary>Open the Patient's Billing Screen</summary>

{% stepper %}
{% step %}
## Open the patient record
{% endstep %}

{% step %}
## Open **Patient's Billing Screen**
{% endstep %}

{% step %}
## Review billable services
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Check the Billing Queue</summary>

{% stepper %}
{% step %}
## Open **Billing Queue**
{% endstep %}

{% step %}
## Find the patient in the queue
{% endstep %}

{% step %}
## Open the patient billing item
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Generate Invoice</summary>

{% stepper %}
{% step %}
## Open **Patient's Billing Screen**
{% endstep %}

{% step %}
## Review the patient charges
{% endstep %}

{% step %}
## Click **Invoice**
{% endstep %}

{% step %}
## Generate the invoice
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Edit Invoice</summary>

{% stepper %}
{% step %}
## Open Invoice
{% endstep %}

{% step %}
## Click **Edit**
{% endstep %}

{% step %}
## Modify items
{% endstep %}

{% step %}
## Save changes
{% endstep %}
{% endstepper %}

</details>

***

## Payment

<details>

<summary>Record Payment</summary>

{% stepper %}
{% step %}
## Open **Billing Queue**
{% endstep %}

{% step %}
## Select the patient billing record
{% endstep %}

{% step %}
## Open the invoice
{% endstep %}

{% step %}
## Click **Record Payment**
{% endstep %}

{% step %}
## Select payment method
{% endstep %}

{% step %}
## Enter amount
{% endstep %}

{% step %}
## Confirm payment
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Issue Receipt</summary>

{% stepper %}
{% step %}
## Open the completed payment
{% endstep %}

{% step %}
## Open the **Receipt Delivery Workflow**
{% endstep %}

{% step %}
## Click **Receipt**
{% endstep %}

{% step %}
## Download or print
{% endstep %}
{% endstepper %}

</details>

<details>

<summary>Close Invoice</summary>

{% stepper %}
{% step %}
## Confirm full payment
{% endstep %}

{% step %}
## Click **Close Invoice**
{% endstep %}

{% step %}
## Mark as completed
{% endstep %}
{% endstepper %}

</details>

***

## Offline mode

<details>

<summary>Work from the Offline Screen</summary>

{% stepper %}
{% step %}
## Open the **Offline Screen**
{% endstep %}

{% step %}
## Use the offline screen you need

* Offline Quick Consult Screen
* Offline Clinical Dashboard
* Offline Patient Search and Retrieval Screen
* Offline Billing Screen
{% endstep %}

{% step %}
## Reconnect to the internet
{% endstep %}

{% step %}
## Confirm data sync after connection returns
{% endstep %}
{% endstepper %}

</details>

***

## Completion

<details>

<summary>Complete Patient Visit</summary>

{% stepper %}
{% step %}
## Ensure consultation is completed
{% endstep %}

{% step %}
## Ensure invoice is paid
{% endstep %}

{% step %}
## Click **Mark as Completed**
{% endstep %}

{% step %}
## Patient exits workflow
{% endstep %}
{% endstepper %}

</details>

***

## Access Support

<details>

<summary>Request account changes</summary>

{% stepper %}
{% step %}
## Contact the system administrator
{% endstep %}

{% step %}
## Request the required update

* New staff account
* Role change
* Restore removed account
{% endstep %}

{% step %}
## Confirm access after the update
{% endstep %}
{% endstepper %}

</details>

***

## Support

<details>

<summary>Report an Issue</summary>

{% stepper %}
{% step %}
## Contact system administrator
{% endstep %}

{% step %}
## Submit support ticket
{% endstep %}

{% step %}
## Refresh system and retry action
{% endstep %}
{% endstepper %}

</details>

***

## More help

* Use the [Support center](../support/help_center.md) for troubleshooting and FAQs.
* Use the [Admin Guide](admin_guide.md) for account and access tasks.

***

## System Rule

All patients must follow:

**Registration → Queue → Call → Vitals → Consultation → Services → Invoice → Payment → Completion**

No step should be skipped unless explicitly authorized by a system administrator or configured workflow policy.
