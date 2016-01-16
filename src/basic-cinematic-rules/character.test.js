///<reference path="../../typings/tsd.d.ts"/>
'use strict';
var assert = require('assert');
var Character = require('./Character');
var _ = require('lodash');
describe('Character', function () {
    //it('should be created', function () {
    //  var npc = new Character();
    //  console.log('name:',npc.name);
    //  console.log('mind:',Rank[npc.mind]);
    //  console.log('body:',Rank[npc.body]);
    //  console.log('soul:',Rank[npc.soul]);
    //  console.log('items:',JSON.stringify(npc.items,null,'\t');
    //
    //  assert(true, '....');
    //});
    it('should be created', function () {
        _.each(new Array(1), function () {
            var npc = Character.RandomNpc();
            console.log(JSON.stringify(npc, Character.StatReplacer, '\t'));
        });
        assert(true, '....');
    });
});
//# sourceMappingURL=Character.test.js.map