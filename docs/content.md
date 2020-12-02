# Connections Checklist

##### ==As this is now a shared document, it's being "renovated" for public appropriateness. Please be patient.==

---

> For each connected application, there are specific checkpoints needed.
>  - Usable for Integration Testing?
>  - Are changes needed for Production?
>  - Is it appropriate to use app's prd for Dress Rehearsal?
>  - Notes for each app state
> 
> All "change needed" states will not be set to certain until after QAS/100 go-live. They may be checked off as 'doubtful', but it would be unwise to be definitive before testing.
> 
> _*All "needed by" dates are required to be by 16 Nov 2020, regardless of when Integration begins testing._
> 
> Microservices environments reference prod & non-prod, but non-prod hosts two systems, test & dev. Still 3 systems.

> UPDATE NEEDED: Fraedom (SOW status), TW Booking (SaaS/testing availability).


    
|             | Sprint 1 | Sprint 2   | Sprint 3      | Sprint 4            | Sprint 5  |
| ----------- | -------- | ---------- | ------------- | ------------------- | --------- |
| NEEDED ->   | Cimcorp  | PayGlobal  | TPM Dunsandel | A2 QAD              | AP Cert   |
|             | HCM      | ANZ        | TPM Pokeno    | ISP                 | Cargowise |
|             | FSSI     | LIMS       |               | Prodoc              |           |
|             |          | Trustcode* | B&C           |                     |           |
|             |          | Palletizer |               | Tradewindow Booking |           |
|             |          |            |               |                     |           |
| EXISTING -> |          | (Cimcorp)  | (LIMS)        | (TPM Dunsandel)     | (ProDoc)  |
|             |          |            |               |                     |           |
| Start Date  | 19 Oct   | 16 Nov     | 14 Dec        | 25 Jan              | 25 Feb    |
[SprintSchedule]

TrustCode going to S4
24th->11th for Holidays
 
---

### Readiness Table

| App          | S   | Test Ready?   | -v, if app. | Lakshmi Approval              | Needed By?* | Change for prod? | Use prod in Dress? | Extra for Test?     |
| ------------ | --- | ------------- | ----------- | ----------------------------- | ----------- | ---------------- | ------------------ | ------------------- |
| Cimcorp      | 1   | Yes           |             | YES                           | 24 Aug 2020 | Depl. by Cimcorp | Do not use prod    |                     |
| Oracle HCM   | 1   | Yes           |             | YES                           | 16 Nov 2020 | Doubtful         | TBD                |                     |
| FSSI         | 1   | Yes           | n/a service | YES                           | 10 Aug 2020 | No               | Yes/Must mark test | Yes ^1              |
| PayGlobal    | 2   | Yes           |             | YES                           | 14 Dec 2020 | No               | Do not use prod    |                     |
| ANZ          | 2   | Yes           | n/a service | YES                           | 07 Dec 2020 | API Service      | Do not use prod    |                     |
| LIMS Labware | 2   | Yes           | 7.02h       | YES                           | 31 Aug 2020 | Doubtful         | TBD                |                     |
| Trustcode    | 2>4 | Yes           | SaaS        | YES                           | 16 Nov 2020 | SaaS/No          | Do not use prod    |                     |
| Palletizer   | 2   | PoC E2E Done  | PLC         | AzureDB                       | 19 Oct 2020 | TBD              | Unlikely           |                     |
| TPM          | 3   | Yes           | 6.5         | YES                           | 21 Sep 2020 | Doubtful         | Unlikely           | Deploy vendor only? |
| B&C          | *3* | TBV           |             | _Ticket to finish request_    | 14 Dec 2020 | TBD              |                    |                     |
| A2QAD        | 4   | Yes (one way) |             | **Need Test Credentials**     | 16 Nov 2020 | Unlikely         | Yes, files         |                     |
| ISP          | 4   | Yes           | 1.05        | Can they receive? James/EMAIL | 16 Nov 2020 | Doubtful         | Yes; files         | See ^3              |
| ProDoc       | 4   | Yes           | n/a         | YES  (use intrra?)            | 24 Aug 2020 | Doubtful         | TBD                | Yes ^2              |
| TradeWindow  | 4   | *?*           |             |                               |             |                  |                    |                     |
| EDec         | 5   | Yes           | n/a service | YES                           | 03 Aug 2020 | No               | Unlikely           |                     |
| CargoWise    | 5   | Yes           |             | File comparison               | 14 Dec 2020 | TBD              | TBD                | **Need Creds**      |
| Fraedom      | _T_ | In progress   |             | **PO to be resubmitted**      | UAT         |                  |                    |                     |
| Infor EAM    |     | Probably      | 11.5.1 b2   | YES                           | 21 Sep 2020 | TBD              | Unlikely           |                     |
| Depalletiser |     | Assumed/Pal   | PLC         | AzureDB                       | 19 Oct 2020 | TBD              | TBD                |                     |
| MadCap       |     | Yes           | dbJ2016     | YES                           | 16 Nov 2020 | As noted         | TBD                |                     |
| Intrra       |     | Unknown       |             | ?                             | 14 Dec 2020 | TBD              | TBD                |                     |
| ICOS         |     | Unknown       |             | ?                             | 14 Dec 2020 | TBD              | TBD                |                     |
| Pack Machine |     | Yes           |             | Staging AzureDB               | 25 Jan 2021 | Known state      | Yes; as `test`     |                     |
| Pinpoint     |     | Yes           |             |                               |             |                  |                    |                     |
|              |     |               |             |                               |             |                  |                    |                     |
|              |     |               |             |                               |             |                  |                    |                     |
[Checklist]

