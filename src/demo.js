module.exports = {
  'Test login Autobits' : function (client) {
    client
    .url('http://suite.autobits.com.co')
    .waitForElementVisible('button', 1000)
    .assert.title('Iniciar sesión')
    .assert.visible('input[type=text]')
    .setValue('input[type=text]', 'admin1')
    .assert.visible('input[type=password]')
    .setValue('input[type=password]', 'password')
    .waitForElementVisible('.btn', 1000)
    .click('.btn')
    .pause(1000)
    .waitForElementVisible('.navbar-right', 1000)
    .waitForElementVisible('h1', 1000)
    .assert.containsText("h1", "Bienvenido")
    .waitForElementVisible('ul.nav li.has-sub ',1000) //
    .waitForElementVisible('a[href=#/32640/reservas/listar/todos//]',1000)
 .useXpath()
    //.waitForElementVisible('a[@href="#/32640/reservas/listar/todos//"]',1000)
    //.waitForElementVisible('//ul[contains(@class, "nav")]//li[contains(@class, "has-sub")]//a//i',1000)
  //  .waitForElementVisible('ul.nav li.has-sub a i[4]', 1000)
    //.assert.containsText('//ul[contains(@class, "nav")]//li[contains(@class, "has-sub")]//a//i and text() = "Reserva"', "Reserva")
    //.assert.containsText('ol#rso li:first-child',

    .end();
  }
};
