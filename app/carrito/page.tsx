export default function CarritoPage() {
  const items = [
    { id: 1, nombre: "Elden Ring", precio: 59.99 },
    { id: 2, nombre: "Zelda: TotK", precio: 69.99 }
  ];

  return (
    <section>
      <h1>🛒 Tu Carrito de Compra</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px 0' }}>{item.nombre}</td>
              <td>{item.precio}€</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: 129.98€</h3>
        <button style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
          Finalizar Compra
        </button>
      </div>
    </section>
  )
}
