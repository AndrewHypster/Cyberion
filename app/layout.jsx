import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeManager from "./components/theme";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueCyr/helveticaneuecyr_thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr/helveticaneuecyr_ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr/helveticaneuecyr_roman.otf", // Це твій основний текст
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr/helveticaneuecyr_black.otf", // Для жирних заголовків
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata = {
  title: "CoffeeHouse | christian team | table games",
  description: "Друзі що вивчають Біблію, грають в настолки з кавою та печенням, відпочивають",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-theme="main" suppressHydrationWarning>
      <body className={helvetica.variable}>
        <ThemeManager />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
