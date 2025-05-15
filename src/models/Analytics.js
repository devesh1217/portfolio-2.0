import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 1,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema);
