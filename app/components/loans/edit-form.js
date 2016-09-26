import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	articles: Ember.computed({
    get() {
      //
      // Since we are using Ember.inject.service, we need to call the
      // store using the get helper
      //
      return this.get('store').findAll('article');
    }
  }).readOnly()
});
