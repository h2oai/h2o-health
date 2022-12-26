import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Charts

You can understand a projection through several interactive and simple charts. The following charts are available when a simulation generates a [simulation-based projection](./terminology.md#simulation-based-projection): 

- [New COVID Cases: 4-Weeks Projection (county-level)](#new-covid-cases-4-weeks-projection-county-level)
- [Occupancy and admissions, non-ICU](#occupancy-and-admissions-non-icu)
- [Occupancy and net change, ICU](#occupancy-and-net-change-icu)
- [Length of stay, non-ICU](#length-of-stay-non-icu) 
- [Length of stay, ICU](#length-of-stay-icu)


In the below sections, each chart, in turn, is explained in detail. 

## New COVID Cases: 4-Weeks Projection (county-level)

This chart provides a county-level four-week projection of expected COVID-19 cases. 

<figure>
  <img src="../assets/charts/covid_19_forecast.png" width="500" alt="FNew COVID Cases: 4-Weeks Projection (county-level)"/>
</figure>

!!! note 

    This county-level four-week projection of expected COVID-19 cases uses the CDC county-level ensemble model. To learn more, see [CDC County-Level Ensemble Model](./models.md#cdc-county-level-ensemble-model).
## Occupancy and admissions, non-ICU

This chart provides a hospital-level four-week projection of expected occupancy and admissions for non-ICU COVID-19 patients. We can observe the hospital-level past 8-weeks occupancy and admissions rate to the left of the vertical dash line. And to the right of the dashed line, we can observe the hospital-level four-week projection.

<figure>
  <img src="../assets/charts/occupancy_and_admissions_non_icu.png" width="600" alt="Occupancy and admissions, non-ICU"/>
</figure>


## Occupancy and net change, ICU

This chart provides a hospital-level four-week projection of expected occupancy and net-change admissions for ICU COVID-19 patients. We can observe the hospital-level past 8-weeks occupancy and net-change admissions rate to the left of the vertical dash line. And to the right of the dashed line, we can observe the hospital-level four-week projection.

<figure>
  <img src="../assets/charts/occupancy_and_net_change_icu.png" width="600" alt="Occupancy and net change, ICU"/>
</figure>

## Length of stay, non-ICU

This histogram provides a nationwide (USA) random average sample of the length of stay (LOS) for non-ICU COVID-19 patients. 

<figure>
  <img src="../assets/charts/length_of_stay_non_icu.png" width="600" alt="Length of stay, non-ICU"/>
</figure>


## Length of stay, ICU

This histogram provides a nationwide (USA) random average sample of the length of stay (LOS) for ICU COVID-19 patients. 



<figure>
  <img src="../assets/charts/length_of_stay_icu.png" width="600" alt="Length of stay, ICU"/>
</figure>



***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::
