# :material-chart-timeline-variant: How Simulations Work

There are three basic steps to run a [simulation-based projection](./terminology.md#simulation-based-projection) in CHOS.

- [Step 1: Select state and county](#step-1-select-state-and-county) 
- [Step 2: Review or customize input data](#step-2-review-or-customize-input-data) 
- [Step 3: Review simulation-based projection](#step-3-review-simulation-based-projection)


## Step 1: Select state and county 

The COVID-19 Hospital Occupancy Simulator ([**CHOS**](./terminology.md#chos)) provides hospitals with a [simulation-based projection](./terminology.md#simulation-based-projection) supported with state-of-the-art forecasting models and the latest county-level data on the reported positive cases and metrics around COVID-19 hospitalizations. A [simulation-based projection](./terminology.md#simulation-based-projection) includes: 

{==

- A **hospital-level** four-week projection that includes the following metrics for COVID-19 patients:

	- Daily expected non-ICU occupancy and admissions 
	- Daily expected ICU occupancy and admissions net change 

- A **county-level** four-week projection of expected COVID-19 cases used to generate the **hospital-level** four-week projection

==}

Therefore, when preparing a simulation for the first time, hospitals need to specify their county and the county's state. 

!!! note 

    - To learn how to start a simulation, see [Start Simulation](./simulation_settings.md#start-simulation).

    - To learn how the county-level four-week projection of expected COVID-19 cases is generated, see [CDC County-Level Ensemble Model](./models.md#cdc-county-level-ensemble-model).

    - The state-of-the-art forecasting models rely on certain assumptions to effectively generate a [simulation-based projection](./terminology.md#simulation-based-projection). To learn more, see [Modeling Assumptions](./models.md#modeling-assumptions).



## Step 2: Review or customize input data 

To generate a hospital-level four-week projection, the models use certain variables that obtain an average value by computing county-level data from the past four weeks around hospitalization metrics. At times, it could be the case that a hospital might not agree with the average values because the hospital knows to have above or below-average values (e.g., big vs. small hospitals in the same county). This perceived difference will often occur among big and small hospitals when county-level averages will not correspond.  Therefore: 

- Before starting a simulation, hospitals can modify the average values given to the model's variables through data overrides known as **personalized hospital** overrides. Through these overrides, [**CHOS**](./terminology.md#chos) enables hospitals to use their perceived average values while considering the specific characteristics of the hospital. To learn about the available personalized hospital overrides, see [Overrides: personalized hospital](./simulation_settings.md#overrides-personalize-hospital).

On top of the **personalized hospital** overrides, hospitals can introduce certain overrides based on expectations about the future to play out different scenarios and generate a modified [simulation-based projection](./terminology.md#simulation-based-projection). The data overrides that enable hospitals to modify future averages are referred to as **future expert estimate** overrides. To learn more, see [Adjust simulation to reflect best- and worst-case alternatives](#adjust-simulation-to-reflect-best-and-worst-case-alternatives).

!!! note 

    - To learn about the particular county-level data points that are averaged to generate a hospital-level four-week projection, see [Data Files](./data_files.md).



## Step 3: Review simulation-based projection

After the [simulation-based projection](./terminology.md#simulation-based-projection) is generated, the following interactive and simple charts will appear: 

For the **hospital-level** four-week projection, the following charts are available: 

- [Occupancy and admissions, non-ICU](./charts.md#occupancy-and-admissions-non-icu)
- [Occupancy and net change, ICU](./charts.md#occupancy-and-net-change-icu)
- [Length of stay, non-ICU](./charts.md#length-of-stay-non-icu) 
- [Length of stay, ICU](./charts.md#length-of-stay-icu)


For the **county-level** four-week projection used to generate the **hospital-level** four-week projection, the following chart is available: 
    
- [New COVID Cases: 4-Weeks Projection (county-level)](./charts.md#new-covid-cases-4-weeks-projection-county-level)

After a [simulation-based projection](./terminology.md#simulation-based-projection) is generated, hospitals can introduce certain overrides based on expectations about the future to play out different scenarios and generate an alternative [simulation-based projection](./terminology.md#simulation-based-projection). The data overrides that enable hospitals to modify future averages are referred to as **future expert estimate** overrides. To learn more, see [Adjust simulation to reflect best- and worst-case alternatives](#adjust-simulation-to-reflect-best-and-worst-case-alternatives).

!!! note 

    - To learn more about the charts and their interpretation, see [Charts](charts.md).

## Adjust simulation to reflect best- and worst-case alternatives

Using one of the **future expert estimate** overrides enables hospitals to change a four-week [simulation-based projection](./terminology.md#simulation-based-projection) while taking into consideration the used **future expert estimate** overrides.

!!! example 

    One of the available overrides enables hospitals to select a hospital-level average of future expected COVID-19 cases per week. This override allows hospitals to clearly understand the implications of an increasing or decreasing surge of COVID-19 cases within their facilities. 

!!! note 

	To learn about the available **future expert estimate** overrides, see [Overrides: future expert estimates](./simulation_settings.md#overrides-future-expert-estimates).

<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about [CHOS](./terminology.md#chos) to <niki.athanasiadou@h2o.ai>