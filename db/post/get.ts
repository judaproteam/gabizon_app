import { db } from "../db";

export async function searchPosts(query: string) {

  // This function searches for posts that contain the query string in their title or description.
  return await db.post.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { desc: { contains: query } },
      ],
    },
  });
}

