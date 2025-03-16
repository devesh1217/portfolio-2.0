import { Analytics as AnalyticsModel } from '@/models/Analytics';
import { connectToDatabase } from '@/utils/mongodb';

export async function trackVisit(source = 'direct') {
    await connectToDatabase();
    
    const stats = await AnalyticsModel.findOne({}) || new AnalyticsModel();
    stats.totalVisits += 1;
    
    const currentSourceCount = stats.sources.get(source) || 0;
    stats.sources.set(source, currentSourceCount + 1);
    
    stats.lastVisit = new Date();
    if (!stats.firstVisit) {
        stats.firstVisit = new Date();
    }
    
    await stats.save();
}

export function determineSource() {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    if (utmSource) return utmSource;

    const referrer = document.referrer;
    if (!referrer) return 'direct';
    
    if (referrer.includes('linkedin')) return 'linkedin';
    if (referrer.includes('google')) return 'google';
    if (referrer.includes('resume')) return 'resume';
    return 'other';
}

export async function getAnalytics() {
    await connectToDatabase();
    const stats = await AnalyticsModel.findOne({}) || new AnalyticsModel();
    
    return {
        totalVisits: stats.totalVisits,
        sources: Object.fromEntries(stats.sources),
        firstVisit: stats.firstVisit.toISOString(),
        lastVisit: stats.lastVisit.toISOString()
    };
}
