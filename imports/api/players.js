import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

Players.allow({
    insert() {return false;},
    update() {return false;},
    remove() {return false;}
})

Players.deny({
    insert() {return true;},
    update() {return true;},
    remove() {return true;}
})

const PlayerSchema = new SimpleSchema({
    ballManipulation: {type: Number, defaultValue:0},
    blockingAbilities: {type: Number, defaultValue:0},
    duelTackling: {type: Number, defaultValue:0},
    fieldCoverage: {type: Number, defaultValue:0},
    gameStrategy: {type: Number, defaultValue:0},
    kickingAbilities: {type: Number, defaultValue:0},
    name: {type:String},
    notes:{type:String, optional:true},
    passingAbilities: {type: Number, defaultValue:0},
    playmakingRisks: {type: Number, defaultValue:0},
    team: {type:String},
    createdAt: {type: Date},
    owner: {type: String},
});


Players.attachSchema(PlayerSchema);