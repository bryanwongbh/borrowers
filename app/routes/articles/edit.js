import Ember from 'ember';

export default Ember.Route.extend({
	resetController(controller, isExiting) {
		console.log('------in resetController Hook for articles edit-----');
  	if (isExiting) {
    	var model = controller.get('model');
    	model.rollbackAttributes();
  	}
	}
});
