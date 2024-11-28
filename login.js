const { Builder, By } = require("selenium-webdriver");

async function testLogin() {
    const driver = await new Builder().forBrowser("chrome").build();
try {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        const title = await driver.findElement(By.className("title")).getText();
        console.log(title === "Products" ? "Login Test Passed" : "Login Test Failed");
    } //finally {
        //await driver.quit();
    //}
    catch (error) {
        console.error('An error occurred:', error);
    } 
}

testLogin();
