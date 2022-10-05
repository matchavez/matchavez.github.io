# Synlait workflow

---

## Goal First - CAB-ready Development

When given work to complete, your goal is to leave that work in a position to make it through the CAB process for Synlait. That process will require more than just code. You'll need:

  - Impact assessment
  - Deployment procedure
  - Rollback procedure
  - Business acceptance
  - Test evidence
  - Outage information
  - Change application

Fortunately, your change sponsor will help with some of these, depending on the type of work you're assigned. Sometimes they won't all be applicable, but they all need to be documented. For example, if you require an outage or down-tools on something to complete work, or if the change as completed will affect someone, we want to know. We also want to know if this is _not_ the case. Your change sponsor will work with you to ensure completeness.

In many cases, Andy Greathead will be your sponsor.
In cases for Access & Controls, Reedhita or Megan will be your sponsor.
Sponsors are also subject to change, so please ensure you know who your sponsor is before beginning work.

## Where to start?

There are three areas for "tickets" you'll need to be aware of.

  - [Synlait Jira Cloud ](http://synlait.atlassian.net)
  - [Synlait ServiceDesk](http://servicedesk.synlait.com)
  - Accenture ServiceDesk

You will have been assigned work through the Accenture ServiceDesk where it provides a "stub" ticket referring to a Synlait ServiceDesk ticket with the full request. Find the Synlait ServiceDesk ticket referred to, and determine two things:

  - _Is there a Jira ticket referred to?_
  - _Is the status set properly?_

The status should be set to 95, 96, or 98 depending on which is appropriate. Once in this status, the Synlait ServiceDesk is effectively _on hold_ awaiting movement within Jira.

  - If a corresponding Jira Ticket already exists, find that and continue. 
  - If one does not exist, create a Jira "Bug" ticket. 
  - If a Jira exists, but is not referred to within the Synlait ServiceDesk ticket, please also add the reference in the ServiceDesk ticket by adding the Jira issue number.

## Using Jira

Jira should be a familiar tool, so the expectation is that a few procedures that are required by Synlait are followed.

### Ticket Creation

If a Jira Issue, often called a 'ticket', has not been created, you'll be asked to create one. Once logged into Jira, ensure that you are in the correct project (at the time of writing, that's PTE), and click the `Create` button.

There are some mandatory fields, but these can be manipulated after a ticket is created. Best practice will be to add the following:

- Project: `PTE - Project Tumu Execution`
- Issue Type: `Bug`
- Summary: A clear title that conveys the **problem** clearly
- Description: Include the Observation, the Expectation, and Reproduction to start
- ManageEngine Ticket: Ticket Number from Synlait ServiceDesk
- Linked Issues: (Jira shows required, but it's not)
- Epic Link: Use `_generic_epic_` unless otherwise advised
- Severity: as advised

All other fields are optional.

### Regular Usage

Use comments and status per normal; follow the "happy path" of the workflow unless it's not appropriate, which is:

Triage -> Selected For Development -> In Development -> Ready for Deployment (QA) -> Ready For Test -> TIP -> Passed -> Ready Pending CAB -> CAB Approved -> Deployed (Prod)

Comments are encouraged. Workflow is visible if you click the Jira Status dropdown.

!!! Always reassign the Jira ticket to whomever has the next action; NO EXCEPTIONS.

### Preparation for CAB

Working with your change sponsor, ensure that the Jira ticket contains testing evidence, and sign off from the business that they agree that the test results appear to return functionality back to what is expected. Your sponsor should ensure that your ticket and change have been completed properly. Please be aware that there will also be a Synlait ServiceDesk Change request required for CAB approval in addition to the Jira ticket.

## Once Approved

After getting your work approved by the CAB, you'll work with your sponsor to get your change deployed. This may take on several permutations, but the important concepts are:

- Set the Jira to `Deployed` once this happens
- Revisit and close the Synlait ServiceDesk ticket

That's it! Once you've closed those two tickets, the work will be considered complete unless there is a specific retrospective. 
