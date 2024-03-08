import supportedCountiesJSON from './supported-counties.json'

export const supportedStates = {
  // States
  'US-AL': ['ALABAMA', 'AL'],
  'US-AK': ['ALASKA', 'AK'],
  'US-AZ': ['ARIZONA', 'AZ'],
  'US-AR': ['ARKANSAS', 'AR'],
  'US-CA': ['CALIFORNIA', 'CA'],
  'US-CO': ['COLORADO', 'CO'],
  'US-CT': ['CONNECTICUT', 'CT'],
  'US-DC': ['District of Columbia', 'DC'],
  'US-DE': ['DELAWARE', 'DE'],
  'US-FL': ['FLORIDA', 'FL'],
  'US-GA': ['GEORGIA', 'GA'],
  'US-HI': ['HAWAII', 'HI'],
  'US-ID': ['IDAHO', 'ID'],
  'US-IL': ['ILLINOIS', 'IL'],
  'US-IN': ['INDIANA', 'IN'],
  'US-IA': ['IOWA', 'IA'],
  'US-KS': ['KANSAS', 'KS'],
  'US-KY': ['KENTUCKY', 'KY'],
  'US-LA': ['LOUISIANA', 'LA'],
  'US-ME': ['MAINE', 'ME'],
  'US-MD': ['MARYLAND', 'MD'],
  'US-MA': ['MASSACHUSETTS', 'MA'],
  'US-MI': ['MICHIGAN', 'MI'],
  'US-MN': ['MINNESOTA', 'MN'],
  'US-MS': ['MISSISSIPPI', 'MS'],
  'US-MO': ['MISSOURI', 'MO'],
  'US-MT': ['MONTANA', 'MT'],
  'US-NE': ['NEBRASKA', 'NE'],
  'US-NV': ['NEVADA', 'NV'],
  'US-NH': ['NEW HAMPSHIRE', 'NH'],
  'US-NJ': ['NEW JERSEY', 'NJ'],
  'US-NM': ['NEW MEXICO', 'NM'],
  'US-NY': ['NEW YORK', 'NY'],
  'US-NC': ['NORTH CAROLINA', 'NC'],
  'US-ND': ['NORTH DAKOTA', 'ND'],
  'US-OH': ['OHIO', 'OH'],
  'US-OK': ['OKLAHOMA', 'OK'],
  'US-OR': ['OREGON', 'OR'],
  'US-PA': ['PENNSYLVANIA', 'PA'],
  'US-RI': ['RHODE ISLAND', 'RI'],
  'US-SC': ['SOUTH CAROLINA', 'SC'],
  'US-SD': ['SOUTH DAKOTA', 'SD'],
  'US-TN': ['TENNESSEE', 'TN'],
  'US-TX': ['TEXAS', 'TX'],
  'US-UT': ['UTAH', 'UT'],
  'US-VT': ['VERMONT', 'VT'],
  'US-VA': ['VIRGINIA', 'VA'],
  'US-WA': ['WASHINGTON', 'WA'],
  'US-WV': ['WEST VIRGINIA', 'WV'],
  'US-WI': ['WISCONSIN', 'WI'],
  'US-WY': ['WYOMING', 'WY'],
  'US-AS': ['AMERICAN SAMOA', 'AS'],
  'US-FM': ['FEDERATED STATES OF MICRONESIA', 'FM'],
  'US-GU': ['GUAM', 'GU'],
  'US-MH': ['MARSHALL ISLANDS', 'MH'],
  'US-MP': ['NORTHERN MARIANAS', 'MP'],
  'US-PW': ['PALAU', 'PW'],
  'US-PR': ['PUERTO RICO', 'PR'],
  'US-VI': ['U.S. VIRGIN ISLANDS', 'VI']
}

export const supportedRegions = {
  'region 1': ['REGION 1', 'R1'],
  'region 2': ['REGION 2', 'R2'],
  'region 3': ['REGION 3', 'R3'],
  'region 4': ['REGION 4', 'R4'],
  'region 5': ['REGION 5', 'R5'],
  'region 6': ['REGION 6', 'R6'],
  'region 7': ['REGION 7', 'R7'],
  'region 8': ['REGION 8', 'R8'],
  'region 9': ['REGION 9', 'R9'],
  'region 10': ['REGION 10', 'R10']
}

