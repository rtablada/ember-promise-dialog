# Ember Promise Dialog

[![npm version](https://badge.fury.io/js/ember-promise-dialog.svg)](http://badge.fury.io/js/ember-promise-dialog)
[![Ember Observer Score](http://emberobserver.com/badges/ember-promise-dialog.svg)](http://emberobserver.com/addons/ember-promise-dialog)

A set of services and components for working with UI dialogs.

## Installation

```bash
ember install ember-promise-dialog
```

## Usage

> **NOTE** This addon is still a WIP and the API may change.

Creating a dialog from an action handler:

```js
import Ember from 'ember';

export default Ember.Route.extend({
  dialog: Ember.inject.service(),

  actions: {
    createUser(formData) {
      const user = this.store.createRecord('user', formData);

      user.save.then(() => {
        this.get('dialog').createDialog({
          message: 'The user has been saved to the server.'
        });
      });
    }
  }
});
```

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
