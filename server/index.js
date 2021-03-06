require('dotenv/config');
const pg = require('pg');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');
const staticMiddleware = require('./static-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {
  const imageUrl = req.file.location;
  const sql = `
  insert into "images" ("url")
    values ($1)
    returning *
    `;
  const values = [imageUrl];
  db.query(sql, values)
    .then(result => {
      const [newImage] = result.rows;
      res.status(201).json(newImage);
    })
    .catch(err => next(err));
});

app.get('/api/uploads', uploadsMiddleware, (req, res, next) => {
  const sql = `
  select *
    from "images"
    order by "imageId" desc
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/guests', (req, res, next) => {
  const sql = `
  select *
    from "guests"
    order by lower("firstName")
    `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/guests/:status', (req, res, next) => {
  const status = req.params.status;
  const sql = `
    select *
      from "guests"
      where "status" = $1
      order by lower("firstName")
      `;
  const params = [status];

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/guests', (req, res, next) => {
  const { firstName, lastName, status } = req.body;
  const statusOptions = ['invited', 'attending', 'not attending'];
  if (!firstName || !lastName || !status) {
    res.status(400).json({
      error: 'firstName, lastName, and status are all required fields'
    });
    return;
  }
  if (!statusOptions.includes(status.toLowerCase())) {
    res.status(400).json({
      error: 'status must be invited, attending, or not-attending'
    });
    return;
  }
  const sql = `
  insert into "guests" ("firstName", "lastName", "status")
  values ($1, $2, $3)
  returning *
  `;
  const params = [firstName, lastName, status];

  db.query(sql, params)
    .then(result => {
      const [newGuest] = result.rows;
      res.status(201).json(newGuest);
    })
    .catch(err => next(err));
});

app.put('/api/users', (req, res, next) => {
  const { userName, partnerName, weddingDate } = req.body;
  const values = [userName, partnerName, weddingDate];
  if (!userName || !partnerName || !weddingDate) {
    res.status(400).json({
      error: 'userName, partnerName, and weddingDate are all required fields'
    });
    return;
  }

  const sql = `
  update "users"
    set "userName" = $1,
        "partnerName" = $2,
        "weddingDate" = $3
      where "userId" = 1
      returning *
    `;

  db.query(sql, values)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/users', (req, res, next) => {
  const sql = `
  select *
    from "users"
    where "userId" = 1
    `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/budget', (req, res, next) => {
  const sql = `
  select *
    from "budget"
    where "budgetId" = 1
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.put('/api/budget', (req, res, next) => {
  const { budgetTotal } = req.body;
  const params = [budgetTotal];
  if (!budgetTotal) {
    res.status(400).json({
      error: 'budgetTotal is a required field'
    });
    return;
  }
  if (!Number(budgetTotal) || Number(budgetTotal) <= 0) {
    res.status(400).json({
      error: 'budgetTotal must be a positive integer'
    });
    return;
  }

  const sql = `
  update "budget"
    set "budgetTotal" = $1
    where "budgetId" = 1
    returning *
  `;

  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.put('/api/budget-items/:itemId', (req, res, next) => {
  const itemId = parseInt(req.params.itemId, 10);
  const { item, estimate } = req.body;
  const values = [item, estimate, itemId];

  if (!Number.isInteger(itemId) || itemId <= 0) {
    res.status(400).json({
      error: 'itemId must be a positive integer.'
    });
    return;
  }
  if (!item || !estimate) {
    res.status(400).json({
      error: 'Item and estimate are both required fields.'
    });
    return;
  }

  const sql = `
  update "budgetItems"
    set "item" = $1,
        "estimate" = $2
      where "itemId" = $3
      returning *
  `;

  db.query(sql, values)
    .then(result => {
      const item = result.rows[0];
      if (!item) {
        res.status(404).json({
          error: `Cannot find item with id ${itemId}`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/budget-items', (req, res, next) => {
  const sql = `
  select *
    from "budgetItems"
    order by "itemId" desc
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/budget-items', (req, res, next) => {
  const { item } = req.body;
  const estimate = parseInt(req.body.estimate, 10);
  if (!item || !estimate) {
    res.status(400).json({
      error: 'item and estimate are both requried fields'
    });
    return;
  }
  if (!Number.isInteger(estimate) || estimate <= 0) {
    res.status(400).json({
      error: 'estimate must be a positive integer'
    });
    return;
  }

  const sql = `
  insert into "budgetItems" ("item", "estimate")
  values ($1, $2)
  returning *
  `;

  const values = [item, estimate];

  db.query(sql, values)
    .then(result => {
      const [newItem] = result.rows;
      res.status(201).json(newItem);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
