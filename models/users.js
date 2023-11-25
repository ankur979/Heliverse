const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  avatar: {
    type: String,
    default:"https://robohash.org/maximequiomnis.png?size=50x50&set=set1",
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }

  try {
    const highestUser = await this.constructor.findOne().sort('-id').exec();
    this.id = highestUser ? highestUser.id + 1 : 1;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
