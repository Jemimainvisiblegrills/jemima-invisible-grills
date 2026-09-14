import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { ServicesIndex } from '@/pages/ServicesIndex'
import { ServiceDetail } from '@/pages/ServiceDetail'
import { Gallery } from '@/pages/Gallery'
import { Contact } from '@/pages/Contact'
import { ServiceAreas } from '@/pages/ServiceAreas'
import { NotFound } from '@/pages/NotFound'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
