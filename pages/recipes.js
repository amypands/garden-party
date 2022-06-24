import Head from "next/head";
import Image from "next/image";

export default function Recipes() {
  let recipes = [
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
    {
      name: "Spaghetti",
      description:
        "classic spaghetti and meatballs featuring fresh tomatoes and basil from my garden.",
      image:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=",
      author: "@Username",
      link: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <a
            href="/createrecipes"
            type="button"
            className="btn btn-outline-success recipebutton"
          >
            Add Recipe
          </a>
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
                    View Recipe
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
