import {interpolate} from '@docusaurus/Interpolate';
const feedback = interpolate('https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D', {title: metadata.permalink, version: metadata.version});

# Access H2O Health Apps  


You can access H2O Health apps through the  <a href="https://cloud.h2o.ai/login?referer=%2F" target="_blank" >H2O AI Cloud (HAIC)</a>. To access a particular app:

- [Step 1: Access your account](#step-1-access-your-account)
- [Step 2: Search app](#step-2-search-app)
- [Step 3: Run app](#step-3-run-app)
- [Step 4: Access app instance](#step-4-access-app-instance)


!!! note 

    You can access a particular app through an instance of it. 




## Step 1: Access your account

Access your <a href="https://cloud.h2o.ai/login?referer=%2F" target="_blank" >HAIC</a>  account. 


!!! note

    To obtain a HAIC account, please email <niki.athanasiadou@h2o.ai>.



## Step 2: Search app

In the **HAIC** search bar, search ```name_of_app```, in this case, ```name_of_app``` refers to the name of the app you want to access (e.g., Route Optimizer): 

<figure>
  <img src="../assets/access_h2o_health_apps/search_bar.png" width="1000" alt="Search Bar"/>
</figure>

Now, select the app card, the *app details* page appears containing information about the app. 

!!! note 

    Instead of searching for health apps, you can click the **Healthcare** in the HAIC navigation menu. On the **Healthcare** page, you can explore all available H2O Health apps. 
## Step 3: Run app 

To start an instance, click **Run App**:

<figure>
  <img src="../assets/access_h2o_health_apps/app_home_page.png" width="1000" alt="name_of_app Home Page" />
</figure>

## Step 4: Access app instance

Now, HAIC is starting an instance of the app for you. While you have a starting/running instance, the **Run App** button will change its name to **Go to Instance**. To open the app in a new tab, click **Visit**:

<figure>
  <img src="../assets/access_h2o_health_apps/visit.png" width="300"  alt="Visit" />
</figure>

!!! note 
    
    - In the app instance, several items will be installed. Right after, you will be able to use it. All items are automatically installed when you start an instance.
    - To learn how to pause or terminate an instance, see [Pause or Terminate Instance](#pause-or-terminate-instance). 

## Pause or Terminate Instance

An app instance can be paused or terminated. Pausing the instance saves computational time and resources. Terminating an instance will delete the instance permanently. 

!!! note 

    - Customers pay for <a href="https://cloud.h2o.ai/login?referer=%2F" target="_blank" >H2O AI Cloud</a>  via AI Units so that as they consume more resources, they pay more. 



=== "Pause"

    You can **Pause** an instance in the *app details* page:

    1. In the *app details* page, click the **App Instances** tab. 
    2. Locate your instance row.
    3. Click **Pause**.

    <figure>
      <img src="../assets/access_h2o_health_apps/pause.png" width="1000" alt="Pause" />
    </figure>

    You can also **Pause** an instance in the **My Instances** page:


    1. In the **HAIC** menu, select **My Instances**.
    2. Locate your instance row.
    3. Click **Pause**.

    <figure>
      <img src="../assets/access_h2o_health_apps/pause_instance.png" width="1000" alt="Pause Instance" />
    </figure>



=== "Terminate"

    You can **Terminate** an instance in the *app details* page:
    
    1. In the *app details* page, click the **App Instances** tab. 
    2. Locate your instance row. 
    3. Click :material-chevron-down: **Expand**. 
    2. Click **Terminate**.

    <figure>
      <img src="../assets/access_h2o_health_apps/terminate.png" width="1000" alt="Pause Terminate" />
    </figure>

    You can also **Terminate** an instance in the **My Instances** page: 

    1. In the **HAIC** menu, select **My Instances**.
    2. Locate your instance row.
    3. Click :material-chevron-down: **Expand**. 
    4. Click **Terminate**.

    <figure>
      <img src="../assets/access_h2o_health_apps/terminate_instance.png" width="1000" alt="Pause Instance" />
    </figure>





***
:::note Feedback
  - <a href={feedback}>Submit and view feedback for this page</a>
  - Send feedback about H2O Health to <cloud-feedback@h2o.ai>
:::