For Test, see: https://synlait.sharepoint.com/:x:/r/sites/TUMU-PRJTeam/_layouts/15/Doc.aspx?sourcedoc=%7B15966D53-5B19-435F-AF5C-E079F2746B26%7D&file=Interface%20List.xlsx&action=default&mobileredirect=true
^1 - FSSI is currently having the ability to push messages added by FSSI/Sandfield, for use now and in Test (Resolved)
^2 - ProDoc Test UI made available by RDP; ticket #57174 (Resolved)
^3 - Track down the SFTP creds that allow upload to A2, so SAP dev can do that automagically. (In progress)

(Automation side database, or TPM database WRITES to AzureDB, MS picks from Azure, and writes to SAP.)


### Task List

- [x] Complete Cutover workshops
- [x] Cutover Strategy (27 Nov, draft -3w)
- [ ] Define governance for changes before cutover 
- [ ] Define governance for changes after cutover
- [ ] Define environment readiness (second column) schedule


Additional Environment-specific tasks:

- [x] Cimcorp completed test / API Endpoints
- [x] Define whether TradeWindow and ProDoc are "the same" (No; ProDoc makes docs, TW books shipping w/o docs)
- [ ] Follow up A2QAD requirements
- [ ] Infor EAM testing suitability pre-UAT
- [ ] Intrra test environment information
- [ ] CargoWise yes/no
- [ ] ICOS test environment information
- [ ] Cimcorp Prod investigation
- [ ] Infor EAM Prod investigation
- [ ] TPM Prod suitability / changes needed
- [x] Palletiser test ready; investigate Depal as same/separate
- [x] Oracle HCM follow-up. 
- [ ] Labware Dress Rehearsal Suitability

---



---

## Trustcode

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?

Trustcode is a third-party service with a Dev/Test/Prod setup for API calls. The important thing to find is if there is any type of data size constraint, but that falls under the Data Migration team's remit. This is essentially done as-is.

---

## LIMS Labware (ven_02)

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?

LIMS updated and ready as of 3 July 2020. 

There does not appear to be any required changes to use Labware production when SAP is used.

To be asked: Should test or prod be used for Dress Rehearsals? Email out to Sharon.

From Sharon:
> LIMS is an SQL Server database. We have separate Dev, Test and Production environments. Typically any updates are first applied to Dev and then migrated through to Test and then Prod once appropriate testing has been performed.
> Yes Production typically only holds live data so it would be best if any testing required would be using our Test database (or perhaps Dev if at the early stages).



### About

Labware is the system by which we test product. SAP will provide information on the lots, and Labware will return the testing results about each lot back into SAP. This is currently how it works using M3.

### System Owner

Sharon Kay
Vendor: Michael de Souza <desouza@labware.com>
Mark Chen/Employee/LW-US <Chen@labware.com>

---

## TPM / TetraPak (ven_04)

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?

