import { Schema, model } from 'mongoose';

const exampleSchema = new Schema({
  sentence: String,
  source: String,
  videoURL: String,
});

const grammarPointSchema = new Schema({
  jlptLevel: { type: String, enum: ['N1', 'N2', 'N3', 'N4', 'N5'] },
  title: String,
  description: String,
  examples: [exampleSchema],
});

export default model('GrammarPoint', grammarPointSchema);
