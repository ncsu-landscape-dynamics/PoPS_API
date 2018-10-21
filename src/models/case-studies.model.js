// CaseStudies-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const geojson = require('./geojson.model');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const polygonSchema = geojson(app).polygonSchema

  const caseStudies = new Schema({
    name: { type: String, required: true},
    alias: {type: String , enum: ['Spotted Lanternfly', 'SOD']},
    pest: {type: String, required: true},
    description:{type: String},
    location: polygonSchema,
    hostmap: {type: String},
    start_year: {type: Date},
    end_year: {type: Date},
    seasonality: {type: String},
    season_month1: {type: String},
    season_month2: {type: String},
    wind: {type: Number},
    wind_direction: {type: String},
    kappa: {type: String},
    temperature: {type: String},
    temperature_data: {type: Array},
    precipitation: {type: String},
    precipitation_data: {type: String},
    lethal_temperature: {type: String},
    lethal_temperature_data: {type: Array},
    time_step: {type: String},
    dispersal_kernel: {type: String},
    short_distance_dispersal_scale: {type: String},
    long_distance_dispersal_scale: {type: String},
    percent_short_distance_dispersal: {type: String},
    seed: {type: String},
    mortality: {type: String},
    mortality_rate: {type: String},
    mortality_time_lag: {type: String}
  }, {
    timestamps: true
  });

  return mongooseClient.model('caseStudies', caseStudies);
};
