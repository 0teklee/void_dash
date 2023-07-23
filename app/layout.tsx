import "./globals.css";

export const metadata = {
  title: "V̴O̴I̴D̴S̴̴ ̲&̲L̷I̷E̷S̷",
  description: "̴̴̴̴̶L̴I̴E̴S",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:ur" content={`https://void-dash.vercel.app`} />
        <meta name="twitter:image" content={`/horror.jpeg`} />
        <meta name="twitter:image:alt" content={`__`} />
        <meta name="twitter:creator" content="__kat" />
      </head>

      <body>{children}</body>
    </html>
  );
}
