import { TPaths } from '@business-types/paths';
import { uiActions } from '@core-actions/ui.actions';

export abstract class BasePage {
  protected abstract readonly url: TPaths;
  protected readonly actions = uiActions;

  public async open(): Promise<void> {
    await this.actions.navigateTo(this.url);
  }
}
