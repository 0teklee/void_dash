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
        {/*<link rel="manifest" href="/site.webmanifest" />*/}
      </head>

      <body>{children}</body>
    </html>
  );
}
