import { Navbar, Footer } from "@components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl p-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
