import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Snowflake 

## Connect to Snowflake

To connect to your Snowflake account to make use of your data and models, consider the following instructions: 

1. In the **Gene Mutation AI** menu, click **Snowflake**.
2. In the **Snowflake Account** box, enter your account identifier.
3. In the **Username** box, enter your username. 
4. In the **Password** box, enter your password. 
5. Click **Connect**. 

    !!! note 

        - Right after connecting to your Snowflake account, you will be required to define a default Snowflake warehouse, DB, schema, and stage.

        - When selecting a Snowflake warehouse, DB, schema, and stage in the following steps, the items in the lists will be based on the user's Snowflake account access privileges. 

6. In the **Snowflake Warehouse** list, search or select a warehouse.
7. In the **Snowflake Database** list, search or select a database.
8. In the **Snowflake Schema** list, search or select a shema. 
9. In the **Snowflake Stage** list, search or select a stage.
10. Click **Submit**.

  

## Disconnect from Snowflake 

To disconet from your Snowflake account: 

1. In the **Gene Mutation AI** menu, click **Snowflake**. 
2. Click **Disconnect**.


## Change default Snowflake warehouse, DB, schema, and stage

After connecting to Snowflake and defining a default Snowflake warehouse, DB, schema, and stage, you can change the default values as follows: 

1. In the **Gene Mutation AI** menu, click **Snowflake**.
2. Click **Click Here to select Warehouse**. 
3. In the **Snowflake Warehouse** list, search or select a warehouse.
4. In the **Snowflake Database** list, search or select a database.
5. In the **Snowflake Schema** list, search or select a shema. 
6. In the **Snowflake Stage** list, search or select a stage.
7. Click **Submit**.





## Tabs

After successfully connecting to Snowflake and defining a default Snowflake warehouse, DB, schema, and stage, the following tabs are available on the Snowflake page: 

- [Explore](#explore)
- [Models](#models)
- [Resources](#resources)

### Explore

The **Explore** tab will display all the tables available in the default database. 

<figure>
  <img src="../assets/patient_table.png" width="700" alt="Patient table"/>
</figure>


### View Snowflake table 

To view a Snowflake table consider the following instructions: 

1. Connect to Snowflake. 

    !!! note 

        - To learn how to connect to Snowflake, see [Connect to Snowflake](#connect-to-snowflake).
        - While connecting to Snowflake, remember to select the correct warehouse containing the table you want to view. 

2. On the **Snowflake** page, click the name of the Snowflake table you want to view. 

#### Import Snowflake table 

To make a Snowflake table (dataset) available for predictions, you need to import the table. To import a Snowflake table: 

1. Connect to Snowflake. 

    !!! note 

        - To learn how to connect to Snowflake, see [Connect to Snowflake](#connect-to-snowflake).
        - While connecting to Snowflake, remember to select the correct warehouse containing the table you want to import. 

2. On the **Snowflake** page, click the name of the Snowflake table you want to import. 

    <figure>
    <img src="../assets/snowflake/snowflake-page.png" width="500" alt="Snowflake page" />
    </figure>

3. Click **Select Complete Table**. 

### Models 


The **Models** tab will display all the models available in the default warehouse. 

<figure>
  <img src="../assets/models_table.png" width="900" alt="Models table"/>
</figure>

The execution of these models to generate predictions (prognoses) occur within the Snowflake environment. The execution of these models in Snowflake contains scoring data while enabling the use of the scalability of the warehouse to reduce the time to score patients as the solution scales with the warehouse. 


!!! note

    These models refer to models built in H2O Driverless AI. 


If you don't want to use one of the available models in the default Snowflake stage, you can upload a new model. To learn more, see [Upload model](./predictions.md#upload-model).


### Resources 

The **Resources** tab enables you to access dynamically created [artifacts](#artifacts) (e.g., a Jupyter Notebook) from particular Snowflake models. 

#### Artifacts

Available artifacts for a particular Snowflake model are as follows: 

- **Snowflake_Data_MarketPlace.scala**
- **Snowflake.ipynb**
- **Snowflake.sql**
- **Snowflake.udf** 
- **Snowpark.DriverlessAI.ipynb**
- **Snowpark_Python_native.py**
- **Snowpark_Score.scala**
- **Snowpark.scala** 
- **Snowsql**
- **GeneMutation_table_preperation.py**

#### Download artifacts 

You can download all generated artifacts for a particular Snowflake model one by one. To download an artifact from a particular Snowflake model: 

1. Connect to Snowflake. 

    !!! note 

        - To learn how to connect to Snowflake, see [Connect to Snowflake](#connect-to-snowflake).
        - While connecting to Snowflake, remember to select the correct warehouse containing the model you want to download its artifacts. 

2. On the **Snowflake** page, click the **Resources** tab. 
3. In the **Snowflake Models** list, select the model you want to download its artifacts. 
4. Click **List Resources**. 
5. In the **Resource Type** list, select an artifact. 

    <figure>
    <img src="../assets/resources_tab.png" width="900" alt="Resources table"/>
    </figure>

    !!! note 

        To learn about available model artifacts, see [Artifcts](#artifacts). 

6. Click **Get Data**. 


***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::