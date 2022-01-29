# :material-chart-timeline-variant: Simulation Flow 

The flow of a simulation which subsequently generates a simulation-based projection can be summarized in the following sequential steps: 


- [Step 1: Select state and county](#step-1-select-state-and-county) 
- [Step 2: Review or customize input data](#step-2-review-or-customize-input-data) 
- [Step 3: Review simulation-based projection](#step-3-review-simulation-based-projection)
- [Step 4 (optional): Adjust simulation to reflect best- and worst-case alternatives](#step-4-optional-adjust-simulation-to-reflect-best-and-worst-case-alternatives)

In the below sections, each step, in turn, is explained in detail. 

## Step 1: Select state and county 

The COVID-19 Hospital Occupancy Simulator (CHOS) provides simulation-based projections supported with state-of-the-art forecasting models and the latest county-level data on the reported positive cases and hospitalizations. A simulation-based projection includes: 

- ==A hospital-level four-week projection of expected ICU and non-ICU hospital-level admissions and occupancy for COVID-19 patients, as well,==

- ==A county-level four-week projection of expected county-level COVID-19 cases used to generate the hospital-level four-week projection==

Therefore, when preparing a simulation a hospital neeeds to specify it's state and county. 


!!! note 

    - To learn how to prepare a simulation, see [Prepare simulation: specify hospital state and county](./simulation_settings.md#prepare-simulation-specify-hospital-state-and-county).

    - To learn how the county-level four-week projection of expected county-level COVID-19 cases is generated, see 

    - To learn about the CHOS state-of-the-art forecasting models used during a simulation-based projection, see 



## Step 2: Review or customize input data 

The hospital-level four-week projection averages particular data points, and using the result values of those averages generates the hospital-level projection. Accordingly, it might be the case that a particular hospital might not correspond with the average data points. It could be the case that a hospital in the selected county might have above or below-average values from the average data point values. Accordingly, hospitals can change such average data point values before generating a hospital-level four-week projection. 

The average data point values are calculated using the past 8-weeks county-level data on reported COVID-19 cases and several metrics around hospitalization due to COVID-19. 

Overrides enable hospitals to use their average data point values that reflect specific characteristics of the hospital. The data overrides that enable hospitals to introduce personalized data points are referred to as *personalize hospital* overrides. 

!!! note 

    - To learn about how the particular data point values are average, see

    - To learn about the available *personalize hospital* overrides, see 





## Step 3: Review simulation-based projection

After the simulation-based projection is generated, the following interactive and simple charts will appear: 

- For the hospital-level four-week projection of expected ICU and non-ICU hospital-level admissions and occupancy for COVID-19 patients, the following charts are available: 

    - Length of stay, non-ICU
    - Length of stay, ICU
    - Occupancy and admissions, non-ICU
    - Occupancy and net change, ICU

- For the county-level four-week projection of expected county-level COVID-19 cases used to generate the hospital-level four-week projection, the following chart is available: 
    
    - Four-week projection on local county COVID-19 cases

!!! note 

    - To learn more about the charts and how to interpret them, see 

    - A simulation-based projection contains two distinct projections: a hospital-level and a county-level four-week projection. See [Step 1: Select state and county](#step-1-select-state-and-county). 

## Step 4 (optional): Adjust simulation to reflect best- and worst-case alternatives


After a simulation-based projection is generated, hospitals can introduce certain overrides based on expectations about the future to play out different scenarios and generate alternative simulation-based projections. For example: 

!!! example 

    One of the available overrides is changing the average future expected COVID-19 cases per week. This override enables hospitals to clearly understand the implications under an increasing or decreasing surge of COVID-19 cases. 

Data overrides that enable hospitals to modify future variable values are under the *expected future averages* category. 


!!! note 

	To learn about the available overrides under the *expected future averages* category, see 

<br>
=== "Feedback"
    - :material-file-outline: <a href="" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>
