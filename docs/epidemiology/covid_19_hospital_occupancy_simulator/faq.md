# :material-frequently-asked-questions: FAQ: Frequently Asked Questions 



The COVID-19 Hospital Occupancy Simulator ([**CHOS**](./terminology.md#chos)) application enables hospitals to prepare for patient surges due to COVID-19. Through simulations supported with state-of-the-art forecasting models and the latest county-level data on the reported COVID-19 cases and hospitalizations due to COVID-19, CHOS produces [simulation-based projections](./terminology.md#simulation-based-projection) containing a hospital-level four-week projection that includes:

- Daily expected non-ICU occupancy and admissions for COVID-19 patients 
- Daily expected ICU occupancy and net change admissions for COVID-19 patients 

The [simulation-based projection](./terminology.md#simulation-based-projection) also includes the four-week county-level forecast on expected COVID-19 cases used to generate the hospital-level four-week projections.

Hospitals can better customize the models' data to reflect a hospital's specific characteristics and future expectations through data override; overrides based on expectations about the future allow you to play out different scenarios and generate alternative projections.

With the insights [simulation-based projections](./terminology.md#simulation-based-projection) can provide during public health emergencies like the one we currently experience, CHOS makes the process of managing hospital resources more efficient and less complicated.

The below sections provide answers to frequently asked questions. If you have additional questions, send them to the following email: <niki.athanasiadou@h2o.ai>.

## General 

### What does CHOS stand for?

COVID-19 Hospital Occupancy Simulator.

### How can I use the CHOS app? 

The CHOS app is available on the [H2O AI Cloud](https://cloud.h2o.ai/login?referer=%2F) (HAIC). If you have access to HAIC but are still having trouble finding or running the CHOS app, see [Accessing H2O Health Apps](../../access_h2o_health_apps.md).

## Models 

### What models are used to generate a simulation-based projection? 

[**CHOS**](./terminology.md#chos) uses distinct models to generate a simulation-based projection; for more information, see [Models](models.md).

## Data

### What data do I need to generate a simulation-based projection? 

[**CHOS**](./terminology.md#chos) uses several public data sources to generate a simulation-based projection. For more information see, [Data Files](data_files.md). A simulation-based projection can also be generated using your own data through data overrides; for more information, see [Simulation Settings](simulation_settings.md).

## Charts 

### How can I understand a simulation-based projection? 

[**CHOS**](./terminology.md#chos) provides several simple and interactive charts to understand a  simulation-based projection. For more information, see [Charts](charts.md).




<br>
=== "Feedback"
    - :material-file-outline: <a href="https://github.com/h2oai/h2o-health/issues/new?assignees=5675sp&labels=chos%2Fdocumentation&template=chos_documentation_feedback.md&title=%5BCHOS+DOCS%5D" target="_blank">Submit and view feedback for this page</a>
    - :material-package-variant-closed: Send feedback about [CHOS](./terminology.md#chos) to <niki.athanasiadou@h2o.ai>