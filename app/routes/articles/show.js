import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    delete(article) {
      article.destroyRecord().then(() => {
        this.transitionToRoute('articles.index');
      });
    }
	}
});