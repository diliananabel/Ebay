package com.bns.belatrix.selenium.pages;

import cucumber.api.Scenario;

import com.bns.belatrix.selenium.wrapper.Driver;
import com.bns.belatrix.selenium.locators.EbayLocators;
import org.apache.commons.lang3.StringUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import java.io.IOException;
import java.net.MalformedURLException;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class EbayPage extends BasePage {

    private EbayLocators ebayLocators;

    public EbayPage() throws MalformedURLException, InterruptedException {

        driver = new Driver();
        ebayLocators = new EbayLocators();
    }

    public void closeDriver() {
        driver.tearDown();
    }

    public boolean validarPantallaEbay() {

        return ((driver.elementIsVisible(ebayLocators.lblLogoEbay) ? true : false));

    }

    public void takeScreenshot(Scenario scenario) throws IOException {
        if (driver != null)
            driver.takeScreenShot(scenario);
    }

    public void productSearch(String product) {
        driver.sendKeys(product, ebayLocators.lblProducto);
    }

    public void presionarBotonBuscar() {
        driver.click(ebayLocators.btnContinuar);
    }

    public void selectBrandEbay(String brand) {

        String xpathBrand = ebayLocators.CHK_BRAND.replace("@brand", brand);
        driver.click(By.xpath(xpathBrand));
        driver.sleep(10);

    }

    public void selectSizeEbay(String size) {

        JavascriptExecutor js = (JavascriptExecutor) driver.driver;
        js.executeScript("window.scrollBy(0,2500)");

        String xpathBrand = ebayLocators.CHK_SIZE.replace("@size", size);
        driver.click(By.xpath(xpathBrand));
        driver.sleep(15);
    }

    public void resultsOfTheProductSearch() {

        if (driver.elementIsPresent(ebayLocators.lblResult)) {

            Integer resultado;
            resultado = Integer.parseInt(driver.getVisibleText(ebayLocators.lblResult).replace(",", StringUtils.EMPTY));
            System.out.println("search result: " + resultado);

        } else {
            Assert.assertTrue("No se encontró el elemento presente", driver.elementIsPresent(ebayLocators.lblResult));
        }

    }

    public void clickDropDownList() {

        driver.mouseHoverAction(ebayLocators.btnBestProd);
        driver.sleep(10);
    }

    public void clickPriceShippinglowest() {

        WebDriverWait wait = new WebDriverWait(driver.driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(ebayLocators.btnPriceShippinglowest));
        driver.click(ebayLocators.btnPriceShippinglowest);

    }

    public void clickPriceShippinghighest() {

        WebDriverWait wait = new WebDriverWait(driver.driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(ebayLocators.btnPriceShippinghighest));
        driver.click(ebayLocators.btnPriceShippinghighest);

    }

    public boolean visibleDgvSearchProduct() {

        return ((driver.elementIsVisible(ebayLocators.dgvResultSearchProduct) ? true : false));
    }

    public boolean showfirstNumResultNameAsc(String num) {

        int count = Integer.parseInt(num);
        String nomProd;

        boolean a = false;
        for (int i = 1; i <= count; i++) {

            if (driver.elementIsVisible(By.xpath("//li[@id ='srp-river-results-listing" + i + "']//h3"))) {

                nomProd = driver.getVisibleText(By.xpath("//li[@id ='srp-river-results-listing" + i + "']//h3"));
                System.out.println("The name of the product " + i + " is: " + nomProd);

                a = true;
            }
        }

        return (a);
    }

    public boolean showfirstNumResultPriceDesc(String num){

        int count = Integer.parseInt(num);
        String price;

        boolean b = false;
        for (int i = 1; i <= count; i++) {

            if (driver.elementIsVisible(By.xpath("//li[@id ='srp-river-results-listing" + i + "']//span[@class='s-item__price']"))) {

                price = driver.getVisibleText(By.xpath("//li[@id ='srp-river-results-listing" + i + "']//span[@class='s-item__price']"));
                System.out.println("The price of the product " + i + " is: " + price);
                b = true;
            }
        }

        return (b);
    }



}






