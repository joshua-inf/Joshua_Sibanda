import type { Metadata } from "next";
import Header from "../components/Header";
import ClientLayout from "./ClientLayout";
import "../index.css";

export const metadata: Metadata = {
  title: "Joshua Sibanda | Portfolio",
  description: "Explore the professional portfolio, projects, and insights of Joshua Sibanda.",
  icons: {
    icon: "/joshuaIcon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 font-body antialiased flex flex-col min-h-screen transition-colors duration-300">
        <ClientLayout>
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="bg-slate-150 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-6 transition-colors duration-300">
            <div className="container text-center">
              <p className="text-slate-600 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Joshua Sibanda. All rights reserved.
              </p>
            </div>
          </footer>
        </ClientLayout>
      </body>
    </html>
  );
}
