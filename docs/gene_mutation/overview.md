# Gene Mutation AI 

Gene Mutation AI (GMA) is an application by H2O.ai and supported by Snowflake that enables participants around genomics to use a patient's gene sequence variations data (VCF files) to: 

1. Evaluate on-demand a patient's risk for a particular disease determined by an appropriate uploaded model built-in Driverless AI. 
2. Identify the ten most influential genes that influence a model's risk prediction for a specific disease.
3. Understand how common a disease risk has been among past patients. 
4. Compare a patient's disease risk to that of previously evaluated patients. 
5. Store and process efficiently and reproducibly thousands of genetic results in parallel.

GMA, as a result, eases the process of processing, analyzing, and storing a patient's gene sequence variations data while generating on-demand disease prognoses.


## Audience 

GMA is intended for participants around genomics (e.g., clinicians) 

!!! note 

    GMA assumes that basic knowledge of genomics has been acquired to build new predictive disease models. 

## Background 

A medical professional often considers a patient's genetic makeup to generate a medical diagnosis and discover the appropriate drug for a certain disease. For instance, observing someone's genetic makeup can determine someone's predisposition to a certain type of cancer or heart disease. Looking at a patient's genetic makeup cannot only shed light on someone's likelihood of developing a genetic disease but can also help determine the appropriate pharmaceutic intervention. 

Before a medical professional or others can use the genetic data, the data needs to be processed, which is often a challenge. Unfortunately, processing the genetic data is not the only problem; problems during the analysis process of the genetic data make it complicated to use the data effectively. In essence, the pharmacogenomics and pharmacovigilance pipelines are currently dealing with a complicated process of preprocessing and analyzing a patients genetic data. 

## Access 

*Gene Mutation AI* is available on the H2O AI Cloud (HAIC). To learn how to access it, see [Access H2O Health Apps](../access_h2o_health_apps.md).


## Technology 

H2O.ai and Snowflake have combined specific technologies to create Gene Mutation AI. The technologies from both who were integrated are as follows: 

### H2O.ai 

- Driverless AI 
- H2O Wave 

### Snowflake 

- Snowpark Python API
- Snowfalke user-defined fucntions (UDF)




<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about Gene Mutation AI to <niki.athanasiadou@h2o.ai>