# :material-tune: Simulation Settings 

As part of the [Simulation Flow](simulation_flow.md), the COVID-19 Hospital Occupancy Simulator ([**CHOS**](./terminology.md#chos-covid-19-hospital-occupancy-simulator])) application enables hospitals to customize the input data used to generate a simulation-based projection through **personalize hospital** overrides and **expert future estimates** overrides. Through  **expert future estimates** overrides, hospitals can adjust a simulation-based projection to reflect a hospital's specific characteristics and to play out best and worst-case alternatives. The distinct overrides are discussed below: 



- [Overrides: personalize hospital](#overrides-personalize-hospital)
- [Overrides: expert future estimates](#overrides-expert-future-estimates)

## Start Simulation 

To start a simulation, consider the following instructions: 

1. In the [**CHOS**](./terminology.md#chos-covid-19-hospital-occupancy-simulator]) navigation menu, click :material-bullseye-arrow: *Simulation*. 
2. In the **State** list, select the *state* in which the hospital resides.
3. In the **County** list, select the *county* in which the hospital resides.
4. (==optional==) Before starting a simulation, you can use **personalize hospital**  or **expert future estimates** overrides.  To learn more about available overrides and how to enable them, see [Overrides: personalize hospital ]() and [Overrides: expert future estimates]().
5. If you don't want to enable any overrides, click **Show forecast**. 


## Overrides: personalize hospital 

As part of the simulation flow ([step 2](./simulation_flow.md#step-2-review-or-customize-input-data)), a hospital can use the following **personalize hospital** overrides (settings):

- **Avg admissions per week over the past 4 weeks**

    Defines the admissions average value per week over the past 4-weeks that the models will use to generate the hospital-level four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients.

    The default value for this setting is determined by the calculated average data point values from the past 4-weeks' county-level data on reported admissions due to COVID-19.


    ???+ settings "Override instructions" 

        1. On the :material-bullseye-arrow: **Simulation** page, slide the **Avg admissions per week over the past 4 weeks** slider. 
        2. Click **Apply & Go**.



- **Avg occupancy per week over the past 4 weeks**

    Defines the average occupancy value per week over the past 4-weeks that the models will use to generate the hospital-level four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients.

    The default value for this setting is determined by the calculated average data point values from the past 4-weeks' county-level data on reported occupancy due to COVID-19.

    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, slide the **Avg  occupancy per week over the past 4 weeks** slider.

        2. Click **Apply & Go**.


- **Avg ICU admissions per week over the past 4 weeks** 

    Defines the average ICU admissions per week over the past 4-weeks that the models will use to generate the hospital-level four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. 

    The default value for this setting is determined by the calculated average data point values from the past 4-weeks' county-level data on reported admissions due to COVID-19. 

    ???+ settings "Override instructions"

        1. On the :material-bullseye-arrow: **Simulation** page, slide the **Avg ICU admissions per week over the past 4 weeks** slider.

        2. Click **Apply & Go**.


### Remove Override Values 

To remove the **personalize hospital** override values, consider the following instructions: 

1. On the :material-bullseye-arrow: **Simulation** page, click **Reset Defaults & Go**. 

    !!! note 

        Clicking **Reset Defaults & Go** will generate a simulation-based projection. At the same time, average data point values will be used, which are calculated using the past 4-weeks county-level data on reported COVID-19 cases and several metrics around hospitalization due to COVID-19.

## Overrides: future expert estimates

As part of the simulation flow (step [2](./simulation_flow.md#step-2-review-or-customize-input-data) and [3](./simulation_flow.md#step-3-review-simulation-based-projection)), a hospital can use the following **expert future estimates** overrides (settings):


- **Expected avg admissions per week**

    Defines the weekly expected admissions average value at the hospital level that the simulation will use to modify the four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. As a result, a new four-week projection will be generated.

    ???+ settings "Overrride instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected avg admissions per week** slider.

        3. Click **Apply & Go**.


- **Expected ICU net change avg per week**


    Defines the weekly expected ICU net change admissions average value at the hospital level that will be used to modify the four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. As a result, a new four-week projection will be generated. 


    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected ICU net change avg per week** slider.

        3. Click **Apply & Go**.


- **Expected avg of COVID-19 cases per week**

    Defines the weekly expected average value of COVID-19 cases at the hospital level that will be used to modify the four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. As a result, a new four-week projection will be generated. 

    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected avg of COVID-19 cases per week** slider.

        3. Click **Apply & Go**.


- **Expected LOS avg for non-ICU patients** 

    
    Defines the weekly expected length of stay (LOS) average value for non-ICU COVID-19 patients at the hospital level that will be used to modify the four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. As a result, a new four-week projection will be generated.

    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected LOS avg for non-ICU patients** slider.

        3. Click **Apply & Go**.


- **Expected LOS avg for ICU patients** 


    Defines the weekly expected length of stay (LOS) average value for ICU COVID-19 patients at the hospital level that will be used to modify the four-week projection of expected ICU and non-ICU admissions and occupancy for COVID-19 patients. As a result, a new four-week projection will be generated.


    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the **expected future averages** expander arrow. 

        2. Slide the **Expected LOS avg for ICU patients** slider.

        3. Click **Apply & Go**.


!!! note

    To learn about the implications of using the above overrides (settings), see  [Step 4 (optional): Adjust simulation to reflect best- and worst-case alternatives]().

### Remove Override Values 

To remove the overrides under the **Expected future averages** category, consider the following instructions: 



1. On the :material-bullseye-arrow: **Simulation** page, click the **Expected future averages** expander arrow. 

2. Click **Reset Defaults & Go**.

    !!! note 

        Clicking **Reset Defaults & Go** will generate a simulation-based projection. At the same time, the models will ignore any modifications to the overrides under the **Expected future averages** category. 


<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about [**CHOS**](./terminology.md#chos-covid-19-hospital-occupancy-simulator) to <niki.athanasiadou@h2o.ai>
