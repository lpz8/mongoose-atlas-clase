const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  console.log('MONGO_URL:', process.env.MONGO_URL); 
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Base de datos conectada con éxito');
  } catch (error) {
    console.error(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = {
  dbConnection,
};