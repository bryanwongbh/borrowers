import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return this.store.createRecord('loan', {
      friend: this.modelFor('friends/show')
    });
  },
  resetController(controller, isExiting) {
		console.log('------in resetController Hook for loans new-----')
	  if (isExiting) {
	    var model = controller.get('model');
	    if (model.get('isNew')) {
	      model.destroyRecord();
	    }
	  }
	}
});
