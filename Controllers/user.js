const express = require('express');
const router = express.Router();

router.route('/register')
  .post((req, res) => {
    const user = new User(req.body);
    user.save()
      .then(r => {
        console.log(r);
      })

  })
router.route('/login')
  .post((req, res) => {
    const note = new Note(req.body);
    note.save()
      .then(r => {
        console.log(r);
      })
  })
  router.route('/logout')
    .post((req, res) => {

    })
module.exports = router;
