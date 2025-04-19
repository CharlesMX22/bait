export const metadata = {
  title: "Mi sitio increíble",
  description: "Descripción corta y atractiva del sitio.",
  openGraph: {
    title: "Mi sitio increíble",
    description: "Descripción corta y atractiva del sitio.",
    url: "https://imagem.netlify.app/",
    images: ["https://imagem.netlify.app/imagen-para-whatsapp.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
