# Steps for taking control of Release

---

Preamble: Accenture are contractually obligated to maintain the SAP environments and transports prior to go-live. Based on the prior situations and delays, Synlait will take a staged approach to controlling changes and releases in the effort of stability at release time.

### Current situation

At this time, Accenture is working to assign work that stabilizes the current builds, as well as remediate issues and account for the additional scope required by go-live delay. Work is defined through design or remediation, and assigned to developers by Accenture. When complete, the work is bundled into SAP transports and deployed.

### Components of measure

Work Assignments are made and tracked within JIRA. Each ticket is assigned as work. To complete work, usually one transport is needed. Typical JIRA number (SEB-1234)

Transports are deployed to builds, sometimes more than one at a time. This tracks configuration changes. Typical transport number (SD1K903556)

Once applied, transports affect all clients in a system.

### Steps to control measures

#### First Step: Versioning Content

There are items such as mapping tables where the content of the file/code needs to be under version control. This can apply to all miscellaneous areas.

Use of file/code repositories and checkouts should be required unless there is a significant barrier technically.

#### Second Step: Apply Release Notes Requirement

Once a time has been reached where Synlait want to know quantified changes, and that should be around the time development is completed for new scope items, Accenture should be required to do Release Notes for any change that goes into QAS.

Release notes 

#### Third Step: All Work approved by CAB

In advance of any work done, the work must be proposed and then approved before undertaken. This is a prerequisite of a transport being accepted for deployment.

#### Fourth Step: All Deployments approved by CAB

After an imposed change freeze, all deployments must receive full endorsement by Synlait.