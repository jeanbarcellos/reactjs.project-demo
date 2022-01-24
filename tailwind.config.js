const beackPointsCustom = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
  print: { raw: 'print' }
}

const colorsCustom = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#22292F',
  white: '#fff',
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    DEFAULT: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#D5D5D5',
    A200: '#AAAAAA',
    A400: '#303030',
    A700: '#616161'
  },
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    DEFAULT: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#D5D5D5',
    A200: '#AAAAAA',
    A400: '#303030',
    A700: '#616161'
  },
  red: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    DEFAULT: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
    A100: '#FF8A80',
    A200: '#FF5252',
    A400: '#FF1744',
    A700: '#D50000'
  },
  orange: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    DEFAULT: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
    A100: '#FFD180',
    A200: '#FFAB40',
    A400: '#FF9100',
    A700: '#FF6D00'
  },
  'deep-orange': {
    50: '#FBE9E7',
    100: '#FFCCBC',
    200: '#FFAB91',
    300: '#FF8A65',
    400: '#FF7043',
    500: '#FF5722',
    DEFAULT: '#FF5722',
    600: '#F4511E',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
    A100: '#FF9E80',
    A200: '#FF6E40',
    A400: '#FF3D00',
    A700: '#DD2C00'
  },
  yellow: {
    50: '#FFFDE7',
    100: '#FFF9C4',
    200: '#FFF59D',
    300: '#FFF176',
    400: '#FFEE58',
    500: '#FFEB3B',
    DEFAULT: '#FFEB3B',
    600: '#FDD835',
    700: '#FBC02D',
    800: '#F9A825',
    900: '#F57F17',
    A100: '#FFFF8D',
    A200: '#FFFF00',
    A400: '#FFEA00',
    A700: '#FFD600'
  },
  green: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',
    DEFAULT: '#4CAF50',
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
    A100: '#B9F6CA',
    A200: '#69F0AE',
    A400: '#00E676',
    A700: '#00C853'
  },
  'light-green': {
    50: '#F1F8E9',
    100: '#DCEDC8',
    200: '#C5E1A5',
    300: '#AED581',
    400: '#9CCC65',
    500: '#8BC34A',
    DEFAULT: '#8BC34A',
    600: '#7CB342',
    700: '#689F38',
    800: '#558B2F',
    900: '#33691E',
    A100: '#CCFF90',
    A200: '#B2FF59',
    A400: '#76FF03',
    A700: '#64DD17'
  },
  teal: {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#009688',
    DEFAULT: '#009688',
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
    A100: '#A7FFEB',
    A200: '#64FFDA',
    A400: '#1DE9B6',
    A700: '#00BFA5'
  },
  blue: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    DEFAULT: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
    A100: '#82B1FF',
    A200: '#448AFF',
    A400: '#2979FF',
    A700: '#2962FF'
  },
  'light-blue': {
    50: '#E1F5FE',
    100: '#B3E5FC',
    200: '#81D4FA',
    300: '#4FC3F7',
    400: '#29B6F6',
    500: '#03A9F4',
    DEFAULT: '#03A9F4',
    600: '#039BE5',
    700: '#0288D1',
    800: '#0277BD',
    900: '#01579B',
    A100: '#80D8FF',
    A200: '#40C4FF',
    A400: '#00B0FF',
    A700: '#0091EA'
  },
  indigo: {
    50: '#E8EAF6',
    100: '#C5CAE9',
    200: '#9FA8DA',
    300: '#7986CB',
    400: '#5C6BC0',
    500: '#3F51B5',
    DEFAULT: '#3F51B5',
    600: '#3949AB',
    700: '#303F9F',
    800: '#283593',
    900: '#1A237E',
    A100: '#8C9EFF',
    A200: '#536DFE',
    A400: '#3D5AFE',
    A700: '#304FFE'
  },
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    DEFAULT: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
    A100: '#EA80FC',
    A200: '#E040FB',
    A400: '#D500F9',
    A700: '#AA00FF'
  },
  'deep-purple': {
    50: '#EDE7F6',
    100: '#D1C4E9',
    200: '#B39DDB',
    300: '#9575CD',
    400: '#7E57C2',
    500: '#673AB7',
    DEFAULT: '#673AB7',
    600: '#5E35B1',
    700: '#512DA8',
    800: '#4527A0',
    900: '#311B92',
    A100: '#B388FF',
    A200: '#7C4DFF',
    A400: '#651FFF',
    A700: '#6200EA'
  },
  pink: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',
    DEFAULT: '#E91E63',
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
    A100: '#FF80AB',
    A200: '#FF4081',
    A400: '#F50057',
    A700: '#C51162'
  },
  lime: {
    50: '#F9FBE7',
    100: '#F0F4C3',
    200: '#E6EE9C',
    300: '#DCE775',
    400: '#D4E157',
    500: '#CDDC39',
    DEFAULT: '#CDDC39',
    600: '#C0CA33',
    700: '#AFB42B',
    800: '#9E9D24',
    900: '#827717',
    A100: '#F4FF81',
    A200: '#EEFF41',
    A400: '#C6FF00',
    A700: '#AEEA00'
  },
  amber: {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107',
    DEFAULT: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
    A100: '#FFE57F',
    A200: '#FFD740',
    A400: '#FFC400',
    A700: '#FFAB00'
  },
  brown: {
    50: '#EFEBE9',
    100: '#D7CCC8',
    200: '#BCAAA4',
    300: '#A1887F',
    400: '#8D6E63',
    500: '#795548',
    DEFAULT: '#795548',
    600: '#6D4C41',
    700: '#5D4037',
    800: '#4E342E',
    900: '#3E2723',
    A100: '#D7CCC8',
    A200: '#BCAAA4',
    A400: '#8D6E63',
    A700: '#5D4037'
  },
  'blue-gray': {
    50: '#ECEFF1',
    100: '#CFD8DC',
    200: '#B0BEC5',
    300: '#90A4AE',
    400: '#78909C',
    500: '#607D8B',
    DEFAULT: '#607D8B',
    600: '#546E7A',
    700: '#455A64',
    800: '#37474F',
    900: '#263238',
    A100: '#CFD8DC',
    A200: '#B0BEC5',
    A400: '#78909C',
    A700: '#455A64'
  },
  cyan: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00BCD4',
    DEFAULT: '#00BCD4',
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
    A100: '#84FFFF',
    A200: '#18FFFF',
    A400: '#00E5FF',
    A700: '#00B8D4'
  }
}

