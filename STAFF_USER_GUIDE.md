#  CareFlow Staff User Guide

CareFlow is a clinical workflow management platform that enables healthcare providers to efficiently manage patient flow, from registration and assessment to treatment and care completion.

The system is designed to streamline healthcare operations, improve patient experience, and ensure that every patient follows a structured clinical workflow.

All patients follow this flow:

**Registration → Queue → Call Patient → Vitals → Consultation  → Services → Invoice → Payment → Completion**

---

#  Registration

<details>
<summary><b>Register a New Patient</b></summary>

### Steps:
1. Open **Registration**
2. Click **New Patient**
3. Enter patient details:
   - Full Name  
   - Date of Birth  
   - Gender  
   - Phone Number  
   - Address (optional)
4. Click **Save**
5. System creates patient profile

</details>

<details>
<summary><b>Search Patient</b></summary>

### Steps:
1. Open Registration
2. Enter patient name or phone number
3. Select patient from results
4. Open patient profile

</details>

---

#  Queue Management

<details>
<summary><b>Add Patient to Queue</b></summary>

### Steps:
1. Open patient profile
2. Click **Add to Queue**
3. Select department
4. Choose priority (Normal / High / Emergency)
5. Click **Confirm**
6. Patient appears in Queue Dashboard

</details>

<details>
<summary><b>View Queue Status</b></summary>

### Steps:
1. Open Queue Dashboard
2. View patient statuses:
   - Waiting  
   - Called  
   - In Consultation  
   - Completed  

</details>

---

#  Call Patient

<details>
<summary><b>Call Patient into Consultation</b></summary>

### Steps:
1. Open Queue Dashboard
2. Locate patient in Waiting list
3. Click **Call**
4. System updates status to **Called**
5. Patient is notified to proceed

</details>

<details>
<summary><b>Recall Patient</b></summary>

### Steps:
1. Locate patient in Called list
2. Click **Recall**
3. System re-sends notification

</details>

---

#  Consultation

<details>
<summary><b>Start Consultation</b></summary>

### Steps:
1. Select patient from Called list
2. Click **Start Consultation**
3. Patient status changes to **In Consultation**

</details>

---

#  Vitals

<details>
<summary><b>Record Patient Vitals</b></summary>

### Steps:
1. Open Consultation
2. Click **Vitals**
3. Click **Add Vitals**
4. Enter:
   - Blood Pressure  
   - Temperature  
   - Pulse Rate  
   - Oxygen Saturation  
   - Weight  
5. Click **Save**

</details>

---

#  Consultation Notes

<details>
<summary><b>Record Clinical Notes</b></summary>

### Steps:
1. Enter symptoms
2. Add diagnosis
3. Save notes

</details>

<details>
<summary><b>Prescribe Medication</b></summary>

### Steps:
1. Click **Add Prescription**
2. Select medication
3. Enter dosage and duration
4. Save

</details>

<details>
<summary><b>Request Lab Test</b></summary>

### Steps:
1. Click **Lab Request**
2. Select test type
3. Submit request

</details>

---

#  Services

<details>
<summary><b>Add Service</b></summary>

### Steps:
1. Open Consultation
2. Click **Add Service**
3. Select service type
4. Confirm selection

</details>

---

#  Invoice

<details>
<summary><b>Generate Invoice</b></summary>

### Steps:
1. Open patient record
2. Click **Create Invoice**
3. System auto-fills services
4. Click **Generate Invoice**

</details>

<details>
<summary><b>Edit Invoice</b></summary>

### Steps:
1. Open Invoice
2. Click **Edit**
3. Modify items
4. Save changes

</details>

---

#  Payment

<details>
<summary><b>Record Payment</b></summary>

### Steps:
1. Open Invoice
2. Click **Record Payment**
3. Select payment method
4. Enter amount
5. Confirm payment

</details>

<details>
<summary><b>Issue Receipt</b></summary>

### Steps:
1. Open payment
2. Click **Generate Receipt**
3. Download or print

</details>

<details>
<summary><b>Close Invoice</b></summary>

### Steps:
1. Confirm full payment
2. Click **Close Invoice**
3. Mark as completed

</details>

---

#  Completion

<details>
<summary><b>Complete Patient Visit</b></summary>

### Steps:
1. Ensure consultation is completed
2. Ensure invoice is paid
3. Click **Mark as Completed**
4. Patient exits workflow

</details>

---

#  User Management

<details>
<summary><b>Create Staff User</b></summary>

### Steps:
1. Open Settings
2. Click **Add User**
3. Enter staff details
4. Assign role:
   - Doctor  
   - Nurse  
   - Receptionist  
   - Admin  
5. Save user

</details>

---

#  Support

<details>
<summary><b>Report an Issue</b></summary>

### Steps:
1. Contact system administrator  
2. Submit support ticket  
3. Refresh system and retry action  

</details>

---

#  System Rule

All patients must follow:

**Registration → Queue → Call → Vitals → Consultation → Services → Invoice → Payment → Completion**

No step should be skipped unless explicity authorized by a system administrator or onfigure workfloe policy..
