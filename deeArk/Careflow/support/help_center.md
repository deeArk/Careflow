# Support center

## CareFlow Support Center

### Overview

CareFlow is an **outpatient-only healthcare management system** designed to manage patient flow from registration through consultation, services, billing, payment, and completion.

{% hint style="warning" %}
CareFlow does **NOT** support inpatient admission, ward management, or hospitalisation workflows.
{% endhint %}

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

* **Offline Mode:** Patient registration, queue management, and basic data entry
* **Online Mode:** Required for syncing, billing, payments, and full system functionality

</details>

<details>

<summary>What happens if internet disconnects during use?</summary>

The system continues in offline mode. Once internet is restored, data automatically syncs.

</details>

<details>

<summary>What is the patient workflow in CareFlow?</summary>

**Registration → Queue → Appointment → Consultation → Services → Invoice → Payment → Completion**

</details>

<details>

<summary>Can steps be skipped in the workflow?</summary>

No. The system enforces structured workflow stages. Authorized staff may override in exceptional cases.

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

Search using:

* Patient ID
* Phone number

Or register the patient as a new outpatient.

</details>

<details>

<summary>Does CareFlow support prescriptions?</summary>

Yes. Prescriptions are created during consultation and stored in patient records.

</details>

## Troubleshooting Guide

### Common Issues & Solutions

| Issue                             | Cause                                         | Solution                                                |
| --------------------------------- | --------------------------------------------- | ------------------------------------------------------- |
| Patient data not syncing          | Internet interruption or offline mode active  | Reconnect internet, refresh system, and allow auto-sync |
| Patient not appearing in queue    | Registration incomplete or not added to queue | Confirm registration and re-add patient to queue        |
| Cannot proceed to consultation    | No doctor assigned or queue step incomplete   | Assign doctor and mark patient as “Next in Queue”       |
| Invoice not generated             | No services added during consultation         | Add services or reopen consultation                     |
| System is slow or lagging         | Weak internet or large unsynced data          | Use stable network and sync in smaller batches          |
| Offline data not appearing online | Sync not completed after reconnecting         | Stay online and refresh system after a few minutes      |
| Patient record not found          | Wrong search input or missing registration    | Search using ID/phone or register patient again         |
| Payment not reflecting            | Transaction delay or network issue            | Refresh payment module and verify status                |
| Queue not updating                | System delay or offline mode                  | Reconnect internet and refresh dashboard                |

### Support

For unresolved issues:

* Contact system administrator
* Check internet connectivity
* Ensure system is updated to latest version
