import React from "react";

function CategoryFilter({ categories, handleCategoryClick, selectCategory }) {
  const buttons = categories.map((category) => {
    const classCategory = (category === selectCategory ? "selected" : null);
    return (
      <button 
        key={category} 
        onClick={handleCategoryClick}
        className={classCategory}>
        {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
