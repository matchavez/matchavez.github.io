# Actions for a better build

> Several bugs have been identified as having a cause from a resulting way or method done for Data Load 5, or in some cases, steps being "glanced over" such that a step was actually missed as it seemed insignificant or correct, but was not. The following areas are being called out to improve the next deployment with Data Load 6.



## Management

Paul Brown has been assigned as **Build Manager** for Accenture. Paul will be responsible for intermediate testing checks through the build.

The additional checks Paul will verify will be identified by Andy, as these additional checks will require more time and a more settled process around new checks first. (Jira4885)



## Authentication

Improving through adding step 12.46 (Jira4749) having a named resource validate authentication.

OAuth token refresh to be validated (Jira4750) through adding step 8.91. Additional responsibility added to Lakshmi to verify. Lakshmi will also look to do a microservice runsheet to ensure we don't miss steps.

Pinpoint to be checked to ensure validation through OracleHCM.



## Data

Andy and Callum are still working out what data areas are in need of improvement. "Old Data" is being sorted out, and will no longer cause issues as seen. (Jira4761) More work is needed to ensure the plan to be executed is appropriate.



## Testing

Step 29.g added for GBT build. (Jira4756)

Step 12.47 added to rebuild the application index. (Jira4760)

Step 8.43 added to force Pete to check all workflows are active. (Jira4762, 4785)

Step 11.33 added to force Martin to supply BWS team with correct creds. (Jira4767)

Step 8.44 added to ensure a consultant checks the manual config. (Jira4845)

Step 11.18 changed to "delete and reinstate" to prevent unexpected caching. (Jira4860)