const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories findAll - takes time to get to db and return data
    // be sure to include its associated Products
  try {
  const category = await Category.findAll({});
  res.json(category);
} catch(err) {
  console.log("Hello World");
if(err) throw new Error(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value findbyPK
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { // i don't work
      include: [ { model: Product }],
    });

    if (!category) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // // create a new category
  // console.log(req.body);
  // res.send(req.body); //want to send req.body to db and essentially. the req.body has to match the model of the db
  Category.create({
    category_name: req.body.category_name
  })
  .then((netCategory) => {
    res.json(netCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!category) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
