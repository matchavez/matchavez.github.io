# Release Management

> How we're going now, and what changes are coming.

### What we're doing today / "as-is"

These rules are in place to generally ensure smooth developer rollouts with minimum downtime.

- Andy's team notifies Carey and Mat about upcoming SAP Transports.
- Any situation regarding QAS downtime is cleared.
- Mat & Carey give approval for release of SAP Transports


### What will be required

The following rules will be put in place to provide rigour and protect the Production build.

NO EXCEPTIONS:

- All work that requires an SAP Transport must be ticketed in Jira
- Any Jira ticket with SAP Transports must be approved before being moved into SQ1
- Approvals must be by Mat / Release Manager, or in absentia Carey / QA Manager

Exceptions by executive committee only:

- SAP Transports must be scheduled as 1-ticket maximum at a time; no multiples at once
- After release into SQ1, all tests must pass, or the Transport(s) must be removed
- Passing changes must be moved into SP1 before any new moves into SQ1
- Changes must not create downtime

**WHEN?** -- Around DL6, TBD.
**UNTIL?** -- After Hypercare, when turned over to IS as BAU. Changes then go through standard CAB.

### Versioning

The build that is completed for Data Load 6 will be known as **Beta 1**. Any transports added to that build will constitute Beta 2, and this number will always increase for any new change. A rollback will constitute a rollback in number as warranted. Thus:

Beta 1 + First Approved Change = Beta 2

Beta 2 + Second Approved Change = Beta 3

And so forth until we reach our final deployment for Dress Rehearsal. This version will be declared the "Golden Master" / GM release. Hopefully we will not need it, but GM2, GM3 etc. is the path.

Once we have a GM that goes live, the Synlait version will be **2208**. If a supplemental is added, it's 2208a, or it will otherwise follow the YYMM format -- subject to review of suitability after going live.

Versioning will be tracked in Jira. Beta releases may be weekly, or they may be ad hoc, tbd with Accenture.
