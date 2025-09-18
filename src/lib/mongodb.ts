import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Extend the global type
declare global {
  var __mongooseConn: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  } | undefined;
}

const globalWithMongoose = globalThis as unknown as {
  __mongooseConn?: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
};

const cached =
  globalWithMongoose.__mongooseConn ??
  (globalWithMongoose.__mongooseConn = { conn: null, promise: null });

async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
