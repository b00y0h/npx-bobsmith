import { platform } from "os";
import { animateText, createAnimatedSpinner, sleep } from "../utils.js";
import chalk from "chalk";
import CONFIG from "../config.js";
// Add this function to your card.ts file
export const SecurityAwarenessDemo = async () => {
    console.log("\n");
    const spinner = await createAnimatedSpinner("Scanning browser history...", 1000);
    // Simulate finding browser history (without actually accessing it)
    const currentOS = platform();
    const isWindows = currentOS === "win32";
    const isMac = currentOS === "darwin";
    const fakeBrowserHistory = [
        {
            browser: "Chrome",
            site: "https://my-banking-portal.example.com",
            timestamp: new Date(Date.now() - 1000 * 60 * 3).toLocaleTimeString(), // 3 minutes ago
            path: isWindows
                ? "C:\\Users\\{username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\History"
                : "/Users/{username}/Library/Application Support/Google/Chrome/Default/History",
        },
        {
            browser: "Firefox",
            site: "https://webmail.example.org/login",
            timestamp: new Date(Date.now() - 1000 * 60 * 15).toLocaleTimeString(), // 15 minutes ago
            path: isWindows
                ? "C:\\Users\\{username}\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\{profile}\\places.sqlite"
                : "/Users/{username}/Library/Application Support/Firefox/Profiles/{profile}/places.sqlite",
        },
        {
            browser: isWindows ? "Edge" : "Safari",
            site: "https://social-media-example.com/messages",
            timestamp: new Date(Date.now() - 1000 * 60 * 32).toLocaleTimeString(), // 32 minutes ago
            path: isWindows
                ? "C:\\Users\\{username}\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\History"
                : "/Users/{username}/Library/Safari/History.db",
        },
    ];
    spinner.success({ text: chalk.yellow("⚠️ Browser history found!") });
    // Display simulated browser history
    await sleep(500);
    console.log("\n");
    console.log(chalk.red.bold("🚨 SECURITY ALERT: Recently visited sites found:"));
    console.log("\n");
    for (const item of fakeBrowserHistory) {
        console.log(chalk.yellow(`[${item.timestamp}] ${item.browser}: ${chalk.cyan(item.site)}`));
        await sleep(300);
    }
    console.log("\n");
    await animateText(chalk.red.bold("⚠️ IMPORTANT SECURITY WARNING ⚠️"), CONFIG.THEME.ANIMATION_SPEED.FAST);
    const message = [
        chalk.white("This is a security demonstration. A malicious NPX script could potentially:"),
        chalk.yellow("• Access your browser history and sensitive information"),
        chalk.yellow("• Read files from your system"),
        chalk.yellow("• Send data to remote servers"),
        chalk.yellow("• Execute malicious code with your user permissions"),
        "",
        chalk.white.bold("Always be cautious when running unknown scripts from the internet."),
        chalk.white.bold("Verify the source and review the code before execution."),
        "",
        chalk.cyan.bold("Need help with cybersecurity or a security audit?"),
        chalk.white(`Contact me at ${chalk.green(CONFIG.URLS.EMAIL || "email@example.com")} for professional security services.`),
    ];
    for (const line of message) {
        console.log(line);
        await sleep(100);
    }
    console.log("\n");
    await animateText(chalk.cyan("Press any key to continue to the business card..."), CONFIG.THEME.ANIMATION_SPEED.FAST);
    // Wait for user to press a key
    await new Promise((resolve) => {
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.once("data", () => {
            process.stdin.setRawMode(false);
            process.stdin.pause();
            resolve();
        });
    });
};
