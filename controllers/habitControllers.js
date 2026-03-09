const Habit = require("../models/Habit");

const createHabit = async (req, res) => {
    try {
        const { title, description, targetDays } = req.body;

        const habit = await Habit.create({
            title,
            description,
            targetDays,
            userId: req.user.id,
        });

        res.status(201).json(habit);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getHabits = async (req, res) => {
    try {
        const habits = await Habit.find({ userId: req.user.id });

        res.json(habits);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const updateHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(habit);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteHabit = async (req, res) => {
    try {
        await Habit.findByIdAndDelete(req.params.id);

        res.json({ msg: "Habit deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createHabit,
    getHabits,
    updateHabit,
    deleteHabit,
};