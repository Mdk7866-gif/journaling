// /api/journals/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Journal from '@/models/Journal';

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    // Get query params (?page=1&limit=10)
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    // Calculate skip
    const skip = (page - 1) * limit;

    // Fetch journals with pagination
    const journals = await Journal.find({})
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    // Count total docs for frontend (optional, for "X of Y" display)
    const total = await Journal.countDocuments();

    return NextResponse.json({
      journals,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('GET /api/journals error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch journals' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content, mood } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const journal = await Journal.create({ content, mood });

    return NextResponse.json(journal, { status: 201 });
  } catch (error) {
    console.error('POST /api/journals error:', error);
    return NextResponse.json(
      { error: 'Failed to create journal entry' },
      { status: 500 }
    );
  }
}
