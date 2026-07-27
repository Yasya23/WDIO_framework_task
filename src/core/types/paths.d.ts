import { paths } from '@core-constants/paths.constants';

export type Paths = (typeof paths)[keyof typeof paths];