TPM has been updated to a later version in all locations, so testing is ready.

There does not appear to be any change needed for production.

To be asked: Should test or prod be used for Dress Rehearsals?

### About

TPM is the software behind packaging and palletisation mechanics. It is also responsible for the Depalletiser (The "big orange arm").

Lei is asking about TPM as a test environment - more to come.

---

### System Owner

Dominique Caldwell, Synlait Automation Team
Vendor: Cameron Blackburn <Cameron.Blackburn@macro.co.nz>

---

## Pack Machine (ven_06)

- [x] Usable for test?
- [x] Changes needed for production?
- [x] Dress Rehearsal?

The production environment holds a database for the Palletiser. This database can be accessed using a "test" mode. This will apparently be the same type of development and testing used for its prior connection with M3.

It's notable that there is some risk with this, however no practical alternative exists.

There does not appear to be any change needed for production, except for the expected removal of `TEST` as its mode of usage.

There is no substitution available, but Dress Rehearsals should continue to use `TEST`.

### About

Mechanism that puts powder in a bag, coupled to Palletiser. AVAPAC 

### System Owner

Dominique Caldwell, Synlait Automation Team
Vendor: Alex Musalov <musalov@almsystems.co.nz>

---

## TradeWindow ProDoc (ven_07)

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

For Testing, ProDoc has had a duplicated environment added by the vendor. The current setup **does not** have a UI installed. Thus, the Integration Team can work with it, but it will need to be upgraded to have a browser view. This view is needed before UAT.

(Filed as change request 1113)

Notable: ProDoc needs a VM and SQL environment to create a testing setup. Export files are XML.

There does not appear to be any change needed for production. The output files are the same. The Integration tests will confirm this.

To be asked: Should test or prod be used for Dress Rehearsals?

### About

ProDoc is an Export Logistics application.

### System Owner

Export documentation team /  Angela King (primary)
Vendor: Andrew Wilson <andrew@myprodoc.com>



TradeWindow shipping service: contact Joanne Johnson and Teagan Couper for TradeWindow regarding booking/scheduling integration with SAP.
 
Needs to be treated separately.

---

## Bank / ANZ (ven_08)

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?

ANZ is a public interface, with a test environment.

There does not appear to be any change needed for production, other than to point to the production address.

ANZ Production **absolutely should not** be used for Dress Rehearsals.

In the same way as was done for M3, ANZ offer a "public" testing interface. No additional setup will be needed, and the available testing APIs should be sufficient for development and test.

Integration Testing scheduled to begin 07 Dec 2020.

Notes from 07 Oct Call re 'file upgrade':

System needs to be updated to "file-active" in order for SAP to auto-pull ANZ statements.

ANZ needs 14 days lead.

AS2 for both test and prod to be setup. 

As of 22 Oct, AS2 is canceled, and this is back to an SFTP transfer.



### About

Connectivity with the bank.

### System Owner

Kerri Middleton <Kerri.Middleton@anz.com>


---

## MadCap (ven_09)

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?

MadCap has a testing environment already available for Synlait. It is sufficient for testing and development, and no additional work is anticipated.

Notable: MadCap required a backend update of its JADE database from 7.1 -> v 2016, for EOL issues. An additional update is anticipated in January for 2016 -> 2018 for the same reason. The new update also has no anticipated impact.

There does not appear to be any change needed for production.

To be asked: Should test or prod be used for Dress Rehearsals?


### About

MadCap / incoming tankers of milk
Milk supply management system, ConTec

### System Owner

Angie Waifer, non-tech admin. Tim Dolan, more technical
Vendor: Jeremy Ridley <jeremyr@contecgroup.com>


---

## Infor EAM (ven_10)

- [ ] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

Infor EAM has a Test and Training environment, but it is uncertain whether data updates must occur to be appropriate for testing. It is anticipated that similar to MadCap, the Integration Team may be able to test, but that UAT won't be acceptable until there is a data change. This is to be verified after workshops.

From earlier notes: 
```text
The system was stood up for Infor M3, and there is already a dev, test, prod setup. All development and testing should be available, but there are some considerations according to Kelley that the data in dev and test may not be in synch with current production. This may require a small amount of work ahead of development to ensure test results are accurate.
```

Monday, 31 August 2020: Jay Divina said that work on readying Test for EAM continues.

