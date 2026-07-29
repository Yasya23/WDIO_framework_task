import { BasePage } from '@pages/base.page';
import { paths } from '@constants/paths.constants';

class LoginPage extends BasePage {
  protected get url() {
    return paths.login;
  }

  private get headerTitle() {
    return $('h2');
  }

  private get usernameInput() {
    return $('#username');
  }

  private get submitButton() {
    return $('button[type="submit"]');
  }

  public async getTitleText(): Promise<string> {
    return this.actions.getText(this.headerTitle);
  }

  public async isUsernameDisplayed(): Promise<boolean> {
    return this.actions.isDisplayed(this.usernameInput);
  }

  public async getUsernameInputType(): Promise<string> {
    return this.actions.getAttribute(this.usernameInput, 'type');
  }

  public async getSubmitButtonText(): Promise<string> {
    const text = await this.actions.getText(this.submitButton);
    return text.trim();
  }
}

export const loginPage = new LoginPage();
