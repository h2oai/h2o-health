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

Therefore, starting a simulation requires selecting the state and county in which the hospital resides. 


!!! note 

    To learn how to start a simulation, see 



## Step 2: Review or customize input data 

The hospital-level four-week projection averages particular data points, and using the result values of those averages generates the hospital-level projection. Accordingly, it might be the case that a particular hospital might not correspond with the average data points. It could be the case that a hospital in the selected county might have above or below-average values from the average data point values. Accordingly, hospitals can change such average data point values before generating a hospital-level four-week projection. 

The average data points mix the latest county-level data on the reported COVID-19 cases and several metrics around hospitalization due to COVID-19. 

Overrides enable hospitals to use their average data point values that reflect specific characteristics of the hospital. The data overrides that enable hospitals to introduce personalized data points are referred to as *personalize hospital* overrides. 


!!! note 

    - To learn about the available *personalize hospital* overrides, see 

    - To learn about the particular data points that are average, see

    - To learn about the CHOS state-of-the-art forecasting models used during a simulation, see 


## Step 3: Review simulation-based projection

After generating a simulation-based projection, the following interactive and simple charts will appear for the simulation-based projection: 

- For the hospital-level four-week projection of expected ICU and non-ICU hospital-level admissions and occupancy for COVID-19 patients, the following charts are available: 

    - Length of stay, non-ICU
    - Length of stay, ICU
    - Occupancy and admissions, non-ICU
    - Occupancy and net change, ICU

- For the county-level four-week projection of expected county-level COVID-19 cases used to generate the hospital-level four-week projection, the following chart is available: 
    
    - Four-week projection on local county COVID-19 cases

!!! note 

    To learn more about the charts and how to interpret them, see 

## Step 4 (optional): Adjust simulation to reflect best- and worst-case alternatives


Hospitals can better customize the models' average data point values to reflect a hospital's specific characteristics through available data overrides; overrides based on expectations about the future allow you to play out different scenarios and generate alternative projections. For example, as one of the available overrides, you can change the average COVID-19 cases per week and play out different scenarios when COVID-19 cases increase or decrease. In this case, the data overrides that enable hospitals to play out different scenarios and generate alternative projections are referred to as *expert future estimates*. 


!!! note 

	To learn about the available *expert future estimates* overrides, see 

<br>
=== "Feedback"
    - :material-file-outline: <a href="" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>
