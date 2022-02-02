# Models



## CDC County-Level Ensemble Model

The **county-level** four-week projection of expected COVID-19 cases used to generate the hospital-level four-week projection makes use of the county-level ensemble model from the Center for Disease Control and Prevention (CDC). The CDC model incorporates diverse modeling algorithms (time-series, SEIRD, etc.) and government and non-government organizations use it.
## Modeling Assumptions 

The state-of-the-art forecasting models rely on certain assumptions to effectively generate a simulation-based projection. Assumptions are as follows: 

- The distribution for admissions and occupancy as a percent of active COVID-19 cases is stable within periods of eight weeks or less 
- ICU and non-ICU COVID-19 admissions and occupancy is following a Weibull distribution
- Active COVID-19 cases used for calculations are the sum of daily new COVID-19 cases from the last eight weeks

    !!! note 
    
        This assumption has the effect of smoothing the variation seen in daily reported cases over weekends and other irregular periods.


<br>
=== "Feedback"
    - :material-file-outline: <a href="" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>