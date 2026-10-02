import { useState } from "react";

function Icon({ children, size = 18, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  );
}

const HomeIcon = () => (
  <Icon>
    <path d="m3.5 10.7 8.5-7 8.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    <path d="M5.8 9.5v10h12.4v-10M9.5 19.5v-5.8h5v5.8" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
  </Icon>
);

const FolderIcon = () => (
  <Icon>
    <path d="M3.5 6.8c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V6.8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
  </Icon>
);

const CalendarIcon = () => (
  <Icon>
    <rect height="15.5" rx="2" stroke="currentColor" strokeWidth="1.7" width="17" x="3.5" y="5" />
    <path d="M8 3.5v3M16 3.5v3M3.5 9.5h17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
  </Icon>
);

const CheckIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="m8.4 12.1 2.3 2.3 4.9-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
  </Icon>
);

const PlusIcon = () => (
  <Icon size={16}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </Icon>
);

const SearchIcon = () => (
  <Icon size={17}>
    <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.7" />
    <path d="m15.5 15.5 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
  </Icon>
);

const MoreIcon = () => (
  <Icon size={19}>
    <circle cx="5" cy="12" fill="currentColor" r="1.2" />
    <circle cx="12" cy="12" fill="currentColor" r="1.2" />
    <circle cx="19" cy="12" fill="currentColor" r="1.2" />
  </Icon>
);

const ArrowIcon = () => (
  <Icon size={15}>
    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
  </Icon>
);

const PackageIcon = () => (
  <Icon size={20}>
    <path d="m4 7.5 8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
    <path d="M4 7.5v9l8 4 8-4v-9M12 11.5v9" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
  </Icon>
);

const navItems = [
  { label: "Resumen", icon: <HomeIcon /> },
  { label: "Inventario", icon: <FolderIcon /> },
  { label: "Movimientos", icon: <CalendarIcon /> },
  { label: "Alertas", icon: <CheckIcon /> },
];

const inventory = [
  { sku: "EQ-0248", title: "Monitor Studio 27”", category: "Equipo", stock: 18, status: "Disponible" },
  { sku: "AC-0132", title: "Teclado inalámbrico", category: "Accesorios", stock: 7, status: "Stock bajo" },
  { sku: "MB-0084", title: "Silla ergonómica", category: "Mobiliario", stock: 24, status: "Disponible" },
  { sku: "AC-0197", title: "Hub USB-C Pro", category: "Accesorios", stock: 0, status: "Agotado" },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Resumen");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [inventorySearch, setInventorySearch] = useState("");
  const [showNotice, setShowNotice] = useState(false);

  const visibleInventory = inventory.filter((item) => {
    const matchesFilter = activeFilter === "Todos" || item.category === activeFilter;
    const query = inventorySearch.toLocaleLowerCase();
    return matchesFilter && `${item.title} ${item.sku}`.toLocaleLowerCase().includes(query);
  });

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <section className="workspace">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-mark">
              <span />
              <span />
            </div>
            <span className="brand-name">Nubia</span>
          </div>

          <nav className="navigation" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                className={`nav-item ${activeNav === item.label ? "active" : ""}`}
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                type="button"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="team-avatars" aria-label="Equipo conectado">
              <div className="avatar avatar-coral">AR</div>
              <div className="avatar avatar-lilac">LM</div>
              <div className="avatar avatar-sand">CS</div>
            </div>
            <span>3 conectados</span>
          </div>
        </aside>

        <div className="content">
          <header className="topbar">
            <div>
              <p className="eyebrow">Espacio de trabajo</p>
              <h1>Control de inventario</h1>
            </div>
            <div className="top-actions">
              <label className="search">
                <SearchIcon />
                <input aria-label="Buscar" placeholder="Buscar" type="search" />
                <kbd>⌘ K</kbd>
              </label>
              <button className="profile" aria-label="Abrir perfil" type="button">AG</button>
            </div>
          </header>

          <div className="dashboard">
            <section className="inventory-summary">
              <div className="summary-heading">
                <div className="summary-icon"><PackageIcon /></div>
                <div>
                  <p className="eyebrow">Vista general</p>
                  <h2>Resumen de inventario</h2>
                  <p>Consulta y administra tus existencias desde un solo lugar.</p>
                </div>
              </div>
              <div className="summary-metrics">
                <div className="metric">
                  <span>Productos</span>
                  <strong>1,248</strong>
                  <small>+32 este mes</small>
                </div>
                <div className="metric">
                  <span>Unidades</span>
                  <strong>8,420</strong>
                  <small>En 6 ubicaciones</small>
                </div>
                <div className="metric">
                  <span>Stock bajo</span>
                  <strong>14</strong>
                  <small className="metric-alert">Requieren atención</small>
                </div>
              </div>
              <button
                className="primary-action new-product"
                onClick={() => setShowNotice(true)}
                type="button"
              >
                <PlusIcon /> Nuevo producto
              </button>
            </section>

            <div className="section-heading">
              <div>
                <p className="eyebrow">Productos</p>
                <h2>Inventario reciente</h2>
              </div>
              <span className="result-count">{visibleInventory.length} resultados</span>
            </div>

            <div className="inventory-tools">
              <label className="inventory-search">
                <SearchIcon />
                <input
                  aria-label="Buscar en el inventario"
                  onChange={(event) => setInventorySearch(event.target.value)}
                  placeholder="Buscar por producto o SKU"
                  type="search"
                  value={inventorySearch}
                />
              </label>
              <div className="filter-group" aria-label="Filtrar por categoría">
                {["Todos", "Equipo", "Accesorios", "Mobiliario"].map((filter) => (
                  <button
                    className={activeFilter === filter ? "active" : ""}
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="inventory-list">
              <div className="inventory-labels">
                <span>Producto</span><span>Categoría</span><span>Existencias</span><span>Estado</span><span />
              </div>
              {visibleInventory.map((item) => (
                <article className="inventory-row" key={item.sku}>
                  <div className="product-cell">
                    <div className="product-icon"><PackageIcon /></div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.sku}</p>
                    </div>
                  </div>
                  <span className="category-cell">{item.category}</span>
                  <strong className="stock-cell">{item.stock} <small>uds.</small></strong>
                  <span className={`stock-status ${item.status.toLocaleLowerCase().replace(" ", "-")}`}>
                    <i />{item.status}
                  </span>
                  <button className="more-action" aria-label={`Más opciones para ${item.title}`} type="button"><MoreIcon /></button>
                </article>
              ))}
              {visibleInventory.length === 0 && (
                <div className="empty-state">No encontramos productos con esos filtros.</div>
              )}
            </div>
          </div>
        </div>
      </section>
      {showNotice && (
        <div className="notice" role="status">
          <PackageIcon />
          <div><strong>Nuevo producto</strong><span>El formulario de registro está listo para conectar.</span></div>
          <button aria-label="Cerrar aviso" onClick={() => setShowNotice(false)} type="button">×</button>
        </div>
      )}
      <p className="footnote">Tu espacio, en calma.</p>
    </main>
  );
}
