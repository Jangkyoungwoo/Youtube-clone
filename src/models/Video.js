import mongoose from 'mongoose';

//export const formatHashtags = (hashtags) => hashtags.split(",").map(word => (word.startsWith('#') ? word : `#${word}`));
const videoSchema = mongoose.Schema({
  title: { type: String, required: true, maxLength: 80, trim: true },
  description: { type: String, required: true, minLength: 20, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static('formatHashtags', function (hashtags) {
  return hashtags.split(",").map(word => (word.startsWith('#') ? word : `#${word}`));
});

const VideoModel = mongoose.model("Video", videoSchema);
export default VideoModel;