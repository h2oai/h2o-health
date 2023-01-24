"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(3649);const o={},l="Predictions",s={unversionedId:"gene-mutation/predictions/predictions",id:"gene-mutation/predictions/predictions",title:"Predictions",description:"Generate predictions",source:"@site/docs/gene-mutation/predictions/predictions.md",sourceDirName:"gene-mutation/predictions",slug:"/gene-mutation/predictions/",permalink:"/h2o-health/gene-mutation/predictions/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Oshini Nugapitiya",lastUpdatedAt:1674531028,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"Datasets",permalink:"/h2o-health/gene-mutation/datasets/"},next:{title:"Team",permalink:"/h2o-health/gene-mutation/team"}},p={},d=(0,r.s)("https://github.com/h2oai/docs-issues-requests/issues/new?assignees=5675sp&labels=area%2Fdocumentation%2C+h2o-health%2C+haic-app&body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20H2O%20Health%0A-%20Application%20version%3A%20{version}%0A-%20Page%20title%3A%20{title}%20&title=%5BHAIC-APP%5D",{title:s.permalink,version:s.version}),c=[{value:"Generate predictions",id:"generate-predictions",level:2},{value:"Upload model",id:"upload-model",level:2},{value:"Overwrite model",id:"overwrite-model",level:3},{value:"Prediction(s) table",id:"predictions-table",level:2},{value:"View individual prediction",id:"view-individual-prediction",level:3},{value:"Drift detection",id:"drift-detection",level:2},{value:"Prediction graphs and plots",id:"prediction-graphs-and-plots",level:2},{value:"Gauge",id:"gauge",level:3},{value:"Shapley graph",id:"shapley-graph",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Sankey plot",id:"sankey-plot",level:3},{value:"Radar plot",id:"radar-plot",level:3},{value:"Patient (prediction) data",id:"patient-prediction-data",level:3}],m={toc:c};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"predictions"},"Predictions"),(0,i.kt)("h2",{id:"generate-predictions"},"Generate predictions"),(0,i.kt)("p",null,"To generate a disease prediction for a patient or a set of disease predictions for a cohort of patients, consider the following instructions: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Gene Mutation AI")," menu, click ",(0,i.kt)("strong",{parentName:"li"},"Predictions"),". "),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Snowflake model")," list, select one of the available models from the Snowflake stage.",(0,i.kt)("admonition",{parentName:"li",title:"note ",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Beyond the available models, you can upload your model. To learn how to upload your model, see ",(0,i.kt)("a",{parentName:"li",href:"#upload-model"},"Upload model"),". "),(0,i.kt)("li",{parentName:"ul"},"The delay after this step is because the application looks to tables that match this model and generates SQL dynamically based on the model. Otherwise, the user may not know which table(s) to use for a specific model.")))),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Snowflake table")," box, select one of the available Snowflake tables that match the selected model."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Predict"),".")),(0,i.kt)("admonition",{title:"note  ",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  After generating predictions, you can start all over. To start all over and generate fresh predictions:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Predictions workflow")," card, click ",(0,i.kt)("strong",{parentName:"li"},"Restart"),".  "))),(0,i.kt)("h2",{id:"upload-model"},"Upload model"),(0,i.kt)("p",null,"If you don't want to use one of the available models in the default Snowflake stage, you can upload a new model."),(0,i.kt)("p",null,"To upload a new model, consider the following instructions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Gene Mutation AI")," menu, click ",(0,i.kt)("strong",{parentName:"li"},"Predictions"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Experiment name")," box, enter a name for the experiment. "),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Browse..."),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Upload an experiment"),".")),(0,i.kt)("admonition",{title:"note ",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  The model you upload should refer to the experiment ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file generated by H2O Driverless AI when a model is trained. ")),(0,i.kt)("h3",{id:"overwrite-model"},"Overwrite model"),(0,i.kt)("p",null,"To overwrite an uploaded model, consider the following instructions: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("a",{parentName:"li",href:"#upload-model"},"uploading a model"),", select the ",(0,i.kt)("strong",{parentName:"li"},"Overwrite experiment (if exists)")," checkbox.")),(0,i.kt)("h2",{id:"predictions-table"},"Prediction(s) table"),(0,i.kt)("p",null,"You can view a generated disease prediction for a patient or a set of disease predictions for a cohort of patients in the prediction(s) table. The prediction(s) table can be viewed when the prediction(s) are complete. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generate patient prognosis",src:a(386).Z,width:"1314",height:"504"})),(0,i.kt)("p",null,"The columns of the prediction(s) table are as follows: "),(0,i.kt)("center",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Column"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[TARGET.1] Risk")),(0,i.kt)("td",{parentName:"tr",align:null},"A prediction in a percentage format that has been scaled from a classification probability using an isotonic regression")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[PLOT] Risk")),(0,i.kt)("td",{parentName:"tr",align:null},"A link to a description prognosis containing plots and graphs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PATIENT_ID")),(0,i.kt)("td",{parentName:"tr",align:null},"The numerical ID identifying a particular patient")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H2OPREDICTION")),(0,i.kt)("td",{parentName:"tr",align:null},"Both classification probabilities (1 or 0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H2OSHAPLEY")),(0,i.kt)("td",{parentName:"tr",align:null},"The values for all local and global features that are rendered in the patient's Shapley plot"))))),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  The above columns are not the only ones; besides those above, you will find several other columns that refer to the feature names and values from the patient's data (genes). ")),(0,i.kt)("h3",{id:"view-individual-prediction"},"View individual prediction"),(0,i.kt)("p",null,"To view detailed explanations into a prediction, consider the following instructions: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("em",{parentName:"li"},"Predictions(s) table"),", identify the prediction row you want to view, click ",(0,i.kt)("strong",{parentName:"li"},"Explore this patient\u2019s result"),".",(0,i.kt)("admonition",{parentName:"li",title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn about the graph and chart explanations of a prediction (prognosis), see ",(0,i.kt)("a",{parentName:"p",href:"#prediction-graphs-and-plots"},"Prediction graphs and plots"),".")))),(0,i.kt)("h2",{id:"drift-detection"},"Drift detection"),(0,i.kt)("p",null,"Any time a new prediction or a set of predictions are generated, you can observe whether data drift was detected. To see whether the data of a prediction drifted from the one the used model used, consider the following instructions: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Drift detection")," expander arrow when ",(0,i.kt)("a",{parentName:"li",href:"#view-individual-prediction"},"viewing an individual prediction"),".\n",(0,i.kt)("img",{alt:"Drift detection",src:a(1020).Z,width:"1319",height:"260"}),(0,i.kt)("admonition",{parentName:"li",title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  In general, drift detection indicates whether the patient cohort or single patient is ",(0,i.kt)("em",{parentName:"p"},"consistent")," with the trained model. The underlying model could be less reliable if drift is detected, and you should take specific maintenance actions. The absence of drift is evident that the model has the same performance during training. ")))),(0,i.kt)("h2",{id:"prediction-graphs-and-plots"},"Prediction graphs and plots"),(0,i.kt)("p",null,"Certain graphs and plots are provided to clarify and understand a prediction. Such graphs and plots are as follows: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#gauge"},"Gauge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#shapley-graph"},"Shapley graph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#histogram"},"Histogram")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sankey-plot"},"Sankey plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#radar-plot"},"Radar plot"))),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  These graphs and plots evaluate a patient's risk, the most significant genes contributing to the reported risk, and a gene-by-gene comparison to similar patients. It also offers metrics to identify potential anomalies that might be of concern.")),(0,i.kt)("h3",{id:"gauge"},"Gauge"),(0,i.kt)("p",null,"The Gauge indicates whether the patient has been predicted to be predisposed for ",(0,i.kt)("em",{parentName:"p"},"HIGH")," or ",(0,i.kt)("em",{parentName:"p"},"LOW")," ",(0,i.kt)("em",{parentName:"p"},"risk")," to the disease the selected model classifies. As well, within the Gauge, a prediction value is displayed. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drift detection",src:a(8856).Z+"#center",width:"502",height:"392"})),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Above the Gauge, a text explanation is provided, identifying the determinant gene name for the prediction value. ")),(0,i.kt)("h3",{id:"shapley-graph"},"Shapley graph"),(0,i.kt)("p",null,"The Shapley graph shows the patient\u2019s genetic contribution to the reported risk (grey) compared to the average contributions across the cohort (yellow). "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grey bars: ",(0,i.kt)("em",{parentName:"li"},"local")),(0,i.kt)("li",{parentName:"ul"},"Yellow bars: ",(0,i.kt)("em",{parentName:"li"},"global"))),(0,i.kt)("p",null,"Each bar is one gene of the top 10 most contributing genes for a particular patient. The Shapley bars can be positive or negative (opposite directions), indicating a high or low-risk contribution, respectively."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drift detection",src:a(3860).Z,width:"934",height:"864"})),(0,i.kt)("h3",{id:"histogram"},"Histogram"),(0,i.kt)("p",null,"The histogram displays an evaluation of how confident you should be in declaring a patient with a specific risk score (",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#gauge"},"Gauge")),") as ",(0,i.kt)("strong",{parentName:"p"},"HIGH")," or ",(0,i.kt)("strong",{parentName:"p"},"LOW-RISK"),". Few points: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The histogram can also present how risk is distributed across an entire patient cohort."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LOW RISK")," is marked with green and ",(0,i.kt)("strong",{parentName:"li"},"HIGH RISK")," with red."),(0,i.kt)("li",{parentName:"ul"},"Gene Mutation AI will mark the prediction value for the in view patient with a red/green ping. "),(0,i.kt)("li",{parentName:"ul"},"The further right a ",(0,i.kt)("strong",{parentName:"li"},"HIGH RISK")," patient is, the better one can feel about the given prediction. On the other side, the further left a ",(0,i.kt)("strong",{parentName:"li"},"LOW RISK")," patient is, the better.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drift detection",src:a(496).Z,width:"1130",height:"652"})),(0,i.kt)("h3",{id:"sankey-plot"},"Sankey plot"),(0,i.kt)("p",null,"The Sankey plot helps you understand the patient profile. The plot displays the groups of patients (",(0,i.kt)("strong",{parentName:"p"},"HIGH")," or ",(0,i.kt)("strong",{parentName:"p"},"LOW-RISK"),"or ",(0,i.kt)("strong",{parentName:"p"},"UNCERTAIN"),") with which the selected patient is most similar. A mixture of different groups of similar patients indicates that the patient has diverged from the average assigned risk group. "),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  The 20 most similar patients are selected using a similarity algorithm on all the cohort genes.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drift detection",src:a(4206).Z,width:"1366",height:"572"})),(0,i.kt)("h3",{id:"radar-plot"},"Radar plot"),(0,i.kt)("p",null,"The radar plot explains the gene-level similarities and differences between the selected patient and the 20 most similar patients in the cohort. The results are presented comparatively for the different risk groups. A group can be selected or deselected by clicking on the corresponding label at the plot\u2019s legend."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drift detection",src:a(4609).Z,width:"1022",height:"974"})),(0,i.kt)("h3",{id:"patient-prediction-data"},"Patient (prediction) data"),(0,i.kt)("p",null,"When viewing the graphs and plots of a prediction, you can also see the features and values used for scoring. To view the features and values, consider the following instructions: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Patient Data"),"  arrow when viewing an individual prediction.\n",(0,i.kt)("img",{alt:"Patient data",src:a(410).Z,width:"1314",height:"468"}))),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Feedback",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:d},"Submit and view feedback for this page")),(0,i.kt)("li",{parentName:"ul"},"Send feedback about H2O Health to ",(0,i.kt)("a",{parentName:"li",href:"mailto:cloud-feedback@h2o.ai"},"cloud-feedback@h2o.ai")))))}h.isMDXComponent=!0},8856:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gauge-0f5e1e90e29dba4c120aafc7c02a71f3.png"},496:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/histogram-9c9b2a93b5592b06216722d4eb5df478.png"},410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/patient_data-72aed2c1bd100d36fefa1a0c8c9b052a.png"},1020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predictions_for_patient-f195e72fdb2c1cc123538bbaa5dd519a.png"},386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predictions_workflow-55ef353e47eb9a33a9cde33beab07e37.png"},4609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/radar-plot-21be0c3d15e01af2995854d5dfc7827d.png"},4206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sankey-plot-71f46e42816b16dbb8c9f08671098295.png"},3860:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/shapley-graph-7ba362776d1fa11723143b481ec65fb2.png"}}]);