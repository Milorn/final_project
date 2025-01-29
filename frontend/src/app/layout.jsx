
import StoreProvider from "@/lib/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Clothes",
  description: "An online clothes store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar/>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
