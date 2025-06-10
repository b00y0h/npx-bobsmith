import { Config } from "./types.js";

// Configuration object with contact information and theme settings
const CONFIG: Config = {
  PERSONAL_INFO: {
    NAME: "Bob Smith",
    TITLE: "Creative Technologist",
    EDUCATION: "Virginia Commonwealth University",
    SKILLS: ["Building Teams", "Building Products", "Building People"],
  },
  URLS: {
    EMAIL: "mailto:bobby@reversetype.com",
    // RESUME:
    //   "https://drive.google.com/file/u/1/d/1KwoW5uTW2aUEoi14CnM6JGQatup_5aAf/view?usp=sharing",
    MEETING: "https://calendly.com/bobby-reversetype/30min",
    // PORTFOLIO: "https://lohit.is-a.dev/",
    GITHUB: "https://github.com/b00y0h",
    LINKEDIN: "https://www.linkedin.com/in/bobbysmith/",
  },
  THEME: {
    BORDER_COLOR: "blue",
    BG_COLOR: "#1a1a1a",
    ANIMATION_SPEED: {
      FAST: 5,
      MEDIUM: 30,
      SLOW: 50,
    },
  },
};

export default CONFIG;
