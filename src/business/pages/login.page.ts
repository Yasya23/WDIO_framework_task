import { BasePage } from '@core-pages/base.page';
import { paths } from '@core-constants/paths.constants';

export class LoginPage extends BasePage {
  private get headerTitle() {
    return $('h2');
  }
  private get usernameInput() {
    return $('#username');
  }

  private get submitButton() {
    return $('button[type="submit"]');
  }

  public async openLoginPage(): Promise<void> {
    await this.open(paths.login);
  }

  public async getTitleText(): Promise<string> {
    return this.getText(this.headerTitle);
  }

  public async isUsernameDisplayed(): Promise<boolean> {
    return this.isDisplayed(this.usernameInput);
  }

  public async getUsernameInputType(): Promise<string> {
    return this.getAttribute(this.usernameInput, 'type');
  }

  public async getSubmitButtonText(): Promise<string> {
    const text = await this.getText(this.submitButton);
    return text.trim();
  }
}

export const loginPage = new LoginPage();
