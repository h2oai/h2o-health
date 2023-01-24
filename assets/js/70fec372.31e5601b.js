"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},k=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return a?n.createElement(f,r(r({ref:t},k),{},{components:a})):n.createElement(f,r({ref:t},k))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),l=a(3649);const r={},i="Snowflake",s={unversionedId:"gene-mutation/snowflake/snowflake",id:"gene-mutation/snowflake/snowflake",title:"Snowflake",description:"Connect to Snowflake",source:"@site/docs/gene-mutation/snowflake/snowflake.md",sourceDirName:"gene-mutation/snowflake",slug:"/gene-mutation/snowflake/",permalink:"/h2o-health/gene-mutation/snowflake/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Oshini Nugapitiya",lastUpdatedAt:1674531028,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"Predictions workflow",permalink:"/h2o-health/gene-mutation/predictions-workflow"},next:{title:"Datasets",permalink:"/h2o-health/gene-mutation/datasets/"}},c={},k=(0,l.s)("https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D",{title:s.permalink,version:s.version}),p=[{value:"Connect to Snowflake",id:"connect-to-snowflake",level:2},{value:"Disconnect from Snowflake",id:"disconnect-from-snowflake",level:2},{value:"Change default Snowflake warehouse, DB, schema, and stage",id:"change-default-snowflake-warehouse-db-schema-and-stage",level:2},{value:"Tabs",id:"tabs",level:2},{value:"Explore",id:"explore",level:3},{value:"View Snowflake table",id:"view-snowflake-table",level:3},{value:"Import Snowflake table",id:"import-snowflake-table",level:4},{value:"Models",id:"models",level:3},{value:"Resources",id:"resources",level:3},{value:"Artifacts",id:"artifacts",level:4},{value:"Download artifacts",id:"download-artifacts",level:4}],m={toc:p};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snowflake"},"Snowflake"),(0,o.kt)("h2",{id:"connect-to-snowflake"},"Connect to Snowflake"),(0,o.kt)("p",null,"To connect to your Snowflake account to make use of your data and models, consider the following instructions: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Gene Mutation AI")," menu, click ",(0,o.kt)("strong",{parentName:"li"},"Snowflake"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake account")," box, enter your account identifier."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Username")," box, enter your username. "),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Password")," box, enter your password. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect"),". ",(0,o.kt)("admonition",{parentName:"li",title:"Note ",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Right after connecting to your Snowflake account, you will be required to define a default Snowflake warehouse, DB, schema, and stage."),(0,o.kt)("li",{parentName:"ul"},"When selecting a Snowflake warehouse, DB, schema, and stage in the following steps, the items in the lists will be based on the user's Snowflake account access privileges. ")))),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake warehouse")," list, search or select a warehouse."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake database")," list, search or select a database."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake schema")," list, search or select a shema. "),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake stage")," list, search or select a stage."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Submit"),".")),(0,o.kt)("h2",{id:"disconnect-from-snowflake"},"Disconnect from Snowflake"),(0,o.kt)("p",null,"To disconet from your Snowflake account: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Gene Mutation AI")," menu, click ",(0,o.kt)("strong",{parentName:"li"},"Snowflake"),". "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Disconnect"),".")),(0,o.kt)("h2",{id:"change-default-snowflake-warehouse-db-schema-and-stage"},"Change default Snowflake warehouse, DB, schema, and stage"),(0,o.kt)("p",null,"After connecting to Snowflake and defining a default Snowflake warehouse, DB, schema, and stage, you can change the default values as follows: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Gene Mutation AI")," menu, click ",(0,o.kt)("strong",{parentName:"li"},"Snowflake"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Click here to select warehouse"),". "),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake warehouse")," list, search or select a warehouse."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake database")," list, search or select a database."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake schema")," list, search or select a shema. "),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake stage")," list, search or select a stage."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Submit"),".")),(0,o.kt)("h2",{id:"tabs"},"Tabs"),(0,o.kt)("p",null,"After successfully connecting to Snowflake and defining a default Snowflake warehouse, DB, schema, and stage, the following tabs are available on the Snowflake page: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#explore"},"Explore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#models"},"Models")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#resources"},"Resources"))),(0,o.kt)("h3",{id:"explore"},"Explore"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Explore")," tab will display all the tables available in the default database. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Patient table",src:a(2015).Z,width:"1321",height:"435"})),(0,o.kt)("h3",{id:"view-snowflake-table"},"View Snowflake table"),(0,o.kt)("p",null,"To view a Snowflake table consider the following instructions: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to Snowflake. ",(0,o.kt)("admonition",{parentName:"li",title:"Note ",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To learn how to connect to Snowflake, see ",(0,o.kt)("a",{parentName:"li",href:"#connect-to-snowflake"},"Connect to Snowflake"),"."),(0,o.kt)("li",{parentName:"ul"},"While connecting to Snowflake, remember to select the correct warehouse containing the table you want to view. ")))),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake")," page, click the name of the Snowflake table you want to view. ")),(0,o.kt)("h4",{id:"import-snowflake-table"},"Import Snowflake table"),(0,o.kt)("p",null,"To make a Snowflake table (dataset) available for predictions, you need to import the table. To import a Snowflake table: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to Snowflake. ",(0,o.kt)("admonition",{parentName:"li",title:"Note ",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To learn how to connect to Snowflake, see ",(0,o.kt)("a",{parentName:"li",href:"#connect-to-snowflake"},"Connect to Snowflake"),"."),(0,o.kt)("li",{parentName:"ul"},"While connecting to Snowflake, remember to select the correct warehouse containing the table you want to import. ")))),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake")," page, click the name of the Snowflake table you want to import.\n",(0,o.kt)("img",{alt:"Snowflake page",src:a(3541).Z,width:"1728",height:"1114"})),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Select complete table"),". ")),(0,o.kt)("h3",{id:"models"},"Models"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Models")," tab will display all the models available in the default warehouse. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Models table",src:a(6522).Z,width:"1322",height:"341"})),(0,o.kt)("p",null,"The execution of these models to generate predictions (prognoses) occur within the Snowflake environment. The execution of these models in Snowflake contains scoring data while enabling the use of the scalability of the warehouse to reduce the time to score patients as the solution scales with the warehouse. "),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"  These models refer to models built in H2O Driverless AI. ")),(0,o.kt)("p",null,"If you don't want to use one of the available models in the default Snowflake stage, you can upload a new model. To learn more, see ",(0,o.kt)("a",{parentName:"p",href:"/h2o-health/gene-mutation/predictions/#upload-model"},"Upload model"),"."),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Resources")," tab enables you to access dynamically created ",(0,o.kt)("a",{parentName:"p",href:"#artifacts"},"artifacts")," (e.g., a Jupyter Notebook) from particular Snowflake models. "),(0,o.kt)("h4",{id:"artifacts"},"Artifacts"),(0,o.kt)("p",null,"Available artifacts for a particular Snowflake model are as follows: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowflake_Data_MarketPlace.scala")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowflake.ipynb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowflake.sql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowflake.udf")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowpark.DriverlessAI.ipynb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowpark_Python_native.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowpark_Score.scala")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowpark.scala")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Snowsql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GeneMutation_table_preperation.py"))),(0,o.kt)("h4",{id:"download-artifacts"},"Download artifacts"),(0,o.kt)("p",null,"You can download all generated artifacts for a particular Snowflake model one by one. To download an artifact from a particular Snowflake model: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to Snowflake. ",(0,o.kt)("admonition",{parentName:"li",title:"Note ",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To learn how to connect to Snowflake, see ",(0,o.kt)("a",{parentName:"li",href:"#connect-to-snowflake"},"Connect to Snowflake"),"."),(0,o.kt)("li",{parentName:"ul"},"While connecting to Snowflake, remember to select the correct warehouse containing the model you want to download its artifacts. ")))),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake")," page, click the ",(0,o.kt)("strong",{parentName:"li"},"Resources")," tab. "),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Snowflake models")," list, select the model you want to download its artifacts. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"List resources"),". "),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Resource type")," list, select an artifact.\n",(0,o.kt)("img",{alt:"Resources table",src:a(983).Z,width:"1329",height:"804"}),(0,o.kt)("admonition",{parentName:"li",title:"Note ",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"  To learn about available model artifacts, see ",(0,o.kt)("a",{parentName:"p",href:"#artifacts"},"Artifcts"),". "))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Get data"),". ")),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"Feedback",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:k},"Submit and view feedback for this page")),(0,o.kt)("li",{parentName:"ul"},"Send feedback about H2O Health to ",(0,o.kt)("a",{parentName:"li",href:"mailto:cloud-feedback@h2o.ai"},"cloud-feedback@h2o.ai")))))}u.isMDXComponent=!0},6522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/models_table-533a94a55e39fbf81be7cf8d115b4dda.png"},2015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/patient_table-5227d951734fd423594551713412ad2a.png"},983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources_tab-4c1dc1d38fefd9a10a57785419ce49bf.png"},3541:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowflake-page-5803319221092573f814297dfe0ad021.png"}}]);