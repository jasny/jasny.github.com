# jasny.net website

The source for [jasny.net](https://jasny.net), a small static personal portfolio hosted on GitHub Pages.

## Development

No installation, dependencies, or build step are required. Open `index.html` directly in a browser.

## CSS

No CSS preprocessors are used. The stylesheet uses plain CSS, including custom properties and nesting.

### Responsive design

[Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) and viewport units are used to create a responsive layout. Relative units such as `%`, `vh`, and `vw` are combined with `px` values where fixed dimensions are useful.

For example, project sections keep a readable maximum width while retaining margins on narrow viewports:

```css
#projects > section {
  width: min(900px, calc(100% - 40px));
  margin: 20px auto;
}
```

## JavaScript

The website uses 63 lines of plain JavaScript rather than a heavy JavaScript framework.

## License

The website source is released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode). The Jasny logo is excluded.
