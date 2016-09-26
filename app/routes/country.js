import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

	
	model: function (params) {
		$('body').animate({scrollTop: 0}, '500', 'swing');
		return Ember.RSVP.hash({
		  country: this.get('store').find('country', params.country_id),
          types: this.get('store').find('election-type'),
          elections: this.get('store').find('election', {country:  params.country_id, enabled: true, sort: 'date DESC'})
     	});
	},

});
