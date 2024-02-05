import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRouts from './routes/productsRouts.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body parser middleware
// Allow to get the body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running wooho:) ');
});

app.use('/api/products', productRouts);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on ${port} `));
