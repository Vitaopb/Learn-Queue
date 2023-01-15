import express from 'express';

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
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});