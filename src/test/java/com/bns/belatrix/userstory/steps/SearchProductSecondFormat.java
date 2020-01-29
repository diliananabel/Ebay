package com.bns.belatrix.userstory.steps;

import com.bns.belatrix.helpers.SearchProductComponent;
import com.bns.belatrix.selenium.locators.EbayLocators;
import com.bns.belatrix.selenium.pages.EbayPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.HashMap;
import java.util.List;

public class SearchProductSecondFormat {

    private EbayPage ebayPage = null;
    private EbayLocators ebayLocators = new EbayLocators();

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

    @Given("^SF - enter to Ebay page$")
    public void sfEnterToEbayPage() {
        Assert.assertTrue("No se está ejecutando la pagina de ebay", ebayPage.validarPantallaEbay());
    }

    @When("^SF - enter \"([^\"]*)\" in the product search screen on ebay page \"([^\"]*)\"$")
    public void sfEnterInTheProductSearchScreenOnEbayPage(String CasoDePrueba,  String datosExtra) throws Throwable {
        stepProductSearchScreenOnEbayPage(CasoDePrueba, datosExtra,  getDataFrom(datosExtra));
    }

    @And("^SF - click on the button \"([^\"]*)\" in screen on ebay page$")
    public void sfClickOnTheButtonInScreenOnEbayPage(String arg0) throws Throwable {
        ebayPage.presionarBotonBuscar();
    }

    @When("^SF - click in the check \"([^\"]*)\" \"([^\"]*)\" on ebay page \"([^\"]*)\"$")
    public void sfClickInTheCheckOnEbayPage(String arg0, String CasoDePrueba,  String datosExtra) throws Throwable {
        stepClickInTheCheckOnEbayPage(CasoDePrueba, datosExtra,  getDataFrom(datosExtra));
    }

    @When("^SF - click in the check \"([^\"]*)\" \"([^\"]*)\" in page on ebay \"([^\"]*)\"$")
    public void sfClickInTheCheckInPageOnEbay(String arg0, String CasoDePrueba,  String datosExtra) throws Throwable {
        stepSelectSize(CasoDePrueba, datosExtra,  getDataFrom(datosExtra));
    }

    @Then("^SF - print the number of results of the product search on ebay page$")
    public void sfPrintTheNumberOfResultsOfTheProductSearchOnEbayPage() {
        ebayPage.resultsOfTheProductSearch();
    }

    @When("^SF - click on the button \"([^\"]*)\" on ebay page$")
    public void sfClickOnTheButtonOnEbayPage(String arg0) throws Throwable {
        ebayPage.clickDropDownList();
    }

    @And("^SF - click in the option \"([^\"]*)\" Price lowest Best Match$")
    public void sfClickInTheOptionPriceLowestBestMatch(String arg0) throws Throwable {
        ebayPage.clickPriceShippinglowest();
    }

    @Then("^SF - print the order the results of the search product on ebay page$")
    public void sfPrintTheOrderTheResultsOfTheSearchProductOnEbayPage() {
        Assert.assertTrue("the grid wan't show with the results search", ebayPage.visibleDgvSearchProduct());
    }

    @Then("^SF - print the order taking the first \"([^\"]*)\" results order Name by ASC \"([^\"]*)\"$")
    public void sfPrintTheOrderTakingTheFirstResultsOrderNameByASC(String CasoDePrueba,  String datosExtra) throws Throwable {
        Assert.assertTrue("the first results are not shown",
                ebayPage.showfirstNumResultNameAsc(stepOrderTakingTheFirstResultsOrderNameByASC(CasoDePrueba,datosExtra,getDataFrom(datosExtra))));
    }

    @And("^SF - click in the option \"([^\"]*)\" Price highest Best Match$")
    public void sfClickInTheOptionPriceHighestBestMatch(String arg0) throws Throwable {
        ebayPage.clickPriceShippinghighest();
    }

    @Then("^SF - print the order taking the first \"([^\"]*)\" results order Price by Desc \"([^\"]*)\"$")
    public void sfPrintTheOrderTakingTheFirstResultsOrderPriceByDesc(String CasoDePrueba,  String datosExtra) throws Throwable {
        Assert.assertTrue("the first results are not shown", ebayPage.showfirstNumResultPriceDesc(stepOrderTakingTheFirstResultsOrderPriceByDesc(CasoDePrueba,datosExtra,getDataFrom(datosExtra))));
    }

    public void stepProductSearchScreenOnEbayPage(String indexCasoPrueba, String datosExtra, List<HashMap<String, String>> dataFrom) {

        try {

            int index = Integer.parseInt(indexCasoPrueba) - 1;

            String product = dataFrom.get(index).get(ebayLocators.Product);
            ebayPage.productSearch(product);

        } catch (Throwable t) {
            throw t;
        }
    }


    public void stepClickInTheCheckOnEbayPage(String indexCasoPrueba, String datosExtra, List<HashMap<String, String>> dataFrom){

        try {

            int index = Integer.parseInt(indexCasoPrueba) - 1;

            String brand = dataFrom.get(index).get(ebayLocators.Brand);
            ebayPage.selectBrandEbay(brand);

        } catch (Throwable t) {
            throw t;
        }


    }

    public void stepSelectSize(String indexCasoPrueba, String datosExtra, List<HashMap<String, String>> dataFrom){

        try {

            int index = Integer.parseInt(indexCasoPrueba) - 1;
            String Size = dataFrom.get(index).get(ebayLocators.Size);
            ebayPage.selectSizeEbay(Size);

        } catch (Throwable t) {
            throw t;
        }

    }


    private String stepOrderTakingTheFirstResultsOrderNameByASC(String indexCasoPrueba, String datosExtra, List<HashMap<String, String>> dataFrom){

        int index = Integer.parseInt(indexCasoPrueba) - 1;
        String num = dataFrom.get(index).get(ebayLocators.First);

      return num;
    }


    private String stepOrderTakingTheFirstResultsOrderPriceByDesc(String indexCasoPrueba, String datosExtra, List<HashMap<String, String>> dataFrom){

        int index = Integer.parseInt(indexCasoPrueba) - 1;
        String num = dataFrom.get(index).get(ebayLocators.First);

        return num;
    }

    private List<HashMap<String, String>> getDataFrom(String motivoDatosExtra) throws Throwable {
        return SearchProductComponent.SearchProductEbay.getDataFrom(motivoDatosExtra);
    }


}
