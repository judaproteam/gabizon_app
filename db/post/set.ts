'use server'

import { db } from "../db"

export async function insertPost(formData) {

    const time = Number(formData.get("time"));
    const date = formData.get("date")
    const title = formData.get("title")
  
  return await db.post.create({
    data: {
      title,
      date: new Date(date),
      time,
      creator: {
        create: {
          name: "Default Creator",
        },
      },
    },
  });
}