There does not appear to be any change needed for production.

To be asked: Should test or prod be used for Dress Rehearsals?

17 Nov - while everything is "in place" for the three environments, and the data has been reasonably refreshed in test, there is now a need to test financials with cloned production data. This will occur while still needing to respect any testing needed for regression/new bugs. Note it's TRN/TST/PRD.



### About

Infor tracker for "Enterprise Asset Management"

### System Owner

Kelley Jones
Vendor: Sue Critchlow <sue.critchlow@infor.com>
Feng Chen <Feng.Chen@infor.com>"


---

## EDec / AP-eCert (ven_12)

### About

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?

Non-Production environment called "training". Three tier dev/test/prod already exists, and should be sufficient for development and test now.

There's a little more to it than just the Export Declaration (EDec). Animal Products Electronic Certification (AP E-Cert) is a government program requirement.

In short, any animal product export needs to have a certificate.

The government offers an online method where you can generate this certificate - where there is a "test" option and a "real" option. These services are run and maintained by MPI.

To be asked: Should test or prod be used for Dress Rehearsals?

We also have a system being put into place, approved at CAB on 30 June 2020. This is the EDec Tracker application. The EDec tracker is "out of scope" for SAP, because there's no expectation that it will directly confirm any details.

This may mean that the current Word document isn't fully descriptive, so this will be updated.

<https://www.mpi.govt.nz/dmsdocument/20126-ap-e-cert-submissions-using-xml-soap-and-online-batch-files>


### System Owner

Richard Kneller <richard.kneller@synlait.com>

---


## ISP (ven_14)

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

ISP has a test environment, and that should be usable for both development and testing without change. Front Excel / back SQL.

No changes expected for production, as it's a file generator.

To be asked: Should test or prod be used for Dress Rehearsals?

06 Nov - It generates a file, but that file needs to be populated automatically by SAP, and uploaded after its generation. Need to get SFTP creds soon.

### About

Supply Planning tool. Essentially plans out medium term what work will be done by location.

### System Owner

Asher McMillan
James Goddard <James.Goddard@synlait.com>



---

## CargoWise (ven_18)

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

14 Dec 2020
Integration testing starts 14 Dec 2020

Cheryll is looking into testing environment - 24 Sept 2020

Spoke to Brent Rodgers; he confirmed that there is a test system at HH. Beyond that, sent me to Richard Kneller.

CargoWise FTP credentials given to Integration, and connectivity troubleshooting complete. 07 Oct, with Lakshmi to drop files. Test server is fully separated from production, but it's an FTP drop. It should work identically in Production, but with a different URL.



---

## Oracle HCM (ven_19)

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

Oracle HCM already has a test environment, and that should be usable by Integration without significant changes for both development and testing as it is now.

### About

Also referred to as "MyCareer", Oracle HCM is the HR management tool.

### System Owner

AKA "MyCareer" - Amy Riley Admin, but not it strength.
Vendor: Deepak Chandrasekaran <deepakc@pinpointhrm.com.au>

Deepak has confirmed via email that the Test environment for Pinpoint will be left as is. Notably, Pinpoint is the outsourced group that runs Oracle for Synlait.

---

## Cimcorp (ven_20)

- [x] Usable for test?
- [ ] Changes needed for production?
- [x] Dress Rehearsal?

See details and notes. As of today, testing completion is imminent, but still requires some communication with Integration Team.

Changes being needed for production are being asked after the testing is set up, as some services may have been modified.

Cimcorp production is not suitable for dress rehearsal.

### About

Cimcorp is the vendor that provides the inventory robotics. Implemented as a part of project White. Its Automated Order picking system for product picking, inventory management and logistics. https://www.cimcorp.com/

There is a current proposal to create a test environment for Cimcorp's VM by cloning production. The outstanding SOW has been approved for the creation of the test environment, to be executed by Cimcorp. {26 June. 2020}

---

### System Owner

Dominique Caldwell, Synlait Automation Team
Vendor: Andrew McCuaig <andrew.mccuaig@cimcorp.com>

---

### Details and Notes

> As of 29 June 2020, the SOW for Cimcorp to conduct the creation of a testing VM has internal approval and spending clearance.

Context around accepting the test environment addition:

