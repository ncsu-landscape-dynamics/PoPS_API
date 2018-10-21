// scenarios-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ObjectId = Schema.Types.ObjectId;
  const weatherSchema = new Schema({
    temp: Number,
    precip: Number
  });
  const scenarios = new Schema({
    text: { type: String, required: true },
    efficiency: Number,
    budget: Number,
    weather: weatherSchema,
    caseStudyId: ObjectId,
    userId: ObjectId
  }, {
    timestamps: true
  });

  return mongooseClient.model('scenarios', scenarios);
};
