import { BasePage } from '@pages/base.page';
import { paths } from '@constants/paths.constants';

class LoginPage extends BasePage {
  private readonly headerTitleSelector = 'h2';
  private readonly usernameInputSelector = '#username';
  private readonly submitButtonSelector = 'button[type="submit"]';

  public get url() {
    return paths.login;
  }

  public get headerTitle() {
    return $(this.headerTitleSelector);
  }

  public get usernameInput() {
    return $(this.usernameInputSelector);
  }

  public get submitButton() {
    return $(this.submitButtonSelector);
  }
}

export const loginPage = new LoginPage();
