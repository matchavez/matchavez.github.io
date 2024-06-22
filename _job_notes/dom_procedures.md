	
Rollback Plan Crash vs Controlled		
		
Pre-requisites		
Back-ups of all systems are taken as per standard automation project practices at the beginning of automation change freeze		
(OT systems backed up to MDT, server snapshots, PLC Pump and Inbatch to SyncServer...)		
		
Crash Rollback		
Revert all systems to backed up state		
Advantages: Fastest rollback		
Disadvantages: Will cycle power on all process control systems, all data accumulated since back-up is lost, lost product traceability in TPPM, any changes for non-Tumu projects exempt from the freeze will be lost, start-up post rollback will require extra support		
	Possible	Blending and Canning (OK), Packers (maybe)
	Not Recommended	Dryers, Liquid Milk Plant
		
		
Controlled Rollback		
Revert all other system cut-over changes manually 		
Advantages: process control systems remain online,  any changes for non-Tumu projects exempt from the freeze will be preserved, opportunity to be selective i.e. on rollback some features		
Disadvantages: Slower, possible intermittent interruptions, chance of lost product traceability in TPPM, B&C line will have to stop		
	Possible	Dryers, Liquid Milk Plant, Packers
	Not Recommended	Blending & Canning due to tightly coupled M3 integration
		
		
		
Rollback Possible Splits		
Should it be required sites can be rolled back independantly		
		
Dunsandel Dryers		Standalone TPM instance
Liquid Milks		Standalone TPM instance
Pokeno		Standalone TPM instance
Dunsandel Blending and Canning		Standalone OAS or Intouch instance
Auckland Blending and Canning		Standalone OAS or Intouch instance
		
		
Potential Worst Cases 		
Operator Interfaces (HMIs) have non recoverable bug causing all materials to displays and input fields to be broken		
	Impact	Production impairment
	Identification	Material Displays: Immediately visible during cut-over upon update
		Material Inputs: Upon operator usage
	Work around 	support engineer on #3333 can enter material directly on behalf of operator
	Fail forward 	If isolated to specific areas or fields. Debug, fix and re-deploy new version
	Rollback	If widespread across multiple applications or areas. Revert whole application so production can run. Debug, fix and redeploy. SAP codes would be visible instead of material descriptions during this time.
	Mitigation	Modifications have already been tested in office
		The changes can be deployed and tested on engineering terminals on site during the automation system freeze in the lead up to cut-over
InBatch has corrupt runtime recipes		
	Impact	Production impairment
	Identification	During normal production: Recipes error when orders are started, recipe state does not syncronise
	Work around 	reach a known state in the process then abort the recipe. This allows a non-corrupt recipe to pick-up from the corrupt recipe
	Fail forward 	Follow the standard procedure. New orders will need to be created to replace any curently running
	Rollback	n/a
	Mitigation	Only commodities products running during cut-over to speed up recovery time
		All orders must be fully loaded before cut-over work can begin to eliminate risk of unexpected parameter downloads or plant movements
		No model changes during the automation freeze
Inbatch orders won't initialise		
	Impact	Production Stoppage. Can't start an order
	Identification	Cannot start orders waiting on the inbatch scheduler
	Work around 	full manual run (not advised)
	Fail forward 	re-validate the affected recipes 
	Rollback	Restore original Inbatch configuration, loosing all changes since backed-up
	Mitigation	Ensure cut-over recipes are already loaded and pre-approved 
		No model changes during the automation freeze
TPM Buffers are full		
	Impact	Production Stoppage. Can't start an order
	Identification	Operator on screen alarms
	Work around 	
	Fail forward 	Option 1: Accept data loss. There will be breaks on the TPPM traceability tree
		Option 2: Restore old version of PLCPump, allow buffer to empty. Switch back to cut-over version and continue work for another 2-3h
	Rollback	If problem cannot be resolved within time for buffers to fill up again.
	Mitigation	Q100 is the biggest user with buffer full reached in 4 hours. All buffer work is planned to take <1hour
TPPM Databases Crash		
	Impact	No Validation, no traceability
	Identification	Lost validation functionality during production
	Work around 	Manual validation is available on most systems 
	Fail forward 	If infrastructure issue (network, servers) escalate to systems engineers to debug and fix
		If coding or configuration issue, assess area impacted, debug and fix
	Rollback	Can restore server snapshot and accept data loss for product traceability
	Mitigation	All changes tested on production server prior to cut-over
Blending and Canning can't start		
	Impact	Production Stoppage. Can't start an order
	Identification	Operator cannot start an order
	Work around 	Possible to manually load orders
	Fail forward 	If communications are the problem, manually load orders for the day, have 24h to fix. Repeat until resolved
		If code is the problem, debug and fix once started risk of issues significantly decreases for remainder of run
	Rollback	If source of error unidentifiable , crash rollback and perform post mortem
	Mitigation	New code has been successfully tested live in parallel with the existing system. 
		SAP-OT systems communication should be tested as soon at all systems available to do so. 
