const breakpoints = {
  md: (styles) =>
    styles ? `@media screen and (min-width: 768px){ ${styles} }` : "",
  lg: (styles) =>
    styles ? `@media screen and (min-width: 992px){ ${styles} }` : "",
  xl: (styles) =>
    styles ? `@media screen and (min-width: 1200px){ ${styles} }` : "",
};

const responsive = css => css ? `
  ${css.default || ''}
  ${css.md ? breakpoints.md(css.md) : ''}
  ${css.lg ? breakpoints.lg(css.lg) : ''}
  ${css.xl ? breakpoints.xl(css.xl) : ''}
` : '';

export default responsive;