export const stateToIso = {
  // States
  Alabama: 'US-AL',
  Alaska: 'US-AK',
  Arizona: 'US-AZ',
  Arkansas: 'US-AR',
  California: 'US-CA',
  Colorado: 'US-CO',
  Connecticut: 'US-CT',
  Delaware: 'US-DE',
  Florida: 'US-FL',
  Georgia: 'US-GA',
  Hawaii: 'US-HI',
  Idaho: 'US-ID',
  Illinois: 'US-IL',
  Indiana: 'US-IN',
  Iowa: 'US-IA',
  Kansas: 'US-KS',
  Kentucky: 'US-KY',
  Louisiana: 'US-LA',
  Maine: 'US-ME',
  Maryland: 'US-MD',
  Massachusetts: 'US-MA',
  Michigan: 'US-MI',
  Minnesota: 'US-MN',
  Mississippi: 'US-MS',
  Missouri: 'US-MO',
  Montana: 'US-MT',
  Nebraska: 'US-NE',
  Nevada: 'US-NV',
  'New Hampshire': 'US-NH',
  'New Jersey': 'US-NJ',
  'New Mexico': 'US-NM',
  'New York': 'US-NY',
  'North Carolina': 'US-NC',
  'North Dakota': 'US-ND',
  Ohio: 'US-OH',
  Oklahoma: 'US-OK',
  Oregon: 'US-OR',
  Pennsylvania: 'US-PA',
  'Rhode Island': 'US-RI',
  'South Carolina': 'US-SC',
  'South Dakota': 'US-SD',
  Tennessee: 'US-TN',
  Texas: 'US-TX',
  Utah: 'US-UT',
  Vermont: 'US-VT',
  Virginia: 'US-VA',
  Washington: 'US-WA',
  'West Virginia': 'US-WV',
  Wisconsin: 'US-WI',
  Wyoming: 'US-WY'
}

export const stateFipsToTwoDigit = {
  ['01']: 'AL', // eslint-disable-line
  ['02']: 'AK', // eslint-disable-line
  ['04']: 'AZ', // eslint-disable-line
  ['05']: 'AR', // eslint-disable-line
  ['06']: 'CA', // eslint-disable-line
  ['08']: 'CO', // eslint-disable-line
  ['09']: 'CT', // eslint-disable-line
  10: 'DE',
  11: 'DC',
  12: 'FL',
  13: 'GA',
  15: 'HI',
  16: 'ID',
  17: 'IL',
  18: 'IN',
  19: 'IA',
  20: 'KS',
  21: 'KY',
  22: 'LA',
  23: 'ME',
  24: 'MD',
  25: 'MA',
  26: 'MI',
  27: 'MN',
  28: 'MS',
  29: 'MO',
  30: 'MT',
  31: 'NE',
  32: 'NV',
  33: 'NH',
  34: 'NJ',
  35: 'NM',
  36: 'NY',
  37: 'NC',
  38: 'ND',
  39: 'OH',
  40: 'OK',
  41: 'OR',
  42: 'PA',
  44: 'RI',
  45: 'SC',
  46: 'SD',
  47: 'TN',
  48: 'TX',
  49: 'UT',
  50: 'VT',
  51: 'VA',
  53: 'WA',
  54: 'WV',
  55: 'WI',
  56: 'WY',
  60: 'AS',
  66: 'GU',
  69: 'MP',
  72: 'PR',
  78: 'VI'
}

export const supportedStatesFipsCodes = {
  '01': 'Alabama',
  '02': 'Alaska',
  '04': 'Arizona',
  '05': 'Arkansas',
  '06': 'California',
  '08': 'Colorado',
  '09': 'Connecticut',
  10: 'Delaware',
  12: 'Florida',
  13: 'Georgia',
  15: 'Hawaii',
  16: 'Idaho',
  17: 'Illinois',
  18: 'Indiana',
  19: 'Iowa',
  20: 'Kansas',
  21: 'Kentucky',
  22: 'Louisiana',
  23: 'Maine',
  24: 'Maryland',
  25: 'Massachusetts',
  26: 'Michigan',
  27: 'Minnesota',
  28: 'Mississippi',
  29: 'Missouri',
  30: 'Montana',
  31: 'Nebraska',
  32: 'Nevada',
  33: 'New Hampshire',
  34: 'New Jersey',
  35: 'New Mexico',
  36: 'New York',
  37: 'North Carolina',
  38: 'North Dakota',
  39: 'Ohio',
  40: 'Oklahoma',
  41: 'Oregon',
  42: 'Pennsylvania',
  44: 'Rhode Island',
  45: 'South Carolina',
  46: 'South Dakota',
  47: 'Tennessee',
  48: 'Texas',
  49: 'Utah',
  50: 'Vermont',
  51: 'Virginia',
  53: 'Washington',
  54: 'West Virginia',
  55: 'Wisconsin',
  56: 'Wyoming',
  60: 'American Samoa',
  66: 'Guam',
  69: 'Northern Mariana Islands',
  72: 'Puerto Rico',
  78: 'Virgin Islands'
}

