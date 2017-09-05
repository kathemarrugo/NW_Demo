module.exports = {
  'Test login SPA' : function (client) {
    client
    .url('http://localhost:8080/')
    .waitForElementVisible('button', 1000)
    .assert.title('SPA TEMIX - Prueba')
    .pause(1000)
    .assert.visible('input[type=text]')
    .setValue('input[type=text]','admin1')
    .assert.visible('input[type=password]')
    .setValue('input[type=password]', 'password')
    .waitForElementVisible('.btn', 1000)
    .click('.btn')
    .pause(1000)
    /*.waitForElementVisible('.navbar-right', 1000)
    .waitForElementVisible('h1', 1000)
    .assert.containsText("h1", "Bienvenido")
    .waitForElementVisible('ul.nav li.has-sub ',1000) //
    .assert.containsText('ul.nav li.has-sub:nth-child(4) a span','Reservas')
    .click('ul.nav li.has-sub:nth-child(4) a')
    .pause(1000)
    .waitForElementVisible('h1.page-header',1000)
    .assert.containsText('h1.page-header', 'Reserva')
    .click('div.btn-group a.btn.btn-success.p-l-40.p-r-40.btn-sm.m-r-10')
    .pause(1000)
    .waitForElementVisible('h3.modal-title.panel-title',1000)
    //.expect.element('div.row > div.columns:first-child > h2 > i').text.to.be.equal('Hello');

    
*/
    .end();
  }
};
