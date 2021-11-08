# Rollback Planning for SAP / 01 May 2022 Go-Live

---

With the shift from 01 Dec 2021 to 01 May 2022, the SAP Go-Live will become somewhat more complex as we may not be doing "just whole milk" at cutover. It also presents an opportunity to provide multiple conditions where we might have mitigations for things that go wrong, all while not triggering a full rollback. It is early on, and timings and plant equipment are TBD, but the following is a plan for Rollback/Fail-Forward that will lower the overall risk to Synlait.

# Rollback Planning Steps:

## Determine The Date, Define What's On

The first step in determining Rollback Mitigations is to define when exactly the Cutover will be planned. Preliminary indications point to a late-autumn release. Synlait's cycle of products will define what plant equipment will be up and running. Once we understand the array that will be running, we'll investigate each product line.


## For Each Equipment Piece, Examine How To Keep It Running

Once identified, each piece along the production pathway for all products should be examined. For each, identify:

- Does this equipment require a temporal input from M3/SAP?
- Is there a manual override?
- What is the impact if the equipment remains on without SAP, or without M3 as applicable?

With those questions, the combined answers should tell us how to keep any specific product line running without SAP running - or if it's not possible.


## Determine Timeframe

If a specific issue arrises and a mitigation must occur, it's important to understand how long it can run without causing other downstream effects. If one area is unavailable, does it affect another area by its design? Based on each product processing line, understand how much time is "bought" for implementing the workaround.


## Rollback Types

It's important to know whether a rollback will be needed, and what impact that can have. For example, there are recommended procedures of how to do a rollback for specific line; Dryers should get a controlled rollback but B&C should get a 'Crash' rollback. If we can do a rollback in this way, as it's not sure that it's a realistic need, we need to know what would happen in the scenario - can we rollback a single line such as B&C and continue it on M3 while still running everything else on SAP? Is that realistic? Mechanically this can be achieved, but it is important to know whether the outcome of such a partial rollback is better than doing a complete rollback.


## Toolboxing

Once the individual lines are sorted with their possibilities, it will be necessary to combine and operationalise the effects of these changes as a more singular action for Cutover. It will be impossible to narrow a shut to a specific device; doing so would have potential knock on effects worse than the problem being solved. It will be key to be able to say that we are running a mitigation plan for a main product line, and invoke all the steps needed to do that.

Thus, putting it all together, aligning these actions requires knowing which products will be in play on the day we intend to go live, and then treat each line as a grouping, knowing the procedures and impacts of choosing to mitigate for any or all of them on Cutover.


## Example scenario

One example scenario that could provide an issue would be a case where the driers don't restart due to a database issue with TPM.

In this example, the TPM database is unique, and can be handled separately. This would cause issues with traceability, and could go back to running on M3 for the time needed to get the TPM database issues corrected.

This will need the restoration of a database snapshot and continued presence with M3.

Note that while this is technically possible, it brings up business continuity issues that need to be thought through prior to cutover.