import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { GET_USER_BLOGS, gql } from "../helpers/GetBlog";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetchBlogs();
      setBlogs(response);
    };
    getBlogs();
  }, []);

  const fetchBlogs = async () => {
    let allBlogsFetched = false;
    let page = 0;
    const articles = [];

    while (!allBlogsFetched) {

      let response = await gql(GET_USER_BLOGS, { page: page });
      articles.push(...response.data.user.publication.posts);
      if (response.data.user.publication.posts.length === 0) {
        allBlogsFetched = true;
      }
      page++;
    }
    console.log(articles);
    return articles;
  };

  return (
    <div className="mt-20 mx-20 ">
      <div className="my-4 ">
        <img
          src="https://media.tenor.com/I3RjM4xQO0kAAAAi/monitors-typing.gif"
          className="w-20 h-20"
        />
        <h1 className="text-4xl font-bold text-pink-600 pb-4">
          Blogs<span className="text-white">.read()</span>
        </h1>
        <span className="text-xl font-semibold mt-6">
          Some Technical Blogs that are close to my heart ♡
        </span>
        <p className="font-mono opacity-40">
          Below are some of my favorite Blogs that I've written in my free time,
          these include experience and personal learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">
        {blogs.map((data, index) => (
          <div key={data.id} className=" mb-8">
            <div
              className={`bg-black shadow-purple ${
                index === blogs.length - 1
                  ? "flex justify-center items-center p-16 pl-20 opacity-40 hover:opacity-90 border-3 border-dashed border-darkGray"
                  : "hover:shadow-purple-intense"
              }`}
            >
              {/* Black card content */}
              <BlogCard key={data.id} data={data} />
            </div>
            <div className="z-[-1] absolute  w-full h-full bg-pink-600 top-0 left-0 opacity-0 hover:opacity-100 blur-lg rounded-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
