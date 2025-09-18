import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Journal from '@/models/Journal';

export async function GET() {
  try {
    await connectToDatabase();
    const journals = await Journal.find({}).sort({ date: -1 });
    return NextResponse.json(journals);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch journals' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content, mood } = await request.json();
    
    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }
    
    await connectToDatabase();
    const journal = await Journal.create({ content, mood });
    
    return NextResponse.json(journal, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create journal entry' }, { status: 500 });
  }
}