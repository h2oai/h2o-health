# :material-tune: Simulation Settings 

As part of the [Simulation Flow](simulation_flow.md), the COVID-19 Hospital Occupancy Simulator ([**CHOS**](./terminology.md#chos)) application enables hospitals to customize the models input data through **personalize hospital** overrides and **future expert estimate** overrides. Through  **future expert estimate** overrides, hospitals can adjust a [simulation-based projection](./terminology.md#simulation-based-projection) to reflect a hospital's specific characteristics and to play out best and worst-case alternatives. The distinct overrides are discussed below: 


- [Overrides: personalize hospital](#overrides-personalize-hospital)
- [Overrides: future expert estimates](#overrides-future-expert-estimates)

## Start Simulation 

To start a simulation, consider the following instructions: 

1. In the [**CHOS**](./terminology.md#chos) navigation menu, click :material-bullseye-arrow: *Simulation*. 
2. In the **State** list, select the *state* in which the hospital resides.
3. In the **County** list, select the *county* in which the hospital resides.
4. (==optional==) Before starting a simulation, you can use **personalize hospital**  or **future expert estimate** overrides.  To learn more about available overrides and how to enable them, see [Overrides: personalize hospital ](#overrides-personalize-hospital) and [Overrides: future expert estimates](#overrides-future-expert-estimates).
5. If you don't want to enable any overrides, click **Show forecast**. 


## Overrides: personalize hospital 

As part of the simulation flow ([step 2](./simulation_flow.md#step-2-review-or-customize-input-data)), a hospital can use the following **personalize hospital** overrides (settings):

- **Avg admissions per week over the past 4 weeks**

    This override defines the admissions average value per week over the past 4-weeks that the models will use to generate the hospital-level four-week projection containing:

    - Daily expected non-ICU occupancy and admissions 
    - Daily expected ICU occupancy and admissions net change



    {++The default value for this override is determined by the calculated average data point values from the past 4-weeks' county-level data on reported admissions due to COVID-19.++}


    ???+ settings "Override Instructions" 

        1. On the :material-bullseye-arrow: **Simulation** page, slide the **Avg admissions per week over the past 4 weeks** slider. 
        2. Click **Apply & Go**.



- **Avg occupancy per week over the past 4 weeks**

    This override defines the average occupancy value per week over the past 4-weeks that the models will use to generate the hospital-level four-week projection containing:

    - Daily expected non-ICU occupancy and admissions 
    - Daily expected ICU occupancy and admissions net change

    {++The default value for this setting is determined by the calculated average data point values from the past 4-weeks' county-level data on reported occupancy due to COVID-19.++}

    ???+ settings "Override Instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, slide the **Avg  occupancy per week over the past 4 weeks** slider.

        2. Click **Apply & Go**.


- **Avg ICU admissions per week over the past 4 weeks** 

    This override defines the average ICU admissions per week over the past 4-weeks that the models will use to generate the hospital-level four-week projection containing:

    - Daily expected non-ICU occupancy and admissions 
    - Daily expected ICU occupancy and admissions net change

    {++The default value for this setting is determined by the calculated average data point values from the past 4-weeks' county-level data on reported admissions due to COVID-19.++}

    ???+ settings "Override Instructions"

        1. On the :material-bullseye-arrow: **Simulation** page, slide the **Avg ICU admissions per week over the past 4 weeks** slider.

        2. Click **Apply & Go**.


### Remove personalize hospital overrides  

To remove the **personalize hospital** overrides and generate a simulation, consider the following instructions: 

1. On the :material-bullseye-arrow: **Simulation** page, click **Reset Defaults & Go**. 


## Overrides: future expert estimates

As part of the simulation flow (step [2](./simulation_flow.md#step-2-review-or-customize-input-data) and [3](./simulation_flow.md#step-3-review-simulation-based-projection)), a hospital can use the following **future expert estimate** overrides (settings):


- **Avg admissions per week**

    This override defines the future expected average value for weekly admissions at the hospital level. 

    ???+ settings "Overrride Instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the following expander arrrow: **Expert future estimates**. 

        2. Slide the following slider: **Avg admissions per week**.

        3. Click **Apply & Go**.

- **Avg net change ICU per week**

 
    This override defines the future expected average value for weekly expected ICU net change admissions at the hospital level.

    ???+ settings "Override Instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the following expander arrrow: **Expert future estimates**. 

        2. Slide the following slider: **Avg net change ICU per week**.

        3. Click **Apply & Go**.


- **Avg COVID cases in the county per week**

    This override defines the future expected average value for weekly COVID-19 cases at the hospital level.

    ???+ settings "Override Instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the following expander arrrow: **Expert future estimates**. 

        2. Slide the following slider: **Avg COVID cases in the county per week**.

        3. Click **Apply & Go**.


- **Avg LOS, non-ICU** 

    
    This override defines the future expected average value for the weekly expected length of stay (LOS) for non-ICU COVID-19 patients at the hospital level.

    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the following expander arrrow: **Expert future estimates**. 

        2. Slide the following slider: **Avg LOS, non-ICU**.

        3. Click **Apply & Go**.


- **Avg LOS, ICU** 


    This override defines the future expected average value for the weekly expected length of stay (LOS) for ICU COVID-19 patients at the hospital level.


    ???+ settings "Override instructions"
    
        1. On the :material-bullseye-arrow: **Simulation** page, click the following expander arrrow: **Expert future estimates**.  

        2. Slide the following slider: **Avg LOS, ICU**.

        3. Click **Apply & Go**.


!!! note

    To learn about the implications of using the above overrides (settings), see  [Adjust simulation to reflect best- and worst-case alternatives](./simulation_flow.md#adjust-simulation-to-reflect-best-and-worst-case-alternatives).

### Remove future expected estimate overrides 

To remove the **future expected estimate** overrides and generate a simulation, consider the following instructions: 


1. On the :material-bullseye-arrow: **Simulation** page, click the following expander arrow: **Expected future averages**. 

2. Click **Reset Defaults & Go**.


<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about [CHOS](./terminology.md#chos) to <niki.athanasiadou@h2o.ai>