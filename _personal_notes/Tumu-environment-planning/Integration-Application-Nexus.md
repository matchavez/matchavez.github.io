# Environmental Nexus

> The connections stated may have value, but this document should no longer be considered "up to date" - verify findings.
---

[[_TOC_]]

---

> This list is the environmental combination of integration points, both from the master integration list and the interface integration list, generally grouped by priority. There are over 60 integration points, and over 90 interfaces planned. This list has no bearing on the amount of microservices necessary for the entire landscape.

## PRIORITY 1 Environments

### **Palletiser**

| Label   | Palletiser                                  |
| ------- | ------------------------------------------- |
| INT-011 | Pri1 Palletiser interface                   |
| INT-020 | Pri1 (Depalletiser) \*                      |
| INT-065 | Pri2 AMF Palletiser                         |
| IL-2    | AMF, Lactoferrin palletising (MOs, GR)      |
| IL-3    | BAGS Palletization (MOs, GR, Auto Labeller) |
| IL-4    | CAN Palletization (MOs, GR, Auto Labeller)  |
| IL-5    | Ingredient Validation (Depalletiser) \*     |



### **TPM**

| Label   | TPM                                                    |
| ------- | ------------------------------------------------------ |
| INT-012 | Pri1 / TPM Interface - Process Order                   |
| INT-013 | Pri1 / TPM Interface - Materials Consumed              |
| INT-014 | Pri1 / TPM Interface - Materials Produced              |
| INT-017 | Pri1 / (*2) / Purchase order receipt for Oil           |
| INT-020 | Pri1 (Depalletiser)                                    |
| INT-064 | Pri1 / GOS Movement                                    |
| IL-5    | Ingredient Validation (Depalletiser) \*                |
| IL-21   | TPM (Pokeno, D2 & D3, DLP1)                            |
| IL-22   | Weigh Scales "Opportunities for additional automation" |
| IL-38   | "Non TPM Manufacturing plants/Dryer 1/SMD"             |
| IL-39   | Milk movements between plants                          |
| IL-57   | _Depalletiser_ - Ingredient Validation                 |




### **Pack Machine**

| Label   | Pack Machine                        |
| ------- | ----------------------------------- |
| INT-015 | Packing Machine - Confirm Orders    |
| INT-016 | Weigh scale interface at dispensary |
| INT-020 | Pri1 (_Depalletiser_)?              |
| IL-23   | Packing MO - Ask Rich & Dom         |




### **Cimcorp**

| Label   | Cimcorp                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| INT-031 | CimCorp – Initiate order picking in CimCorp (M9)                                                             |
| INT-032 | CimCorp – Responses from order picking interface (M10)                                                       |
| INT-033 | CimCorp – Execute order picking and packing in SAP (M11)                                                     |
| INT-034 | CimCorp – Trigger shipment cancellation (M12)                                                                |
| INT-035 | CimCorp – Responses from shipment interface M12 (M13)                                                        |
| INT-036 | CimCorp – Initiated by processing of last lot of crate which triggered movements of stock in SAP (M22)       |
| INT-037 | CimCorp – Responses from interface M22 (M23)                                                                 |
| INT-038 | CimCorp – Trigger material create/change/delete (M14)                                                        |
| INT-039 | CimCorp – Responses from interface M14 (M15)                                                                 |
| INT-040 | CimCorp – Trigger customer create/change/delete (M16)                                                        |
| INT-041 | CimCorp – Responses from interface M16 (M17)                                                                 |
| INT-042 | CimCorp – Trigger goods receipt against MO and other locations (M18)                                         |
| INT-043 | CimCorp – Responses from interface M18 (M19)                                                                 |
| INT-044 | CimCorp – Send lot status to CimCorp (M20)                                                                   |
| INT-045 | CimCorp – Responses from interface M20 (M21)                                                                 |
| INT-046 | CimCorp – Initiates stock and status update request by CimCorp (M24)                                         |
| INT-047 | CimCorp – Responses with data request from M24 and update stock balance and status in SAP if necessary (M25) |
| IL-36   | CIMCORP                                                                                                      |



### **FSSI**

| Label   | FSSI                             |
| ------- | -------------------------------- |
| INT-048 | FSSI Create Sales Order          |
| INT-049 | FSSI Change Sales Order          |
| INT-050 | FSSI Cancel Sales Order          |
| INT-051 | FSSI Sales Order Acknowledgement |
| INT-052 | FSSI ASN                         |
| INT-053 | FSSI Invoice                     |
| INT-054 | FSSI 14 Day Forecast             |
| INT-055 | FSSI 12 Month Forecast           |
| IL-31   | FSSI - B2B integration           |



### **ISP**

| Label   | ISP                                                         |
| ------- | ----------------------------------------------------------- |
| INT-066 | ISP Interface for master data and demand/supply information |
| INT-067 | ISP Interface for planned orders                            |
| INT-094 | Sales Planning to ISP                                       |
| INT-095 | Sales Orders to ISP and Sales Query                         |
| IL-31   | ISP / Interim Planning Tool                                 |



### **LIMS Labware**

| Label   | LIMS Labware                                                 |
| ------- | ------------------------------------------------------------ |
| INT-068 | QM Interface - Delete/Update inspection lot                  |
| INT-069 | QM Interface - Usage Decision per pallet                     |
| INT-070 | QM Interface - Send Inspection Lot                           |
| INT-071 | QM Interface - Usage Decision per inspection lot             |
| INT-072 | QM Interface - Change Usage Decision per inspection lot      |
| INT-073 | QM Interface - Update results for inspection characteristics |
| INT-074 | Pri3 Create purchase order                                   |
| INT-075 | Pri3 Create goods receipt                                    |
| INT-076 | Pri3 Create logistics invoice                                |
| INT-093 | Pri3 Create and send CSV file of ERS invoice                 |
| IL-19   | LIMS Labware                                                 |



