import Category from '@UI/Category/Category';

function Favourites() {
  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      <Category />
      <Category />
    </section>
  );
};

export default Favourites;