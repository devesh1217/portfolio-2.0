import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
        enum: ['resume', 'linkedin', 'github', 'old_portfolio', 'direct', 'share', 'other']
    },
    count: {
        type: Number,
        default: 1,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema);
