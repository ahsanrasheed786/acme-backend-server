import mongoose from 'mongoose';


const contentSchema = new mongoose.Schema({
//   id: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  moboImg: { type: String, required: true },
  heading: { type: String, required: true },
  text: { type: String },
  path: { type: String },
  bgColorfrom: { type: String },
  bgColorTo: { type: String },
  category: { type: String},
  logImg1: { type: String },
  logImg2: { type: String },
  logImg3: { type: String },
  detail: { type: String },
  screenScreenshort: [{ type: String }],
  appTestLink: { type: String },
  webTestLink: { type: String },
  isoTestLink: { type: String },
  clientReview: [{
    clientreview: { type: String },
    clientImg: { type: String },
    clientname: { type: String }
  }],
  Process: [{
    theProblem: { type: String },
    theSoluction: { type: String },
    theResult: { type: String }
  }]
});

// Define mongoose model
export const CasestudyContent = mongoose.model('Casestudy', contentSchema);

// module.exports = Content;
