Hello Andy,

Pursuant to yesterday's conversation, I wanted to put out those four main points of Release Management that need to be put in place. Key to doing this is that we need to find a point in time where it's mutually beneficial, and the results of yesterday's discussion give every reason to think they will help both of us.

Points of Management:

- Version Control
- Required Contents Notes
- Acceptance for Deployment
- Advanced Task Determination

These steps are generally in order, but can be arranged.

## Version Control

We have already started to control version numbers internally. Accenture are already tracking deployments. At a certain point, we'll need to equalise what is in QAS and PRD, and then ensure deployments to both are synchronised or carefully managed. This should happen for your deployments some time leading up to General Ledger change deployment.

For clarity, at this stage Accenture defines the content and timing of the deployment, assuring parity.


## Required Contents Notes

Shortly after all change requests have been developed, it will be important to declare a "Beta 1", such that the entirety of developed transports are recognised as a single build and represent the "starting point" of release management. Two key tasks change here:

- Each deployment of transport/s must be tracked and deployed the same way to both QAS and PRD, in a relatively close timeframe
- Each deployment has to be tracked by number/ticket and must contain a description of the areas being changed

Each time this happens, this incurs an increment. If for any reason a deployment cannot happen with the same defined transports, this must be raised as a P1/S1 bug.


## All deployments to be approved by CAB/CCRB

Likely at the same time Contents Notes are defined ahead of any new release, we must adjust the final approval of deployments. Initially, this will mean that any functionality changes will be evaluated by CAB/CCRB for acceptance - focusing on stability and cutover success. What this means for Synlait may mean that you simply receive agreement from the release manager in writing for small fixes, and for large deployments, a more formal review with more parties.

Regardless of the Synlait process, it will be critical that all deployments be agreed with Synlait by Beta 2. For completeness, Beta 2 is defined as the deployment of GL (Beta 1) plus fixes for Beta 1.


## All fixes / work approved by Synlait

For Beta 3, Accenture will need to pre-define their deployments. This will simply be more cadence driven for non-priority issues, and will isolate higher priority issues. A deployment will consist of one or more areas of work, one or more transports, and will require JIRA tickets that relate to a specific deployment. This deployment will then have some "pre-approval" behind it. When ready, test evidence will need to be produced for every submission. When this is reached, proposed work will be fully managed by Synlait, and will be prosecuted by Accenture.


### Summary

These procedural changes are not subtle, but they are intended to help both Synlait and Accenture moving forward. These changes do not impact the contractual obligations for Accenture and Synlait, and anything in this request that conflicts contractually must be reviewed, though that is not intended.

The changes to versioning, Change/Contents Notes, and work approval should work in harmony with current processes, and help ensure a cleaner cutover.