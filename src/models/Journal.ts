import mongoose from 'mongoose';

const JournalSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  content: {
    type: String,
    required: true
  },
  mood: {
    type: String,
    enum: ['happy', 'neutral', 'sad', 'productive', 'tired'],
    default: 'neutral'
  }
}, {
  timestamps: true
});

export default mongoose.models.Journal || mongoose.model('Journal', JournalSchema);