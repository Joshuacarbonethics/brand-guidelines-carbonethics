export interface TypographyToken {
  token: string;
  className: string;
  size: string;
  weight: number;
  weightName: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
  sampleText: string;
}

export interface ColorToken {
  token: string;
  hex: string;
  name: string;
  usage: string;
  textColor?: string;
  category: "Neutral" | "Navy" | "Frost Blue" | "Sands" | "Grey" | "Turquoise" | "Coral";
}

export interface SpacingToken {
  token: string;
  px: number;
  rem: string;
  usage: string;
}

export interface RadiusToken {
  token: string;
  value: string;
  usage: string;
  previewClass: string;
}

export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  {
    token: "type.display",
    className: "type-display",
    size: "128px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "90px",
    letterSpacing: "-2%",
    usage: "Grand hero statements, oversized numeric impact highlights",
    sampleText: "Net Zero",
  },
  {
    token: "type.h1",
    className: "type-h1",
    size: "56px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "64px",
    letterSpacing: "-0.5%",
    usage: "Page primary headings, hero lead titles",
    sampleText: "Restore Earth with Nature-Based Solutions",
  },
  {
    token: "type.h2.bold",
    className: "type-h2-bold",
    size: "44px",
    weight: 700,
    weightName: "Bold",
    lineHeight: "48px",
    letterSpacing: "-0.5%",
    usage: "Major section headers, high-impact metric counters",
    sampleText: "2,450,000+ tCO2e Sequestered",
  },
  {
    token: "type.h2.regular",
    className: "type-h2-regular",
    size: "40px",
    weight: 400,
    weightName: "Regular",
    lineHeight: "48px",
    letterSpacing: "-0.5%",
    usage: "Editorial sub-headlines, secondary section intros",
    sampleText: "Empowering Coastal Communities Across Indonesia",
  },
  {
    token: "type.h3",
    className: "type-h3",
    size: "32px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "40px",
    letterSpacing: "-0.5%",
    usage: "Content section titles, featured card headings",
    sampleText: "Mangrove & Peatland Restoration",
  },
  {
    token: "type.h4",
    className: "type-h4",
    size: "24px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "32px",
    letterSpacing: "-0.5%",
    usage: "Component cards, dialog modal headers, group subtitles",
    sampleText: "High-Quality Carbon Offsets",
  },
  {
    token: "type.title.medium",
    className: "type-title-medium",
    size: "20px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "32px",
    letterSpacing: "0%",
    usage: "Card titles, list items, emphasized subheaders",
    sampleText: "Community-Led Conservation",
  },
  {
    token: "type.title.regular",
    className: "type-title-regular",
    size: "20px",
    weight: 400,
    weightName: "Regular",
    lineHeight: "32px",
    letterSpacing: "0%",
    usage: "Subheaders, soft titles, descriptive card intros",
    sampleText: "Verified carbon credit portfolio for corporate ESG",
  },
  {
    token: "type.body1.medium",
    className: "type-body1-medium",
    size: "18px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "28px",
    letterSpacing: "0%",
    usage: "Primary button labels, emphasized body text, lead paragraphs",
    sampleText: "Take tangible climate action with verified impact.",
  },
  {
    token: "type.body1.regular",
    className: "type-body1-regular",
    size: "18px",
    weight: 400,
    weightName: "Regular",
    lineHeight: "28px",
    letterSpacing: "0%",
    usage: "Lead paragraphs, quote callouts, highlighted summaries",
    sampleText: "CarbonEthics creates climate balance through natural ecosystems restoration.",
  },
  {
    token: "type.body2.medium",
    className: "type-body2-medium",
    size: "16px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "24px",
    letterSpacing: "0%",
    usage: "Strong body text, CTA links, author attribution, table headers",
    sampleText: "Explore our verified methodology",
  },
  {
    token: "type.body2.regular",
    className: "type-body2-regular",
    size: "16px",
    weight: 400,
    weightName: "Regular",
    lineHeight: "24px",
    letterSpacing: "0%",
    usage: "Default body copy, card descriptions, general paragraphs",
    sampleText: "We monitor trees via high-resolution satellite imagery, IoT sensors, and local ranger field reports.",
  },
  {
    token: "type.body3.medium",
    className: "type-body3-medium",
    size: "14px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "22px",
    letterSpacing: "0%",
    usage: "Form inputs, pill tab labels, secondary navigation",
    sampleText: "Input value / Active filter tab",
  },
  {
    token: "type.body3.regular",
    className: "type-body3-regular",
    size: "14px",
    weight: 400,
    weightName: "Regular",
    lineHeight: "22px",
    letterSpacing: "0%",
    usage: "Secondary body copy, tooltips, descriptive field helper text",
    sampleText: "Enter the email address associated with your partner account.",
  },
  {
    token: "type.label.medium",
    className: "type-label-medium",
    size: "12px",
    weight: 500,
    weightName: "Medium",
    lineHeight: "16px",
    letterSpacing: "0%",
    usage: "Eyebrow subtitles, badges, status indicators, meta tags",
    sampleText: "IMPACT METRIC • VERIFIED",
  },
  {
    token: "type.label.regular",
    className: "type-label-regular",
    size: "12px",
    weight: 400,
    weightName: "Regular",
    lineHeight: "16px",
    letterSpacing: "0%",
    usage: "Form field labels, footnotes, timestamps, copyright notes",
    sampleText: "Full Name (as registered in tax ID)",
  },
];

