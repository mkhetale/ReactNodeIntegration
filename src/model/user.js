
const mongoose = require('mongoose');

const Schema   = mongoose.Schema;
const UserSchema = new Schema({
    email : {
        type: Schema.Types.String
    },
    query: {
        type: Schema.Types.Array
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };