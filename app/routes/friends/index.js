import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('friend');
		
    // // We now use store.query and pass include in the options
    // //

    // return this.store.query('friend', {include: 'loans'});
	}
});
