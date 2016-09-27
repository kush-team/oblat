import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
      		countries: this.get('store').findAll('country'),
      		country: null,
 		});	
	}
});
