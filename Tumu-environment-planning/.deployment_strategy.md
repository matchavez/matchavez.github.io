# Deployment Strategy

#### Outline

Titling / Document Owner

| Version | Date              | Changes        |
| ------- | ----------------- | -------------- |
|         |                   |                |
| 1.0     | 04 September 2020 | Draft Accepted |


Revision History

---

## Purpose

This document serves to provide information and planning required to release the Tumu SAP Deployment into an operational state.

This document will briefly address the transition process. It will outline the prerequisites and the hand-over steps as they meet acceptance gating. It will also outline the process by which deliverables are accepted in the transition phase.

When acceptance is signed off by all relevant parties, deployment can commence. Ultimately, it is the Tumu Management's responsibility to ensure that all areas are complete, and confirmed / signed off before a Release To Production will start. Any RTP meetings will happen at the discresion of the Project Manager, but one meeting must include where all relevant signatories agree to the go-ahead for RTP.

---

## Definitions

| Term    | Definition                                                                               |
| ------- | ---------------------------------------------------------------------------------------- |
| RTP     | Release To Production, refers conceptually to all things needed to go-live.              |
| Go-live | The relative moment of the ERP switch.                                                   |
| WRICEF  | Generic acronym for workflows, reports, interfaces, conversions, enhancements and forms. |
|         |                                                                                          |
|         |                                                                                          |
|         |                                                                                          |
|         |                                                                                          |


---

## Related Documents

| Title                | Location             |
| -------------------- | -------------------- |
| Environment Strategy | http/sharepoint/ tbd |


---

## Introduction

All of the following categories of deliverables or prerequisites are assumed to be independent in that all are necessary for RTP, but that none are assumed to be dependent on one another. 

Describe all major deliverables or prerequisites:

- Azure Environment
- SAP Deployment
- Microservices
- Connected Environment Stability
- Test Plan
- Documentation
- Prior System Prep
- Downtime Scheduling
- Success Verification Checklist
- Rollback Plan
- SLA Agreement
- Business Readiness
- Final Deployment Scheduling


> (For each of these, what is the high-level description of the deliverable?)

> (For each of these, what is the milestone description of being RTP-ready?)

---

**Azure Environment**

Azure Deployment describes the readiness of all Microsoft Azure cloud services necessary are in place for RTP. This includes testing, performance, and hardening.

_Deliverable:_ The deliverable will be the final check that all hardware is as expected. It will include Jesse Middleton's approval, as well as the documentation for the areas that are specified within an Azure Cloud environment. Notably, some "cloud" parts are dependent on the provider and cannot be specifically described.

_Readiness:_ For Azure, readiness is defined as having:

- PRD built out to specification
- ZAG have approved the buildout is sufficient for PRD
- QAS and DEV are fully maintained, and are running as expected
- All HA/DR is accounted for



**SAP Deployment**

SAP Deployment describes the readiness of SAP PRD System in the PRD Environment. Notably, this is dependent to some degree on readiness of the Azure Environment.

_Deliverable:_ The deliverable is an SAP System, on PRD, with all final transports complete. It will include approval by ZAG / Becky Bissett, and any notable handover information for RTP. Testing should be complete, or there should be a Known Issue listed below.

_Readiness:_ For SAP.PRD, readiness is defined as:

- SAP on PRD, with the expected version
- All WRICEFs are accounted for
- No known performance issues
- All networking is verified
  
**Microservices**



**Connected Environment Stability**


**Test Plan**


**Documentation**


**Prior System Prep**


**Downtime Scheduling**


**Success Verification Checklist**


**Rollback Plan**


**SLA Agreement**


**Business Readiness**


**Final Deployment Scheduling**


### Service Definitions - What does RTP mean to real people?

User cases, as defined by Workshops / Blueprints


### Known Issues - Any known deficiencies as of RTP?

| Reference | Description |
| --------- | ----------- |
|           |             |


### Documentation Table - Relevant documents to RTP

| Document Title | Location |
| -------------- | -------- |
|                |          |


---

## Tactical Path

This is the list of things that need to be done, at a high level, and the order they need to take place. It is important to understand all of the dependencies.

### States of Completion:

There are several milestones that are described by all of the components coming together to make a complete System.

The Definition of System vs. Environment vs. Landscape:

> ==System== is the _collection_ of parts necessary for the main application to run; in this case, SAP.

> ==Environment== is defined as the configuration or mode of operation of the _application_; in this case, the way SAP runs, or its state. Environment is not tied to a specific System.

> ==Landscape== is defined as all Systems, not just the main (SAP) System. This means all connected applications and services that will communicate with SAP are within the "SAP Landscape", but that those other Systems will remain independent.


SAP System = Azure, SAP, Microservices.

SAP Environment = State of SAP or its data. A System's condition.

SAP Landscape = SAP System + all connected applications.



---

## Acceptance & Sign Off

#### RTP Signatures for each relevant Manager / Director:

By signing, you are agreeing that to your knowledge, it is appropriate to release Tumu / SAP to Production. This will follow the Final Deployment Scheduling as shown.

---

| Title     | TheirTitleHere |
| --------- | -------------- |
| Name      | TheirName      |
| Signature |                |
| Date      |                |

---

| Title     | TheirTitleHere |
| --------- | -------------- |
| Name      | TheirName      |
| Signature |                |
| Date      |                |

---

| Title     | TheirTitleHere |
| --------- | -------------- |
| Name      | TheirName      |
| Signature |                |
| Date      |                |