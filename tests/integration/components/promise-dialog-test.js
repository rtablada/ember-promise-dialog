import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const dialogStub = Ember.Service.extend({
});

moduleForComponent('promise-dialog', 'Integration | Component | promise dialog', {
  integration: true,

  beforeEach() {
    this.register('service:dialog', dialogStub);
    this.inject.service('dialog', { as: 'dialog' });
  },
});

test('it renders basic active state', function (assert) {
  Ember.run(() => {
    // Template block usage:"
    this.render(hbs`
      {{#promise-dialog}}
      This should not render
      {{/promise-dialog}}
    `);

    assert.equal(this.$().text().trim(), '');
    assert.equal(this.$('.active').length, 0);

    this.dialog.set('promise', true);

    this.render(hbs`
      {{#promise-dialog wat=true}}
      This is rendered
      {{/promise-dialog}}
    `);

    assert.equal(this.$().text().trim(), 'This is rendered');
    assert.equal(this.$('.active').length, 1);
  });
});
