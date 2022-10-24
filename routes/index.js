const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Any route that is not apart of the apiRoutes, is presented with this page
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;