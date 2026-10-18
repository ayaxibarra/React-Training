function CategorySection({ titulo, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-serif text-gray-800 mb-6 border-b pb-2">
        {titulo}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
}

export default CategorySection;
