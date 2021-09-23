import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  title: { type: String, required: true, maxLength: 80 },
  description: { type: String, required: true, mingLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

const VideoModel = mongoose.model("Video", videoSchema);
export default VideoModel;