The result of discussions with Cimcorp (Matthew and George, specifically) have led us to believe that there is no practical way to work around the costs of setting up a test environment. The virtual machine test environment will be set up by Cimcorp. In addition, the safety of not testing on a production environment, outside business hours will be avoided. It's also a situation that in our latest call, Cimcorp were able to confer that the testing that could be done just through API probing would not be sufficient, nor would it be a round-trip transformation necessary for a proof-of-concept.

The current production system was used to do the testing for the Cimcorp setup at the time M3 was deployed. Thus, there is no holdover test environment; it is what is now Cimcorp.PRD.

Cimcorp support is based in North America, and as such, their business hours are not aligned. (USEast -16h)

There are an agreed upon 3 workstreams that we are asking from Cimcorp to provide SOWs.

- VM / Test Environment
- Enabling OData2.0 security for REST API
- To-be-determined changes to messaging, custom to Synlait

At this point, the VM is entering its final approval, with the other two under investigation. These can be found in .notes\Cimcorp Docs


---

(What to Clone)

We will need the 2 Windows servers cloned.  The Linux VM is the cell controller.  From what I’ve learned about the tasks to be done, we won’t need the cell controller VM.
The sizes should match.

The best method would be to have a set of routes loaded, some released with, crates on conveyors.  Then put conveyors and robots in manual.  Take the VM snapshots at that time.

Bill Durksen
Application Developer

Have asked for written confirmation from Anthony for readiness by 5 August, then will confirm activity by Cimcorp.

---

06 August, Dominique validated the work done by ICSC, and Cimcorp have been notified they can start their deployment. No testing should be interrupted provided they are done before August 24.


---

## Palletiser Cans (ven_22)

- [x] Usable for test?
- [ ] Changes needed for production?
- [x] Dreas Rehearsal Appropriate?

The unit for production has a logic board, but it's unknown whether there is a test "mode" as such. It reports usage of raw material into M3 currently.

No changes are expected as it's embedded software.

It is unlikely to be appropriate for a dress rehearsal.

### About

Puts on pallets, not take it off.

### System Owner

Dominique Caldwell, Synlait Automation Team



---

## Depalletiser

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

The unit for production has a logic board, but it's unknown whether there is a test "mode" as such. It reports usage of raw material into M3 currently. According to Dominique, a small amount of data is fed back and forth between M3 and Depal, so it's important to learn where this stands.
_Rejected Pallets are fed straight to M3._

No changes are expected as it's embedded software.

It is unlikely to be appropriate for a dress rehearsal.

### About

Device that assists in the use of materials that arrive on a pallet.

### System Owner

Dominique Caldwell, Synlait Automation Team



---

## Intrra

- [ ] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?


---

Declared in-scope environment on 24 July 2020
Integration testing starts 14 Dec 2020

---

## ICOS

- [ ] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?


---

Declared in-scope on 24 July 2020
Integration testing starts 14 Dec 2020

---

## FSSI / FoodStuffs South Island

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

---

### About

FoodStuffs South Island, or FSSI, provide Synlait with two projections; one an annual, and another a daily 14-day. These are received and confirmed through an automated process.

"Receive FSSI PO and convert to M3 CO Interface under development by Customer to integrate ERP to other businesses for electronic order placement, invoices, forecasts, etc"

