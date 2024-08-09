import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import FeaturedTutorial from "./FeaturedTutorial";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "./HomePage.css"; 

const HomePage = () => {
  const articles = [
    { name: "Article 1", description: "Description of Article 1" },
    { name: "Article 2", description: "Description of Article 2" },
    { name: "Article 3", description: "Description of Article 3" },
  ];

  const tutorials = [
    { name: "Tutorial 1", description: "Description of Tutorial 1" },
    { name: "Tutorial 2", description: "Description of Tutorial 2" },
    { name: "Tutorial 3", description: "Description of Tutorial 3" },
  ];

  return (
    <div>
      <Header />

      <main>
        <h2>Featured Articles</h2>
        <div className="content-container">
          {articles.map((article, index) => (
            <FeaturedArticle
              key={index}
              name={article.name}
              description={article.description}
            />
          ))}
        </div>
        <button onClick={() => alert("View all articles")}>
          View All Articles
        </button>

        <h2>Featured Tutorials</h2>
        <div className="content-container">
          {tutorials.map((tutorial, index) => (
            <FeaturedTutorial
              key={index}
              name={tutorial.name}
              description={tutorial.description}
            />
          ))}
        </div>
        <button onClick={() => alert("View all tutorials")}>
          View All Tutorials
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
