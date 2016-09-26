import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('country', {
	  path: "country/:country_id",
	});
	this.route('reports', function() {
	    this.route('show', {
	      path: ":report_id/show",
	    });
	});
});

export default Router;
