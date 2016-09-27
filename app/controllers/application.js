import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,
	oldClass: '',

	init: function () {
		this._super();
	},
	

	getCurrentURL: function () {
		this.set('isHome', false);
		

		if (RegExp('index').test(this.get('currentPath')) && !RegExp('reports').test(this.get('currentPath'))) {
			this.set('isHome', true);
		}
	

	}.observes('currentPath'),

});
