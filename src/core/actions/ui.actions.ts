import type { ChainablePromiseElement } from 'webdriverio';

class UIActions {
  public async navigateTo(url: string): Promise<void> {
    await browser.url(url);
  }

  public async getText(el: ChainablePromiseElement): Promise<string> {
    await el.waitForDisplayed();
    return el.getText();
  }

  public async isDisplayed(el: ChainablePromiseElement): Promise<boolean> {
    return el.isDisplayed();
  }

  public async getAttribute(
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

export const uiActions = new UIActions();
