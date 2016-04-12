/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Game from '../api/game/game.model';
import User from '../api/user/user.model';

Game.find({}).remove()
  .then(() => {
    Game.create({
      name: 'Halo 5',
      platform: 'Xbox One',
      genre: 'Shooter'
    }, {
      name: 'Fallout 4',
      platform: 'PlayStation 4',
      genre: 'Role-Playing'
    }, {
      name: 'Super Smash Bros',
      platform: 'Wii U',
      genre: 'Fighting'
    });
  });

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
}, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
}, function() {
     console.log('finished populating users');
   }
 );
});  