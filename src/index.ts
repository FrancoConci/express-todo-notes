import express from 'express';
import cors from 'cors';

const port = 3000;

express()
  .use(cors())
  .get('/', (_, res) => {
    res.send(JSON.stringify({ SOMETHING: 'ELSE' }));
  })
  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });