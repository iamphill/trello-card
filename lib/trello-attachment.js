const Handlebars = require('handlebars');
const html = require('./trello-attachment.html');

class TrelloAttachment extends HTMLElement {
  createdCallback() {
    // Precompile the template
    this._template = Handlebars.compile(html);
    this._cardId = this.getAttribute('card-id');
    this._attachmentId = this.getAttribute('attachment-id');

    // Send API request
    this._createApiUrl();
    this._sendRequest();

    this._render();
  }

  _render() {
    this.innerHTML = this._template(this.data);
  }

  // Private: Send the request to the API
  // From this, the application then renders to the DOM
  _sendRequest() {
    fetch(this._apiUrl)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.data = json;

        // Render the template to the DOM
        this._render();
      });
  }

  // Private: Creates the url that will be sent to the API
  _createApiUrl() {
    this._apiUrl = `https://api.trello.com/1/cards/${this._cardId}/attachments/${this._attachmentId}`;
  }
}

// Register element with DOM
document.registerElement('trello-attachment', TrelloAttachment);