export const COLOR_TOKENS: ColorToken[] = [
  // Neutral
  {
    token: "color.white",
    hex: "#FDFDFD",
    name: "White",
    usage: "Background default, input bg, inverted text",
    textColor: "#2A2728",
    category: "Neutral",
  },
  {
    token: "color.black",
    hex: "#2A2728",
    name: "Ink Black",
    usage: "Main heading text, dark surfaces, high-contrast ink",
    textColor: "#FDFDFD",
    category: "Neutral",
  },

  // Navy
  {
    token: "color.navy.900",
    hex: "#0A3E6D",
    name: "Primary Navy",
    usage: "Primary button bg, interactive text, primary icon, border hover",
    textColor: "#FDFDFD",
    category: "Navy",
  },

  // Frost Blue
  {
    token: "color.frost.100",
    hex: "#F4FBFC",
    name: "Frost 100",
    usage: "Soft card surfaces, CTA card background, secondary containers",
    textColor: "#0A3E6D",
    category: "Frost Blue",
  },
  {
    token: "color.frost.200",
    hex: "#EAF6FD",
    name: "Frost 200",
    usage: "Card hover state, light accent surfaces",
    textColor: "#0A3E6D",
    category: "Frost Blue",
  },
  {
    token: "color.frost.300",
    hex: "#D9F1F8",
    name: "Frost 300",
    usage: "Light borders, decorative panels",
    textColor: "#0A3E6D",
    category: "Frost Blue",
  },
  {
    token: "color.frost.400",
    hex: "#BCDEED",
    name: "Frost 400",
    usage: "Horizontal tabs light bar, subtle badge tint",
    textColor: "#0A3E6D",
    category: "Frost Blue",
  },
  {
    token: "color.frost.500",
    hex: "#9DC1D5",
    name: "Frost 500",
    usage: "Intermediate borders, muted icons",
    textColor: "#2A2728",
    category: "Frost Blue",
  },
  {
    token: "color.frost.600",
    hex: "#83A9BF",
    name: "Frost 600",
    usage: "Supporting illustration fills, secondary outlines",
    textColor: "#FDFDFD",
    category: "Frost Blue",
  },
  {
    token: "color.frost.700",
    hex: "#6E8FA6",
    name: "Frost 700",
    usage: "Sub-interactive elements, dark frost border",
    textColor: "#FDFDFD",
    category: "Frost Blue",
  },
  {
    token: "color.frost.800",
    hex: "#587185",
    name: "Frost 800",
    usage: "Deep frost accent, secondary headings",
    textColor: "#FDFDFD",
    category: "Frost Blue",
  },
  {
    token: "color.frost.900",
    hex: "#495F72",
    name: "Frost 900",
    usage: "Frost darkest tone, muted text on light backgrounds",
    textColor: "#FDFDFD",
    category: "Frost Blue",
  },

  // Sands
  {
    token: "color.sand.100",
    hex: "#FDF8E5",
    name: "Sand 100",
    usage: "Soft warm background, light notification panels",
    textColor: "#675A44",
    category: "Sands",
  },
  {
    token: "color.sand.200",
    hex: "#FAF3D4",
    name: "Sand 200",
    usage: "Gentle warm surfaces, hover panel tint",
    textColor: "#675A44",
    category: "Sands",
  },
  {
    token: "color.sand.300",
    hex: "#F6E8BD",
    name: "Sand 300",
    usage: "Warm highlights, divider tint",
    textColor: "#675A44",
    category: "Sands",
  },
  {
    token: "color.sand.400",
    hex: "#E6D29E",
    name: "Sand 400",
    usage: "Warm badge background, pill tag border",
    textColor: "#2A2728",
    category: "Sands",
  },
  {
    token: "color.sand.500",
    hex: "#CDB582",
    name: "Sand 500",
    usage: "Secondary warm accent, border highlights",
    textColor: "#2A2728",
    category: "Sands",
  },
  {
    token: "color.sand.600",
    hex: "#BAA16B",
    name: "Sand 600",
    usage: "Mid-tone sand borders, iconography",
    textColor: "#FDFDFD",
    category: "Sands",
  },
  {
    token: "color.sand.700",
    hex: "#A18858",
    name: "Sand 700",
    usage: "Highlighted text on navy bg, quote mark, active tab indicator",
    textColor: "#FDFDFD",
    category: "Sands",
  },
  {
    token: "color.sand.800",
    hex: "#806D48",
    name: "Sand 800",
    usage: "Deep warm text, dark sand headers",
    textColor: "#FDFDFD",
    category: "Sands",
  },
  {
    token: "color.sand.900",
    hex: "#675A44",
    name: "Sand 900",
    usage: "Darkest sand ink, warm contrast text",
    textColor: "#FDFDFD",
    category: "Sands",
  },

  // Grey
  {
    token: "color.gray.50",
    hex: "#FAF9F9",
    name: "Gray 50",
    usage: "Page background, cleanest neutral background canvas",
    textColor: "#2A2728",
    category: "Grey",
  },
  {
    token: "color.gray.100",
    hex: "#F5F5F5",
    name: "Gray 100",
    usage: "Lightest surface, pill tag background, card background",
    textColor: "#2A2728",
    category: "Grey",
  },
  {
    token: "color.gray.300",
    hex: "#E0E0E0",
    name: "Gray 300",
    usage: "Disabled surface, default borders, card outlines",
    textColor: "#403B3C",
    category: "Grey",
  },
  {
    token: "color.gray.500",
    hex: "#949494",
    name: "Gray 500",
    usage: "Muted text, placeholder, secondary icon, disabled button bg",
    textColor: "#FDFDFD",
    category: "Grey",
  },
  {
    token: "color.gray.700",
    hex: "#403B3C",
    name: "Gray 700",
    usage: "Disabled text, strong muted state, secondary copy",
    textColor: "#FDFDFD",
    category: "Grey",
  },

  // Turquoise (Success)
  {
    token: "color.turquoise.100",
    hex: "#E5FCFA",
    name: "Turquoise 100",
    usage: "Success banner background, verified pill background",
    textColor: "#3F8074",
    category: "Turquoise",
  },
  {
    token: "color.turquoise.300",
    hex: "#BAF6ED",
    name: "Turquoise 300",
    usage: "Success border light, progress track background",
    textColor: "#3F8074",
    category: "Turquoise",
  },
  {
    token: "color.turquoise.500",
    hex: "#5EB7A9",
    name: "Turquoise 500",
    usage: "Success border/text, checkmark icon, accent badge",
    textColor: "#FDFDFD",
    category: "Turquoise",
  },
  {
    token: "color.turquoise.700",
    hex: "#3F8074",
    name: "Turquoise 700",
    usage: "High-contrast success text, deep emerald accent",
    textColor: "#FDFDFD",
    category: "Turquoise",
  },

  // Coral (Error/Warning)
  {
    token: "color.coral.100",
    hex: "#FDEAEC",
    name: "Coral 100",
    usage: "Error banner background, warning alert surface",
    textColor: "#825050",
    category: "Coral",
  },
  {
    token: "color.coral.300",
    hex: "#FBC9C9",
    name: "Coral 300",
    usage: "Error state border light, soft alert highlight",
    textColor: "#825050",
    category: "Coral",
  },
  {
    token: "color.coral.500",
    hex: "#BC787A",
    name: "Coral 500",
    usage: "Error border & text, warning icons, destructive indicators",
    textColor: "#FDFDFD",
    category: "Coral",
  },
  {
    token: "color.coral.700",
    hex: "#825050",
    name: "Coral 700",
    usage: "High-contrast error text, strong warning ink",
    textColor: "#FDFDFD",
    category: "Coral",
  },
];

