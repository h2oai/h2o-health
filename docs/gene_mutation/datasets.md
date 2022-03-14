# :material-table: Datasets 

On the **Datasets** page, you can view imported and uploaded datasets.


- To learn how to import a dataset (table), see [Import Snowflake table](snowflake.md#import-snowflake-table).
- To learn how to upload a dataset, see [Upload dataset](#upload-dataset).


## Upload dataset 

To upload a new dataset, consider the following instructions: 

1. In the **Gene Mutation AI** menu, click **Datasets**. 

2. By default, during the process of uploading a dataset, Gene Mutation AI will score the uploaded dataset with the preloaded  ‘default’ model. It enables the calculation of mutation frequencies by pathway, which is the data frame that will be imported to the application. If you want to turn this **off**: 

    - To turn it **off**, click the **Run the data through pre-processing pipeline** toggle.

3. If non-genic information such as demographics or ground truth diagnoses is present, please define their column names as follows: 

    - In the **Select columns to retain after pre-processing** box,  

2. To upload your dataset either: 
  
    - Click **Browse...**. 
    - Or drag and drop a file (containing the dataset)

3. Click **Upload new dataset**. 


!!! note

    - The dataset should be in a `.csv` or `.txt` file format, where each row is a patient sample and each column a gene name. Allowed values are 1/0, indicating the presence/absence of detected SNP(s) within the gene’s ORF.

    - Uploaded datasets through the UI will be store at 


## View dataset 

To view imported or uploaded datasets (table), consider the following instructions: 

1. In the **Gene Mutation AI** menu, click **Datasets**. 
2. In the **Select an existing dataset** list, select the dataset (table) you want to view. 
3. Click **View Dataset**. 

    <figure>
      <img src="../assets/data_preview.png" width="800" alt="Dataset preview"/>
    </figure>

    !!! note 

        A maximum of *10* rows and N columns will be displayed. N refers to the number of columns in the dataset (table). 



## Distribution summary 

To view a barplot of the cohort distribution of mutation frequencies for a particular gene (column) from a [dataset in view](#view-dataset), consider the following instructions: 

1. In the **Enter a variable name** box, enter one of the column names. 

    !!! note

        Case sensitive. The entered column name needs to match the column name in the dataset (table). 

2. Click **Show Plot**. 


    <figure>
    <img src="../assets/barplot.png" width="500" alt="Barplot"/>
    </figure>

    !!! note

        Although a maximum of 10 rows are displayed when viewing a dataset (table), the barplots in the distribution summary are generated using the complete dataset in view. 


