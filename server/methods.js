import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players';

Meteor.methods({
    deletePlayer(playerId) {
        Players.remove(playerId)
    },
    insertPlayer(playerObj) {
        Players.insert(playerObj)
    },
    updatePlayer(playerObj) {
        Players.update(playerObj._id, {$set:playerObj})
    }
});