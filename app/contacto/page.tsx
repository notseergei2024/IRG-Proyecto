export default function ContactoPage() {
  return (
    <section>
      <h1>Contacto</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="¿En qué podemos ayudarte?"></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  )
}
