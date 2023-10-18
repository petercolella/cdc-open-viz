export default {
  title: 'Chart Title',
  visualizationType: 'Waffle',
  visualizationSubType: 'linear',
  showPercent: true,
  showDenominator: true,
  valueDescription: 'out of',
  content: '',
  subtext: '',
  orientation: 'horizontal',
  data: '',
  filters: [],
  fontSize: '',
  overallFontSize: 'medium',
  dataColumn: '',
  dataFunction: '',
  dataConditionalColumn: '',
  dataConditionalOperator: '',
  dataConditionalComparate: '',
  invalidComparate: false,
  customDenom: false,
  dataDenom: '100',
  dataDenomColumn: '',
  dataDenomFunction: '',
  suffix: '%',
  roundToPlace: '0',
  shape: 'circle',
  nodeWidth: '10',
  nodeSpacer: '2',
  theme: 'theme-blue',
  type: 'waffle-chart',
  gauge: {
    height: 35,
    width: '100%'
  },
  visual: {
    border: true,
    accent: false,
    background: false,
    hideBackgroundColor: false,
    borderColorTheme: false,
    colors: {
      'theme-blue': '#005eaa',
      'theme-purple': '#712177',
      'theme-brown': '#705043',
      'theme-teal': '#00695c',
      'theme-pink': '#af4448',
      'theme-orange': '#bb4d00',
      'theme-slate': '#29434e',
      'theme-indigo': '#26418f',
      'theme-cyan': '#006778',
      'theme-green': '#4b830d',
      'theme-amber': '#fbab18'
    }
  }
}