export const supportedCountries = {
  AFG: ['Afghanistan'],
  ALA: ['Åland', 'Åland Islands'],
  ALB: ['Albania'],
  DZA: ['Algeria'],
  ASM: ['American Samoa'],
  AND: ['Andorra'],
  AGO: ['Angola'],
  AIA: ['Anguilla', 'Anguilla (U.K.)'],
  ATG: ['Antigua and Barbuda', 'Antigua and Barb.'],
  ARG: ['Argentina'],
  ARM: ['Armenia'],
  ABW: ['Aruba'],
  AUS: ['Australia', 'Ashmore and Cartier Is.'],
  AUT: ['Austria'],
  AZE: ['Azerbaijan'],
  BHS: ['Bahamas'],
  BHR: ['Bahrain'],
  BGD: ['Bangladesh'],
  BRB: ['Barbados'],
  BLR: ['Belarus'],
  BEL: ['Belgium'],
  BLZ: ['Belize'],
  BEN: ['Benin'],
  BMU: ['Bermuda', 'Bermuda (U.K.)'],
  BTN: ['Bhutan'],
  BOL: ['Bolivia', 'Bolivia (Plurinational State of)'],
  BES: ['Bonaire, Sint Eustatius and Saba'],
  BIH: ['Bosnia and Herzegovina', 'Bosnia and Herz.'],
  BWA: ['Botswana'],
  BVT: ['Bouvet Island'],
  BRA: ['Brazil'],
  BRN: ['Brunei', 'Brunei Darussalam'],
  BGR: ['Bulgaria'],
  BFA: ['Burkina Faso'],
  BDI: ['Burundi'],
  CPV: ['Cabo Verde'],
  KHM: ['Cambodia'],
  CMR: ['Cameroon'],
  CAN: ['Canada'],
  CYM: ['Cayman Islands', 'Cayman Is.', 'Cayman Islands (U.K.)'],
  CAF: ['Central African Republic', 'Central African Rep.'],
  TCD: ['Chad'],
  CHL: ['Chile'],
  CHN: ['China'],
  CXR: ['Christmas Island', 'Christmas Island (Australia)'],
  CCK: ['Cocos (Keeling) Islands', 'Cocos (Keeling) Islands (Australia)'],
  COL: ['Colombia'],
  COM: ['Comoros'],
  COG: ['Congo', 'Congo, Republic of the', 'Republic of the Congo'],
  COD: ['Democratic Republic of the Congo', 'Congo, Democratic Republic of the', 'Congo, the Democratic Republic of the', 'Dem. Rep. Congo'],
  COK: ['Cook Islands', 'Cook Is.', 'Cook Islands (New Zealand)'],
  CRI: ['Costa Rica'],
  CIV: ["Côte d'Ivoire"],
  HRV: ['Croatia'],
  CUB: ['Cuba'],
  CUW: ['Curaçao'],
  CYP: ['Cyprus', 'N. Cyprus', 'Turkish Republic of Northern Cyprus'],
  CZE: ['Czechia', 'Czech Republic'],
  DNK: ['Denmark'],
  DJI: ['Djibouti'],
  DMA: ['Dominica'],
  DOM: ['Dominican Republic', 'Dominican Rep.'],
  ECU: ['Ecuador'],
  EGY: ['Egypt'],
  SLV: ['El Salvador'],
  GNQ: ['Equatorial Guinea', 'Eq. Guinea'],
  ERI: ['Eritrea'],
  EST: ['Estonia'],
  SWZ: ['Eswatini', 'Swaziland', 'eSwatini', 'Kingdom of Eswatini'],
  ETH: ['Ethiopia'],
  FLK: ['Falkland Islands', 'Falkland Is.', 'Falkland Islands (Malvinas)'],
  FRO: ['Faroe Islands', 'Faeroe Islands', 'Faeroe Is.', 'Faroe Islands (Denmark)'],
  FJI: ['Fiji'],
  FIN: ['Finland'],
  FRA: ['France'],
  GUF: ['French Guiana', 'French Guiana (France)'],
  PYF: ['French Polynesia', 'Fr. Polynesia', 'French Polynesia (France)'],
  ATF: ['French Southern Territories', 'Fr. S. Antarctic Lands'],
  GAB: ['Gabon'],
  GMB: ['Gambia'],
  GEO: ['Georgia'],
  DEU: ['Germany'],
  GHA: ['Ghana'],
  GIB: ['Gibraltar'],
  GRC: ['Greece'],
  GRL: ['Greenland', 'Greenland (Denmark)'],
  GRD: ['Grenada'],
  GLP: ['Guadeloupe'],
  GUM: ['Guam', 'Guam (U.S.)'],
  GTM: ['Guatemala'],
  GGY: ['Guernsey'],
  GIN: ['Guinea'],
  GNB: ['Guinea-Bissau'],
  GUY: ['Guyana'],
  HTI: ['Haiti'],
  HMD: ['Heard Island and McDonald Islands', 'Heard I. and McDonald Is.'],
  VAT: ['Vatican', 'Holy See', 'Holy See (Vatican City State)'],
  HND: ['Honduras'],
  HKG: ['Hong Kong', 'Hong Kong SAR (China)'],
  HUN: ['Hungary'],
  ISL: ['Iceland'],
  IND: ['India'],
  IDN: ['Indonesia'],
  IRN: ['Iran', 'Iran (Islamic Republic of)'],
  IRQ: ['Iraq'],
  IRL: ['Ireland'],
  IMN: ['Isle of Man'],
  ISR: ['Israel'],
  ITA: ['Italy'],
  JAM: ['Jamaica'],
  JPN: ['Japan'],
  JEY: ['Jersey'],
  JOR: ['Jordan'],
  KAZ: ['Kazakhstan'],
  KEN: ['Kenya'],
  KIR: ['Kiribati'],
  PRK: ['North Korea', "Korea (Democratic People's Republic of)"],
  KOR: ['South Korea', 'Korea, Republic of'],
  KWT: ['Kuwait'],
  KGZ: ['Kyrgyzstan'],
  LAO: ['Laos', "Lao People's Democratic Republic"],
  LVA: ['Latvia'],
  LBN: ['Lebanon'],
  LSO: ['Lesotho'],
  LBR: ['Liberia'],
  LBY: ['Libya'],
  LIE: ['Liechtenstein'],
  LTU: ['Lithuania'],
  LUX: ['Luxembourg'],
  MAC: ['Macao', 'Macao SAR (China)'],
  MDG: ['Madagascar'],
  MWI: ['Malawi'],
  MYS: ['Malaysia'],
  MDV: ['Maldives'],
  MLI: ['Mali'],
  MLT: ['Malta'],
  MHL: ['Marshall Islands', 'Marshall Is.'],
  MTQ: ['Martinique', 'Martinique (France)'],
  MRT: ['Mauritania'],
  MUS: ['Mauritius'],
  MYT: ['Mayotte', 'Mayotte (France)'],
  MEX: ['Mexico'],
  FSM: ['Micronesia', 'Federated States of Micronesia', 'Micronesia (Federated States of)', 'Micronesia, Federated States of'],
  MDA: ['Moldova', 'Moldova, Republic of'],
  MCO: ['Monaco'],
  MNG: ['Mongolia'],
  MNE: ['Montenegro'],
  MSR: ['Montserrat', 'Montserrat (U.K.)'],
  MAR: ['Morocco'],
  MOZ: ['Mozambique'],
  MMR: ['Burma', 'Myanmar', 'Myanmar (Burma)'],
  NAM: ['Namibia'],
  NRU: ['Nauru'],
  NPL: ['Nepal'],
  NLD: ['Netherlands', 'Netherlands, The'],
  NCL: ['New Caledonia', 'New Caledonia (France)'],
  NZL: ['New Zealand'],
  NIC: ['Nicaragua'],
  NER: ['Niger'],
  NGA: ['Nigeria'],
  NIU: ['Niue', 'Niue (New Zealand)'],
  NFK: ['Norfolk Island', 'Norfolk Island (Australia)'],
  MKD: ['North Macedonia', 'Republic of North Macedonia', 'Macedonia'],
  MNP: ['Northern Mariana Islands', 'N. Mariana Is.', 'Northern Mariana Islands (U.S.)'],
  NOR: ['Norway'],
  OMN: ['Oman'],
  PAK: ['Pakistan'],
  PLW: ['Palau'],
  PAN: ['Panama'],
  PNG: ['Papua New Guinea'],
  PRY: ['Paraguay'],
  PER: ['Peru'],
  PHL: ['Philippines'],
  PCN: ['Pitcairn', 'Pitcairn Is.', 'Pitcairn (U.K.)'],
  POL: ['Poland'],
  PRT: ['Portugal'],
  PRI: ['Puerto Rico', 'Puerto Rico (U.S.)'],
  QAT: ['Qatar'],
  REU: ['Réunion', 'Réunion (France)'],
  ROU: ['Romania'],
  RUS: ['Russia', 'Russian Federation'],
  RWA: ['Rwanda'],
  BLM: ['Saint Barthélemy', 'St-Barthélemy'],
  SHN: ['Saint Helena', 'Saint Helena, Ascension and Tristan da Cunha'],
  KNA: ['Saint Kitts and Nevis', 'St. Kitts and Nevis'],
  LCA: ['Saint Lucia'],
  MAF: ['St-Martin', 'Saint Martin (French part)'],
  SPM: ['Saint Pierre and Miquelon', 'St. Pierre and Miquelon', 'Saint Pierre and Miquelon (France)'],
  VCT: ['Saint Vincent and the Grenadines', 'St. Vin. and Gren.'],
  WSM: ['Samoa'],
  SMR: ['San Marino'],
  STP: ['Sao Tome and Principe', 'São Tomé and Principe'],
  SAU: ['Saudi Arabia'],
  SEN: ['Senegal'],
  SRB: ['Serbia'],
  SYC: ['Seychelles'],
  SLE: ['Sierra Leone'],
  SGP: ['Singapore'],
  SXM: ['Sint Maarten', 'Sint Maarten (Dutch part)'],
  SVK: ['Slovakia'],
  SVN: ['Slovenia'],
  SLB: ['Solomon Islands', 'Solomon Is.'],
  SOM: ['Somalia', 'Somaliland'],
  ZAF: ['South Africa'],
  SGS: ['South Georgia and the South Sandwich Islands', 'S. Geo. and the Is.'],
  SDS: ['South Sudan', 'S. Sudan'],
  ESP: ['Spain'],
  LKA: ['Sri Lanka'],
  SDN: ['Sudan'],
  SUR: ['Suriname'],
  SJM: ['Svalbard and Jan Mayen'],
  SWE: ['Sweden'],
  CHE: ['Switzerland'],
  SYR: ['Syria', 'Syrian Arab Republic'],
  TWN: ['Taiwan', 'Taiwan, Province of China'],
  TJK: ['Tajikistan'],
  TZA: ['Tanzania', 'Tanzania, United Republic of'],
  THA: ['Thailand'],
  TLS: ['Timor-Leste', 'Timor-Leste (East Timor)'],
  TGO: ['Togo'],
  TKL: ['Tokelau', 'Tokelau (New Zealand)'],
  TON: ['Tonga'],
  TTO: ['Trinidad and Tobago'],
  TUN: ['Tunisia'],
  TUR: ['Turkey'],
  TKM: ['Turkmenistan'],
  TCA: ['Turks and Caicos Islands', 'Turks and Caicos Is.', 'Turks and Caicos Islands (U.K.)'],
  TUV: ['Tuvalu'],
  UGA: ['Uganda'],
  UKR: ['Ukraine'],
  ARE: ['United Arab Emirates'],
  GBR: ['United Kingdom', 'United Kingdom of Great Britain and Northern Ireland'],
  USA: ['United States of America', 'USA', 'United States'],
  UMI: ['United States Minor Outlying Islands'],
  URY: ['Uruguay'],
  UZB: ['Uzbekistan'],
  VUT: ['Vanuatu'],
  VEN: ['Venezuela', 'Venezuela (Bolivarian Republic of)'],
  VNM: ['Vietnam', 'Viet Nam'],
  VGB: ['Virgin Islands (British)', 'British Virgin Is.'],
  VIR: ['Virgin Islands (U.S.)', 'U.S. Virgin Is.'],
  WLF: ['Wallis and Futuna', 'Wallis and Futuna Is.'],
  KOS: ['Kosovo'],
  SAH: ['Western Sahara', 'W. Sahara'],
  YEM: ['Yemen'],
  ZMB: ['Zambia'],
  ZWE: ['Zimbabwe'],
  IOT: ['British Indian Ocean Territory'],
  Alaska: ['Alaska'],
  Hawaii: ['Hawaii'],
  Sardinia: ['Sardinia'],
  Sicily: ['Sicily'],
  Corsica: ['Corsica'],
  'Easter Island': ['Easter Island'],
  'Canary Islands': ['Canary Islands'],
  Antarctica: ['Antarctica'],
  ATA: ['Antarctica'],
  'Madeira Islands': ['Madeira Islands'],
  'Gaza/West Bank': ['Gaza/West Bank'],
  'Saint Paul and Amsterdamn Islands': ['Saint Paul and Amsterdamn Islands'],
  'Sovereign Base Areas of Akrotiri and Dhekelia': ['Sovereign Base Areas of Akrotiri and Dhekelia'],
  'Plazas de Soberania': ['Plazas de Soberania'],
  Akrotiri: ['Akrotiri'],
  Dhekelia: ['Dhekelia'],
  Sicily: ['Sicily'],
  Sardinia: ['Sardinia'],
  'US-AK': ['Alaska'],
  'US-HI': ['Hawaii']
}

