

export const GET_USER_BLOGS = `
query GetUserArticles($page: Int!) {
    user(username: "creator79") {
        publication {
            posts(page: $page) {
                
                title
                brief
                slug
                dateAdded
                coverImage
                contentMarkdown
                
            }
        }
    }
}
`;

export async function gql(query: string, variables: Record<string, any> = {}) {
  try {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }

    return data.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
