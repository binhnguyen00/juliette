import { Navbar, Footer } from "@components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:rounded">Skip to content</a>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="container mx-auto max-w-7xl p-6 flex-grow outline-none">
        {children}
      </main>
      <Footer />
    </div>
  )
}
