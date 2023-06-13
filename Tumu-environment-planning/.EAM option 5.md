# EAM option 5

---


Option 5 – Maintain M3 to EAM integration for 1 year
This option maintains the current integration between the 2 systems, where EAM will processes WO maintenance, and Purchasing, warehousing, inventory, replenishment, and invoicing processes will be done in M3

This means that all existing interfaces between the system at the time of go live will continue to be maintained and +- 14/20 M3 licences will be maintained for Procurement, inventory, IS and finance. 

We will not be able to use SAP functionality (Ariba network (10,000 invoices per year will be manually entered into EAM via M3 as per current process), advanced shipping notifications, service entry sheets, MRP, inventory management, quality management, project accounting, contract management, transport management). 
 
All 250 asset management staff across Synlait would continue to work in EAM (250 FTE) 

The following staff will continue working in M3:
•	AP/finance - 2 people
•	Procurement (Engineering & Consumables ordering) - 2/3 people
•	Central stores (Engineering & Consumables) – 7 people
•	IS – 2 people

Synlait will still incur Opex cost to maintain the current integration and +-20 licences for one year after SAP go live.  

This option maintains the financial control in M3/EAM – financial information in M3 will have to be manually uploaded into SAP to manage the GST, Bank reconciliation, Cash reporting, fixed asset reporting, inventory, and spend management.

SAP and M3 would have to be mapped to each other in relation to financial GL posting data in order to upload the financials into SAP.

Risk of this option are the following:
•	Financial information is in 2 systems, and dependant on a manual upload from M3 to SAP (similar to Dairyworks process) - need a data matrix to convert M3 financials to SAP financials.
•	Financial postings would need to be manually posted into SAP on a regular basis to enable month-end and year-end activities within a single ERP.
•	There would need to be a dual maintenance process established to manually maintain relevant master data within M3 after data is created/changed within SAP, however the data would be maintained against different identifiers between the two systems.
•	Risk of using M3/EAM solution for more than 1 year after SAP Go live which changes the TCO.
•	Risk of integration issues continue between EAM and M3 post current change project.
•	Business users will need to work in two systems - training needs and additional business stress needs to be factored in
•	Reporting not done in SAP – BW would need to be used
-	If consolidated data is not available within a single data warehouse, then reporting would need to be generated separately and potentially manually merged. This is a risk as the figures could be reported incorrectly.

Implications for SAP

•	GST reporting – in order to accurately report on GST using the SAP tax return functionality, a monthly journal will have to be posted that posts taxable transactions (presumably as a sum total) with a tax code, offset against a clearing account. Alternatively, a second set of GST accounts will have to be created, but that means that the standard GST report cannot be used. 
•	Bank reconciliation – the daily bank statement reconciliation will not be able to clear items automatically as the offsetting entry does not exist in SAP; added manual reconciliation effort at month end. This effort could be alleviated somewhat if a second bank account were created specifically for payments out of EAM.
•	Cash reporting – will be incomplete since due date forecast will only exist for non-EAM vendors. Cash flow forecasting and treasury planning requirements will have to be done in two systems and amalgamated
•	Supplier analysis – supplier reporting, KPI, analysis will be incomplete
•	Fixed asset integration – EAM will have no fixed asset integration, which means that a secondary set of fixed asset GL accounts will have to be set up (and posted to via GL journal). As a result, fixed asset reporting capabilities out of the fixed asset module will not include EAM assets, and depreciation reports, forecasts, simulations etc. will not consider EAM assets. In order to run consolidated fixed asset reporting, data will have to be driven from the General Ledger side, not the Fixed Asset module, which means that standard reports might not be sufficient and additional reports are required. Once EAM is replaced by the long-term solution (e.g. Blueworx), a second fixed asset data migration project will have to be planned and executed to bring the existing EAM fixed assets from the General Ledger onto the fixed asset register.
•	Master data – GL accounts, suppliers, cost centres etc. must be kept in sync (presumably manually).

 










