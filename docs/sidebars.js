module.exports = {
  mySidebar: [
    'index',
    'access-h2o-health-apps/access-h2o-health-apps',
    {
      type: 'category',
      label: 'CHOS',
      link: {type: 'doc', id: 'epidemiology/covid-19-hospital-occupancy-simulator/overview'},
      items: [
        {
          type: 'category',
          label: 'Guide',
          items: [
            'epidemiology/covid-19-hospital-occupancy-simulator/how-do-simulations-work', 
            'epidemiology/covid-19-hospital-occupancy-simulator/simulation-settings', 
            'epidemiology/covid-19-hospital-occupancy-simulator/models',
            'epidemiology/covid-19-hospital-occupancy-simulator/charts/charts',
            'epidemiology/covid-19-hospital-occupancy-simulator/data-files'
          ],
        },
        'epidemiology/covid-19-hospital-occupancy-simulator/terminology',
        'epidemiology/covid-19-hospital-occupancy-simulator/team',
        'epidemiology/covid-19-hospital-occupancy-simulator/faqs'
      ],
    },
    {
      type: 'category',
      label: 'Gene Mutation AI',
      link: {type: 'doc', id: 'gene-mutation/overview'},
      items: [
        {
          type: 'category',
          label: 'Guide',
          items: [
            'gene-mutation/predictions-workflow', 
            'gene-mutation/snowflake/snowflake', 
            'gene-mutation/datasets/datasets',
            'gene-mutation/predictions/predictions'
          ],
        },
        'gene-mutation/team',
        'gene-mutation/faqs'
      ],
    },
    'team'
  ],
};


