(function () {
  var xhr, requests;
  var cardId = 'pbDp32co';
  var cardOutput = JSON.stringify({});
  var attachmentOutput = JSON.stringify({});

  module('trello-card');

  QUnit.begin(function () {
    window.fetch = function (url) {
      if (url === 'https://api.trello.com/1/cards/' + cardId) {
        return Promise.reject(new window.Response(cardOutput, {
          status: 401,
          headers: {
            'Content-type': 'application/json'
          }
        }));
      } else {
        return Promise.reject(new window.Response(attachmentOutput, {
          status: 401,
          headers: {
            'Content-type': 'application/json'
          }
        }));
      }
    };
    document.getElementById('js-test').innerHTML = '<trello-card card-id="' + cardId + '"></trello-card>';
  });

  test('renders correctly', function (assert) {
    var done = assert.async();
    setTimeout(function() {
      assert.notEqual(document.querySelectorAll('trello-card')[0].textContent.trim(), 'Loading...');
      done();
    }, 50);
  });

  test('shows error', function (assert) {
    assert.equal(document.querySelectorAll('trello-card')[0].textContent.trim(), 'Error loading card.');
  });
})();
