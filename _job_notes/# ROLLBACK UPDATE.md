# ROLLBACK UPDATE

---

Based on the new steps that have evolved over the last several months, Rollback steps should be adjusted to follow the three main points below. Additional 


---

1. Revert TPM Databases
1. Revert PLC/HMI
1. Reopen M3 Interface Communications

---

## Revert TPM Databases

The procedures that have been done on the two TPM databases will need to be reversed. In order to accomplish, this will take TPM offline. While off, the databases must revert to the last restore point that was taken prior to their change for cutover. This will return the TPM databases to their state as they were prior to cutover. TPM should remain off until PLC/HMI rollback completes.

## Revert PLC/HMI

Code for PLCs and HMIs that are loaded into the units must be reverted for all devices that reference the new fields needed by TPM, as they will no longer be there once TPM is rolled back. Prior codebases will need to be put in prior to TPM coming back online.

When both TPM and the PLC/MHI rollbacks are complete, they can both return online.

## Reopen M3 Interface Communications

A complete list of rollback steps are included in the M3 runsheet. This includes reopening the communications for interfaces to allow M3 to be the lead ERP. Once back on, it will be imperative to synchronise the Cimcorp inventory prior to using the robot further.

