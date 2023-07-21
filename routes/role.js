const express = require("express");
const router = express.Router();
const Role = require("../models/role");

router.post("/add", (req, res) => {
  const newRole = new Role({
    role_id: req.body.role_id,
    role_name: req.body.role_name,
    dept_id: req.body.dept_id,
    dept_name: req.body.dept_name,
    inserted_date: req.body.inserted_date,
    updated_date: req.body.updated_date,
    inserted_by: req.body.inserted_by,
    updated_by: req.body.updated_by,
    is_active_flag: req.body.is_active_flag,
  });
  newRole
    .save()
    .then(() => res.json("Role Added..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/", (req, res) => {
    Role.find()
    .then((roles) => res.json(roles))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.post("/update/:id", (req, res) => {
//   Student.findById(req.params.id)
//     .then((student) => {
//       student.name = req.body.name;
//       student.age = req.body.age;
//       student.email = req.body.email;
//       student
//         .save()
//         .then(() => res.json("Student Updated..."))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.post("/update/:id", (req, res) => {
  Role.findById(req.params.id)
    .then((roles) => {
      role_id = req.body.role_id;
      role_name = req.body.role_name;
      dept_id = req.body.dept_id;
      dept_name = req.body.dept_name;
      inserted_date = req.body.inserted_date;
      updated_date = req.body.updated_date;
      inserted_by = req.body.inserted_by;
      updated_by = req.body.updated_by;
      is_active_flag = req.body.is_active_flag;
      roles
        .save()
        .then(() => res.json("Role Updated..."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;