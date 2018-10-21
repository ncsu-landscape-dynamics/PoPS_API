module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const pointSchema = new Schema({
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      });

      const polygonSchema = new Schema({
        type: {
          type: String,
          enum: ['Polygon'],
          required: true
        },
        coordinates: {
          type: [[[Number]]], // Array of arrays of arrays of numbers
          required: true
        }
      });
  
    return {pointSchema, polygonSchema};
  };


  

