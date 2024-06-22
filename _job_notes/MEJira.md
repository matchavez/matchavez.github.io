Hello all,

## Problem

We currently have some manual crossover for CAB now that we've gone live with SAP. It is far from ideal.

#### What _was_:

Development started and ended in Jira. If it was good enough to deploy, it was all set from within the tickets.

#### What _is_:

Two changes have added to the system. First, the problem of letting most users put in a trouble ticket is solved by inserting ManageEngine `requests` as a filter before any work is assigned. This prevents non-dev work from cluttering the system, but requires human intervention and data entry into Jira. Notably, it's not appropriate for development to occur within a ME request; it's not built to handle it.

Since going live, changes going into the Production environment have required SAP CAB approval. As a part of this approval process, ManageEngine `changes` have been required. This is similar to what is done at weekly CABs. It records changes permanently, and is well-suited to do so. Notably, SAP changes have been far more frequent, and will likely be more frequent for some time in the future. This also requires human intervention to collate the request, Jira information, Testing support sometimes held in Jira, and put all of it into a new Change ticket.

During CAB, changes are approved in the ME system the same as if they were part of the weekly process, but separate.

### Inefficient handling

ManageEngine is a system that has two good tools within it, though they are effectively separate and don't seem to have integration for promotion and completion. Jira doesn't have a solid way to save changes unless it is configured to do so, though that's not insurmountable.

Regardless, we've gone from exclusive Jira to:

`ME Request -> Human -> Jira -> Human -> ME Changes`

And the tests are often within Jira as well with Zephyr.

---

## Options

Of course the option of doing nothing different is possible. Over time, the difficulty of managing the transition may involve significant time by someone both across all issues and doing tedious data entry. This does not seem ideal.

### SAP CAB in Jira

Another option is to forego capture of SAP CAB changes within ME, and fit out Jira to maintain the changelog for all things related to SAP development. This idea is workable, particularly since the design is still to be implemented within Jira -- make it how we want it. This also solves a problem whereby deployment is missed in-between systems, since that's only tracked within SAP Solution Manager and by Accenture manually. This could be accelerated with the use of a new Jira project, and backlog review.

### Develop within ME

Not sure if this is reasonable, but there may be a kanban/agile setup available within ManageEngine. Given its lack of integration outwardly between applications, this seems unlikely, but may be worth investigation. Even more unlikely, if it could have been done before, it would have been.

### Integrate ME and Jira

There are commercial options that could allow triggered Jira ticket creation, as well as the transfer of Jira tickets back to ME Changes via third party tools. https://community.atlassian.com/t5/Jira-Software-questions/Currently-using-ManageEngine-ServiceDesk-Plus-and-Jira-I-know/qaq-p/1857852

These tools would need investigation to ensure they do integrate as expected, but the benefit would be that it allows ME and Jira/Zephyr to move between the systems without as much manual movement and data consolidation.

### Something else?

Maybe we need to review the process these tools are fitting into, because the traditional weekly CAB process might not be appropriate for most SAP changes?

---

## Solution Needs

A decision on how to respect change governance in time for both the end of Hypercare, and the need for BAU. With the upcoming need to prioritise post-P1 work, this will need to be in place within weeks.