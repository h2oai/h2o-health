import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Terminology 

The *COVID-19 Hospital Occupancy Simulator* (**CHOS**) uses several terms across its documentation, and each, in turn, is explained in the below sections.

## CHOS

CHOS stands for *COVID-19 Hospital Occupancy Simulator*. The name of the application. 

## Simulation-based projection 

A simulation-based projection includes: 


- A ==**hospital-level**== four-week projection that includes the following metrics for COVID-19 patients:

	- Daily expected non-ICU occupancy and admissions 
	- Daily expected ICU occupancy and admissions net change 

- A ==**county-level**== four-week projection of expected COVID-19 cases used to generate the ==**hospital-level**== four-week projection

## LOS

LOS stands for *length of stay*. In other words, it refers to how long a patient stays in a hospital as an inpatient. 



***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::