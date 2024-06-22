# Outage Timing Concern

## Cherryll Ramos

7pm is all good for us.
 
Before
No manual task required from IT before the outage since all orders has already  been sent to Cimcorp.
Business just need to ensure all lots has been released to Cimcorp so they can start the picking.
 
After
If in case, picking was completed while SAP downtime is still on going, then we would have to ask Cimcorp to resend the routemanifest and Operator to manually receipt the missed stocks.
 
You might want to include Angie Wafer in this thread to check on the unloading schedule of the milk.

---

## Hamish Bradshaw

Thanks for your email.  As we fit IT Infra changes into the current 30 min weekly outage window, I find it to short to be able to get stuff done on the network side, it doesn’t leave any room for working through any issues if they rise.  Your proposed timing of a 1 hour fortnightly outage window on Sunday from 1830 to 1930 would be a good improvement. 
 
I’d much prefer a more flexible weekly 2 hour outage window, but unfortunately that’s unrealistic based on the 24/7 nature of the business.  Also it would be nice to have a pre-allocated longer outage window ie. 2+ hours less frequently, but probably more efficient to just arrange these when required as its likely not that often that a longer window is required.

---

## Alex Oreta

For DLP that supplies FSSI daily and coolstore still picking at night and sometimes waiting for the product that we are still producing, it would be better if the SAP downtime would be scheduled weekly for 30 minutes instead of fortnightly for 1 hour. If the downtime is only 30 minutes, it might only affect 1-2 POs. The shift leaders need to manually correct the Cimcorp delivered quantities of all POs affected, which might affect the early release of the product for the coolstore picking task.

---

## Chris Wood

Are you able to advise what happens to interface messages that are triggered from TPM (and elsewhere) during this time? Do they enter a queue, which will then be transacted when SAP comes back up, or do they just fail?
 
Are the plant managers across this? They are probably going to give better advice about their areas than I would be able to give.

---

### Chris/Lakshmi:

We will Pause( stop)  the manufacturing Microservices at the same time as SAP. So the messages will be picked when the services are resumed (restarted).  In this way, we don’t lose any messages.
 
This worked pretty well on 4th Aug when SAP had 1 hr outage at 1PM.
 
---

## Beorn Sheldon

B&C Dunsandel would prefer weekly.   Any day works.  11:00 am on a weekday would be best.  Considering RPD B&C don't do Friday's often consider that day.

We schedule cleans between 10-12 in the filler room blending looks to start up around 1130.  Palletizing is doing end of run transaction between 10-11 usually.   Just stating our best case scenario 

---

## Logan Vandervielt

I would be concerned about what is supposed to happen with the Interfaces. If they are going to run after the outage there would be less concerning for the business, but if it’s a period where nothing should happen then the Plant Managers would have to sign off on this.

---

## Robert Capon

Given Lakshmi’s email some of the issues are reduced but we would effectively be flying blind with no system checks during the outage, so wouldn’t want to be consuming anything (i.e. not tipping at macro, lactose etc) & unable to move HUs in the system (clear trans rows). To minimise potential issues, shorter & more frequent would be better. Potential to impact DT downstream is minimised & any issues occurring would be found as quickly as possible. 10x10 minutes would be preferable to 1 x 60mins for this in my opinion.
 
Dryers & WM are 24hrs & planned DT for all at once is deliberately avoided as much as possible, so the timing is less relevant other than for support if something does go wrong. So day time hours & not over shift handovers (1hr either side of 6am & 6pm). Weekends make sense to avoid impacting the office workers.

---

## Balwinder Singh

RPD normally runs from Monday to Thursday and rarely on Friday so, Friday could be the Good for RPD .

---
