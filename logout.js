const { Builder, By } = require("selenium-webdriver");

async function testLogout() {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        await driver.findElement(By.id("react-burger-menu-btn")).click();
        await driver.findElement(By.id("logout_sidebar_link")).click();

        const loginButton = await driver.findElement(By.id("login-button"));
        console.log(await loginButton.isDisplayed() ? "Logout Test Passed" : "Logout Test Failed");
    } //finally {
        //await driver.quit();
   // }
    catch (error) {
        console.error('An error occurred:', error);
}
}
testLogout();
