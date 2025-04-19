'use client'
import { useEffect } from 'react';
import styles from "./page.module.css";
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    async function logIPandLocation() {
      // Obtener IP del visitante
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipRes.json();

      // Obtener ubicación aproximada usando la IP
      const locationRes = await fetch(`https://ipwho.is/${ip}`);

      const locationData = await locationRes.json();

      // Datos que enviaremos al servidor
      const logData = {
        ip,
        location: {
          country: locationData.country,
          regionName: locationData.regionName,
          city: locationData.city,
          lat: locationData.lat,
          lon: locationData.lon,
        }
      };

      // Guardar IP + Ubicación en tu backend
      await fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData),
      });
    }

    logIPandLocation();
  }, []);

  return (
    <>
        <div className={styles.page}>
        <main className={styles.main}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/oofSnsGkops?autoplay=1&mute=1"
            title="James Blunt - You're Beautiful"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </main>
      </div>
    </>
  );
}
