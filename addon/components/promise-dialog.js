import Ember from 'ember';
import layout from '../templates/components/promise-dialog';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout,

  classNameBindings: ['active'],
  dialogType: null,

  activeClass: 'active',

  isActive: computed('promise', 'options.type', 'dialogType', function () {
    let { promise, options, dialogType } = this.getProperties('promise', 'options', 'dialogType');
    options = options || {};

    if (get(this, 'promise')) {
      return dialogType && options.type ? dialogType === options.type : true;
    }

    return false;
  }),

  active: computed('isActive', 'activeClass', function () {
    return get(this, 'isActive') ?
      get(this, 'activeClass') :
      false;
  }),

  service: Ember.inject.service('dialog'),

  promise: Ember.computed.alias('service.promise'),
  resolve: Ember.computed.alias('service.resolve'),
  reject: Ember.computed.alias('service.reject'),
  options: Ember.computed.alias('service.options'),
});
