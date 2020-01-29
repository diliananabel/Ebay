package com.bns.belatrix.userstory.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = {
                "pretty",
                "html:target/cucumberHtmlReport",
                "json:target/cucumber.json"},


        glue = {"com/bns/belatrix/userstory/steps"},


        features = "src/test/java/com/bns/belatrix/userstory/features/SearchProduct.feature"//,

         //tags = { "@QA" , "@ESC_001"}

)

public class Runner {



}

