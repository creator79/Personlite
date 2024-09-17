// "use client";
// import React, { useState, useEffect } from "react";

// interface Article {
//   id: number;
//   title: string;
//   url: string;
// }

// const DevToArticles: React.FC = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://dev.to/api/articles?username=creator79"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch articles");
//         }
//         const data = await response.json();
//         console.log(data);
//         setArticles(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       {articles.map((article) => (
//         <div key={article.id}>
//           <h2>{article.title}</h2>
//           <p>
//             <a href={article.url}>Read more</a>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DevToArticle

import React from 'react'
import BlogCard from '@/components/shared/BlogsCard'

const page = () => {
  return (
    <div>
        <BlogCard />
    </div>
  )
}

export default page