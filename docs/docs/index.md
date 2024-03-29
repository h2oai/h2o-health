---
slug: '/'
hide_table_of_contents: true
hide_title: true
title: H2O Health | Docs
description: 'Welcome to the H2O Health documentation'
---

import {interpolate} from '@docusaurus/Interpolate';
import Icon from "@material-ui/core/Icon";
import chos from './logo-chos.png';
import geneMutation from './gene-mutation-ai-logo.png';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# H2O Health | Docs

At [H2O Health](https://h2o.ai/solutions/industry/health/), we build AI apps that solve complex healthcare and life science problems. We are co-innovating with major healthcare organizations to address long-standing and emerging challenges. Many of these solutions are currently offered in preview in the [H2O AI Cloud (HAIC)](https://cloud.h2o.ai/login?referer=%2F). At the same time, built solutions are documented here.

## H2O Health apps (docs)

<br></br>

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

<div class="index-card-row">
  <div class="column">
    <div class="row">
      <img src={chos} alt="" width="200"/> 
  <div class="space">
  <br/>
  <div align="left">

  [Covid-19 Hospital Occupancy Simulator (CHOS)](epidemiology/covid-19-hospital-occupancy-simulator/overview)
  </div>
  </div>
    </div>
  </div>
  <div class="column">
    <div class="row">
      <img src={geneMutation} alt="" width="200"/>
  <div class="space">
  <br/>
  <div align="left">

  [Gene Mutation AI](gene-mutation/overview)
  </div>
  </div>
    </div>
  </div>
</div>

## Navigation

- [Home: ](index.md)Description of the H2O Health Initiative and available apps
- [Access H2O Health Apps: ](access-h2o-health-apps/access-h2o-health-apps.md)Learn how to access H2O Health apps
- [CHOS: ](epidemiology/covid-19-hospital-occupancy-simulator/overview.md)Documentation for CHOS
- [Gene Mutation AI: ](gene-mutation/overview.md)Documentation for Gene Mutation AI
- [Team: ](team.md)A list of H2O makers who contribute to this initiative

***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::
