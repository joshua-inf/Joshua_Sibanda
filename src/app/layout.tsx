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
      <body className="bg-slate-900 text-slate-50 font-body antialiased flex flex-col min-h-screen">
        <ClientLayout>
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="bg-slate-800 border-t border-slate-700 py-6">
            <div className="container text-center">
              <p className="text-slate-400">
                &copy; {new Date().getFullYear()} Joshua Sibanda. All rights reserved.
              </p>
            </div>
          </footer>
        </ClientLayout>
      </body>
    </html>
  );
}
