import "./globals.css";
import Navbar from "@/components/navbar";
export default function ReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
