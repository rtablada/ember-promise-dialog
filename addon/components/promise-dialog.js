import Ember from 'ember';
import layout from '../templates/components/promise-dialog';

export default Ember.Component.extend({
  layout,

  service: Ember.inject.service('dialog'),

  promise: Ember.computed.alias('service.promise'),
  resolve: Ember.computed.alias('service.resolve'),
  reject: Ember.computed.alias('service.reject'),
  options: Ember.computed.alias('service.options'),
});
