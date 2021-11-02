
Given the difference in understanding with daily v monthly milk volumes from Madcap. Think we need to very deliberately understand the equivalent into SAP.


Source	Destination	Schedule	SAP
FSSI	M3	Order arrives at 10:30am daily	
M3	Cimcorp	Order release at 1:30pm daily	
M3	FSSI	invoice  creation at 11:30am daily	
M3	FSSI	ESB runs every 3 mins to check the files	
Cimcorp 	M3	Sync happens at 5am daily	
M3	Cimcorp	Early expiry runs at 11:30am daily	
M3	Canning and Blending	when "mark to prod" was pressed	
M3	TPM (dryer)	Upon creation of MO 	
Madcap	M3	job runs every 6:00pm daily	
M3	Hilton(A2)	file is being sent to Hilton everytime the user print transport  in M3	
M3	Labware(LM)	upon creation and closing of MO	
M3	Labware(Dry and RM)	Submit for testing and reclassified	
 

Cheers
P
