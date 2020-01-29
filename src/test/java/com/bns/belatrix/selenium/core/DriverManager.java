package com.bns.belatrix.selenium.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;

import java.net.MalformedURLException;
public class DriverManager {

    private static String OS = System.getProperty("os.name").toLowerCase();
    private static final ThreadLocal<WebDriver> DriverInstance = new ThreadLocal<WebDriver>();

    private static boolean isWindows() {
        return (OS.indexOf("win") >= 0);
    }

    private static boolean isMac() {
        return (OS.indexOf("mac") >= 0);
    }

    public static void ReleaseDriver(){
        WebDriver d = DriverManager.DriverInstance.get();
        if ( d != null){
            try{
                d.close();
                d.quit();
            }
            finally {
                DriverManager.DriverInstance.remove();
            }
        }
    }

    public static WebDriver GetDriver() throws MalformedURLException,InterruptedException {
        WebDriver driver = DriverManager.DriverInstance.get();

        if(driver != null)
            return driver;

        String browser = Resources.getProperty("general", "BROWSER");
        String url = Resources.getProperty("general","URL");

        if(browser == null  || browser.isEmpty()){
            browser = "firefox";
        }

        browser = browser.toLowerCase();

        System.out.println("=========================================");
        System.out.println("ui runtime " + url);
        System.out.println("ui browser " + browser);
        System.out.println("=========================================");

        DesiredCapabilities capabilities = null;

                switch(browser) {
                    case "safari":
                        if(isMac()) {
                            System.setProperty("webdriver.safari.noinstall", "true");
                            driver = new SafariDriver();
                            driver.get(Resources.getProperty("general", "URL"));

                        }
                        if(isWindows()) {
                            throw new IllegalArgumentException("Invalid: Not supported on this OS");
                        }
                        break;
                    case "firefox":
                        // TODO: implement the foo module here
                        if(isMac())
                            System.setProperty("webdriver.gecko.driver", System.getenv("FIREFOX_DRIVER"));
                        else
                            System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "//src//test//resources//drivers//Windows//geckodriver.exe");

                        capabilities = new DesiredCapabilities();
                        capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
                        capabilities.setCapability(CapabilityType.ACCEPT_INSECURE_CERTS, true);
                        driver = new FirefoxDriver(capabilities);

                        driver.get(Resources.getProperty("general", "URL"));
                        Thread.sleep(2000);
                        break;


                    case "chrome":
                        if(isMac())
                            System.setProperty("webdriver.chrome.driver", System.getenv("CHROME_DRIVER"));
                        else
                       //  System.setProperty("webdriver.chrome.driver", "C:\\tools\\chromedriver_.exe");

                        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//src//test//resources//drivers//Windows//chromedriver.exe");

                        ChromeOptions options = new ChromeOptions();

                        driver = new ChromeDriver(options);
                        driver.get(Resources.getProperty("general", "URL"));

                        Thread.sleep(2000);

                        break;
                    default:
                        throw new IllegalArgumentException("Invalid: " + browser);
                }


        driver.manage().window().maximize();
        DriverManager.DriverInstance.set(driver);
        return driver;
    }

}
