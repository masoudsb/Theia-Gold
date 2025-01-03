import "../style/mainStyle.css";
import Nav from "@/components/nav";
import "../style/globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Gold Project",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Nav />
        </div>
        <main className="main text-6xl">{children}</main>
        <footer id="footer"><Footer/></footer>
      </body>
    </html>
  );
}
