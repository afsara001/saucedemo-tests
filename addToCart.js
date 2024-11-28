const { Builder, By } = require("selenium-webdriver");

async function testAddToCart() {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        await driver.findElement(By.css(".inventory_item:nth-child(1) .btn_inventory")).click();
        await driver.findElement(By.css(".inventory_item:nth-child(2) .btn_inventory")).click();
        const cartBadge = await driver.findElement(By.className("shopping_cart_badge")).getText();

        console.log(cartBadge === "1" ? "Add to Cart Test Passed" : "Add to Cart Test Failed");
        console.log(cartBadge === "2" ? "Add to Cart Test Passed" : "Add to Cart Test Failed");
    } //finally {
       //await driver.quit();
    //}
    catch (error) {
        console.error('An error occurred:', error);
    }
}

testAddToCart();
