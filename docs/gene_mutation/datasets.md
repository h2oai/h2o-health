# :material-table: Datasets 

# Selecting a dataset

After adding datasets via Snowflake or manual upload, you can select them for use in the app. You will have the opportunity to preview your dataset before moving on to the prediction phase.

## How to select a dataset

Select the Datasets tab on the Menu bar.

Using the __Datasets Selection__ panel on the left, click on the __Select an existing dataset__ dropdown and choose your dataset. 

(When uploading a new dataset (Upload a dataset) the toggle switch ensures it is converted to a machine learning-friendly format, with the option to run dimensionality reduction pre-processing.)

<figure>
  <img src="../assets/dataset_selection.png" width="500" alt="Dataset selection"/>
</figure>

Click __View dataset__ to continue.

## Previewing your dataset 

The first few rows will be displayed, but the distribution summary is across the complete table.

<figure>
  <img src="../assets/data_preview.png" width="800" alt="Dataset preview"/>
</figure>

In the field __Enter a variable name__ type the name of a variable/gene (BUB3 here)–in exactly  the same way it appears in the preview–and click Show Plot. Barplots with the cohort distribution of mutation frequencies for the selected gene are shown.

<figure>
  <img src="../assets/barplot.png" width="800" alt="Barplot"/>
</figure>
