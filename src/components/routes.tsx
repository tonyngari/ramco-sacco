import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { Products } from '@/pages/products';
import { Board } from '@/pages/board';
import { Contact } from '@/pages/contact';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/board" element={<Board />} />
      <Route path="/contact" element={<Contact />} />
    </RouterRoutes>
  );
}