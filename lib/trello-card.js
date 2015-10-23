const Handlebars = require('handlebars');
const html = require('./trello-card.html');
require('whatwg-fetch');
require('./trello-attachment.js');

// Register Handlebars helpers
Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

class TrelloCard extends HTMLElement {
  createdCallback() {
    this.data = false;

    // Get the trello card ID
    this._id = this.getAttribute('card-id');

    // Precompile the template
    this._template = Handlebars.compile(html);

    // Before sending, render template
    this._render();

    // Send the request of the API
    this._createApiUrl();
    this._sendRequest();
  }

  _render() {
    this.innerHTML = this._template(this.data);
  }

  // Private: Send the request to the API
  // From this, the application then renders to the DOM
  _sendRequest() {
    fetch(this._apiUrl)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.data = json;

        // Render the template to the DOM
        this._render();
      }).catch(() => {
        this.data = 'error';

        this._render();
      });
  }

  // Private: Creates the url that will be sent to the API
  _createApiUrl() {
    this._apiUrl = `https://api.trello.com/1/cards/${this._id}`;
  }
}

// Register the element with the DOM
document.registerElement('trello-card', TrelloCard);
