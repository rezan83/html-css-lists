const puppeteer = require("puppeteer");
const path = require('path');

const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    devtools: false,
}
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try { 
        this.puppeteer.close(); 
    } catch (e) 
    {} 
    done();
});

describe('Part 1: Ordered Lists', () => {
    it(`Should be an H2 element with inner text of 'Driving Instructions'`, async () => {
        try {
            // <h2>Driving Instructions</h2>
            const heading = await page.$eval('h2', el => el.innerText);
            expect(heading).toMatch(/driving instructions/i);
        } catch (error) {
            throw error
        };
    })
    it('OL with 5 list items', async () => {
        try {
            const ol = await page.$eval('ol', el => el.innerText);
            expect(ol.split('\n').length).toBe(5);
        } catch (error) {
            throw error
        }
        ;
    })
});

describe('Part 2: Unordered List', () => {
    it('UL with 5 list items', async () => {
        try {
            const ul = await page.$eval('ul', el => el.innerText);
            expect(ul.split('\n').length).toBe(5);
        } catch (error) {
            throw error
        };
    })
    it("Style should be set to 'list-style-type: cirle;' ", async () => {
        try {
            const li = await page.$eval('ul > li', el => getComputedStyle(el).listStyleType);
            expect(li).toBe('circle')
        }
        catch (error) {
            throw error
        };
    })
    it("Anchor tags should have target set to '_blank' ", async () => {
        try {
            const a = await page.$eval('a', el => el.getAttribute('target'));
            expect(a).toBe('_blank')
        }
        catch (error) {
            throw error
        }
        ;
    })
})

describe('Part 3', () => {
    it('Top section should contain an H1 tag with the title Easy Carrot Cake', async () => {
        try {
            // <h1>Easy Carrot Cake</h1>
            const h1 = await page.$eval('h1', el => el.innerText);
            expect(h1).toMatch(/easy carrot cake/i);
        } catch (error) {
            throw error
        };
    })
    it("First H2's in Part 3 Should contain text of 'Ingredients', and second H2 should be 'Steps'  ", async () => {
        try {
            // <h2>Ingredients</h2>
            const heading = await page.$$('h2');
            for (let i = 0; i < heading.length; i++) {
                const h2 = await heading[i].getProperty('innerText');
                if (i === 1) {
                    expect(await h2.jsonValue()).toMatch(/ingredients/i);
                }
                // <h2>Steps</h2>
                if (i === 2) {
                    expect(await h2.jsonValue()).toMatch(/steps/i);
                }
            }
        } catch (error) {
            throw error
        }
    })
    it("UL with an id of 'ingredients' Should have 12 list items", async () => {
        // ul with the id of 'ingredients' should have 12 list items
        const ul = await page.$eval('ul#ingredients', el => el.innerText);
        expect(ul.split('\n').length).toBe(12);
    })
})

