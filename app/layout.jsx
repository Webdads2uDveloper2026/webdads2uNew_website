import "./globals.css";
import ReduxProvider from "./provider/ReduxProvider";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

export const metadata = {
  title: "Webdads2u  2026",
  description:
    "Discover the best Webdads2u",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
