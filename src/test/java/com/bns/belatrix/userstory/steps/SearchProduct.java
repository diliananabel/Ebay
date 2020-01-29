package com.bns.belatrix.userstory.steps;

import com.bns.belatrix.selenium.pages.EbayPage;
import com.bns.belatrix.selenium.locators.EbayLocators;
import cucumber.api.Scenario;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.net.MalformedURLException;

public class SearchProduct {

    private EbayPage ebayPage = null;
    private EbayLocators ebayLocators = null;

    @Before
    public void beforeScenario(Scenario scenario) throws Exception {
        ebayPage = new EbayPage();

    }

    @After
    public void afterScenario(Scenario scenario) throws Exception {

        if(scenario.isFailed()) {
            ebayPage.takeScreenshot(scenario);
        }
        ebayPage.closeDriver();
        ebayPage = null;
    }
   public SearchProduct()throws MalformedURLException, InterruptedException{

   }

    @Given("^enter to Ebay page$")
    public void enterToEbayPage()  throws Throwable{
        Assert.assertTrue("No se está ejecutando la pagina de ebay", ebayPage.validarPantallaEbay());
    }
    @When("^enter \"([^\"]*)\" in the product search screen on ebay page$")
    public void enterInTheProductSearchScreenOnEbayPage(String product) throws Throwable {
        ebayPage.productSearch(product);
    }
    @And("^click on the button \"([^\"]*)\" in screen on ebay page$")
    public void clickOnTheButtonInScreenOnEbayPage(String arg0) throws Throwable {
        ebayPage.presionarBotonBuscar();
    }
    @When("^click in the check \"([^\"]*)\" \"([^\"]*)\" on ebay page$")
    public void clickInTheCheckOnEbayPage(String arg0, String brand) throws Throwable {
        ebayPage.selectBrandEbay(brand);
    }
    @When("^click in the check \"([^\"]*)\" \"([^\"]*)\" in page on ebay$")
    public void clickInTheCheckInPageOnEbay(String arg0, String size) throws Throwable {
        ebayPage.selectSizeEbay(size);
    }
    @Then("^print the number of results of the product search on ebay page$")
    public void printTheNumberOfResultsOfTheProductSearchOnEbayPage() {

        ebayPage.resultsOfTheProductSearch();
    }
    @When("^click on the button \"([^\"]*)\" on ebay page$")
    public void clickOnTheButtonOnEbayPage(String arg0) throws Throwable {
      ebayPage.clickDropDownList();

    }
    @Then("^print the order the results of the search product on ebay page$")
    public void printTheOrderByPriceAscendantTheResultsOfTheSearchProductOnEbayPage() {
      Assert.assertTrue("the grid wan't show with the results search", ebayPage.visibleDgvSearchProduct());

    }
    @And("^click in the option \"([^\"]*)\" Price highest Best Match$")
    public void clickInTheOptionBestMatch(String arg0) throws Throwable {

        ebayPage.clickPriceShippinghighest();
    }

    @Then("^print the order taking the first \"([^\"]*)\" results order Name by ASC$")
    public void printTheOrderTakingTheFiveResults(String num) throws Throwable {

        Assert.assertTrue("the first results are not shown", ebayPage.showfirstNumResultNameAsc(num));
    }

    @And("^click in the option \"([^\"]*)\" Price lowest Best Match$")
    public void clickInTheOptionPriceLowestBestMatch(String num) throws Throwable {

        ebayPage.clickPriceShippinglowest();
    }

    @Then("^print the order taking the first \"([^\"]*)\" results order Price by Desc$")
    public void printTheOrderTakingTheFirstResultsOrderPriceByDesc(String num) throws Throwable {
        Assert.assertTrue("the first results are not shown", ebayPage.showfirstNumResultPriceDesc(num));
    }
}
