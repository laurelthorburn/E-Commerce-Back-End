const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findAll({});
    res.json(tag);
  } catch(err) {
    console.log("Hello World");
  if(err) throw new Error(err);
  }
  });

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  res.send("Hello Georgie!!")
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {

  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
  // try {
  //   const userData = await User.create(req.body);
  //   // 200 status code means the request is successful
  //   res.status(200).json(userData);
  // } catch (err) {
  //   // 400 status code means the server could not understand the request
  //   res.status(400).json(err);
  // }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const tag = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
