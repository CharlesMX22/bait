import { NextResponse } from 'next/server';
import { ref, push, serverTimestamp, get, query, limitToLast, set } from 'firebase/database';
import { database } from '@/firebase';

export async function POST(request) {
  const { ip, location, userAgent } = await request.json();

  const logsRef = ref(database, 'logs');
  const newLogRef = push(logsRef);
  
  await set(newLogRef, {
    ip,
    location,
    userAgent, // ← ahora también guardamos el userAgent
    timestamp: serverTimestamp(),
  });

  return NextResponse.json({ status: 'ok', ip, location, userAgent });
}

export async function GET() {
  const logsRef = query(ref(database, 'logs'), limitToLast(100));
  const snapshot = await get(logsRef);
  const logs = [];

  snapshot.forEach((child) => {
    logs.push(child.val());
  });

  return NextResponse.json({ logs });
}
