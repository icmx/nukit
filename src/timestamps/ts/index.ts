export type TsOptions = {
  from?: Date;
  ms?: keyof Pick<Math, 'ceil' | 'floor' | 'round' | 'trunc'>;
};

export const ts = (options: TsOptions = {}) => {
  const { from, ms }: TsOptions = {
    from: new Date(),
    ...options,
  };

  if (ms) {
    return Math[ms](from.getTime() / 1000);
  } else {
    return from.getTime();
  }
};
