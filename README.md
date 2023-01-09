# H2O Health Documentation

Documentation for H2O Health apps. 

## About H2O Health 

[H2O Health](https://h2o.ai/health) is an initiative of [H2O.ai](https://h2o.ai/) to build AI apps to solve complex healthcare and life science problems while accelerating the discovery of new ideas within the industry. H2O Health is co-innovating with major healthcare organizations to address existing and emerging challenges.

## Documentation

- To build the documentation, we utilize Docusaurus, essentially a set of npm packages
- The documentation is displayed at https://docs.h2o.ai/h2o-health/
    - **Note**: This is the official documentation URL and should be the one that is shared with people internal and external to the company (this URL is connected to Google Analytics, which helps us track specific view metrics)

### Requirements 

To view, edit, and cut a version of the documentation, the following is required: 

- Node.js version 16.14+ (which can be checked by running `node -v`). Use nvm to manage multiple Node versions installed on a single machine. 
    - To install Node.js and npm with nvm in Mac or Ubuntu, run: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash` and `nvm install node`

### Documentation structure


```
HC_TEMPLATE
├── docs
│   ├── docs
│   │
│   ├── static
│   ├── versioned_docs
│   ├── versioned_sidebars
│   ├── docusaurus.config.js
│   ├── sidebars.js
```

- `docs/docs`: It contains the Markdown documentation files to edit for the next documentation version. Customize the order of the docs sidebar in `sidebars.js`
- `docs/src`: Non-documentation files (for example, `docs/src/css/custom.css`, controls the style of the documentation site)
- `docs/static`: Static directory. In particular, it stores the location of the third-party licenses that are rendered in the docs
- `docs/docusaurus.config.js`: A config file containing the documentation (site) configuration
- `docs/sidebars.js`: The specific documentation sidebar for the docs located at `docs/docs`



### Edit locally  

To setup the local `env` to view and edit the next or past documentation versions ([first, ensure you install Node.js](#requirements)):

1. Run: `make setup-doc`

To view the documentation as you edit:

1. Run: `make run-doc`

    - **Documentation**: To view your edits for the documentation (located at `docs/docs`), navigate to the provided URL (for example, `http://localhost:3000/h2o-health/`). 
        - **Debug** 
            - If you do not see anything (that is, a white screen) after clicking **Next** , run the following command and try again: `make setup-doc` 





