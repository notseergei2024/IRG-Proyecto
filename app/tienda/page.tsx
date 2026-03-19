export default function TiendaPage() {
  const juegos = ["Zelda: TotK", "Halo Infinite", "Spider-Man 2", "FIFA 24"];
  return (
    <section>
      <h1>Catálogo de Juegos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {juegos.map(juego => (
          <div key={juego} style={{ border: '1px solid black', padding: '10px' }}>
            <h3>{juego}</h3>
            <p>Precio: 59.99€</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </section>
  )
}
