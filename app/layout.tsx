import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '15px' }}>
          <Link href="/">Inicio</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/soporte">Soporte</Link>
        </nav>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  )
}
