'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineActions = exports.combineReducers = exports.createStore = undefined;

var _Store = require('./utils/Store.js');

var _Reducer = require('./utils/Reducer.js');

var _Actions = require('./utils/Actions.js');

exports.createStore = _Store.createStore;
exports.combineReducers = _Reducer.combineReducers;
exports.combineActions = _Actions.combineActions;
exports.default = {
    createStore: _Store.createStore,
    combineReducers: _Reducer.combineReducers,
    combineActions: _Actions.combineActions
};