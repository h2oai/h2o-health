import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Data Files 

[CHOS](./terminology.md#chos) works with [simulation-based projections](./terminology.md#simulation-based-projection) that are based on relevant variables extracted from specific  **historical hospitalization datasets** (data files). Variables: 

- Average weekly COVID-19 non-ICU admissions in the facility over the past four-week period. 
- Average wekly net change in ICU admissions in the facility over the past four-week period. 
- Average weekly occupancy by ICU and non-ICU COVID-19 patients in the facility over the past four-week period. 
- Average Length of Stay (LOS) in the facility (defaults to the latest national average). 

Datasets: 

- [Hospital occupancy](#hospital-occupancy)
- [COVID-19 cases](#covid-19-cases)
- [COVID-19 forecast](#covid-19-forecast)

To download a dataset: 

1. On the **CHOS** navigation menu, click one of the above datasets.  
2. Click **Download full table**. 


Details on the available fields in each of these three datasets are offered below.

## Hospital occupancy 

The **Hospital occupancy** file contains weekly (Friday to Thursday) data on hospital utilization. The data comes from the US Department of Health and Human Services (HHS), and includes all hospitals in each county that are registered with the Center for Medicare & Medicaid Services (CMS).


| Column     | Description                          |
| ----------- | ------------------------------------ |
| `non_icu_covid_patients`     | Weekly number of non-ICU COVID-19 patients in the county |
| `icu_covid_patients`    |     Weekly number of non-ICU COVID-19 patients in the county |
| `previous_day_admission_all`    |  Total number of COVID-19 patients admitted in the reporting county |
| `n_hospitals`    |    Total number of reporting hospitals in the county |
| `non_icu_covid_patients_per_hospital`    |  Weekly average number of non-ICU COVID-19 patients in each hospital in the county |
| `icu_covid_patients_per_hospital`    |  Weekly average number of ICU COVID-19 patients in each hospital in the county  |
| `previous_day_admission_all_per_hospital`    |   Average number of COVID-19 patients admitted to each hospital in the reporting county |


## COVID-19 cases 

The **COVID-19 cases** file contains county-level data for reported COVID-19 cases that are updated daily. The data comes from the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University.


| Column      | Description                          |
| ----------- | ------------------------------------ |
| `start_date`      | Date the reported week starts    |
| `state`     | Name of the US State   |
| `county`    |   Name of the US County  |
| `covid_cases`      |   Total weekly reported COVID-19 cases in each county   |


## COVID-19 forecast

The **COVID-19 forecast** file contains county-level weekly forecasts of expected COVID-19 cases. Forecasts are obtained through the [CDC county-level ensemble model](./models.md#cdc-county-level-ensemble-model) and are updated weekly (Friday to Thursday). 

| Column      | Description                          |
| ----------- | ------------------------------------ |
| `C0`      |  Index column     |
| `forecast_start_date`      |  Date the reported week in the future starts     |
| `location`     | FIPS code of the county   |
| `covid_cases_forecast`    |  Total weekly forecast COVID-19 cases in each county   |


***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::