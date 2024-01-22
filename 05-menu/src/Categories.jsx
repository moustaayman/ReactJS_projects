const Categories = ({ categories, filterMenuItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
