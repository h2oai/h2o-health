# :material-file-outline: Data Files 



The models generate a [simulation-based projection](./terminology.md#simulation-based-projection) after certain model variables obtain an average value when calculating historical data. Such historical data points are as follows: 


- Past eight-week average of all COVID-19 non-ICU admissions at the county-level 

- Past eight-week admissions net change average of all  ICU patients at the county-level

- Past eight-week length of stay (LOS) average of all ICU and non-ICU COVID-19 patients at the county-level 

- Past eight-week occupancy average of all ICU and non-ICU COVID-19 patients at the county-level 

- A county-level four-week projection of expected COVID-19 cases


The above averages are obtain from the following data files in [CHOS](./terminology.md#chos): 

- [Hospital occupancy](#hospital-occupancy) 
- [COVID-19 cases](#covid-19-cases)

The information for the county-level four-week projection of expected COVID-19 cases is obtain from the following data file in [CHOS](./terminology.md#chos): 

- [COVID-19 forecast](#covid-19-forecast)


In the below sections, each data file, in turn, is explained. 
## Hospital occupancy 

The **Hospital occupancy** file contains facility-level data for hospital utilization that is updated weekly (Friday to Thursday). The data comes from the US Department of Health and Human Services (HHS), including all hospitals registered with the Center for Medicare & Medicaid Services (CMS).

The data is rendered in a table, and the columns are as follows: 


| Name      | Description                          |
| ----------- | ------------------------------------ |
| `CO`      |       |
| `fips_code`     | Federal Information Processing Standard (FIPS) code of the location of the hospital |
| `start_date`    |   Delete resource |
| `county`      |   County of the hospital  |
| `non_icu_covid_patients`     | Number of non-ICU COVID-19 patients  |
| `icu_covid_patients`    |     Number of ICU COVID-19 patients |
| `previous_day_admission_all`    |  Number of COVID-19 patients admitted to the hospital  |
| `n_hospitals`    |    |
| `non_icu_covid_patients_per_hospital`    |  Number of non-ICU COVID-19 patients at the hospital |
| `icu_covid_patients_per_hospital`    |  Number of ICU COVID-19 patients at the hospital  |
| `previous_day_admission_all_per_hospital`    |    |


### Download 

To download the **Hospital occupancy** data file, consider the following instructions: 

1. On the [**CHOS**](./terminology.md#chos) navigation menu, click **Hospital occupancy**. 

2. Click **Download full table**. 


## COVID-19 cases 

The **COVID-19 cases** file contains county-level data for reported COVID-19 cases that are updated weekly (Friday to Thursday). The data comes from the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University.

The data is rendered in a table, and the columns are as follows: 


| Name      | Description                          |
| ----------- | ------------------------------------ |
| `start_date`      |       |
| `state`     | Name of the state   |
| `county`    |   Name of the county  |
| `covid_cases`      |   Number of reported COVID-19 cases   |

### Download 

To download the **COVID-19 cases** data file, consider the following instructions: 

1. On the [**CHOS**](./terminology.md#chos) navigation menu, click **COVID-19 cases**. 

2. Click **Download full table**. 

## COVID-19 forecast

The **COVID-19 forecast** file contains county-level weekly forecasts of expected COVID-19 cases. Forecasts are updated weekly (Friday to Thursday). 

Forecasts are rendered in a table, and the columns are as follows: 

| Name      | Description                          |
| ----------- | ------------------------------------ |
| `forecast_start_date`      |       |
| `location`     | Name of the state   |
| `covid_cases_forecast`    |     |

### Download 

To download the **COVID-19 forecast** data file, consider the following instructions: 

1. On the [**CHOS**](./terminology.md#chos) navigation menu, click **COVID-19 forecast**. 

2. Click **Download full table**. 

<br>
=== "Feedback"
    - :material-file-outline: <a href="" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about H2O Healthcare to <niki.athanasiadou@h2o.ai>
