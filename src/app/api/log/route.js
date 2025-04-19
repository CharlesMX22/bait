import { NextResponse } from 'next/server';
import { ref, push, serverTimestamp, get, query, limitToLast } from 'firebase/database';
import { database } from '@/firebase';

export async function POST(request) {
  const { ip } = await request.json();

  const logsRef = ref(database, 'logs');
  const newLogRef = push(logsRef);
  await newLogRef.set({
    ip,
    timestamp: serverTimestamp(),
  });

  return NextResponse.json({ status: 'ok', ip });
}

export async function GET() {
  const logsRef = query(ref(database, 'logs'), limitToLast(100)); // últimos 100 logs
  const snapshot = await get(logsRef);
  const logs = [];

  snapshot.forEach((child) => {
    logs.push(child.val());
  });

  return NextResponse.json({ logs });
}
