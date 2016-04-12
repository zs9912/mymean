'use strict';

import mongoose from 'mongoose';

/*var UserSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
}); */

var UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, lowercase: true },
    role: {
      type: String,
      default: 'user'
    },
    hashedPassword: String,
    provider: String,
    salt: String
});

export default mongoose.model('User', UserSchema);
