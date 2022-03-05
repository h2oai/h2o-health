# Connecting to Snowflake

You can use the Gene Mutation AI app with data stored in Snowflake.

## Step 1: Authenticate with Snowflake 

In the top menu bar, locate the "Snowflake Connector" panel. Enter your account credentials to continue.

<figure>
  <img src="../assets/snowflake_login_empty.png" width="300" alt="Snowflake login form"/>
</figure>

 - Snowflake Account: *your snowflake account*
 - Username: *your snowflake username*
 - Password: *your snowflake password*
 - Click __Connect__.

## Step 2: Set Default Warehouse / DB / Schema / Stage

Based on the user’s access privileges only the resources they have access to will be displayed in the dropdown.

The application comes preloaded with some synthetic datasets:


<figure>
  <img src="../assets/data_warehouse_setup.png" width="500" alt="Data warehouse setup"/>
</figure>

At this point you can select the following dataset to continue with the tutorial exactly. Or you could select your own dataset and follow along more loosely.

 - Snowflake Warehouse: Healthcareandlifescienses
 - Snowflake Database: Genomes
 - Snowflake Schema: Public
 - Snowflake Stage: Java_UDF_Stage
 - Click __Submit__.

## Step 3: Explore tables 

The tables within the database you selected will be shown. The screenshot below is from the Patient table.

<figure>
  <img src="../assets/patient_table.png" width="700" alt="Patient table"/>
</figure>

Click on the __Patient table__.

## Step 4: Snowflake data preview 

This shows the table that was created in Snowflake with a specific set of patient genomes, we will see how this was done later in the Resource tab.

<figure>
  <img src="../assets/snowflake_data_preview.png" width="500" alt="Snowflake data preview"/>
</figure>

Click __Select Complete Table__.

This makes this table available for the application and will be the one used for this session.

Once the data selection is completed, a confirmation message will be shown in the UI and you will be returned to the Explore panel.

<figure>
  <img src="../assets/successful_import_banner.png" width="900" alt="Successful import banner"/>
</figure>

## Step 5: Viewing Snowflake Models 

Click on the __Models__ tab, and the available models will be shown. If you are using the preloaded dataset, you will see the models that would have been created using H2O.ai Driverless AI.

<figure>
  <img src="../assets/models_table.png" width="900" alt="Models table"/>
</figure>

These models execute within the Snowflake environment, so data does not leave the environment for scoring (inferencing), it also means the scalability of the warehouse can be used to reduce the time to score patients as the solution scales with the warehouse.

## Step 6: Viewing Snowflake Models 

Click on __Resources__. This tab dynamically creates different artifacts for the user, for example maybe a clinical data scientist wants to use a Jupyter Notebook with the model and Snowflake.
Snowflake Models: Select  a mojo artifact from the dropdown and click __List Resources__.

<figure>
  <img src="../assets/resources_tab.png" width="900" alt="Resources table"/>
</figure>

A list of available artifacts that will be generated:

 - Example Data Market Place, maybe third party data is going to be used with the model
 - Jupyter notebooks, Use the model with Snowflake, pull data into Driverless AI
 - Snowflake Worksheet, a complete SQL worksheet can be created and loaded into Snowflake
 - UDF examples in SQL, Scala and Python
 - Snowpark Python example code
 - SnowSQL showing the commands needed to upload models outside of the application
 - GeneMutation_table_preperation shows the table creation from the VCF records


## How to disconnect from Snowflake 

When you are finished with your session, click on the __Snowflake__ tab on the Menu bar and click __Disconnect__.

<figure>
  <img src="../assets/snowflake_login_filled.png" width="300" alt="Snowflake disconnect"/>
</figure>

The user is now disconnected from Snowflake.
