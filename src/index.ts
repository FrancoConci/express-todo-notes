import express from 'express';
import cors from 'cors';

express()
  .use(cors())
  .get('/', (_, res) => {
    res.send(JSON.stringify({ SOMETHING: 'ELSE' }));
  })
  .listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
