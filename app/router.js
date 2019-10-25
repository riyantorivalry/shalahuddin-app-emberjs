import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('pengurus');
  this.route('anggota');
  this.route('alumni');
  this.route('user-management');
});

export default Router;
