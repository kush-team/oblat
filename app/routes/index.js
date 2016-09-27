import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return Ember.RSVP.hash({
			countries: this.get('store').findAll('country'),
			country: null,
			reports: this.get('store').findAll('report', { published: true, sort: 'createdAt DESC'}),
     	});
	},	
});
