# 01 Feb Prep Sheet
---

## DeploymentProblems

Ensure you have discussed the resolution and action of all #DeploymentProblems including non-JIRA SSO


| Jira     | Problem                                                                                                                                                                   | Course of Action |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| PTE-4767 | BWS App – has an independent password that wasn’t updated. Added to the Cutover run-sheet to check BWS has checked their passwords and related etc                        |                  |
| PTE-4756 | GBT Access required a Fiori activation. Added to the Cutover run-sheet to double check each rebuild                                                                       |                  |
| PTE-4762 | INT 012 Event activation not completed correctly. Added to the Cutover run-sheet to double check each rebuild                                                             |                  |
| PTE-4750 | SAP Token Miscroservices password is hardcoded and needs to be updated each build. Engaged with Jesse to address OAUTH issues. Added to the Run Sheet to check each time. |                  |
| PTE-4749 | EDec. A consequence of PTE-4750                                                                                                                                           |                  |
| PTE-4761 | RF Users. Source data not updated.                                                                                                                                        |                  |
| PTE-4834 | >>>   This is new.                                                                                                                                                        |                  |
| SSO      |                                                                                                                                                                           |                  |
| New one  |                                                                                                                                                                           |                  |

---

## Performance / INT-011 problem

Speak to Leigh about the problems inherent. In short, problems are notable after 60TPM, and all new palettes do a minimum of 105.

---

## Project S Code Deployment

Project S transports successfully deployed to QAS110




4749 - Auth issue. - Andy does not believe this is a Deployment Issue; Question out to Lou. I'm not sure.

4750 - OAuth issue - Run sheet addition (Line addition pending). Requires Lakshmi or Jesse to confirm that a new password has been generated and added per new client.

4756 - Fiori issue - TBD for Andy

4760 - Auth issue - Guid issue, probably deployment. Andy TBD.

4761 - Source data issue - BL provided improper data (stale), problem is not Accenture's.

4762 - Microservice not connected - Log not seen, and Andy to determine process.

4767 - Outsystems password - BWS must be added to the run sheet.

4785 - Fiori - Andy to investigate if deployment 50/50

4834 - PSA locations - Bad data? RCA

4845 - Down Payment Z1/Z2 - Bad data?

4860 - Magic month - Andy to change process to make sure everything is regenerated/recompile. Changing to "button push" from copy.

SSO - 


JMeter was measuring pallets, or API calls? and was it blackbox results of performance?


Is the limit on authenticate or generation for OAuth

===

Who is the build manager for Aceenture?
How do we break apart the build and test along the way?

---





Action 1 - Add rate limiting to INT-011 / 5TPMin.

Action 2 - Through UAT, monitor Authentication service rate.

