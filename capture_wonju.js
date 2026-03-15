const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        const browser = await chromium.launch({ headless: true });
        const context = await browser.newContext({
            viewport: { width: 1280, height: 3000 }
        });
        const page = await context.newPage();
        
        console.log('Navigating to http://localhost:3000/tier-4/wonju ...');
        await page.goto('http://localhost:3000/tier-4/wonju', { waitUntil: 'load' });
        
        // Wait for images to load if lazy
        await page.waitForTimeout(5000);
        
        const timestamp = Date.now();
        const screenshotPath = path.join(`C:\\Users\\cooki\\.gemini\\antigravity\\brain\\f7c40040-eb7b-4a94-a8d6-68341faf443b`, `wonju_final_${timestamp}.png`);
        
        // Custom scrolling to ensure lazy loading
        await page.evaluate(async () => {
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
            for (let i = 0; i < document.body.scrollHeight; i += 500) {
                window.scrollTo(0, i);
                await delay(200);
            }
            window.scrollTo(0, 0);
        });
        await page.waitForTimeout(1000);
        
        console.log(`Saving screenshot to: ${screenshotPath}`);
        await page.screenshot({ path: screenshotPath, fullPage: true });

        // Additionally capture just the accommodations and downtown sections
        const accommHandle = await page.$('.accommodation-section');
        if (accommHandle) {
            await accommHandle.screenshot({ path: path.join(`C:\\Users\\cooki\\.gemini\\antigravity\\brain\\f7c40040-eb7b-4a94-a8d6-68341faf443b`, `wonju_accomm_${timestamp}.png`) });
            console.log('Accommodations section screenshot saved.');
        }

        const downtownHandle = await page.$('.downtown-section');
        if (downtownHandle) {
            await downtownHandle.screenshot({ path: path.join(`C:\\Users\\cooki\\.gemini\\antigravity\\brain\\f7c40040-eb7b-4a94-a8d6-68341faf443b`, `wonju_downtown_${timestamp}.png`) });
            console.log('Downtown section screenshot saved.');
        }
        
        await browser.close();
        console.log('Done.');
    } catch (e) {
        console.error('Error:', e);
        process.exit(1);
    }
})();
