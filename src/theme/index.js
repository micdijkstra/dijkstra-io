const theme = {
  screen: {
    sm: '768px',
    md: '1280px',
    lg: '1400px',
    xl: '1800px',
  },

  colors: {
    primary: 'rgb(3, 17, 91)',
    secondary: 'rgb(35, 31, 22)',
    tertiary: 'rgb(126, 15, 26)',
    quaternary: 'rgb(252, 12, 27)',
    quinary: 'rgb(194, 255, 0)',
    senary: 'rgb(255,80,232)',
    onDark: 'white',
    onLight: 'black',
    errorOnDark: 'red',
  },

  text: {
    xs: {
      sm: '14px',
      md: '20px',
      lg: '30px',
      xl: '90px',
    },

    md: {
      sm: '20px',
      md: '30px',
      lg: '60px',
      xl: '160px',
    },
  },

  line: {
    xs: '1.0',
    sm: '1.5',
    md: '2',
    lg: '3',
  },

  spacing: {
    xs: '5px',
    sm: '15px',
    md: '30px',
    lg: '60px',
    xl: '100px',
  },

  stages: {
    '': {
      background: 'rgb(3, 17, 91)',
      color: 'white',
    },
    about: {
      background: 'rgb(35, 31, 22)',
      color: 'white',
    },
    work: {
      background: 'rgb(194, 255, 0)',
      color: 'rgb(3, 17, 91)',
    },
    contact: {
      background: 'rgb(126, 15, 26)',
      color: 'white',
    },
    games: {
      background: 'rgb(126, 15, 26)',
      color: 'white',
    },
  },
};

export default theme;
