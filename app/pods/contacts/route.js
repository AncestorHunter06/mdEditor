import Ember from 'ember';

const {
  Route,
  inject: {
    service
  }
} = Ember;

export default Route.extend({
  slider: service(),
  model() {
    //return this.store.peekAll('contact');
    return this.modelFor('application').findBy('modelName','contact');
  },

  columns: [{
    propertyName: 'title',
    title: 'Title'
  }, {
    propertyName: 'defaultOrganizationName',
    title: 'Organization'
  }, {
    propertyName: 'json.electronicMailAddress.firstObject',
    title: 'E-mail'
  }, {
    propertyName: 'contactId',
    title: 'ID',
    isHidden: true
  }, {
    propertyName: 'type',
    title: 'Contact Type',
    filterWithSelect: true
  }],

  actions: {
    getColumns(){
      return this.get('columns');
    },

    showSlider(rec, evt) {
      let slider = this.get('slider');

      evt.stopPropagation();
      this.controller.set('errorTarget', rec);
      slider.set('fromName', 'md-slider-error');
      slider.toggleSlider(true);

      return false;
    }
  }
});
