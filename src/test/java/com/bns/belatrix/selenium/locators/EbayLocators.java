package com.bns.belatrix.selenium.locators;

import org.openqa.selenium.By;

public class EbayLocators {

    public By lblLogoEbay;
    public By lblProducto;
    public By btnContinuar;
    public By lblBrand;
    public By lblResult;
    public By btnBestProd;
    public By btnPriceShippinglowest;
    public By btnPriceShippinghighest;
    public By dgvResultSearchProduct;

    private String LBL_LOGO_EBAY;
    private String LBL_PRODUCT;
    private String BTN_CONTINUAR;
    public String CHK_BRAND;
    public String CHK_SIZE;
    public String LBL_RESULT;
    private String BTN_BEST_PROD;
    private String BTN_PRICE_SHIPPING;
    private String BTN_PRICE_SHIPPING_HIGT;
    private String LBL_BRAND;
    public String DGV_RESULT_SEARCH;

    public String Product;
    public String Brand;
    public String Size;
    public String First;
    public  String Ruta_Excel;
    public  String Hoja_Excel;

    public  String Ejecuta = "Ejecuta";


    public EbayLocators(){
        setLocators();
    }

    private void setLocators(){
     //   LBL_LOGO_EBAY = "//table[@class='gh-tbl']//h1/a[contains(text(),'Logo')]";
        LBL_LOGO_EBAY =  "//table[@class='gh-tbl']//h1//*[contains(@id,'gh-logo')]";

        LBL_PRODUCT = "//*[@id=\"gh-ac\"]";
        BTN_CONTINUAR = "//*[@id=\"gh-btn\"]";
        CHK_BRAND = "//*[contains(text(),'@brand')]/ancestor::div/input";
        CHK_SIZE = "//div/*[(text()='@size')]";
        LBL_RESULT = "//h1[@class= 'srp-controls__count-heading']/span[1][@class='BOLD']";
        BTN_BEST_PROD = "//div[contains(text(), 'Precio + Envío:') or contains(text(), 'Price + Shipping') or contains(text(), 'Mejor resultado') or contains(text(), 'Best')]//ancestor::button";
        BTN_PRICE_SHIPPING_HIGT = "//*[contains(text(),'Precio + Envío: más alto primero') or contains(text(),'Price + Shipping: lowest first')]//ancestor::li";
        BTN_PRICE_SHIPPING = "//*[contains(text(),'Precio + Envío: más bajo primero') or contains(text(),'Price + Shipping: highest first')]//ancestor::li";
        DGV_RESULT_SEARCH = "//ul[@class='srp-results srp-grid clearfix']";
        LBL_BRAND = "";

        Ruta_Excel = "/src/test/java/com/bns/belatrix/userstory/excel/SearchProduct.xlsx";
        Hoja_Excel = "SearchProduct";

        Product = "Product";
        Brand = "Brand";
        Size = "Size";
        First = "First";

        lblLogoEbay = By.xpath(LBL_LOGO_EBAY);
        lblProducto = By.xpath(LBL_PRODUCT);
        btnContinuar = By.xpath(BTN_CONTINUAR);
        lblBrand =  By.xpath(LBL_BRAND);
        lblResult =  By.xpath(LBL_RESULT);
        btnBestProd = By.xpath(BTN_BEST_PROD);
        btnPriceShippinglowest = By.xpath(BTN_PRICE_SHIPPING);
        btnPriceShippinghighest = By.xpath(BTN_PRICE_SHIPPING_HIGT);
        dgvResultSearchProduct = By.xpath(DGV_RESULT_SEARCH);


    }



}
