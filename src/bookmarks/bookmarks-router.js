const express = require('express')
const { v4: uuid } = require('uuid')
const logger = require('../logger')
const { bookmark } = require('../store')

const bookmarksRouter = express.Router()
const bodyParser = express.json()

bookmarksRouter
    .route('/bookmarks')
    .get((req, res) => {
        res
          .json(bookmark);
      })
    .post(bodyParser, (req, res) => {
        const { title, rating, description } = req.body;

        if (!title) {
            logger.error(`Title is required`);
            return res
              .status(400)
              .send('Invalid data');
          }

          if (!rating) {
            logger.error(`Rating is required`);
            return res
              .status(400)
              .send('Invalid data');
          }

          if (rating.length < 1 || rating.length > 5) {
            return res
              .status(400)
              .send('Rating must be between 1 and 5');
          }

  

          if (!description) {
            logger.error(`Description is required`);
            return res
              .status(400)
              .send('Invalid data');
          }

          const id = uuid();

          const bookmarks = {
            id,
            title,
            rating,
            description
          };
          
          bookmark.push(bookmarks);

          logger.info(`Bookmark with id ${id} created`);

          res
            .status(201)
            .location(`http://localhost:8000/bookmarks/${id}`)
            .json(bookmark);
    });

bookmarksRouter
    .route('/bookmarks/:id')
    .get((req, res) => {
        const { id } = req.params;
        const bookmarks = bookmark.find(bk => bk.id == id);
      
        // make sure we found bookmarks
        if (!bookmarks) {
          logger.error(`Bookmark with id ${id} not found.`);
          return res
            .status(404)
            .send('Bookmark Not Found');
        }
      
        res.json(bookmarks);
  })
    .delete((req, res) => {
        const { id } = req.params;

        const bookmarkIndex = bookmark.findIndex(b => b.id == id);

        if (bookmarkIndex === -1) {
            logger.error(`Bookmark with id ${id} not found.`);
            return res
                .status(404)
                .send('Bookmark Not Found');
        }

        bookmark.splice(bookmarkIndex, 1);
        
        logger.info(`Bookmark with id ${id} deleted`);
        return res
            .status(204)
            .end()
    })

module.exports = bookmarksRouter