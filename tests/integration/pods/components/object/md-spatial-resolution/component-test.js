import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('object/md-spatial-resolution', 'Integration | Component | object/md spatial resolution', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{object/md-spatial-resolution}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#object/md-spatial-resolution}}
      template block text
    {{/object/md-spatial-resolution}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
