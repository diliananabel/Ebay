package com.bns.belatrix.helpers;

import com.bns.belatrix.selenium.locators.EbayLocators;
import java.util.HashMap;
import java.util.List;
import com.bns.belatrix.helpers.utility.ExcelReader;

import org.apache.commons.lang3.StringUtils;

public class SearchProductComponent {
    private static EbayLocators ebayLocators = new EbayLocators();

    private static String RUTA_EXCEL = ebayLocators.Ruta_Excel;
    private static String HOJA_EXCEL = ebayLocators.Hoja_Excel;

    public static class SearchProductEbay {

            /*******************************************Methods to Get Data from Excel ****************************************************************/

            public static List<HashMap<String, String>> getDataFrom(String fuenteDatos) throws Throwable {

                String valorComparacion = StringUtils.trimToEmpty(fuenteDatos);

                if (StringUtils.equalsIgnoreCase(valorComparacion, "Ebay Data")) {
                    return ExcelReader.data(RUTA_EXCEL, HOJA_EXCEL);
                }

                throw new IllegalAccessException("fuente " + valorComparacion + " no soportada");
            }

    }

}