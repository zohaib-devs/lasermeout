import "./globals.css";
import SideNav from "./components/side-nav";

export const metadata = {
  title: "Laser Me Out",
  description: "Laser hair removal for every body.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SideNav />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
