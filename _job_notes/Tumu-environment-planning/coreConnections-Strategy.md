
[[_TOC_]]

---

The following are all either Third Party Applications or SAP modules that will connect to the SAP Systems. All third party connections will be handled through a microservice dedicated to its connection. Any SAP module will have its connection veracity assumed, but will be coordinated as necessary.

**REFERENCE: All Integrations are numbered according to the Synlait Integration List v2 spreadsheet.**

The connected applications, usually third-party, are all connected via microservice. Each microservice is the connection boundary, uniquely transferring and transforming data in and out of formats each system needs. Any given service may need to be updated if the third-party changes how its connective process works or acts.

For each, there are 7 main testing concerns for each microservice connection.

- input from SAP
- output to SAP
- input from 3PA
- output to 3PA
- perserverence and performance
- data transformation to SAP
- data transformation to 3PA

---

![connections.png](/.attachments/connections-525b369a-56d2-4814-b516-e57bc1a08e8d.png)

---

# "Core" Applications

> Categorised based on the initial assessment of a core/periphery deployment, the 'core' applications have had the most investigation to start, and are listed first for that reason alone. They may be redistributed categorically later, pending decisions TBD.


## (19) LIMS Labware 

#10

#11

#12

 The current version of Labware does not support API communication, so all environments will be upgraded to a version that does. (If it's decided to not do a big bang style release, Labware as a component will at this time be limited to DLP for the core release.)

The current deployment strategy for Labware is to simply update, as it is already in three different systems, so the dev/test/prod divisions will remain as they are. No additional data is apparently needed for any Labware system, so these updates will happen without consideration to data. Upgrading to the web-based version of LabWare is underway in order for compliance with SAP. LabWare Dev and Test have already been upgraded and the upgrade to Prod is scheduled to be around the July 2.

Currently there are XML based integrations with M3. M3 provides LabWare details of the lots that have been produced at each of the plants, the lab (using Labware) then performs the testing on these lots and then an evaluation as to whether the lot has passed or failed testing is sent from LabWare back to M3 so the product can be released.

The Integration Team should already be able to use dev and test for their microservice development.

Proposed LabWare Environment

::: mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --JSON--- microdev{Micro.DEV dev rg}
  microdev --XML--- labwaredev(Dev VM LABWARE.DEV)
  sapqas --JSON--- microqas{Micro.QAS dev rg} 
  microqas --XML--- labwaretest(Test VM LABWARE.QAS)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --JSON--- microprd{Micro.PRD}
  microprd --XML--- labwareprod(Prod VM LABWARE.PRD)

:::


---

## (21) TetraPak Plant Master (TPM)

#13

TPM is the software behind packaging and palletisation mechanics. In its current form, TPM software is only compatable with SAP with either version 6.5, or a modified version of 6.3. Work is already underway to ensure that all installations of TPM at Synlait meet this minimum requirement.

Current known installations are:

| Location    | Version |
| ----------- | ------- |
| Pokeno PD1  | 6.5     |
| DLP1        | 6.5     |
| D1          | None    |
| D2          | 6.3     |
| D3          | 6.3     |
| Lactoferrin | None    |
| AMF         | None    |

A testing environment is available now, as a 6.5 version. There is a discussion about whether the 6.3 versions should be updated to 6.5 or retrofitted, but that has not yet been decided. All test communication is to be directed at that test environment, and at this point, there does not appear to be any additional data requirements for all testing through to UAT.

> Open Item: Define upgrade strategy for TPM, and determine impact.

Proposed TPM Environment

::: mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --JSON--- microdev{Micro.DEV dev rgrg}
  microdev --http--- tpmprod(TPM Prod VM TPM.PRD)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  sapqas --JSON--- microdev
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --JSON--- microprd{Micro.PRD}
  microprd --http--- tpmprod
:::


---

## (29) EDW / Data Warehouse

#7

EDW is not a Microservice. It is the collection of transforms and processes that convert data from existing stores to data formats usable by SAP. These tools are also for Enterprise Data Warehouse to extract, combine with other systems, and store and format data in a suitable format for reporting against using reporting tools such as Power BI, Reporting Services, and Analysis services.

Currently in progress, the Data Migration team are working towards creating transformation tools that can convert data from M3 and other sources into an ingestible, clean set that will populate S4/HANA and BW4/HANA (or an equivalent). This will allow for data to fill each of the SAP Systems with a reasonable approximation of data, and will exercise the process for a go-live cutover of data, preliminarily scheduled for mid-2021.

Impacts to be noted are that SAP Systems must have an appropriate amount of data in them in order to do proper interface testing. Filling up a SAP data store will not be instant; it will require notice, and may need to be run overnight or off hours to get the most accurate transfer from current systems.

This process will be part of the go-live activities in both Dress Rehearsal and actual Production deployment.


---

## (31) Customer EDI - FoodStuffs South Island (FSSI)

#8

#9

FoodStuffs South Island sends Synlait a projected need of milk in both an annual forecast model, and a daily 14-day projection. This report is sent out as a read-only, and a Microservice will be necessary to ingest the data. There is also a confirmation message that needs to be sent in a different protocol. We interact with them using [AS2 exchange](https://en.wikipedia.org/wiki/AS2) (This is a variant of XML) through SFTP for receipt. The outbound verification messages are sent to:

| Environment | Location                                                            |
| ----------- | ------------------------------------------------------------------- |
| Development | `\\smlm3mec3\MEC_DEV_Output\SalesOrders\SalesOrder_Acknowledgement` |
| Test        | `\\smlm3mec3\MEC_TST_Output\SalesOrders\SalesOrder_Acknowledgement` |

It is likely that the testing setup used and remaining for M3 will be a sufficient environment, so at this time, the Integration team expects that there will be no action necessary, accourding to Nishant.

Of note, there is a planned API interface from FSSI, but at this time it is not ready, and is out of scope for SAP. However, it's likely that there will need to be a change soon after to accommodate their migration.

More information: [https://synlait.atlassian.net/wiki/spaces/IT/pages/26280040/Business+process+description](https://synlait.atlassian.net/wiki/spaces/IT/pages/26280040/Business+process+description)

::: mermaid
graph LR
  datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --JSON--- microdev{Micro.DEV dev rg}
  microdev --ODATA--- as2(FSSI AS2 Exchange FSSI.PRD)

  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  sapqas --JSON--- microdev

  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --JSON--- microprd{Micro.PRD}
  microprd --ODATA--- as2
:::


---

## (36) Cimcorp

#5

#6

> Open Item: Scope of testing and its relevance to a test environment is currently undecided.

Cimcorp is the vendor that provides the inventory robotics. Implemented as a part of project White. Its Automated Order picking system for product picking, inventory management and logistics. https://www.cimcorp.com/

There is a current proposal to create a test environment for Cimcorp's VM by cloning production. The outstanding SOW was deliberated for its necessity.

The process of developing a microservice for Cimcorp is going to be determined by the level of confidence necessary for testing.

> Open Item: Determination of UAT efficacy requirements.

The result of discussions with Cimcorp (Matthew and George, specifically) have led us to believe that there is no practical way to work around the costs of setting up a test environment. The virtual machine test environment will be set up by Cimcorp. In addition, the safety of not testing on a production environment, outside business hours will be avoided. It's also a situation that in our latest call, Cimcorp were able to confer that the testing that could be done just through API probing would not be sufficient, nor would it be a round-trip transformation necessary for a proof-of-concept.

The current production system was used to do the testing for the Cimcorp setup at the time M3 was deployed. Thus, there is no holdover test environment; it is what is now Cimcorp.PRD.

Cimcorp support is based in North America, and as such, their business hours are not aligned. (USEast -16h)

There are an agreed upon 3 workstreams that we are asking from Cimcorp to provide SOWs.

- VM / Test Environment
- Enabling OData2.0 security for REST API
- To-be-determined changes to messaging, custom to Synlait

At this point, the VM is entering its final approval, with the other two under investigation.

Proposed Cimcorp Environment

::: mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --JSON--- microdev{Micro.DEV dev rg}
  microdev ==Otherwise=== cimcorpprod(VM CIMCORP.PRD)
  microdev --Proposed--- cimcorptest(VM CIMCORP.TST)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  sapqas --JSON--- microdev
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --JSON--- microprd{Micro.PRD}
  microprd --API--- cimcorpprod
:::


---

# Outside "Core"

## (24) ProDoc

ProDoc is an Export Logistics application.

ProDoc needs a VM and SQL environment to create a testing setup, but there may already be an existing, usable setup. This is under investigation. Export files are XML.

---

