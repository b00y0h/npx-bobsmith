import { cristal, morning, passion, pastel } from "gradient-string";
import CONFIG from "../config.js";
import chalk from "chalk";
import boxen from "boxen";
import { sleep } from "../utils.js";

// Component for profile card
export const ProfileCard = async (): Promise<void> => {
  interface CardData {
    name: string;
    title: string;
    education: string;
    github: string;
    linkedin: string;
    web: string;
    npx: string;
    skills: string;
  }

  const cardData: CardData = {
    name: pastel(CONFIG.PERSONAL_INFO.NAME),
    title: chalk.white(CONFIG.PERSONAL_INFO.TITLE),
    education: `${chalk.white("Graduate Of")} ${morning(
      CONFIG.PERSONAL_INFO.EDUCATION
    )}`,
    github: CONFIG.URLS.GITHUB
      ? `${chalk.white("{")} ${chalk.gray("github.com/")}${chalk.green(
          "b00y0h"
        )} ${chalk.white("}")}`
      : "",
    linkedin: CONFIG.URLS.LINKEDIN
      ? `${chalk.white("{")} ${chalk.gray("linkedin.com/in/")}${chalk.blue(
          "bobbysmith"
        )} ${chalk.white("}")}`
      : "",
    web: CONFIG.URLS.PORTFOLIO
      ? `${chalk.white("{")} ${chalk.cyan(CONFIG.URLS.PORTFOLIO)} ${chalk.white(
          "}"
        )}`
      : "",
    npx: `${chalk.red("npx")} ${chalk.white("bobsmith")}`,
    skills: cristal(CONFIG.PERSONAL_INFO.SKILLS.join(" | ")),
  };

  const cardLines = [
    cardData.name,
    cardData.title,
    "",
    `🎓 ${cardData.education}`,
    "",
    `⚡ Skills: ${cardData.skills}`,
    "",
  ];

  // Only add GitHub, LinkedIn, and Website if they are defined
  if (cardData.github) {
    cardLines.push(`📦 GitHub:    ${cardData.github}`);
  }
  if (cardData.linkedin) {
    cardLines.push(`💼 LinkedIn:  ${cardData.linkedin}`);
  }
  if (cardData.web) {
    cardLines.push(`🌐 Website:   ${cardData.web}`);
  }

  // Add remaining card details
  cardLines.push(
    "",
    `📇 Card:      ${cardData.npx}`,
    "",
    passion("🚀 Available for exciting opportunities and collaborations!"),
    cristal("💭 Let's connect and create something amazing together!")
  );

  const card = boxen(cardLines.join("\n"), {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: CONFIG.THEME.BORDER_COLOR,
    float: "center",
    backgroundColor: CONFIG.THEME.BG_COLOR,
    title: chalk.green.bold("Bob's Business Card"),
    titleAlignment: "center",
  });

  for (const line of card.split("\n")) {
    console.log(line);
    await sleep(CONFIG.THEME.ANIMATION_SPEED.FAST);
  }
};
