import { NextResponse } from 'next/server';
import { ref, push, serverTimestamp, get, query, limitToLast, set } from 'firebase/database';
import { database } from '@/firebase';

export async function POST(request) {
  const { ip, location } = await request.json();

  const logsRef = ref(database, 'logs');
  const newLogRef = push(logsRef);
  
  await set(newLogRef, {
    ip,
    location, // Aquí guardamos ubicación completa
    timestamp: serverTimestamp(),
  });

  return NextResponse.json({ status: 'ok', ip, location });
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
