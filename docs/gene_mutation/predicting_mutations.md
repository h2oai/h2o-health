# Running a prediction

Once you have [selected a dataset](./selecting_a_dataset.md), you can run predictions.

## Starting a prediction 

On the Menu bar, click __Predictions__. This will open the __Generate Patient Prognosis__ panel.

<figure>
  <img src="../assets/generate_patient_prognosis.png" width="500" alt="Generate patient prognosis"/>
</figure>

The next steps are using the model and Snowflake to match a specific model to tables that the user has access to within Snowflake.

 - Snowflake Model: select genome.mojo
 - Snowflake Table: select Patient

The delay between each input field becoming available is because the application is looking to tables that match this model and generating SQL dynamically based on the model. Otherwise the user may not know what table to use for a specific model.

Click __Predict__.

## Predictions workflow

These are the risk predictions, row values, and shapley explanations for each patient in one table. 

The execution of this request happens within the Snowflake environment, so no data leaves Snowflake and the execution is dynamic based on the model and matching data. 

<figure>
  <img src="../assets/predictions_workflow.png" width="800" alt="Generate patient prognosis"/>
</figure>

Choose a patient and click __Explore this patient’s result__.

## Patients page

This page contains all inference for the selected patient: evaluation of the patient’s risk, the most significant genes that contribute to the reported risk, and the gene-by-gene most similar patients. It also offers metrics to quickly identify potential anomalies that might arise.

To navigate scroll down and take advantage of the drop down panels to only expose a select subset of all panels. 

### Panel: Drift Detection

This panel announces whether the patient cohort in the selected table is “consistent” with the trained model. 
If drift is detected, the underlying model could be less reliable and specific maintenance actions should be taken. The absence of drift is evidence that the model has the same performance assigned to it during training. 

<figure>
  <img src="../assets/predictions_for_patient.png" width="800" alt="Drift detection"/>
</figure>

### Panel: Information Gauge & Shapley Graph

The Gauge offers visually the patient’s risk to the disease. The same information is presented within the relevant text at the top of the panel. The text also offers the classification of this patient as having __HIGH__ or __LOW RISK__ based on the risk score.

The Shapley plot to the right of the panel shows the patient’s genetic contribution to the reported risk (grey bars, label local), in comparison to the average contributions across the cohort (yellow bars, label global). 

Click on the yellow label at the plot legend to deactivate the comparison with the cohort.

Each bar is one gene of the top 10 most contributing genes for this patient. The shapley bars can be positive or negative (opposite directions) indicating a contribution towards high or low risk, respectively. 

<figure>
  <img src="../assets/gauge.png" width="800" alt="Gauge and Shapely"/>
</figure>

Scroll down.

### Panel: Histogram

This panel helps evaluate how confident we should be in declaring a patient with this specific risk score (__Gauge__) as __HIGH__ or __LOW RISK__.

The histogram shows how risk is distributed across the entire patient cohort. __LOW RISK__ is marked with green color and __HIGH RISK__ with red. The selected patient’s risk is highlighted with a pin in the right position. 

The further right a __HIGH RISK__ patient is the better confidence in the evaluation. On the other side, the further left a __LOW RISK__ patient is the better.

<figure>
  <img src="../assets/histogram.png" width="800" alt="Histogram"/>
</figure>

Scroll down.

### Panel: Similar Patients

The __Sankey plot__ in this panel helps the user further understand the patient profile. It shows the groups of patients (__HIGH__ or __LOW RISK__, __UNCERTAIN__) the selected patient is most similar with. A mixture of different groups of similar patients in the result indicates a patient that diverges from the average in their assigned risk group. 

The 20 most similar patients are selected using a similarity algorithm on all the genes of the cohort.

<figure>
  <img src="../assets/sankey.png" width="800" alt="Sankey"/>
</figure>

Scroll down.

### Panel: Radar Plot

This panel is a follow-up to the __Sankey plot__. 

The radar plot offers an explanation of the gene-level similarities and differences between the selected patient and the 20 most similar other patients in the cohort. The results are presented comparatively for the different risk groups. A group can be selected or deselected by clicking on the corresponding label at the plot’s legend.

<figure>
  <img src="../assets/radarplot.png" width="800" alt="Radar"/>
</figure>

Scroll down.

### Panel: Patient Data

This panel shows data about the patient from the selected dataset.

<figure>
  <img src="../assets/patient_data.png" width="800" alt="Patient data"/>
</figure>
