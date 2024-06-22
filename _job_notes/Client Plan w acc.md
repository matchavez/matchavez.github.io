# Client Plan / S4 Hana Client Structure

---



## Now

This is the as-is situation. Plus sign indicates current Microservices connection.

| Number  | Purpose                    | Change |
| ------- | -------------------------- | ------ |
| DEV100  | Dev Transport              |        |
| DEV110  | Development                |        |
| DEV120  | Development                |        |
| DEV200  | Sandpit                    |        |
| DEV400+ | Short-term testing         |        |
| QAS100  | System Integration Testing |        |
| QAS110+ | User Acceptance Testing    |        |
| QAS120  | Product Cost/Data Special  |        |
| QAS300  | Training                   |        |
| QAS310  | Training Master            |        |
| PRD100+ | Performance Testing        |        |

---

### Accenture Proposal:

Step 1A: (01 April) Finance Transformation transports into DEV100.

Step 1B: Rebuild DEV400 from DEV100.

Step 2: (28 March) Create ST1, Copy QAS110->TRN100, QAS120->TRN110

Step 3: (04 April) Reset QAS100 config, Delete QAS110, QAS120, QAS300, QAS310

Step 4: Transports from DEV100->QAS100

Step 5: (14 April) Test QAS100 and "take gold backups"

Step 6: (06 May) Data Load 6

Step 7: (10 May) Copy QAS100->QAS110.

Step 8: (20 May) Copy QAS100->TRN100, QAS110->TRN110



### For consideration:

Step 2: Create ST1, Copy QAS110->TRN100, ==QAS110->TRN300, QAS110->TRN900==, QAS120->TRN110

This would allow a transition of activities to move:

| Activity     | "Old Location" | 5 Weeks Temp |
| ------------ | -------------- | ------------ |
| SIT/ST/UAT   | QAS110         | TRN900       |
| Training Dev | QAS300         | TRN300       |

Once DL6 is in place (Step 6), and QAS110 is restored for Product Costing work, these two clients with DL5 backing can be removed. This can occur prior to Step 8, thus should cover the "gap" in testing environments between Steps 3 through 7.

> Microservices from DEV400 should be moved to support TRN900.


During April, the landscape would look like:

### April-ish

| Number  | Purpose                       | Change            |
| ------- | ----------------------------- | ----------------- |
| DEV100  | Dev Transport                 | +Tx, +DL6         |
| DEV110  | Development                   | Don't Care        |
| DEV120  | Development                   | Don't Care        |
| DEV200  | Sandpit                       | Don't Care        |
| DEV400  | Short-term testing            | Loses MS          |
| QAS100  | SIT/UAT DL6 Rebuild           | Not available     |
| TRN100  | Waiting for DL6               | Will be Training  |
| TRN110  | Waiting for DL6               | Will be Tr Master |
| TRN300  | Training Development (DL5)    | 5 Weeks           |
| TRN900+ | User Acceptance Testing (DL5) | 5 Weeks           |
| PRD100+ | Performance Testing           |                   |

---

