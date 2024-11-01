// typography.ts

interface TypographyStyle {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    letterSpacing: string;
  }
  
  interface Typography {
    display: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
    heading: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
    title: {
      xxlarge: TypographyStyle;
      xlarge: TypographyStyle;
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
      xsmall: TypographyStyle;
    };
    body: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
    detail: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
    label: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
      xsmall: TypographyStyle;
    };
    links: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
  }
  
  const typography: Typography = {
    display: {
      large: { fontSize: "66px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
      medium: { fontSize: "50px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
      small: { fontSize: "40px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
    },
    heading: {
      large: { fontSize: "50px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
      medium: { fontSize: "40px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
      small: { fontSize: "32px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
    },
    title: {
      xxlarge: { fontSize: "32px", fontWeight: 700, lineHeight: "150%", letterSpacing: "1px" },
      xlarge: { fontSize: "25px", fontWeight: 700, lineHeight: "150%", letterSpacing: "0px" },
      large: { fontSize: "21px", fontWeight: 700, lineHeight: "150%", letterSpacing: "0px" },
      medium: { fontSize: "19px", fontWeight: 700, lineHeight: "150%", letterSpacing: "0px" },
      small: { fontSize: "17px", fontWeight: 700, lineHeight: "150%", letterSpacing: "0px" },
      xsmall: { fontSize: "15px", fontWeight: 700, lineHeight: "150%", letterSpacing: "0px" },
    },
    body: {
      large: { fontSize: "19px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      medium: { fontSize: "17px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      small: { fontSize: "15px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
    },
    detail: {
      large: { fontSize: "17px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      medium: { fontSize: "15px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      small: { fontSize: "13px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
    },
    label: {
      large: { fontSize: "19px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      medium: { fontSize: "17px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      small: { fontSize: "15px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      xsmall: { fontSize: "13px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
    },
    links: {
      large: { fontSize: "19px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      medium: { fontSize: "17px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
      small: { fontSize: "15px", fontWeight: 400, lineHeight: "150%", letterSpacing: "0px" },
    },
  };
  
  export default typography;
  