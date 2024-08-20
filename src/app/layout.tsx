import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Manual UGC",
  description: "O seu guia para começar no UGC, a profissão do futuro!",
  //line 5 to 8 is only addition to make in layout.js
  icons: {
    icon: "/favicon-48x48.png",
  },
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
