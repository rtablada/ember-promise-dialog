import Ember from 'ember';

function noop() {};

export default Ember.Service.extend({
  promise: null,
  resolve: noop,
  reject: noop,
  options: null,

  resetValues(value) {
    this.setProperties({
      promise: null,
      resolve: noop,
      reject: noop,
      options: null,
    });

    return value;
  },

  createDialog(options = {}) {
    const promise = new Promise((resolve, reject) => {

      this.setProperties({ resolve, reject, options });
    }).then((value) => {
      this.resetValues();

      return value;
    }, (err) => {
      this.resetValues();

      return Promise.reject(err);
    });

    this.set('promise', promise);

    return promise;
  },
});
