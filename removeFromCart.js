const { Builder, By } = require("selenium-webdriver");

async function testRemoveFromCart() {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        await driver.findElement(By.css(".inventory_item:nth-child(1) .btn_inventory")).click();
        await driver.findElement(By.css(".shopping_cart_link")).click();
        await driver.findElement(By.css(".cart_item .btn_secondary")).click();

        const cartBadge = await driver.findElements(By.className("shopping_cart_badge"));
        console.log(cartBadge.length === 0 ? "Remove from Cart Test Passed" : "Remove from Cart Test Failed");
    } //finally {
        //await driver.quit();
    //}
    catch (error) {
        console.error('An error occurred:', error);
}

testRemoveFromCart();
