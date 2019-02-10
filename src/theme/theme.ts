export const theme = {
  colors: {
    primary: 'orange',
    secondary: 'blue',
  },
  space: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
};

export type ColorTheme = {
  color?: keyof typeof theme.colors;
  background?: keyof typeof theme.colors;
};
export type SpaceTheme = {
  m?: keyof typeof theme.space;
  /** Margin for the top */
  mt?: keyof typeof theme.space;
  /** Margin for the right */
  mr?: keyof typeof theme.space;
  /** Margin for the bottom */
  mb?: keyof typeof theme.space;
  /** Margin for the left */
  ml?: keyof typeof theme.space;
  /** Margin for the left and right */
  mx?: keyof typeof theme.space;
  /** Margin for the top and bottom */
  my?: keyof typeof theme.space;
  /** Padding on top, left, bottom and right */
  p?: keyof typeof theme.space;
  /** Padding for the top */
  pt?: keyof typeof theme.space;
  /** Padding for the right */
  pr?: keyof typeof theme.space;
  /** Padding for the bottom */
  pb?: keyof typeof theme.space;
  /** Padding for the left */
  pl?: keyof typeof theme.space;
  /** Padding for the left and right */
  px?: keyof typeof theme.space;
  /** Padding for the top and bottom */
  py?: keyof typeof theme.space;
};
