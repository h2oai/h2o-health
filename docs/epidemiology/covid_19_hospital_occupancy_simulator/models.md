# Models

The models used to generate a simulation-based projection rely on certain [modeling assumptions](#modeling-assumptions). The county-level four-week projection of expected COVID-19 cases relies on the [CDC County-Level Ensemble Model](#cdc-county-level-ensemble-model). 
## Modeling Assumptions 

The state-of-the-art forecasting models rely on certain assumptions to effectively generate a simulation-based projection. Assumptions are as follows: 

- The distribution for admissions and occupancy as a percent of active COVID-19 cases is stable within periods of eight weeks or less 
- ICU and non-ICU COVID-19 admissions and occupancy is following a Weibull distribution
- Active COVID-19 cases used for calculations are the sum of daily new COVID-19 cases from the last eight weeks

    !!! note 
    
        This assumption has the effect of smoothing the variation seen in daily reported cases over weekends and other irregular periods.

## CDC County-Level Ensemble Model

The **county-level** four-week projection of expected COVID-19 cases used to generate the hospital-level four-week projection makes use of the county-level ensemble model from the Center for Disease Control and Prevention (CDC). The CDC model incorporates diverse modeling algorithms (time-series, SEIRD, etc.) and government and non-government organizations use it.

The **county-level** four-week projection of expected COVID-19 cases is rendered on the following chart when the simulation-based projection is generated:

- [New COVID Cases: 4-Weeks Projection](./charts.md#new-covid-cases-4-weeks-projection)

<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>