import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Routes } from '@/components/routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ramco-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;