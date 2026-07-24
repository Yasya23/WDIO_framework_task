import { assert, should as initShould, expect as chaiExpect } from 'chai';

initShould();

describe('Chai Assertion Interfaces', () => {
  beforeEach(async () => {
    await browser.url(process.env.TEST_WEBSITE_URL!);
  });

  it('1. Demonstration of the ASSERT interface', async () => {
    const header = $('h2');
    const headerText = await header.getText();

    assert.isString(headerText, 'Header text must be a string');
    assert.equal(headerText, 'Login Page', 'The header text did not match!');
    assert.isNotEmpty(headerText, 'Header text should not be empty');
  });

  it('2. Demonstration of the SHOULD interface', async () => {
    const usernameInput = $('#username');
    const isDisplayed = await usernameInput.isDisplayed();

    isDisplayed.should.be.true;

    const inputType = await usernameInput.getAttribute('type');
    inputType!.should.be.a('string').and.equal('text');
  });

  it('3. Demonstration of the EXPECT interface', async () => {
    const submitButton = $('button[type="submit"]');
    const buttonText = await submitButton.getText();

    chaiExpect(buttonText).to.be.a('string');
    chaiExpect(buttonText.trim()).to.equal('Login');
    chaiExpect(buttonText.trim()).to.have.lengthOf.at.least(1);
  });
});