const spacingsCustom = {
  xs: '32rem',
  sm: '48rem',
  md: '64rem',
  lg: '80rem',
  xl: '96rem',
  '2xl': '112rem',
  '3xl': '128rem',
  '4xl': '144rem',
  '5xl': '160rem',
  px: '1px',
  0: '0',
  0.5: '0.05rem',
  1: '0.1rem',
  1.5: '0.15rem',
  2: '0.2rem',
  2.5: '0.25rem',
  3: '0.3rem',
  3.5: '0.35rem',
  4: '0.4rem',
  5: '0.5rem',
  6: '0.6rem',
  7: '0.7rem',
  8: '0.8rem',
  9: '0.9rem',
  10: '1.0rem',
  11: '1.1rem',
  12: '1.2rem',
  14: '1.4rem',
  16: '1.6rem',
  20: '2rem',
  24: '2.4rem',
  28: '2.8rem',
  32: '3.2rem',
  36: '3.6rem',
  40: '4rem',
  44: '4.4rem',
  48: '4.8rem',
  52: '5.2rem',
  56: '5.6rem',
  60: '6rem',
  64: '6.4rem',
  68: '6.8rem',
  72: '7.2rem',
  76: '7.6rem',
  80: '8rem',
  84: '8.4rem',
  88: '8.8rem',
  92: '9.2rem',
  96: '9.6rem',
  112: '11.2rem',
  128: '12.8rem',
  136: '13.6rem',
  160: '16rem',
  176: '17.6rem',
  192: '19.2rem',
  200: '20rem',
  208: '20.8rem',
  216: '21.6rem',
  224: '22.4rem',
  240: '24rem',
  256: '25.6rem',
  288: '28.8rem',
  320: '32rem',
  360: '36rem',
  384: '38.4rem',
  400: '40rem',
  448: '44.8rem',
  512: '51.2rem',
  576: '57.6rem',
  640: '64rem',
  704: '70.4rem',
  768: '76.8rem',
  832: '83.2rem',
  896: '89.6rem',
  960: '96rem',
  1024: '102.4rem'
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [],
  darkMode: 'darkMode', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: beackPointsCustom,
    colors: colorsCustom,
    spacing: spacingsCustom,
    backgroundColor: theme => theme('colors'),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor')
    }),
    borderRadius: {
      none: '0px',
      sm: '.2rem',
      DEFAULT: '.4rem',
      md: '.6rem',
      lg: '.8rem',
      xl: '1.2rem',
      '2xl': '1.6rem',
      '3xl': '2.4rem',
      full: '9999px',
      2: '.2rem',
      4: '.4rem',
      6: '.6rem',
      8: '.8rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem'
    },
    gap: theme => theme('spacing'),
    gradientColorStops: theme => theme('colors'),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh'
    }),
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%'
    }),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    maxHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      auto: 'auto'
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      ...theme('spacing'),
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens'))
    }),
    minHeight: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    minWidth: theme => ({
      ...theme('spacing'),
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      screen: '100vw'
    }),
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    ringColor: theme => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors')
    }),
    ringOffsetColor: theme => theme('colors'),
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    textColor: theme => theme('colors'),
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%'
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content'
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
}
