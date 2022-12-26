import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

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


***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::