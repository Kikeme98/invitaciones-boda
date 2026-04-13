const themes = {
  'rosa-clasico': {
    nombre: 'Rosa Clásico',
    colors: {
      primary: '#cfc4c2',
      secondary: '#96a0a9',
      accent: '#cea7a1',
      textMuted: '#a3a3a3',
      bg: '#f2f1ed',
      bgCard: '#f9f9f9',
    },
    fonts: {
      heading: 'Aboreto',
      headingFallback: 'sans-serif',
      body: 'Andika',
      bodyFallback: 'Helvetica, Arial, Lucida, sans-serif',
    },
    fontUrls: [
      'https://fonts.googleapis.com/css2?family=Aboreto&display=swap',
      'https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    ],
  },

  'jardin-botanico': {
    nombre: 'Jardín Botánico',
    colors: {
      primary: '#8a9a6c',
      secondary: '#5a6e4e',
      accent: '#c4a35a',
      textMuted: '#8a8a7a',
      bg: '#f5f3ee',
      bgCard: '#fafaf6',
    },
    fonts: {
      heading: 'Cormorant Garamond',
      headingFallback: 'serif',
      body: 'Montserrat',
      bodyFallback: 'Helvetica, Arial, sans-serif',
    },
    fontUrls: [
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap',
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap',
    ],
  },

  'noche-elegante': {
    nombre: 'Noche Elegante',
    colors: {
      primary: '#2c3e6b',
      secondary: '#3d5a80',
      accent: '#c9a84c',
      textMuted: '#8e99a4',
      bg: '#f0f1f5',
      bgCard: '#ffffff',
    },
    fonts: {
      heading: 'Playfair Display',
      headingFallback: 'serif',
      body: 'Raleway',
      bodyFallback: 'Helvetica, Arial, sans-serif',
    },
    fontUrls: [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap',
      'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap',
    ],
  },

  'lavanda-romantica': {
    nombre: 'Lavanda Romántica',
    colors: {
      primary: '#b8a9c9',
      secondary: '#7b6f8e',
      accent: '#d4a8c6',
      textMuted: '#9a95a8',
      bg: '#f5f2f8',
      bgCard: '#faf8fc',
    },
    fonts: {
      heading: 'Cormorant Garamond',
      headingFallback: 'serif',
      body: 'Quicksand',
      bodyFallback: 'Helvetica, Arial, sans-serif',
    },
    fontUrls: [
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap',
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap',
    ],
  },
};

export function getTheme(nombre) {
  return themes[nombre] || themes['rosa-clasico'];
}

export default themes;
