import { getEnv } from '@utils/get-env.util';
import { Paths } from '@core-types/paths';

export abstract class BasePage {
  protected readonly url: string;

  constructor() {
    this.url = getEnv('BASE_WEBSITE_URL');
  }

  public async open(path: Paths): Promise<void> {
    const url = `${this.url}${path}`;
    await browser.url(url);
  }

  protected async getText(el: ChainablePromiseElement): Promise<string> {
    await el.waitForDisplayed();
    return el.getText();
  }

  protected async isDisplayed(el: ChainablePromiseElement): Promise<boolean> {
    return el.isDisplayed();
  }

  protected async getAttribute(
    el: ChainablePromiseElement,
    name: string,
  ): Promise<string> {
    await el.waitForDisplayed();
    const value = await el.getAttribute(name);

    if (value === null) {
      throw new Error(
        `Attribute "${name}" not found on element ${el.selector.toString()}`,
      );
    }

    return value;
  }
}
