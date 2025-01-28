import "./globals.css";

export const metadata = {
  title: "Clothes",
  description: "An online clothes store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
