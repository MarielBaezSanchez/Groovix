const express = require('express');
const router = express.Router();
const EventModel = require('../models/event-model');
const validateToken = require('../middlewares/validate-token');

router.post("/create-event", validateToken, async (req, res) => {
    try {
        const event = await EventModel.create(req.body);
        return res.status(201).json({ message: "Evento creado exitosamente", event });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.put("/edit-event/:id", validateToken, async (req, res) => {
    try {
        const event = await EventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json({ message: "Evento actualizado exitosamente", event });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.delete("/delete-event/:id", validateToken, async (req, res) => {
    try {
        await EventModel.findByIdAndDelete(req.params.id);
        return res.json({ message: "Evento eliminado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


router.get("/get-events", validateToken, async (req, res) => {
    try {
        const events = await EventModel.find().sort({ createdAt: -1 });
        return res.json({ data: events });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get("/get-event/:id", validateToken, async (req, res) => {
    try {
        const events = await EventModel.findById(req.params.id);
        return res.json({ data: event });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;