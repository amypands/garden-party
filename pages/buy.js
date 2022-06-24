import Head from "next/head";
import Image from "next/image";

export default function Buy() {
  let recipes = [
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Tomatoes",
      description: "$3/ lb",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <form className="form-inline searchbar">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row gy-3">
        {recipes.map(function (recipe, index) {
          return (
            <div key={index} className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.image}
                  alt="recipe image"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <p className="card-text">
                    <strong>{recipe.author}</strong>
                  </p>
                  <a href={recipe.link} className="btn btn-secondary">
                    Contact Seller
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
