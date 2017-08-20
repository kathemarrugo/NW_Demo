module.exports = {
  'Demo test Google' : function (client) {
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
    .assert.title('Inicio')
    //.assert.containsText('ol#rso li:first-child',
    //'Rembrandt - Wikipedia')
    .end();
  }
};
