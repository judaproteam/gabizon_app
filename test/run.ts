import { db } from '../db/db'

async function run() {
  const res = await db.user.findMany()

  console.log(res)
}
run()
