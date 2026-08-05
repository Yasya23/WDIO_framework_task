import { assert, should as initShould, expect as chaiExpect } from 'chai';
import { loginPage } from '@pages/login.page';

initShould();

describe('Chai Assertion Interfaces (Refactored)', () => {
  beforeEach(async () => {
    await browser.url(loginPage.url);
  });

  it('1. Demonstration of the ASSERT interface', async () => {
    const headerText = await loginPage.headerTitle.getText();

    assert.isString(headerText, 'Header text must be a string');
    assert.equal(headerText, 'Login Page', 'The header text did not match!');
    assert.isNotEmpty(headerText, 'Header text should not be empty');
  });

  it('2. Demonstration of the SHOULD interface', async () => {
    await loginPage.usernameInput.waitForDisplayed();
    const isDisplayed = await loginPage.usernameInput.isDisplayed();
    const inputType = (await loginPage.usernameInput.getAttribute('type'))!;

    isDisplayed.should.be.true;

    inputType.should.be.a('string').and.equal('text');
  });

  it('3. Demonstration of the EXPECT interface', async () => {
    const buttonText = await loginPage.submitButton.getText();

    chaiExpect(buttonText).to.be.a('string');
    chaiExpect(buttonText).to.equal('Login');
    chaiExpect(buttonText).to.have.lengthOf.at.least(1);
  });
});
