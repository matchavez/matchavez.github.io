# Mermaid flowcharts

---

## LIMS - Labware



```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --OAuth/REST/SOAP/File--- labwaredev(Labware.Dev)
  sapqas --- microqas{Micro.Test} 
  microqas --OAuth/REST/SOAP/File--- labwaretest(Labware.Test)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --OAuth/REST/SOAP/File--- labwareprod(Labware.Prod)
```


---

## TetraPak / TPM






```mermaid
graph LR
  datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --- tpmt1(TPM Test 1 Pokeno)
  microdev --- tpmt2(TPM Test 2 Dryer 2/3)
  microdev --- tpmt3(TPM Test Liquid)
  
   
  microtest --- tpmt1(TPM Test 1 Pokeno)
  microtest --- tpmt2(TPM Test 2 Dryer 2/3)
  microtest --- tpmt3(TPM Test Liquid)
 
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  sapqas --- microtest{micro.Test}
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --- tpmprod(TPM Prod)
```





---

## Pack Machine / Packer



```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --- packprd
  sapqas --- microtest{Micro.Test} 
  microtest --- packprd
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.PRD}
  microprd --- packprd(Packer PLC.Prod)
```


---

## ProDoc


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --SOAP/REST--- prodocdev(ProDoc.Test)
  sapqas --- microtest{Micro.Test} 
  microtest --SOAP/REST--- prodocdev
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.PRD}
  microprd --SOAP/REST--- prodocprd(ProDoc.Prod)
```
:::

---

## Bank / ANZ


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --ISO20022--- anztest(ANZ API.test)
  sapqas --- microtest{Micro.Test} 
  microtest --ISO20022--- anztest
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --ISO20022--- anzprd(ANZ API.Prod)
```


---

## MadCap


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --SOAP/REST--- madcaptest(MadCap.Test)
  sapqas --- microtest{Micro.test}
  microtest --SOAP/REST--- madcaptest
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --SOAP/REST--- madcapprd(MadCap.Prod)
```


---

## EAM


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --SOAP/REST--- eamdev(EAM.Train)
  sapqas --- microtest{Micro.Test} 
  microtest --SOAP/REST--- eamtest(EAM.Test)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.PRD}
  microprd --SOAP/REST--- eamprd(EAM.Prod)
```
:::

---

## EDec / AP-eCert


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.DEV}
  microdev --- edecdev(MPI AP eCert.Test)
  sapqas --- microtest{Micro.Test} 

  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  microtest --- edecdev
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.PRD}
  microprd --- labwareprod(MPI AP eCert.Prod)
```
:::

---

## ISP


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --SOAP/REST--- isptest(ISP.dev)
  sapqas --- microtest{Micro.Test} 
  microtest --SOAP/REST--- isptest(isp.Test)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --SOAP/REST--- ispprd(ISP.Prod)
```
:::

---

## Oracle HCM


```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --- hcmtest
  sapqas --- microtest{Micro.Test} 
  microtest --- hcmtest(Oracle HCM.Test)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --- labwareprod(Oracle HCM.Prod)
```
:::

---

## Cimcorp



::: mermaid
``` mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --API--- cimcorptest(2WinVM CIMCORP.Test)
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  sapqas --- microtest{Micro.Test}
  microtest --API--- cimcorptest
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.PRD}
  microprd --API--- cimcorpprod(VM CIMCORP.Prod)
```
:::

---

## Palletiser Cans

### Tracked Environments

### About

Puts on pallets, not take it off.

### System Owner

Dominique Caldwell, Synlait Automation Team

### Details and Notes

Under investigation.



---

## FSSI / FoodStuffs South Island


https://synlait.atlassian.net/wiki/spaces/IT/pages/26280040/Business+process+description)

::: mermaid




```mermaid
graph LR
  datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --ODATA--- as2(FSSI AS2 Exch.Prod)
  microtest --ODATA--- as2
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  sapqas --- microtest{Micro.Test}

  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --ODATA--- as2
```
:::

---

## PayGlobal

```mermaid
graph LR
datadev(Data.DEV) --- sapdev[SAP.DEV]
  sapdev --- microdev{Micro.Dev}
  microdev --- pgtest(PayGlobal API Test.tst)
  sapqas --- microtest{Micro.Test} 
  microtest --- pgtest
  dataqas(Data.QAS) --- sapqas[SAP.QAS]
  
  dataprd(Data.PRD) --- sapprd[SAP.PRD]
  sapprd --- microprd{Micro.Prod}
  microprd --- pgprd(PayGlobal.Prod)
```


---

