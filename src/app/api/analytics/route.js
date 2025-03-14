import { connectDB } from '@/utils/db';
import Analytics from '@/models/Analytics';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB();
    const { source } = await request.json();
    if (!source) {
      return NextResponse.json({ success: false, error: 'Source is required' }, { status: 400 });
    }
    const validSources = ['resume', 'linkedin', 'github', 'old_portfolio', 'direct', 'share', 'other'];
    if (!validSources.includes(source)) {
      return NextResponse.json({ success: false, error: 'Invalid source' }, { status: 400 });
    }
    const existingVisit = await Analytics.findOne({ source });
    if (existingVisit) {
        existingVisit.count += 1;
        await existingVisit.save();
        return NextResponse.json({ success: true });
    } else {
        await Analytics.create({ source });
        return NextResponse.json({ success: true });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const stats = await Analytics.find({}).sort({ count: -1 }).limit(6);
    if (!stats) {
      return NextResponse.json({ success: false, error: 'No analytics data found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
