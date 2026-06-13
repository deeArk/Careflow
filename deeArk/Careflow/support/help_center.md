# Support center

## CareFlow Support Center

### Overview

CareFlow is an **outpatient-only healthcare management system** designed to manage patient flow from registration through consultation, services, billing, payment, and completion.

{% hint style="warning" %}
CareFlow does **NOT** support inpatient admission, ward management, or hospitalisation workflows.
{% endhint %}

### Quick links

* [Guides](<../README (1).md>)
* [Staff User Guide](../readme/staff-user-guide.md)
* [Admin Guide](../readme/admin_guide.md)

## Frequently Asked Questions (FAQ)

<details>

<summary>Is CareFlow for admitted (inpatient) patients?</summary>

No. CareFlow is strictly for **outpatients only**. It does not support admission, inpatient care, or ward/bed management.

</details>

<details>

<summary>What types of patients can be managed in CareFlow?</summary>

CareFlow supports:

* Walk-in patients
* Appointment-based visits
* Follow-up consultations
* Minor outpatient procedures

</details>

<details>

<summary>Does CareFlow support emergency admissions?</summary>

No. Emergency and inpatient cases must be handled outside CareFlow in a full hospital EMR system.

</details>

<details>

<summary>Can CareFlow work offline?</summary>

Yes.

* **Offline Mode:** Use the **Offline Screen** for quick consult, dashboard, patient search, and billing tasks
* **Online Mode:** Required for syncing, billing, payments, and full system functionality

</details>

<details>

<summary>What happens if internet disconnects during use?</summary>

The system continues in offline mode. Once internet is restored, data automatically syncs.

</details>

<details>

<summary>Why can’t I log in?</summary>

Check the following:

* Confirm your email and password are correct.
* Confirm you selected the correct role before signing in.
* Confirm your internet connection is stable.
* Confirm your account has not been removed by an administrator.

</details>

<details>

<summary>Which roles can sign in?</summary>

CareFlow supports these login roles:

* Receptionist / Nurse
* Doctor / Clinician
* Cashier
* Administrator

</details>

<details>

<summary>How do I restore a staff user who was removed?</summary>

An administrator must restore the account from the **Staff Search and Retrieval Screen**.

If you cannot sign in and suspect the account was removed, contact an administrator to restore access.

</details>

<details>

<summary>What is the patient workflow in CareFlow?</summary>

**Registration → Queue → Call Patient → Vitals → Consultation → Services → Invoice → Payment → Completion**

</details>

<details>

<summary>Can steps be skipped in the workflow?</summary>

No. The workflow is structured. Only an authorized administrator or workflow policy can allow an exception.

</details>

<details>

<summary>Who uses CareFlow?</summary>

* Reception staff
* Nurses
* Doctors
* Cashiers (Billing Officers)
* Administrators

</details>

<details>

<summary>What if a patient is not found in the system?</summary>

Open the **Patient Search and Retrieval Screen** and search using:

* Patient ID
* Phone number

If no result appears, use the **New Patient Registration Screen**.

</details>

<details>

<summary>Does CareFlow support prescriptions?</summary>

Yes. Prescriptions are created during consultation and stored in patient records.

</details>

## Troubleshooting Guide

### Common Issues & Solutions

| Issue                             | Cause                                                 | Solution                                                                                                   |
| --------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Patient data not syncing          | Internet interruption or offline mode active          | Reconnect internet, refresh system, and allow auto-sync                                                    |
| Patient not appearing in queue    | Registration incomplete or not added to queue         | Confirm registration and re-add patient to queue                                                           |
| Cannot proceed to consultation    | Patient was not called or a queue step is incomplete  | Open **Queue Dashboard**, click **Call**, then start consultation                                          |
| Invoice not generated             | No services added during consultation                 | Add services or reopen consultation                                                                        |
| System is slow or lagging         | Weak internet or large unsynced data                  | Use stable network and sync in smaller batches                                                             |
| Offline data not appearing online | Sync not completed after reconnecting                 | Stay online and refresh system after a few minutes                                                         |
| Patient record not found          | Wrong search input or missing registration            | Search using ID/phone or register patient again                                                            |
| Staff account setup incomplete    | Registration did not reach the review or success step | Complete **Personal Information**, **Employment Information**, **Account Setup**, and **Review & Confirm** |
| Payment not reflecting            | Transaction delay or network issue                    | Refresh payment module and verify status                                                                   |
| Queue not updating                | System delay or offline mode                          | Reconnect internet and refresh dashboard                                                                   |
| Removed staff user needs access   | Account was removed from the system                   | Ask an administrator to restore the user account from the **Staff Search and Retrieval Screen**            |

### Support

For unresolved issues:

* Contact system administrator
* Check internet connectivity
* Ensure system is updated to latest version
