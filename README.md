# About the jasny.net website

Feel free to use any part of this website (except the Jasny logo). The website it's released under the [CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode) "No rights reserved".

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

jasny.net is a static website, hosted on [GitHub pages](https://pages.github.com/). It has no installation or build process.

## HTML

The website is written for HTML5 and crafted by hand with the use of a simple text editor.

## CSS

No CSS preprocessors are used, it's just plain old CSS.

### Responsive design

[Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) and [viewport percentage lengths](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Viewport-percentage_lengths) are used to create a responsive design. The layout transitions seamlessly from one to the other viewports by combining relative units `%`, `vh` and `vw` with the absolute unit `px`. This contrasts most designs, which have specific breakpoints where the layout changes.

Example: An element should have a `10px` padding for a viewport width of `400px` or less. For a width of `900px` or more, the padding should be `20px`. Between `400px` and `900px` we smoothly transition from `10px` to `20px`.

    padding: 10px;
    
    @media (min-width: 400px) {
      padding: calc(2vw + 2px);
    }
    
    @media (min-width: 900px) {
      padding: 20px;
    }

## JavaScript

The website uses [vanilla JavaScript](http://vanilla-js.com/) rather that a JS framework. If you're used to working with jQuery and are interrested in writing native JavaScript, check out the website ['You might not need jQuery'](http://youmightnotneedjquery.com).


## Browser support

The website is only properly displayed with a browser that support the `transform` property.

Older browsers (like IE9) are displayed a message and link to [outdatedbrowser.com](http://outdatedbrowser.com/). This is done with the outdatedbrowser.js library. AJAX for this library has been disabled.


