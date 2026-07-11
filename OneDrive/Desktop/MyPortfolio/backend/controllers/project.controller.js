const Project = require('../models/project.model');
exports.getAll = async (req, res) => {
    try { res.status(200).json(await Project.find()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.getById = async (req, res) => {
    try {
        const item = await Project.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Not found" });
        res.status(200).json(item);
    } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.create = async (req, res) => {
    try {
        const newItem = new Project(req.body);
        await newItem.save();
        res.status(200).json({ message: "Successfully created!" });
    } catch (err) { res.status(400).json({ error: err.message }); }
};
exports.updateById = async (req, res) => {
    try { res.status(200).json(await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })); } catch (err) { res.status(400).json({ error: err.message }); }
};
exports.deleteById = async (req, res) => {
    try { await Project.findByIdAndDelete(req.params.id); res.status(200).json(1); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.deleteAll = async (req, res) => {
    try { await Project.deleteMany({}); res.status(200).json({ message: "All items removed" }); } catch (err) { res.status(500).json({ error: err.message }); }
};