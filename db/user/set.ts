import { db } from '../db'

type User = {
  id?: number
  firstName: string
  lastName: string
}

type Post = {
  id?: number
  title: string
  date: Date
  time: number
}

export async function setUser(user: User) {
  const res = await db.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  })

}
