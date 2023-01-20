import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Models

The models used to generate a simulation-based projection rely on certain [modeling assumptions](#modeling-assumptions). The county-level four-week projection of expected COVID-19 cases relies on the [CDC County-Level Ensemble Model](#cdc-county-level-ensemble-model). 
## Modeling assumptions 

The state-of-the-art forecasting models rely on certain assumptions to effectively generate a simulation-based projection. Assumptions are as follows: 

- The distribution for admissions and occupancy as a percent of active COVID-19 cases is stable within periods of eight weeks or less 
- ICU and non-ICU COVID-19 admissions and occupancy is following a Weibull distribution
- Active COVID-19 cases used for calculations are the sum of daily new COVID-19 cases from the last eight weeks
  :::info Note 
    This assumption has the effect of smoothing the variation seen in daily reported cases over weekends and other irregular periods.
  :::
## CDC county-level ensemble model

The **county-level** four-week projection of expected COVID-19 cases used to generate the hospital-level four-week projection makes use of the county-level ensemble model from the Center for Disease Control and Prevention (CDC). The CDC model incorporates diverse modeling algorithms (time-series, SEIRD, etc.) and government and non-government organizations use it.

The **county-level** four-week projection of expected COVID-19 cases is rendered on the following chart when the simulation-based projection is generated:

- [New COVID Cases: 4-Weeks Projection](charts/charts.md#new-covid-cases-4-weeks-projection-county-level)

***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::