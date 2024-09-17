import { Montserrat } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Script from "next/script";
=======
import Script from "next/script"; 
>>>>>>> e884b946a6f59e1620d93d2da209987fc429015e

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
      <head>
      <Script id="microsoft-clarity-analytics">
  {`
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "[o4btkfm6zk]");
  `}
</Script>
      </head>
      <body className={montserrat.className}>{children}</body>
      <Script id="microsoft-clarity-analytics">
        {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "[YOUR-ID-HERE]");
    `}
      </Script>
    </html>
  );
}
