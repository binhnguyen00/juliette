import { Navbar } from "@components";

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
      <footer className="w-full flex items-center justify-center py-3">
        <div className="flex items-center gap-2">
          <span className="text-default-600"> Footer </span>
          <p className="text-primary"> Footer </p>
        </div>
      </footer>
    </div>
  )
}
