import { paths } from '../constants/paths.constants';

export type TPaths = (typeof paths)[keyof typeof paths];
