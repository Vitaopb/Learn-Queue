import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
  })
);

app.use(express.static("public"));
app.use('/api', router);
app.listen(3333, () => {
  console.log('Server is listening on port 3333');
});