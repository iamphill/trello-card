(function () {
  var xhr, requests;
  var cardId = 'SDizXRC0';
  var cardOutput = JSON.stringify({"id":"55524e134dd14479642c1a38","badges":{"votes":0,"viewingMemberVoted":false,"subscribed":false,"fogbugz":"","checkItems":18,"checkItemsChecked":0,"comments":0,"attachments":1,"description":true,"due":"2015-05-28T16:00:00.000Z"},"checkItemStates":[],"closed":false,"dateLastActivity":"2015-05-13T18:52:48.806Z","desc":"Directions\n------------\nBrown ground beef, Italian sausage, onion and garlic.\nAdd salt, pepper, parsley, oregano, basil, chopped tomatoes with juice, and tomato paste; stirring until well mixed.\nCover and simmer 1 hour (or longer,but watch for getting too dry).\nCook lasagna noodles according to package directions; drain and set aside.\nSpray a 13 x 9\" baking pan with cooking spray.\nCombine cottage cheese, eggs, pepper, 2 tablespoons parsley, Parmesan cheese and 1/2 1lb of mozzarella cheese; In a lasagna pan, layer noodles, meat sauce, and cheese mixture; repeat.\nTop off with layer of noodles; sprinkle evenly with remaining mozzarella cheese; make sure to cover noodles completely.\nBake at 375F for 40-60 minutes, or until cheese mixture is thoroughly melted. (I cover w/ foil for about 40 minutes, then uncover for 15-20 minutes.\nLet sit for 15-20 minutes before cutting and serving.\n\nRecipe source: http://www.food.com/recipe/absolute-best-ever-lasagna-28768","descData":{"emoji":{}},"due":"2015-05-28T16:00:00.000Z","email":null,"idBoard":"55524ae0ad0a41f7a9d65710","idChecklists":["555268259a765973423925ef"],"idLabels":["55524ae0664ce8ff30e371d1"],"idList":"55524b9c6829dd120f371ee0","idMembers":["4e71630b83a4d700001b8a23"],"idShort":5,"idAttachmentCover":"555268006c0be847996ba161","manualCoverAttachment":false,"labels":[{"id":"55524ae0664ce8ff30e371d1","idBoard":"55524ae0ad0a41f7a9d65710","name":"Meat","color":"red","uses":7}],"name":"Lasagna","pos":172031,"shortUrl":"https://trello.com/c/SDizXRC0","url":"https://trello.com/c/SDizXRC0/5-lasagna"});
  var attachmentOutput = JSON.stringify({"id":"555268006c0be847996ba161","bytes":895079,"date":"2015-05-12T20:52:16.522Z","edgeColor":"#edddc7","idMember":"53baf533e697a982248cd73f","isUpload":true,"mimeType":null,"name":"lasagna.jpg","previews":[{"width":70,"height":50,"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/70x50/a73a54d65b01d389ff9331c51d1da2a6/lasagna.jpg.png","bytes":9957,"_id":"555268026c0be847996ba167","scaled":false},{"width":250,"height":150,"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/250x150/b68dc463efdfed02f9e787f63987d36d/lasagna.jpg.png","bytes":88924,"_id":"555268026c0be847996ba166","scaled":false},{"width":150,"height":100,"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/150x100/c37ebb300c9b060d1f3a622b26ce7936/lasagna.jpg","bytes":4876,"_id":"555268026c0be847996ba165","scaled":true},{"width":300,"height":200,"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/300x200/61e0977125c00c6002e33f2ad6c28582/lasagna.jpg","bytes":14040,"_id":"555268026c0be847996ba164","scaled":true},{"width":600,"height":399,"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/600x399/672c67e5991e49a0e700b1deaea3f1e5/lasagna.jpg","bytes":42216,"_id":"555268026c0be847996ba163","scaled":true},{"width":1000,"height":665,"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/1000x665/ba6c8784116dbfc1982132103e6cf917/lasagna.jpg","bytes":895079,"_id":"555268026c0be847996ba162","scaled":true}],"url":"https://trello-attachments.s3.amazonaws.com/55524e134dd14479642c1a38/1000x665/ba6c8784116dbfc1982132103e6cf917/lasagna.jpg"});

  module('trello-card');

  QUnit.begin(function () {
    window.fetch = function (url) {
      if (url === 'https://api.trello.com/1/cards/' + cardId) {
        return Promise.resolve(new window.Response(cardOutput, {
          status: 200,
          headers: {
            'Content-type': 'application/json'
          }
        }));
      } else {
        return Promise.resolve(new window.Response(attachmentOutput, {
          status: 200,
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

  test('has title', function (assert) {
    assert.equal(document.querySelectorAll('trello-card .trello-card-title')[0].textContent.trim(), 'Lasagna');
  });

  test('has Trello URL', function (assert) {
    var done = assert.async();
    setTimeout(function () {
      assert.notEqual(document.querySelectorAll('trello-card .trello-card-overlay')[0].getAttribute('href'), '');
      done();
    }, 50);
  });

  test('has attachment', function (assert) {
    var done = assert.async();
    setTimeout(function () {
      assert.notEqual(document.querySelectorAll('trello-card trello-attachment').length, 0);
      assert.notEqual(document.querySelectorAll('trello-card trello-attachment .trello-attachment-image')[0].style.backgroundImage, '');
      done();
    }, 50);
  });

  test('has description', function (assert) {
    assert.notEqual(document.querySelectorAll('trello-card .trello-card-description').length, 0);
  });
})();
