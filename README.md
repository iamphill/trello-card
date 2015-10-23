# Trello Cards! [![Build Status](https://travis-ci.org/iamphill/trello-card.svg)](https://travis-ci.org/iamphill/trello-card)

Quickly and easily embed any Trello card onto any webpage! All you need is the card ID - just get it from Trello!

## Usage

Include the CSS & JavaScript files on your page.

```html
<link rel="stylesheet" href="dist/trello-card.css" />
<script src="dist/trello-card.js"></script>
```

Once you've done that, go crazy and add as many Trello cards to your page!

```html
<trello-card card-id="SDizXRC0"></trello-card>
```

ps. The card ID can bef found by going to Trello, opening the card you want and then using the ID in the URL. Bold part in 'trello.com/c/**SDizXRC0**/5-lasagna' is the card ID.

## Support

Requires ES6 Promises & [document.registerElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/registerElement).

These of course can be polyfilled!

- [document.registerElement](https://github.com/WebReflection/document-register-element)
- [Promise](https://github.com/jakearchibald/es6-promise)

:heart:
