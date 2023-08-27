const puppeteer = require('puppeteer');


const searchResult = async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.amazon.com/s?k=laptop")

   const title = await page.evaluate(()=>document.body.querySelector('a'));
   console.log(title);
    await browser.close();
    return title
}   
export default searchResult