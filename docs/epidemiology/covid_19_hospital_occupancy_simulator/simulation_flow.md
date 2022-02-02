# :material-chart-timeline-variant: Simulation Flow 

The flow of a simulation which subsequently generates a [simulation-based projection](./terms.md#simulation-based-projection) can be summarized in the following sequential steps: 


- [Step 1: Select state and county](#step-1-select-state-and-county) 
- [Step 2: Review or customize input data](#step-2-review-or-customize-input-data) 
- [Step 3: Review simulation-based projection](#step-3-review-simulation-based-projection)
- [Step 4 (optional): Adjust simulation to reflect best- and worst-case alternatives](#step-4-optional-adjust-simulation-to-reflect-best-and-worst-case-alternatives)

In the below sections, each step, in turn, is explained in detail. 

## Step 1: Select state and county 

The COVID-19 Hospital Occupancy Simulator (**CHOS**) provides to a given hospital a [simulation-based projection](./terms.md#simulation-based-projection) supported with state-of-the-art forecasting models and the latest county-level data on the reported positive cases and hospitalizations. A [simulation-based projection](./terminology.md#simulation-based-projection) includes: 

- A ==**hospital-level**== four-week projection that includes the following metrics for COVID-19 patients:

	- Daily expected non-ICU occupancy and admissions 
	- Daily expected ICU occupancy and admissions net change 

- A ==**county-level**== four-week projection of expected COVID-19 cases used to generate the ==**hospital-level**== four-week projection

Therefore, when preparing a simulation for the first time, hospitals need to specify their county and the county's state. 

!!! note 

    - To learn how to start a simulation, see [Start Simulation](./simulation_settings.md#start-simulation).

    - To learn how the county-level four-week projection of expected COVID-19 cases is generated, see [CDC County-Level Ensemble Model](./models.md#cdc-county-level-ensemble-model).

    - The state-of-the-art forecasting models rely on certain assumptions to effectively generate a [simulation-based projection](./terminology.md#simulation-based-projection). To learn more, see [Modeling Assumptions](./models.md#modeling-assumptions).



## Step 2: Review or customize input data 

To generate a hospital-level four-week projection, the models use certain variables that obtain an average value by computing county-level data from the past 8-weeks around hospitalization metrics. Accordingly, it might be the case that a particular hospital might not correspond with the average values given to variables used by the models. It could be the case that a hospital in the selected county might have above or below-average values compared to the county-level average values.

Hospitals can modify the average values given to the model's variables through data overrides known as **personalize hospital** overrides. Through these overrides, **CHOS** enables hospitals to use their perceived average values while taking into account the specific characteristics of the hospital.

!!! note 

    - To learn about the particular county-level data points that are average to generate a hospital-level four-week projection, see 

    - To learn about the available **personalize hospital** overrides, see 

## Step 3: Review simulation-based projection

After the simulation-based projection is generated, the following interactive and simple charts will appear: 

For the **hospital-level** four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients, the following charts are available: 

- Length of stay, non-ICU
- Length of stay, ICU
- Occupancy and admissions, non-ICU
- Occupancy and net change, ICU

For the **county-level** four-week projection of expected COVID-19 cases used to generate the **hospital-level** four-week projection, the following chart is available: 
    
- Four-week projection on local county COVID-19 cases

!!! note 

    - To learn more about the charts and how to interpret them, see 

    - A [simulation-based projection](./terms.md#simulation-based-projection) contains two distinct projections: a hospital-level and a county-level four-week projection. See [Step 1: Select state and county](#step-1-select-state-and-county). 

## Step 4 (optional): Adjust simulation to reflect best- and worst-case alternatives


After a [simulation-based projection](./terms.md#simulation-based-projection) is generated, hospitals can introduce certain overrides based on expectations about the future to play out different scenarios and generate an alternative [simulation-based projection](./terms.md#simulation-based-projection).The data overrides that enable hospitals to modify future averages are referred to as **expected future** overrides.  

Modifying one of these overrides will enable hospitals to change a four-week simulation-based projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. As a result, a new four-week simulation-based projection will be generated.

!!! example 

    One of the available overrides enables hospitals to select a hospital-level average of future expected COVID-19 cases per week. This override allows hospitals to clearly understand the implications under an increasing or decreasing surge of COVID-19 cases within their facilities. 


!!! note 

	To learn about the available **expected future** overrides, see

<br>
=== "Feedback"
    - :material-file-outline: <a href="" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>
