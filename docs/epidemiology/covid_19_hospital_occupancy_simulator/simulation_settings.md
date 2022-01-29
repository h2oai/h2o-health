# :material-tune: Simulation Settings 

As part of the [Simulation Flow](simulation_flow.md), the COVID-19 Hospital Occupancy Simulator (CHOS) application enables hospitals to customize the input data used to generate a simulation-based projection through **personalize hospital** overrides and overrides under the **expected future averages** category. Through overrides under *expected future averages*, hospitals can adjust a simulation-based projection to play out best and worst-case alternatives. The distinct overrides are 
discussed below: 

- [Overrides: personalize hospital](#overrides-personalize-hospital)
- [Overrides:expected future averages (avg)](#overrides-expert-future-estimates)


!!! note 

    After specifying the state and county in which the hospital resides, a hospital can specify the above overrides. To learn more, see [Prepare simulation: specify hospital state and county](#prepare-simulation-specify-hospital-state-and-county)


## Prepare simulation: specify hospital state and county  

[As the first step in the simulation flow](./simulation_flow.md#step-1-select-state-and-county), a hospital needs to specify its state and county. To select a state and county, consider the following instructions: 

1. In the **CHOS** navigation menu, click :material-bullseye-arrow: *Simulation*. 
2. In the **State** list, select the *state* in which the hospital resides.
3. In the **County** list, select the *county* in which the hospital resides.

## Overrides: personalize hospital 


[As the second step in the simulation flow](./simulation_flow.md#step-2-review-or-customize-input-data), a hospital can use the following **personalize hospital** overrides:

- **Avg admissions per week over the past 8 weeks**

    Description.....


    ???+ settings "Modification instructions" 

        On the :material-bullseye-arrow: **Simulation** page, slide the **Avg admissions per week over the past 8 weeks** slider. 



- **Avg occupancy per week over the past 8 weeks**

    Description.....

    ???+ settings "Modification instructions"
    
        On the :material-bullseye-arrow: **Simulation** page, slide the **Avg  occupancy per week over the past 8 weeks** slider.


- **Avg ICU admissions per week over the past 8 weeks** 

    Description.....

    ???+ settings "Modification instructions"

        On the :material-bullseye-arrow: **Simulation** page, slide the **Avg ICU admissions per week over the past 8 weeks** slider.


### Reset override values 

To reset the **personalize hospital** override values, consider the following instructions: 

1. On the :material-bullseye-arrow: **Simulation** page, click **Reset Defaults & Go**. 

    !!! note 

        Clicking **Reset Defaults & Go** will generate a simulation-based projection. At the same time, average data point values will be used, which are calculated using the past 8-weeks county-level data on reported COVID-19 cases and several metrics around hospitalization due to COVID-19.

## Overrides: expected future averages (avg)

[As the fourth step in the simulation flow](./simulation_flow.md#step-4-optional-adjust-simulation-to-reflect-best-and-worst-case-alternatives), a hospital can use overrides under the *expected future averages* category:


- **Expected avg admissions per week**

    Description.....

    ???+ settings "Modification instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected avg admissions per week** slider.

- **Expected ICU net change avg per week**


    Description.....

    ???+ settings "Modification instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected ICU net change avg per week** slider.


- **Expected avg of COVID-19 cases per week**

    Description.....

    ???+ settings "Modification instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected avg of COVID-19 cases per week** slider.

- **Expected LOS avg for non-ICU patients** 


    Description.....

    ???+ settings "Modification instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected LOS avg for non-ICU patients** slider.

- **Expected LOS avg for ICU patients** 


    Description.....

    ???+ settings "Modification instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected LOS avg for ICU patients** slider.



### Reset override values 

To reset the overrides under the **Expected future averages** category, consider the following instructions: 



1. On the :material-bullseye-arrow: **Simulation** page, click the **Expected future averages** expander arrow. 

2. Click **Reset Defaults & Go**.

    !!! note 

        Clicking **Reset Defaults & Go** will generate a simulation-based projection. At the same time, the models will ignore any modifications to the overrides under the **Expected future averages** category. 


<br>
=== "Feedback"
    - :material-file-outline: <a href="" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>
