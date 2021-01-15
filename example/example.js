void function () {
  'use strict';

  horsey(document.querySelector('#hy'), {
    source: [{ list: ['banana', 'apple', 'orange'] }]
  });

  horsey(document.querySelector('#ly'), {
    source: function (data, done) {
      var items = ['banana', 'apple', 'orange'];
      var start = new Date();
      lyr.innerText = 'Loading...';
      setTimeout(function () {
        lyr.innerText = 'Loaded in ' + (new Date() - start) + 'ms!';
        done(null, [{ list: items.filter(function(item) {
          return item.indexOf(data.input) !== -1;
        }) }]);
      }, 2000);
    }
  });

  horsey(document.querySelector('#kv'), {
    source: [{ list: [
      { value: 'banana', text: 'Bananas from Amazon Rainforest' },
      { value: 'apple', text: 'Red apples from New Zealand' },
      { value: 'orange', text: 'Oranges from Moscow' },
      { value: 'lemon', text: 'Juicy lemons from Amalfitan Coast' }
    ]}],
    getText: 'text',
    getValue: 'value'
  });

  horsey(document.querySelector('#ig'), {
    source: [{ list: [
      { value: 'banana', text: 'Bananas from Amazon Rainforest' },
      { value: 'apple', text: 'Red apples from New Zealand' },
      { value: 'orange', text: 'Oranges from Moscow' },
      { value: 'lemon', text: 'Juicy lemons from Amalfitan Coast' }
    ]}],
    getText: 'text',
    getValue: 'value',
    renderItem: function (li, suggestion) {
      var image = '<img class="autofruit" src="example/fruits/' + suggestion.value + '.png" /> ';
      li.innerHTML = image + suggestion.text;
    }
  });

  horsey(document.querySelector('#il'), {
    source: [{ list: [
     {
    "id": "explicit.stat_1050105434",
    "text": "# to maximum Mana",
},
{
    "id": "explicit.stat_3372524247",
    "text": "#% to Fire Resistance",
},
{
    "id": "explicit.stat_4220027924",
    "text": "#% to Cold Resistance",
},
{
    "id": "explicit.stat_4080418644",
    "text": "# to Strength",
},
{
    "id": "explicit.stat_3261801346",
    "text": "# to Dexterity",
},
{
    "id": "explicit.stat_1671376347",
    "text": "#% to Lightning Resistance",
},
{
    "id": "explicit.stat_328541901",
    "text": "# to Intelligence",
},
{
    "id": "explicit.stat_2901986750",
    "text": "#% to all Elemental Resistances",
},
{
    "id": "explicit.stat_3489782002",
    "text": "# to maximum Energy Shield",
},
{
    "id": "explicit.stat_3917489142",
    "text": "#% increased Rarity of Items found",
},
{
    "id": "explicit.stat_2511217560",
    "text": "#% increased Stun and Block Recovery",
},
{
    "id": "explicit.stat_3325883026",
    "text": "Regenerate # Life per second",
},
{
    "id": "explicit.stat_2250533757",
    "text": "#% increased Movement Speed",
},
{
    "id": "explicit.stat_3032590688",
    "text": "Adds # to # Physical Damage to Attacks",
},
{
    "id": "explicit.stat_1509134228",
    "text": "#% increased Physical Damage",
},
{
    "id": "explicit.stat_789117908",
    "text": "#% increased Mana Regeneration Rate",
},
{
    "id": "explicit.stat_4052037485",
    "text": "# to maximum Energy Shield (Local)",
},
{
    "id": "explicit.stat_803737631",
    "text": "# to Accuracy Rating",
},
{
    "id": "explicit.stat_3556824919",
    "text": "#% to Global Critical Strike Multiplier",
},
{
    "id": "explicit.stat_1940865751",
    "text": "Adds # to # Physical Damage (Local)",
},
{
    "id": "explicit.stat_587431675",
    "text": "#% increased Global Critical Strike Chance",
},
{
    "id": "explicit.stat_2923486259",
    "text": "#% to Chaos Resistance",
},
{
    "id": "explicit.stat_2974417149",
    "text": "#% increased Spell Damage",
},
{
    "id": "explicit.stat_2891184298",
    "text": "#% increased Cast Speed",
},
{
    "id": "explicit.stat_210067635",
    "text": "#% increased Attack Speed (Local)",
},
{
    "id": "explicit.stat_983749596",
    "text": "#% increased maximum Life",
}
    ]}],
    getText: 'text',
    getValue: 'id',
    limit: 2
  });

  horsey(document.querySelector('#ta'), {
    source: [{ list: [
      { value: '@michael', text: 'Michael Jackson' },
      { value: '@jack', text: 'Jack Johnson' },
      { value: '@ozzy', text: 'Ozzy Osbourne' }
    ]}],
    getText: 'text',
    getValue: 'value',
    anchor: '@'
  });

  horsey(document.querySelector('#ddl'), {
    source: [{ list: [
      { value: 'banana', text: 'Bananas from Amazon Rainforest' },
      { value: 'banana-boat', text: 'Banana Boat' },
      { value: 'apple', text: 'Red apples from New Zealand' },
      { value: 'apple-cider', text: 'Red apple cider beer' },
      { value: 'orange', text: 'Oranges from Moscow' },
      { value: 'orange-vodka', text: 'Classic vodka and oranges cocktail' },
      { value: 'lemon', text: 'Juicy lemons from Amalfitan Coast' }
    ]}],
    getText: 'text',
    getValue: 'value'
  });

  function events (el, type, fn) {
    if (el.addEventListener) {
      el.addEventListener(type, fn);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, wrap(fn));
    } else {
      el['on' + type] = wrap(fn);
    }
    function wrap (originalEvent) {
      var e = originalEvent || global.event;
      e.target = e.target || e.srcElement;
      e.preventDefault  = e.preventDefault  || function preventDefault () { e.returnValue = false; };
      e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
      fn.call(el, e);
    }
  }
}();
