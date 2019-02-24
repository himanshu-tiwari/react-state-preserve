const router = require('express').Router();
const Sidebar = require('../models/sidebar');

router.get('/sidebar', (req, res) => {
    Sidebar.findOne({})
        .then((sidebar) => res.send(sidebar))
        .catch(e => console.log(e));
});

router.post('/sidebar', (req, res) => {
    Sidebar.create(req.body)
        .then((sidebar) => res.send(sidebar))
        .catch(e => console.log(e));
});

router.put('/sidebar', (req, res) => {
    Sidebar.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true, new: true })
        .then(() => {
            Sidebar.findOne({ _id: req.params.id })
                .then((sidebar) => res.send(sidebar))
                .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
});

module.exports = router;