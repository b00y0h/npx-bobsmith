import { createSpinner } from "nanospinner";
import CONFIG from "./config.js";
// Define the sleep function with proper typing
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Utility functions
export const createAnimatedSpinner = async (text, duration = 500) => {
    const spinner = createSpinner(text).start();
    await sleep(duration);
    return spinner;
};
export const animateText = async (text, speed = CONFIG.THEME.ANIMATION_SPEED.FAST) => {
    process.stdout.write("\n");
    const batchSize = 3; // Process 3 characters at once
    for (let i = 0; i < text.length; i += batchSize) {
        const batch = text.slice(i, i + batchSize);
        process.stdout.write(batch);
        await sleep(speed);
    }
    process.stdout.write("\n");
};
