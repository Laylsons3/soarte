import { Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Soarte – Sociedade Artística",
  description:
    "Organização da Sociedade Civil que promove desenvolvimento sociocultural por meio da arte, educação e inclusão social.",
};

function ThemeScript() {
  const script = `(() => {\n  try {\n    const stored = localStorage.getItem('theme');\n    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    const theme = stored || (prefersDark ? 'dark' : 'light');\n    document.documentElement.dataset.theme = theme;\n    document.documentElement.classList.toggle('dark', theme === 'dark');\n  } catch (e) {}\n})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="light" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-[var(--surface)] text-[var(--ink)]`}
      >
        <div className="min-h-screen bg-[image:var(--page-glow)] bg-no-repeat">
          <SiteHeader />
          <main id="conteudo" className="pb-20">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
