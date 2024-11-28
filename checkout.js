const { Builder, By } = require("selenium-webdriver");

async function testCheckout() {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        await driver.findElement(By.css(".inventory_item:nth-child(1) .btn_inventory")).click();
        await driver.findElement(By.css(".shopping_cart_link")).click();
        await driver.findElement(By.css(".checkout_button")).click();

        await driver.findElement(By.id("first-name")).sendKeys("John");
        await driver.findElement(By.id("last-name")).sendKeys("Doe");
        await driver.findElement(By.id("postal-code")).sendKeys("12345");
        await driver.findElement(By.css(".btn_primary")).click();

        const confirmationText = await driver.findElement(By.className("complete-header")).getText();
        console.log(confirmationText === "THANK YOU FOR YOUR ORDER" ? "Checkout Test Passed" : "Checkout Test Failed");
    } //finally {
        ///await driver.quit();
    //}
    catch (error) {
        console.error('An error occurred:', error);
    }
}

testCheckout();
