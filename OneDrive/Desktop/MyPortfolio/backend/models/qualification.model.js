const mongoose = require('mongoose');
const QualificationSchema = new mongoose.Schema({
    schoolOrCompany: { type: String, required: true },
    roleOrDegree: { type: String, required: true },
    year: String
});
module.exports = mongoose.model('Qualification', QualificationSchema);