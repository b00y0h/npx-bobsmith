// Type definitions for the configuration
export interface PersonalInfo {
  NAME: string;
  TITLE: string;
  EDUCATION: string;
  SKILLS: string[];
}

export interface Urls {
  EMAIL: string;
  RESUME?: string;
  MEETING: string;
  PORTFOLIO?: string;
  GITHUB: string;
  LINKEDIN: string;
}

export interface AnimationSpeed {
  FAST: number;
  MEDIUM: number;
  SLOW: number;
}

export interface Theme {
  BORDER_COLOR: string;
  BG_COLOR: string;
  ANIMATION_SPEED: AnimationSpeed;
}

export interface Config {
  PERSONAL_INFO: PersonalInfo;
  URLS: Urls;
  THEME: Theme;
}

// Interface for card data
export interface CardData {
  name: string;
  title: string;
  education: string;
  github: string;
  linkedin: string;
  web: string;
  npx: string;
  skills: string;
}

// Interface for action handlers
export interface ActionHandlers {
  [key: string]: () => Promise<void>;
}

// Interface for inquirer question
export interface InquirerQuestion {
  type: "list";
  name: "action";
  message: string;
  choices: Array<{
    name: string;
    value: string;
  }>;
}
