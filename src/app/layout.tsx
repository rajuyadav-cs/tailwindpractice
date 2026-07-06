import "./globals.css";
export default function ReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body>{children}</body>
      </html>
    </>
  );
}
