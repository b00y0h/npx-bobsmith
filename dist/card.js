#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import { passion, cristal, fruit, teen, rainbow, atlas, instagram, } from "gradient-string";
import openURL from "open";
import { createAnimatedSpinner, animateText } from "./utils.js";
import CONFIG from "./config.js";
import { WelcomeBanner, ProfileCard } from "./components/index.js";
const actionHandlers = {
    email: async () => {
        const spinner = await createAnimatedSpinner("Opening mail client...");
        await openURL(CONFIG.URLS.EMAIL);
        spinner.success({ text: passion("📧 Email client opened!") });
        await animateText(chalk.green("Looking forward to hearing from you!"));
    },
    viewResume: async () => {
        const spinner = await createAnimatedSpinner("Preparing to open resume...");
        try {
            if (CONFIG.URLS.RESUME) {
                await openURL(CONFIG.URLS.RESUME);
                spinner.success({
                    text: chalk.green("Resume opened in your browser! 🎉"),
                });
                await animateText(chalk.gray("Tip: You can download it directly from Google Drive"));
            }
            else {
                spinner.error({ text: chalk.red("Resume URL not configured 😢") });
            }
        }
        catch (error) {
            spinner.error({ text: chalk.red("Failed to open resume 😢") });
            console.error(chalk.red("Error:"), error instanceof Error ? error.message : String(error));
            throw error;
        }
    },
    scheduleMeeting: async () => {
        const spinner = await createAnimatedSpinner("Opening scheduler...");
        await openURL(CONFIG.URLS.MEETING);
        spinner.success({ text: fruit("📅 Scheduler opened!") });
        await animateText(chalk.green("Excited to chat with you soon!"));
    },
    viewPortfolio: async () => {
        const spinner = await createAnimatedSpinner("Loading portfolio...");
        try {
            if (CONFIG.URLS.PORTFOLIO) {
                await openURL(CONFIG.URLS.PORTFOLIO);
                spinner.success({ text: teen("🌐 Portfolio opened!") });
                await animateText(chalk.green("Hope you enjoy exploring my work!"));
            }
            else {
                spinner.error({ text: chalk.red("Portfolio URL not configured 😢") });
            }
        }
        catch (error) {
            spinner.error({ text: chalk.red("Failed to open portfolio 😢") });
            console.error(chalk.red("Error:"), error instanceof Error ? error.message : String(error));
        }
    },
    viewGitHub: async () => {
        const spinner = await createAnimatedSpinner("Opening GitHub...");
        await openURL(CONFIG.URLS.GITHUB);
        spinner.success({ text: atlas("💻 GitHub profile opened!") });
        await animateText(chalk.green("Check out my latest projects!"));
    },
};
// Helper function to get menu choices
const getMenuChoices = () => {
    const choices = [
        { name: `📧  ${passion("Send an Email")}`, value: "email" },
        // { name: `📥  ${morning("View Resume")}`, value: "viewResume" },
        {
            name: `📅  ${fruit("Schedule a Meeting")}`,
            value: "scheduleMeeting",
        },
        { name: `💻  ${atlas("View GitHub")}`, value: "viewGitHub" },
        { name: instagram("🚪  Exit"), value: "quit" },
    ];
    // Only add the Portfolio option if the URL is defined
    if (CONFIG.URLS.PORTFOLIO) {
        choices.splice(3, 0, {
            name: `🌐  ${teen("Visit Portfolio")}`,
            value: "viewPortfolio",
        });
    }
    return choices;
};
const menuOptions = [
    {
        type: "list",
        name: "action",
        message: cristal("What would you like to do?"),
        choices: getMenuChoices(),
    },
];
// Main application
const main = async () => {
    try {
        // await SecurityAwarenessDemo();
        await WelcomeBanner();
        await ProfileCard();
        console.log(passion("\n💡 Tip: Use ") +
            chalk.cyan("cmd/ctrl + click") +
            passion(" on links to open directly.\n"));
        while (true) {
            const answer = await inquirer.prompt(menuOptions);
            const { action } = answer;
            if (action === "quit") {
                await animateText(rainbow("\n👋 Thanks for stopping by! Have a great day!\n"), CONFIG.THEME.ANIMATION_SPEED.FAST);
                break;
            }
            await actionHandlers[action]();
        }
    }
    catch (error) {
        console.error(chalk.red("\n❌ An error occurred:"), error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
};
// Run the application
main().catch(console.error);