### **Oracle HCM**

| Label   | Oracle HCM                                         |
| ------- | -------------------------------------------------- |
| INT-078 | Organisation Data                                  |
| INT-079 | HR Data (Hires, changes, exits/separations)        |
| INT-080 | CC, Project Code and GL data to downstream systems |
| INT-081 | Employee Expense posting to S/4                    |
| INT-082 | Payroll Journal (to FI)                            |
| INT-083 | Payment to Bank for Employee expenses              |
| IL-1    | Oracle HCM                                         |



### **PayGlobal**

| Label   | PayGlobal                                                       |
| ------- | --------------------------------------------------------------- |
| INT-010 | Payglobal interface - inbound                                   |
| INT-080 | Oracle HCM / CC, Project Code and GL data to downstream systems |
| INT-082 | Payroll Journal (to FI)                                         |
| IL-32   | Payroll interface to ERP                                        |



### **Bank**

| Label   | Bank                                  |
| ------- | ------------------------------------- |
| INT-083 | Payment to Bank for Employee expenses |
| IL-25   | ANZ Direct Online                     |



### **MM-Trailer Batch**

| Label   | MM (TPM?)                        |
| ------- | -------------------------------- |
| INT-092 | Receipt of tanker and silo batch |

Milk inload, tanker that turns up and pump out milk. Sends message for inventory purpose. Should be TPM.


> Also the consideration of data transformation should always be considered Priority 1.


---

## PRIORITY 2 Environments

### **MadCap**

| Label   | Madcap                                                              |
| ------- | ------------------------------------------------------------------- |
| INT-001 | MADCAP payment details to create the FI invoice in SAP              |
| INT-085 | On-Sales of Milk / Q2C                                              |
| INT-087 | Inspection lot update for bulk intermediate sales outbound delivery |
| INT-096 | Milk Liability posting to Control account                           |
| IL-26   | "Madcap Milk inloads / Milk Sample Testing"                         |
| IL-39   | Milk movements between plants                                       |



### **EDec - APCert**

| Label   | EDec                                      |
| ------- | ----------------------------------------- |
| INT-002 | Submissions and Validations to AP-E-Cert  |
| INT-003 | Print out of health certificate           |
| INT-021 | EDec Status update for production staging |
| IL-12   | AP-eCert (EDEC)                           |
| IL-28   | AP-Cert / EDEC interface for MBIE         |



### **EAM**

| Label   | EAM                                              |
| ------- | ------------------------------------------------ |
| INT-022 | EAM – Reservation creation in SAP after approval |
| INT-023 | EAM – Goods issue in EAM                         |
| INT-024 | EAM – Purchase requisition creation in SAP       |
| INT-025 | EAM – PO creation in EAM                         |
| INT-026 | EAM – Goods receipts against PO and SES in EAM   |
| INT-027 | EAM – Materials replication to EAM               |
| INT-028 | EAM – Pricing replication to EAM                 |
| INT-029 | EAM – Replication of GL accounts to EAM          |
| INT-030 | EAM – Replication of cost centers to EAM         |
| INT-091 | Invoice replication to EAM                       |
| IL-27   | Infor EAM  Interface                             |



### **ProDoc**

| Label   | ProDoc                               |
| ------- | ------------------------------------ |
| INT-003 | Pri2 Print out of health certificate |
| INT-084 | Pri3 Export Documentation            |
| IL-24   | Prodoc                               |



## PRIORITY 3 Environments

### **Fraedom**

| Label   | Fraedom                       |
| ------- | ----------------------------- |
| INT-008 | Frædom interface  - outbound  |
| INT-009 | Frædom interface - inbound    |
| INT-010 | Payglobal interface - inbound |


### **Freight Agency**

| Label   | Freight Agency                  |
| ------- | ------------------------------- |
| INT-056 | Freight Booking Request         |
| INT-057 | Cancel Freight Booking Request  |
| INT-058 | Freight Booking Confirmation    |
| INT-059 | Freight Booking Details         |
| INT-060 | Freight Order Request           |
| INT-061 | Cancel Freight Order Request    |
| INT-062 | Freight Order Confirmation      |
| INT-063 | Track Container Movement Status |
| IL-58   | CargoSmart                      |
| IL-59   | Port Connect                    |
| IL-60   | Balance Cargo                   |
| IL-61   | KiWi Rail                       |
| IL-62   | a2 QAD Excel App                |



## Unprioritised Environments


- SAP/Ariba (component)
- SAP / GBT
- SAP / Analytics

"Uncontrolled":
- "Customer EDI"
- Shipping company portal
- Trust codes
- Shipping port & companies
- reval.com
- iMonnit
- Weigh Scales
- Global Dairy Trade Import 
- Hilton CargoWise
- M3 Demand Planner
- Recharges
- Non-TPM / Dryer 1, SMD
- My Safety
- Trade window / customs.govt.nz
- Halal
- Promapp warehouse training
- FarmIQ
- Ecolab
- Chamber of Commerce eCert
- Marsh Cargo
- Fedex
- Tungsten / Nestle
- CTN / Ghana
- Reval / ForEx
- Corporate Performance Management tool
- Vehicle mounted devices




--- 

Ownership:

Dominique Caldwell, Synlait Automation Team
- TPM
- Palletiser
- Depalletiser
- Pack Machine
- Cimcorp

IT Operations Team