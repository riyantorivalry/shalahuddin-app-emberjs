import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('pengurus');
  this.route('anggota',function(){
    this.route('list');
    this.route('form');
    this.route('edit', {
      path: '/edit/:anggota_id'
    });
    this.route('add');
  });
  this.route('alumni', function() {
    this.route('add');
    this.route('edit',{
      path: '/edit/:alumni_id'
    });
    this.route('list');
  });
  this.route('user-management');
  this.route('mockup');
  this.route('not-found',{
    path: '/*path'
  });
});

export default Router;
