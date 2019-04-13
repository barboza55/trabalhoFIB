const {
    By,
    Builder,
} = require('selenium-webdriver');

var driver = new Builder().forBrowser('chrome').build();

(async function () {
    try {
        await driver.get('http://localhost:3000/?');
        await driver.manage().window().maximize();
        await driver.findElement(By.id('1_transacao')).sendKeys('CSR60');
        await driver.findElement(By.id('2_versao')).sendKeys('01');
        await driver.findElement(By.id('5_codigo')).sendKeys('00667879');
        await driver.findElement(By.id('6_senha')).sendKeys('C0NT1A');
        await driver.findElement(By.id('7_consulta')).sendKeys('SCPCB');
        await driver.findElement(By.id('8_versao consulta')).sendKeys('01');
        await driver.findElement(By.id('9_tipo de resposta')).sendKeys('1');
        await driver.findElement(By.id('10_tipo de transmissao da resposta')).sendKeys('C');
        await driver.findElement(By.id('11_tipo de documento')).sendKeys('1');
        await driver.findElement(By.id('12_cpf')).sendKeys('00045350667874');
        await driver.findElement(By.id('16_tipo de credito')).sendKeys('CC');
        await driver.findElement(By.id('25_indicador de fim de texto')).sendKeys('X');
        await driver.findElement(By.id('consulta')).click();
    } catch (err) {
        console.error('Erro2', err);
    } 
})();