import express, { Express, json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(json());
app.use(cors());
app.use(todoRoutes);

const uri = `mongodb://127.0.0.1:27017/${process.env.MONGO_DB}`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
