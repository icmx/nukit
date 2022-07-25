export type FloatHandling =
  | 'keep'
  | keyof Pick<Math, 'ceil' | 'floor' | 'round' | 'trunc'>;
