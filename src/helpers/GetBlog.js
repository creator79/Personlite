export const GET_USER_BLOGS = `
query GetUserArticles($page: Int!) {
    user(username: "hat52") {
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

export async function gql(query, variables = {}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    return data.json();

}

