'use server'

import { db } from "../db"

export async function insertLesson(lesson) {
  return await db.lesson.create({
    data: {
      title: lesson.title,
      date: new Date(lesson.date),
      time: lesson.time,
      creator: {
        create: {
          name: "Default Creator",
        },
      },
    },
  });
}