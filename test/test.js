(function () {
  var xhr, requests;
  var cardOutput = JSON.stringify({"id":"55524e134dd14479642c1a38","badges":{"votes":0,"viewingMemberVoted":false,"subscribed":false,"fogbugz":"","checkItems":18,"checkItemsChecked":0,"comments":0,"attachments":1,"description":true,"due":"2015-05-28T16:00:00.000Z"},"checkItemStates":[],"closed":false,"dateLastActivity":"2015-05-13T18:52:48.806Z","desc":"Directions\n------------\nBrown ground beef, Italian sausage, onion and garlic.\nAdd salt, pepper, parsley, oregano, basil, chopped tomatoes with juice, and tomato paste; stirring until well mixed.\nCover and simmer 1 hour (or longer,but watch for getting too dry).\nCook lasagna noodles according to package directions; drain and set aside.\nSpray a 13 x 9\" baking pan with cooking spray.\nCombine cottage cheese, eggs, pepper, 2 tablespoons parsley, Parmesan cheese and 1/2 1lb of mozzarella cheese; In a lasagna pan, layer noodles, meat sauce, and cheese mixture; repeat.\nTop off with layer of noodles; sprinkle evenly with remaining mozzarella cheese; make sure to cover noodles completely.\nBake at 375F for 40-60 minutes, or until cheese mixture is thoroughly melted. (I cover w/ foil for about 40 minutes, then uncover for 15-20 minutes.\nLet sit for 15-20 minutes before cutting and serving.\n\nRecipe source: http://www.food.com/recipe/absolute-best-ever-lasagna-28768","descData":{"emoji":{}},"due":"2015-05-28T16:00:00.000Z","email":null,"idBoard":"55524ae0ad0a41f7a9d65710","idChecklists":["555268259a765973423925ef"],"idLabels":["55524ae0664ce8ff30e371d1"],"idList":"55524b9c6829dd120f371ee0","idMembers":["4e71630b83a4d700001b8a23"],"idShort":5,"idAttachmentCover":"555268006c0be847996ba161","manualCoverAttachment":false,"labels":[{"id":"55524ae0664ce8ff30e371d1","idBoard":"55524ae0ad0a41f7a9d65710","name":"Meat","color":"red","uses":7}],"name":"Lasagna","pos":172031,"shortUrl":"https://trello.com/c/SDizXRC0","url":"https://trello.com/c/SDizXRC0/5-lasagna"});

  module('trello-card');

  QUnit.begin(function () {
    sinon.stub(window, 'fetch');
    var res = new window.Response(cardOutput, {
      status: 200,
      headers: {
        'Content-type': 'application/json'
      }
    });
    window.fetch.returns(Promise.resolve(res));
    document.getElementById('js-test').innerHTML = '<trello-card card-id="SDizXRC0"></trello-card>';
  });

  test('renders correctly', function (assert) {
    var done = assert.async();
    setTimeout(function() {
      assert.notEqual(document.querySelectorAll('trello-card')[0].textContent.trim(), 'Loading...');
      done();
    }, 50);
  });

  test('has title', function (assert) {
    assert.equal(document.querySelectorAll('trello-card .trello-card-title')[0].textContent.trim(), 'Lasagna');
  });

  test('has attachment', function (assert) {
    assert.notEqual(document.querySelectorAll('trello-card trello-attachment').length, 0);
  });

  test('has description', function (assert) {
    assert.notEqual(document.querySelectorAll('trello-card .trello-card-description').length, 0);
  });
})();
