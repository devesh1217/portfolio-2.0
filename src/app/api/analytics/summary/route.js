import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Analytics from '@/models/Analytics';

const MONGODB_URI = process.env.MONGODB_URI;

export async function GET() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(MONGODB_URI);
    
    const summary = await Analytics.aggregate([
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 },
          lastVisit: { $max: '$timestamp' }
        }
      },
      {
        $project: {
          source: '$_id',
          count: 1,
          lastVisit: 1,
          _id: 0
        }
      }
    ]);

    return NextResponse.json({ success: true, data: summary });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
