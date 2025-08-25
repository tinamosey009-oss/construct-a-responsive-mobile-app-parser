TypeScript
interface IResponsiveConfig {
  screens: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fonts: {
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
    };
    fontFamilies: {
      sans: string;
      serif: string;
    };
  };
  spacing: {
    gutters: {
      sm: string;
      md: string;
      lg: string;
    };
    paddings: {
      sm: string;
      md: string;
      lg: string;
    };
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

interface IParserConfig {
  source: string;
  target: string;
  parserRules: {
    [key: string]: (content: string) => string;
  };
}

interface IMobileAppConfig {
  name: string;
  version: string;
  responsiveConfig: IResponsiveConfig;
  parserConfig: IParserConfig;
}

const mobileAppConfig: IMobileAppConfig = {
  name: 'My Mobile App',
  version: '1.0.0',
  responsiveConfig: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fonts: {
      fontSizes: {
        sm: '12px',
        md: '14px',
        lg: '16px',
      },
      fontFamilies: {
        sans: 'Helvetica Neue',
        serif: 'Georgia',
      },
    },
    spacing: {
      gutters: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      paddings: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
    },
    colors: {
      primary: '#4CAF50',
      secondary: '#66D9EF',
      accent: '#FFC107',
      background: '#F7F7F7',
    },
  },
  parserConfig: {
    source: 'path/to/source/file',
    target: 'path/to/target/file',
    parserRules: {
      'remove-comments': (content: string) => content.replace(/\/\/.*\n/g, ''),
      'minify-code': (content: string) => content.replace(/\s+/g, ' '),
    },
  },
};

export default mobileAppConfig;