interface ColorShades {
  [key: number]: string;
}

interface Colors {
  primary: ColorShades;
  grayscale: ColorShades;
  point: {
    danger: string;
    success: string;
    warning: string;
    information: string;
  };
  gradient: {
    example: string;
  };
}

const colors: Colors = {
  primary: {
    0: "#FFFFFF",
    5: "#E2F7E7",
    10: "#C8F0D0",
    20: "#9FFFE6",
    30: "#6EFFA6",
    40: "#42FC6D",
    50: "#21F58E",
    60: "#10D26F",
    70: "#069A71",
    80: "#077568",
    90: "#074339",
    100: "#000000",
  },
  grayscale: {
    0: "#FFFFFF",
    5: "#F6F6F6",
    10: "#F0F0F1",
    20: "#E3E4E5",
    30: "#D7D9D9",
    40: "#C0C7CB",
    50: "#A9ACB6",
    60: "#707374",
    70: "#595E68",
    80: "#303333",
    90: "#1D1E1F",
    100: "#000000",
  },
  point: {
    danger: "#EB003B",
    success: "#008A1E",
    warning: "#FFB724",
    information: "#2768FF",
  },
  gradient: {
    example: "linear-gradient(to right, #9CFFBF, #ADD8FF)",
  },
};

export default colors;
