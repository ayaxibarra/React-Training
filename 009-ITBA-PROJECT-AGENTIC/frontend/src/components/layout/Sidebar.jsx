const menuItems = [
  { label: 'Todos los muebles', active: true },
  { label: 'Sillas' },
  { label: 'Mesas' },
  { label: 'Sofás' },
  { label: 'Estanterías' },
  { label: 'Dormitorio' },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col bg-gray-800 border-r border-gray-700 min-h-[calc(100vh-4rem)]">
      <nav className="p-4">
        <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Muebles
        </p>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`block rounded-lg px-3 py-2 text-sm ${
                  item.active
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