FSSI provides a forecast of needed milk for the upcoming 14 days. We interact with them using [AS2 exchange](https://en.wikipedia.org/wiki/AS2) (This is a variant of XML) through SFTP. This may be a usable environment, but it needs to be checked. The current testing setup for M3 is listed below, and needs to be verified as usable for attempting a verification message to FSSI.

| Environment | Location                                                            |
| ----------- | ------------------------------------------------------------------- |
| Development | `\\smlm3mec3\MEC_DEV_Output\SalesOrders\SalesOrder_Acknowledgement` |
| Test        | `\\smlm3mec3\MEC_TST_Output\SalesOrders\SalesOrder_Acknowledgement` |


More information: [https://synlait.atlassian.net/wiki/spaces/IT/pages/26280040/Business+process+description](https://synlait.atlassian.net/wiki/spaces/IT/pages/26280040/Business+process+description)

---

### System Owner

Cheryll / Jay Divina
Vendor: Ana Connor <Ana.Connor@foodstuffs-si.co.nz>



---

## Fraedom

- [x] Usable for test?
- [x] Changes needed for production?
- [x] Dress Rehearsal?


---

Declared in-scope environment on 24 July 2020

Moved up to Sprint 0b. Contacted Mercedes Muñoz about their test environment, was forwarded to Krystian Gibbs, pending response.

Krystian Gibbs is working on getting the testing environment "restarted".

Didn't hear anything from 07->18Aug. Checking up.

Email back, sent email to Fraedom rep. It's a $5000 fee for the first year of a test environment. 14 September 2020

Received message back from Katrina Melnikova, Friday, 18 September 2020 - asked again about testing without an install.

Integration testing starts 14 Dec 2020

Another email to Katrina, asking for any testing options with the current production server. Trying to avoid a $5000 setup.

The setup for "testing" is a change in configuration. Fraedom is a SFTP csv back-and-forth. If the export files are changed, that will cost more than just the $5000. She's already working with Lakshmi.


> Fraedom is dropped off BPML.

A PO has been raised to create a test environment for Fraedom, as it was deemed necessary for the Testing team. There is no development being done against it, but tests against a test system will be necessary. With Ian for approval 19 Nov.

---

## PayGlobal

- [x] Usable for test?
- [ ] Changes needed for production?
- [ ] Dress Rehearsal?

### About

Leave system & payroll

### System Owner

Emma from HR

### Details and Notes

Similar to ANZ, PayGlobal has a "public" test environment with APIs that are maintained by PayGlobal. Development and Test can be completed with this setup.

Integration testing starts 14 Dec 2020

---

Hi Terry,

Yes, it’s a replication of our live system.
We have access to it, so does MYOB and Integrity1 for any configuration updates & testing they are working on as well.

Thanks

 
Emma McKay

Payroll Manager

 


From: Terry Grout <Terry.Grout@synlait.com> 
Sent: Friday, 24 July 2020 11:22 a.m.
To: Emma McKay <Emma.Mckay@synlait.com>
Cc: Mat Chavez <Mat.Chavez@synlait.com>
Subject: FW: PayGlobal Test system?

Hi Emma,

Waaaay back when we were performing some HCM integration testing I recall there was a PayGlobal test system.
Although (understandably) we didn’t have direct access we could place files in and confirm the results with you.

Am I correct that this is Synlait only Test System that replicates our Prod System?
ie this is not a generic PayGlobal Test System that multiple companies use for basic Testing

Cheers

---
Response from Emma McKay, 11 Aug:

Do you have a known upgrade planned in the next 15 months?  We refresh the test database when required and depending on what work is currently being undertaken by us, MYOB or Integrity1, which could be several times a year
Have you deferred any upgrades for any reason? No
Do you have an existing upgrade/change announcement channel we can subscribe to?  No


---

## A2-QAD

- [x] Usable for test?
- [x] Changes needed for production?
- [ ] Dress Rehearsal?



Apparently there is an integration with A2 that has been discovered. Nishant asked for owner as there is no notice in the 3PA xlsx.

https://synlait.sharepoint.com/:w:/r/sites/TUMU-PRJTeam/_layouts/15/Doc.aspx?action=edit&sourcedoc=%7B6D54F7CE-A389-45F4-87B8-6F5E247D2636%7D


In its basic form, it's an Excel sheet that has VBA to pull data from M3. That data is combined with data from another spreadsheet for shipping.

Once the content is collected, the spreadsheet then offers macros to generate XML that is specific to A2. This XML is generated by Excel, so there is no expectation that the process will break; simply that the spreadsheet needs to draw the correct content from M3, or later, SAP.

In addition, A2 are expecting some differences in how these XML files will be sent. This is changing in October; there is an email sent around from Amanda King to James Goddard about the change.

We should also investigate whether we should auto-generate from SAP, but may be out of scope for launch.


---

## SaaS Bolt-On Ariba

---

Ariba (Acquired by SAP 8 years ago) is a supply-chain management tool. It integrates, but might be able to be thought of as a "module" of SAP.

---

This was noted in the final rev of the ES doc that this isn't an "installation", but a cloud application. It requires a connection with SAP Cloud Connector, which we already have in place, and handles the transport integrations.

SAP will be connected, but Ariba takes updates as SaaS.


---
===============================================================