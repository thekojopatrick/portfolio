import React from "react";

const WeOuddyLanding = ({
  title = "WeOuddy",
  description = "",
  tags = [],
  imageSrc = "/projects/weouddy-cover.jpg",
  imageAlt = "Featured image",
  tagline = "",
  showLiveDemo = true,
}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-between space-x-6 mb-12">
        <div className=" items-center ">
          <div className="w-12 h-12 bg-black rounded-full hidden items-center justify-center">
            <span className="text-white text-lg font-semibold">{title}</span>
          </div>
          <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
        {showLiveDemo && (
          <div className="ml-auto">
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
              Live Demo →
            </button>
          </div>
        )}
      </nav>

      <div className="mb-12">
        <p className="text-gray-600 dark:text-gray-200 max-w-2xl">
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-6 mb-12">
          {tags.map((tag, index) => (
            <span key={index} className="text-gray-600 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="relative">
        <div className="absolute hidden inset-0 bg-gray-900 transform rotate-3">
          <div
            className="absolute inset-0 border-2 border-white opacity-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          ></div>
        </div>

        <div className="relative bg-white p-4 rounded-xl shadow-lg">
          <img src={imageSrc} alt={imageAlt} className="w-full rounded-lg" />
          {tagline && (
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="text-sm text-purple-600">{tagline}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeOuddyLanding;
