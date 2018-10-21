// runs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ObjectId = Schema.Types.ObjectId;
  const runs = new Schema({
    stochasticResults: { type: Number, required: true },
    probabilityResults: { type: Number, required: true },
    deadTrees: { type: Number, required: true },
    moneySpent: { type: Number, required: true },
    userId: { type: ObjectId, required: true },
    scenarioId: { type: ObjectId, required: true },
    caseStudyId: { type: ObjectId, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('runs', runs);
};
