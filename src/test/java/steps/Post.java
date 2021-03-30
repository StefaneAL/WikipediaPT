package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import static org.junit.Assert.assertTrue;

public class Post {

    private Base base;

    public Post (Base base){
        this.base = base;
    }

    @Dado("^que acesso a Wikpedia em portugues$")
    public void queAcessoAWikpediaEmPortugues() {
        base.driver.get(base.url);
    }

    @Quando("^pesquiso por \"([^\"]*)\"$")
    public void pesquisoPor(String item) {
        base.driver.findElement(By.id("searchInput")).sendKeys(item + Keys.ENTER);

    }

    @Entao("^Exibe expressao \"([^\"]*)\" no titulo da guia$")
    public void exibeExpressaoNoTituloDaGuia(String item)  {
        assertTrue(base.driver.getTitle().contains(item));

    }
}