export const supportedTerritories = {
  'US-AS': ['AMERICAN SAMOA', 'AS'],
  'US-GU': ['GUAM', 'GU'],
  'US-PR': ['PUERTO RICO', 'PR'],
  'US-VI': ['U.S. VIRGIN ISLANDS', 'VI', 'US VIRGIN ISLANDS', 'VIRGIN ISLANDS'],
  'US-MP': ['NORTHERN MARIANAS', 'MP', 'CNMI'],
  'US-FM': ['MICRONESIA', 'FM', 'Federated States of Micronesia'], // Note: Key is not an official ISO code
  'US-PW': ['PALAU', 'PW'], // Note: Key is not an official ISO code
  'US-MH': ['MARSHALL ISLANDS', 'MH', 'RMI'] // Note: Key is not an official ISO code
}

// ! INFO: coordinates are [negative longitude, latitude]
// ie. Albuquerque coordinates are actually [35, 106]
// prettier-ignore
export const supportedCities = {
  'ALASKA NATIVE TRIBAL HEALTH CONSORTIUM': [-149.8067, 61.1827],
  'ALBUQUERQUE': [-106.650421, 35.084385],
  'ALEXANDRIA': [-77.0469, 38.8048],
  'AMERICAN INDIAN CANCER FOUNDATION': [-93.1777, 45.0119],
  'ANAHEIM': [-117.914299, 33.836594],
  'ANCHORAGE': [-149.900284, 61.218056],
  'ARCTIC SLOPE NATIVE ASSOCIATION LIMITED': [-156.79225, 71.2907],
  'ARLINGTON': [-97.108063, 32.735687],
  'ATLANTA': [-84.387985, 33.748997],
  'AURORA': [-93.717979, 36.970890],
  'AUSTIN': [-97.743057, 30.267153],
  'BAKERSFIELD': [-119.018715, 35.373291],
  'BALTIMORE': [-76.612190, 39.290386],
  'BATON ROUGE': [-91.187149, 30.451468],
  'BIRMINGHAM': [-86.9902166, 33.5314447],
  'BOISE': [-116.202316, 43.615021],
  'BOSTON': [-71.058884, 42.360081],
  'BUFFALO': [-78.878372, 42.886448],
  'CALIFORNIA RURAL INDIAN HEALTH BOARD INC.': [-121.3605, 38.6468],
  'CHANDLER': [-111.841248, 33.306160],
  'CHARLOTTE': [-80.843124, 35.227085],
  'CHEROKEE NATION': [-94.8936, 36.3365],
  'CHESAPEAKE': [-76.287491, 36.768208],
  'CHEYENNE RIVER SIOUX TRIBE': [-101.2358, 45.00023],
  'CHICAGO': [-87.629799, 41.878113],
  'CHULA VISTA': [-117.084198, 32.640053],
  'CINCINNATI': [-84.512016, 39.103119],
  'CLEVELAND': [-81.694359, 41.499321],
  'COLORADO SPRINGS': [-104.821365, 38.833881],
  'COLUMBUS': [-82.998795, 39.961178],
  'CORPUS CHRISTI': [-97.396378, 27.800583],
  'DALLAS': [-96.796989, 32.776665],
  'DENVER': [-104.990250, 39.739235],
  'DETROIT': [-83.045753, 42.331429],
  'DISTRICT OF COLUMBIA': [-77.036873, 38.907192],
  'DURHAM': [-78.898621, 35.994034],
  'EAU CLAIRE': [-91.4985, 44.8113],
  'EL PASO': [-106.485023, 31.761877],
  'ELLENSBURG, WA': [-120.5478, 46.9965],
  'ELLENSBURG, WASHINGTON': [-120.5478, 46.9965],
  'FOND DU LAC RESERVATION': [-92.6002, 46.7502],
  'FORT WAYNE': [-85.139351, 41.079273],
  'FORT WORTH': [-97.330765, 32.755489],
  'FREMONT': [-121.988571, 37.548271],
  'FRESNO': [-119.787125, 36.737797],
  'FT WAYNE': [-85.139351, 41.079273],
  'GAINESVILLE': [-82.3248, 29.6516],
  'GARLAND': [-96.638885, 32.912624],
  'GILBERT': [-111.789024, 33.352825],
  'GLENDALE': [-118.255074, 34.142509],
  'GRAND RAPIDS, MI': [-85.6681, 42.9634],
  'GRAND RAPIDS, MICHIGAN': [-85.6681, 42.9634],
  'GREAT PLAINS TRIBAL LEADERS HEALTH BOARD': [-103.22444, 44.083054],
  'GREENSBORO': [-79.791977, 36.072636],
  'HENDERSON': [-114.981720, 36.039524],
  'HERSHEY': [-76.6779444, 40.2849997 ],
  'HIALEAH': [-80.278107, 25.857595],
  'HONOLULU': [-157.858337, 21.306944],
  'HOPI TRIBE': [-110.5035, 35.7833],
  'HOUSTON': [-95.358421, 29.749907],
  'INDIANAPOLIS': [-86.158066, 39.768402],
  'INTER-TRIBAL COUNCIL OF MICHIGAN, INC.': [-84.35486, 46.46462],
  'IRVINE': [-117.826508, 33.684566],
  'IRVING': [-96.948891, 32.814018],
  'JACKSONVILLE': [-81.655647, 30.332184],
  'JERSEY CITY': [-74.077644, 40.728157],
  'KANSAS CITY': [-94.578568, 39.099728],
  'KAW NATION OF OKLAHOMA': [-96.8633, 36.7669],
  'LAKEVIEW': [-104.9903, 39.7392],
  'LAREDO': [-99.507553, 27.503561],
  'LAS VEGAS': [-115.139832, 36.169941],
  'LEXINGTON': [-84.503716, 38.040585],
  'LINCOLN': [-95.262955, 37.346134],
  'LITTLE ROCK': [-92.288, 34.7445],
  'LOCKPORT': [-78.6903, 43.1706],
  'LONG BEACH': [-118.193741, 33.770050],
  'LOS ANGELES COUNTY': [-118.229362, 34.058762],
  'LOS ANGELES': [-118.243683, 34.052235],
  'LOUISVILLE': [-85.758453, 38.252666],
  'LUBBOCK': [-101.855164, 33.577862],
  'MADISON': [-89.401230, 43.073051],
  'MARION COUNTY, INDIANA': [-86.136543, 39.781029],
  'MARION':[-88.9330556,37.7305556],
  'MEMPHIS': [-90.048981, 35.149532],
  'MESA': [-111.831474, 33.415184],
  'MIAMI': [-80.191788, 25.761681],
  'MILWAUKEE': [-87.906471, 43.038902],
  'MINNEAPOLIS': [-93.265015, 44.977753],
  'MODESTO': [-120.9970, 37.6393],
  'MONTANA AMERICAN INDIAN WOMEN’S HEALTH COALITION': [-112.01823, 46.584223],
  'MONTGOMERY COUNTY, MARYLAND': [-77.199406, 39.153515],
  'NASHVILLE': [-86.781601, 36.162663],
  'NATIVE AMERICAN REHABILITATION ASSOCIATION OF THE NORTHWEST, INC.': [-122.6920, 45.5184],
  'NAVAJO NATION': [-109.1880, 35.0672],
  'NEW ORLEANS': [-90.071533, 29.951065],
  'NEW YORK CITY': [-74.005974, 40.712776],
  'NEWARK': [-74.1724, 40.7357],
  'NORFOLK': [-76.285873, 36.850769],
  'NORTH LAS VEGAS': [-115.114571, 36.195850],
  'NORTHWEST PORTLAND AREA INDIAN HEALTH BOARD': [-122.6863, 45.5076],
  'OAKLAND': [-122.271111, 37.804363],
  'OKLAHOMA CITY': [-97.516426, 35.467560],
  'OMAHA': [-95.934502, 41.256538],
  'ORLANDO': [-81.379234, 28.538336],
  'PASADENA':[-95.209099,29.691063],
  'PHILADELPHIA': [-75.165222, 39.952583],
  'PHOENIX': [-112.074036, 33.448376],
  'PITTSBURGH': [-79.995888, 40.440624],
  'PLANO': [-96.698883, 33.019844],
  'PORTLAND': [-122.658722, 45.512230],
  'PROVO, UT': [-111.6585, 40.2338],
  'PROVO, UTAH': [-111.6585, 40.2338],
  'RALEIGH': [-78.638176, 35.779591],
  'RENO': [-119.813805, 39.529633],
  'RICHMOND': [-77.436050, 37.540726],
  'RIVERSIDE': [-117.375496, 33.980602],
  'ROUND ROCK, TEXAS': [-97.6789, 30.5083],
  'ROUND ROCK, TX': [-97.6789, 30.5083],
  'SACRAMENTO': [-121.494400, 38.581573],
  'SAINT PAUL': [-93.089958, 44.953705],
  'SALEM, ALABAMA': [-85.2386, 32.5968],
  'SALEM, CONNECTICUT': [-72.2754,41.4904],
  'SALEM, FLORIDA': [-83.4129, 29.8869],
  'SALEM, ILLINOIS':[-88.945618,38.626991],
  'SALEM, MASSACHUSETTS': [-70.8955, 42.5197],
  'SALEM, OR': [-123.0351, 44.9429],
  'SALEM, OREGON': [-123.0351, 44.9429],
  'SALEM, OREGON': [-123.0351, 44.9429],
  'SALT LAKE CITY': [-112.0605644, 40.7767833],
  'SALUDA, VA': [-76.5950, 37.6064],
  'SALUDA, VIRGINIA': [-76.5950, 37.6064],
  'SAN ANTONIO': [-98.493629, 29.424122],
  'SAN BENITO': [-97.6311, 26.1326],
  'SAN BERNARDINO':[-117.302399,34.115784],
  'SAN DIEGO': [-117.161087, 32.715736],
  'SAN FRANCISCO': [-122.419418, 37.774929],
  'SAN JOSE': [-121.886330, 37.338207],
  'SANTA ANA': [-117.867653, 33.745472],
  'SANTA CLARA':[-121.955238,37.354107],
  'SCOTTSDALE': [-111.926048, 33.494171],
  'SEATTLE': [-122.332069, 47.606209],
  'SOUTH PUGET INTERTRIBAL PLANNING AGENCY': [-123.0832, 47.1241],
  'SOUTHCENTRAL FOUNDATION': [-149.7971, 61.1821],
  'SOUTHEAST ALASKA REGIONAL HEALTH CONSORTIUM': [-135.3369, 57.05479],
  'SPOKANE': [-117.426048, 47.658779],
  'ST PAUL': [ -93.089958, 44.953705],
  'ST. LOUIS': [-90.199402, 38.627003],
  'ST. PETERSBURG': [-82.640289, 27.767601],
  'STOCKTON': [-121.290779, 37.957703],
  'SYRACUSE': [-76.1742992, 43.0352913],
  'TAMPA': [-82.457176, 27.950575],
  'TOLEDO': [-83.537865, 41.652805],
  'TUCSON': [-110.974709, 32.222607],
  'TULSA': [-95.992775, 36.153980],
  'TUSCON': [-110.974709, 32.222607],
  'US-DC': [-77.036873, 38.907192],
  'VIRGINIA BEACH': [-75.977982, 36.852924],
  'WARREN': [-80.8184, 41.2376],
  'WASHINGTON D.C.': [-77.036873, 38.907192],
  'WASHINGTON DC.': [-77.036873, 38.907192],
  'WASHINGTON DC': [-77.036873, 38.907192],
  'WICHITA': [-97.330055, 37.687176],
  'WINSTON SALEM': [-80.244217, 36.099861],
  'WINSTON-SALEM': [-80.244217, 36.099861],
  'YUKON-KUSKOKWIM HEALTH CORPORATION': [-161.7849, 60.7881]
};

export const supportedCounties = supportedCountiesJSON
