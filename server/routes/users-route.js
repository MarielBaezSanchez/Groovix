const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const validateToken = require("../middleware/validate-token");

//registro de users

router.post("/register", async (req, res) => {
    try {
        const userExixts = await User.findOne({ email: req.body.email });
        if (userExixts) {
            return res.status(400).json({ message: "Este usuario ya existe" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        await User.create(req.body);

        return res.status(201).json({ message: "Usuario registrado" });
    } catch (error) {
        //console.error(error);
        return res.status(500).json({ message: error.message });
    }
});

// login de users
router.post("/login", async (req, res) => {
    try {
        //ver si existe el user o no
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "Usuairoo no encontrado" });
        }

        //ver si la contraseña es correcteishon
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Contraseña inválida xd" })
        }

        //crear y asignar token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);

        return res.status(200).json({ token, message: "Inicio de sesión completado" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

//get current user
router.get("/current-user", validateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        return res.status(200).json({ data: user, message: "User fetched successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
);

module.exports = router;