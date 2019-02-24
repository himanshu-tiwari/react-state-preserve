const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SidebarSchema = new Schema({
    open: {
        type: String,
        required: [true, 'Value for open is required']
    }
});

module.exports = mongoose.model('sidebar', SidebarSchema);