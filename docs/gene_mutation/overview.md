# Gene Mutation AI

H2O Gene Mutation AI is a machine learning-powered patient risk assessment application that uses the Snowflake Data Cloud.

Using information about the presence of genic single nucleotide polymorphisms (SNP) in samples derived from patient samples, the application allows the user to:

1. Convert VCF files to a dataset that is suitable for machine learning (H2O-3 ©).
2. Evaluate patient risk and understand how common this risk has been among past patients (H2O Driverless AI © AutoML).
3. Find and explore similar patients (H2O-3 ©). 
4. Identify the genes that influence patient risk (H2O Driverless AI © MLI).


This solution combines the Snowflake database, with H2O Cloud to bring:

- Intelligent clinical decision support directly to clinicians.
- Advanced analytics for pharmacogenomics and pharmacovigilance pipelines.

<figure>
  <img src="../assets/hero_image.jpeg" width="800" alt="Gene Mutation Charts"/>
</figure>

## Audience 

Clinicians

## Background 

Medical diagnosis and drug discovery increasingly take more into consideration the genetic makeup of the patient. From the multiple types and subtypes of cancer to heart disease, to obesity or the immune response, the individual’s genetic predisposition plays an important role. When a disease is diagnosed, then, again, the patient’s genetic information often determines the appropriate pharmaceutic intervention. 

All the thousands of hospitals and clinics in the US that offer genetic counseling, are faced with challenges around maintaining a database with the raw patient data that need to be preprocessed and analyzed. The same is true for pharmaceutical companies that invest many million dollars to develop personalized drug regimes. The entire pipeline currently starts with MB of information and typically reduces it to a handful of known genes that can then be  evaluated by an expert in each case. 

H2O Gene Mutation AI offers a portable personalized medicine interface that can: 

1. Store and process efficiently and reproducibly thousands of genetic results in parallel.
2. Offer an individual’s genetic risk on-demand.
3. Present a selection of the ten most influential genes for this sample among thousands of genes, not dozens.

The application supports multiple pretrained models, so the same patient can be examined for their risk to multiple diseases or the response to alternative pharmaceutical interventions. Semi-automated data selection helps navigate the Snowflake warehouse, while for the more technical users automatic code generation allows auditing and implementation of multiple pipelines.

## Access 

[**CHOS**](./terminology.md#chos) is available on the H2O AI Cloud. To learn how to access it, see [Access H2O Health Apps](../../access_h2o_health_apps.md).




<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about Gene Mutation AI to <niki.athanasiadou@h2o.ai>