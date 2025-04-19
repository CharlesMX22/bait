'use client'
import { useEffect } from 'react';
import styles from "./page.module.css";
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    async function logIP() {
      const res = await fetch('https://api.ipify.org?format=json');
      const { ip } = await res.json();

      await fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip }),
      });
    }

    logIP();
  }, []);

  return (
    <>
    <Head>
      <title>Mi sitio increíble</title>
      <meta property="og:title" content="Mi sitio increíble" />
      <meta property="og:description" content="Descripción corta y atractiva del sitio." />
      <meta property="og:url" content="https://imagem.netlify.app/" />
      <meta property="og:image" content="https://imagem.netlify.app/imagen-para-whatsapp.jpg" />
    </Head>
   

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
