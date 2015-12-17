import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('createtaskforme');
  this.route('createtaskforother');
  this.route('listtaskforother');
  this.route('listtaskforme');
});

export default Router;
