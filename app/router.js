import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('export');
  this.route('import');
  this.route('translate');
  this.route('publish');
  this.route('help');
  this.route('settings');

  //records
  this.route('records');
  //record
  this.route('record', function() {
    this.route('new', function() {
      this.route('id', {
        path: '/:record_id'
      });
    });
    this.route('show', {
        path: ':record_id'
      },
      function() {
        this.route('edit', function() {
          this.route('metadata', function() {
            this.route('identifier');
            this.route('parent', function() {
              this.route('identifier', {
                path: 'identifier/:identifier_id'
              });
            });

            this.route('alternate', {
              path: 'alternate/:citation_id'
            }, function() {
              // this.route('index', {
              //   path: 'alternate/:citation_id'
              // });
              this.route('identifier', {
                path: 'identifier/:identifier_id'
              });
            });
          });
          this.route('keywords', function() {
            this.route('thesaurus', {
              path: 'thesaurus/:thesaurus_id'
            });
          });
          this.route('extent', function() {
            this.route('spatial', {
              path: 'spatial/:extent_id'
            });
          });
          this.route('lineage', function() {
            this.route('lineageobject', {
              path: ':lineage_id'
            }, function() {
              this.route('citation', {
                path: 'citation/:citation_id'
              }, function() {
                this.route('identifier', {
                  path: 'identifier/:identifier_id'
                });
              });
              this.route('step', {
                path: 'step/:step_id'
              }, function() {
                this.route('citation', {
                  path: 'citation/:citation_id'
                });
              });
            });
          });
          this.route('distribution');
          this.route('associated', function() {
            this.route('resource', {
              path: ':resource_id'
            }, function() {});
          });
          this.route('documents');
          this.route('coverages');
          this.route('grid');
          this.route('main', function() {
            this.route('citation', function() {
              this.route('identifier', {
                path: 'identifier/:identifier_id'
              });
            });
          });
          this.route('funding');
          this.route('dictionary');
        });
        this.route('translate');
      }
    );
  });
  //contacts
  this.route('contacts');
  //contact
  this.route('contact', function() {
    this.route('new', function() {
      this.route('id', {
        path: '/:contact_id'
      });
    });

    this.route('show', {
      path: ':contact_id'
    }, function() {
      this.route('edit');
    });

  });
  //dictionary
  this.route('dictionaries');
  //dictionary
  this.route('dictionary', function() {
    this.route('new', function() {
      this.route('id', {
        path: '/:dictionary_id'
      });
    });
    this.route('show', {
      path: ':dictionary_id'
    }, function() {
      this.route('edit', function() {
        this.route('domains');
        this.route('entities');
      });
    });
  });

  this.route('not-found', {
    path: '/*path'
  });
  this.route('error');
});

export default Router;
