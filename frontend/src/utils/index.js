export const roundToDecimalPoint = value => Math.round((value + Number.EPSILON) * 100) / 100;