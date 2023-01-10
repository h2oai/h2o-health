import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Predictions workflow 

To generate a disease risk prognostic for a patient or a cohort of patients, you will need to follow the following sequential steps: 

- [Step 1: Import Datasets](#step-1-import-datasets) 
- [Step 2: Run Predictions](#step-2-run-predictions) 
- [Step 3: View Results](#step-3-view-results) 

In the below sections, each step, in turn, is explained in detail.

## Step 1: Import Datasets

As step one of the predictions workflow, Gene Mutation AI enables you to control the process of controlling the datasets. The manipulation of the datasets occurs within the support of Snowflake. 

- To learn about how Snowflake supports Gene Mutation AI, see [Snowflake](snowflake/snowflake.md).
- To learn about datasets in Gene Mutation AI, see [Datasets](datasets/datasets.md).

## Step 2: Run Predictions

To run predictions *Gene Mutation AI* requires particular models built in H2O Driverless AI. 

- To learn about all the H2O Driverless AI models supported within *Gene Mutation AI*, see [Predictions](predictions/predictions.md).

## Step 3: View Results

After running certain predictions sets, *Gene Mutation AI* offers several graphs and plots to understand a patient's prediction in depth. 

- To learn about available graphs and plots, see [Prediction graphs and plots](predictions/predictions.md#prediction-graphs-and-plots) 


***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::