export const SPACING_TOKENS: SpacingToken[] = [
  { token: "spacing.none", px: 0, rem: "0rem", usage: "Zero spacing, reset offset" },
  { token: "spacing.micro", px: 2, rem: "0.125rem", usage: "Micro borders, hair-thin offsets" },
  { token: "spacing.2xs", px: 4, rem: "0.25rem", usage: "Button icon gap, tight badge padding" },
  { token: "spacing.xs", px: 8, rem: "0.5rem", usage: "Form field vertical padding, pill gaps" },
  { token: "spacing.s", px: 16, rem: "1rem", usage: "Default component padding, card margin" },
  { token: "spacing.m", px: 24, rem: "1.5rem", usage: "Section internal padding, card padding" },
  { token: "spacing.l", px: 32, rem: "2rem", usage: "Content gaps, tab navigation offset" },
  { token: "spacing.xl", px: 40, rem: "2.5rem", usage: "Container desktop horizontal gutter" },
  { token: "spacing.2xl", px: 48, rem: "3rem", usage: "Horizontal tab bar height, section gaps" },
  { token: "spacing.3xl", px: 64, rem: "4rem", usage: "Major section vertical separation" },
  { token: "spacing.4xl", px: 80, rem: "5rem", usage: "Hero section padding, deep whitespace" },
  { token: "spacing.5xl", px: 96, rem: "6rem", usage: "Editorial section separators" },
  { token: "spacing.6xl", px: 128, rem: "8rem", usage: "Grand landing transitions" },
];

export const RADIUS_TOKENS: RadiusToken[] = [
  {
    token: "radius.input",
    value: "8px",
    usage: "Text input fields, select dropdowns, search bars",
    previewClass: "rounded-[8px]",
  },
  {
    token: "radius.badge",
    value: "8px",
    usage: "Status badges, metadata tags, eyebrow containers",
    previewClass: "rounded-[8px]",
  },
  {
    token: "radius.card",
    value: "8px",
    usage: "Standard component cards, interactive widgets, containers",
    previewClass: "rounded-[8px]",
  },
  {
    token: "radius.modal",
    value: "16px",
    usage: "Dialog modals, slide-overs, floating popovers",
    previewClass: "rounded-[16px]",
  },
  {
    token: "radius.button",
    value: "20px",
    usage: "Interactive buttons, pill tabs, interactive action links",
    previewClass: "rounded-[20px]",
  },
  {
    token: "radius.card (large)",
    value: "80px",
    usage: "Oversized signature cards, hero feature blocks",
    previewClass: "rounded-[40px] md:rounded-[80px]",
  },
];
