const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // finds all categories
  try {
    const catData = await Category.findAll(
      {
      include: [ 
        { 
          model: Product,
        }
      ]
    }
    );
    // returns a 404 if there is no seeded data
    if (!catData){
      return res.status(404).json({ message: 'No Tag information!' });
    } 
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json({message: `internal server error: ${err}`});
  }
});

router.get('/:id', async (req, res) => {
  // finds one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id,
      {
      include: [ 
        { 
          model: Product,
        }
      ]
    }
    );
    // returns a 404 if the id does not exist 
    if (!catData){
      return res.status(404).json({ message: 'No Tag information!' });
    } 
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json({message: `internal server error: ${err}`});
  }
});

router.post('/', async (req, res) => {
  // creates a new category
  try {
    // checks if there is a properly formatted input 
    if (!req.body || !req.body.category_name){
      res.status(404).json(`Invalid entry of data`);
      return;
    }
    // creates new entry
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json({message: `internal server error: ${err}`});
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // checks if there is a properly formatted input
    if (!req.body || !req.body.category_name){
      res.status(404).json(`Invalid entry of data`);
      return;
    }
    // updates entry
    const catData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!catData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catData = await Category.destroy({
      where: { id: req.params.id }
    });
    // makes sure that id exits
    if (!catData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catData);

  } catch (err) {
    res.status(500).json({message: `internal server error: ${err}`});
  }
});

module.exports = router;
