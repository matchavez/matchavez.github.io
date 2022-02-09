# Client Plan

- Date
- Narrative
- Activity
- List

---



## Now

This is the as-is situation.

> (No activity; this is the start.)

| Activity | Number  | Purpose                    | Change |
| -------- | ------- | -------------------------- | ------ |
|          | DEV100  | Dev Transport              |        |
|          | DEV110  | Development                |        |
|          | DEV120  | Development                |        |
|          | DEV400+ | Short-term testing         |        |
|          | QAS100  | System Integration Testing |        |
|          | QAS110+ | User Acceptance Testing    |        |
|          | QAS120  | Product Cost/Data Special  |        |
|          | QAS300  | Training                   |        |
|          | QAS310  | Training Master            |        |
|          | PRD100+ | Performance Testing        |        |

---



## 01 February 2022 TBD

Rebuild of the main development transport path. This includes Project S.

> Rebuild DEV100


| Activity | Number  | Purpose                    | Change  |
| -------- | ------- | -------------------------- | ------- |
| +Proj S  | DEV100  | Dev Transport              | Rebuild |
|          | DEV110  | Development                |         |
|          | DEV120  | Development                |         |
|          | DEV400+ | Short-term testing         |         |
|          | QAS100  | System Integration Testing |         |
|          | QAS110+ | User Acceptance Testing    |         |
|          | QAS120  | Product Cost/Data Special  |         |
|          | QAS300  | Training                   |         |
|          | QAS310  | Training Master            |         |
|          | PRD100+ | Performance Testing        |         |

---



## xx March 2022 TBD

This creates a new environment for Training/TRN and the clients for use.

> Copy QAS110 -> TRN100
>
> Restore TRN100 -> TRN110


| Activity | Number  | Purpose                    | Change |
| -------- | ------- | -------------------------- | ------ |
|          | DEV100  | Dev Transport              |        |
|          | DEV110  | Development                |        |
|          | DEV120  | Development                |        |
|          | DEV400+ | Short-term testing         |        |
|          | QAS100  | System Integration Testing |        |
|          | QAS110+ | User Acceptance Testing    |        |
|          | QAS120  | Product Cost/Data Special  |        |
|          | QAS300  | Training                   |        |
|          | QAS310  | Training Master            |        |
| Build    | TRN100  | Training                   | Create |
| Build    | TRN110  | Training Master            | Create |
|          | PRD100+ | Performance Testing        |        |

---



## 04 April 2022

Data Load 6 Complete

> DEV100 -> QAS100
>
> Decommission QAS300, QAS310


| Activity     | Number  | Purpose                   | Change      |
| ------------ | ------- | ------------------------- | ----------- |
|              | DEV100  | Dev Transport             |             |
|              | DEV110  | Development               |             |
|              | DEV120  | Development               |             |
|              | DEV400+ | Short-term testing        |             |
| Rebuild      | QAS100  | _Data Load 6_             | From DEV100 |
|              | QAS110+ | User Acceptance Testing   |             |
|              | QAS120  | Product Cost/Data Special |             |
| Decommission | QAS300  | Training                  | Out of date |
| Decommission | QAS310  | Training Master           | Out of date |
|              | TRN100  | Training                  |             |
|              | TRN110  | Training Master           |             |
|              | PRD100+ | Performance Testing       |             |

---



## xx May 2022

Update QAS120.

> QAS100 -> QAS120


| Activity | Number  | Purpose                 | Change      |
| -------- | ------- | ----------------------- | ----------- |
|          | DEV100  | Dev Transport           |             |
|          | DEV110  | Development             |             |
|          | DEV120  | Development             |             |
|          | DEV400+ | Short-term testing      |             |
|          | QAS100  | _Data Load 6_           |             |
|          | QAS110+ | User Acceptance Testing |             |
| Rebuild  | QAS120  | _Data Load 6_           | From QAS100 |
|          | TRN100  | Training                |             |
|          | TRN110  | Training Master         |             |
|          | PRD100+ | Performance Testing     |             |

