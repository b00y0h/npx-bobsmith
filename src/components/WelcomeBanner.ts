import figlet from "figlet";
import { animateText, createAnimatedSpinner, sleep } from "../utils.js";
import CONFIG from "../config.js";
import { rainbow } from "gradient-string";

// Component for welcome banner
export const WelcomeBanner = async (): Promise<void> => {
  console.clear();
  console.log("\n");
  const spinner = await createAnimatedSpinner("Initializing...", 1000);
  spinner.success();

  return new Promise<void>((resolve) => {
    figlet(
      CONFIG.PERSONAL_INFO.NAME,
      {
        font: "Big",
        horizontalLayout: "default",
        verticalLayout: "default",
      },
      async (err: Error | null, data?: string) => {
        if (!err && data) {
          const lines = data.split("\n");
          for (const line of lines) {
            console.log(rainbow(line));
            await sleep(CONFIG.THEME.ANIMATION_SPEED.MEDIUM);
          }
          await animateText(
            `{ ${CONFIG.PERSONAL_INFO.TITLE} }`,
            CONFIG.THEME.ANIMATION_SPEED.MEDIUM
          );
        }
        resolve();
      }
    );
  });
};
