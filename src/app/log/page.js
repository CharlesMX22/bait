'use client';
import { useEffect, useState } from 'react';

export default function LogPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/log')
      .then((res) => res.json())
      .then((data) => {
        const orderedLogs = data.logs.sort((a,b) => b.timestamp - a.timestamp);
        setLogs(orderedLogs);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Logs de visitantes (últimos 100)</h2>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>
            IP: {log.ip} <br />
            Ubicación: {log.location?.country}, {log.location?.regionName}, {log.location?.city} <br />
            Coordenadas: ({log.location?.lat}, {log.location?.lon})<br />
            Fecha: {new Date(log.timestamp).toLocaleString()}<br />
            <strong>User-Agent:</strong> {log.userAgent}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
