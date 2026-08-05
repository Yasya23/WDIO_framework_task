import { TPaths } from '@business-types/paths';

export abstract class BasePage {
  protected abstract readonly url: TPaths;
}
