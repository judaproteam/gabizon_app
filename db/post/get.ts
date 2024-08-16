import { TPostFilter } from '@/types'
import { db } from '../db'

export async function searchPosts(query: string) {
  // This function searches for posts that contain the query string in their title or description.
  return await db.post.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { desc: { contains: query } },
        { creator: { name: { contains: query } } },
      ],
    },
  })
}

function formatFilter(filter: TPostFilter) {
  const query: any = { where: {} }
  if (filter.creatorId) query.where.creatorId = Number(filter.creatorId)
  if (filter.time) query.where.time = { lte: Number(filter.time) }

  filter.sort === 'watched'
    ? (query.orderBy = { watched: { _count: 'desc' } })
    : (query.orderBy = { createdAt: filter.sort || 'asc' })

  return query
}

export async function filterPosts(filter: TPostFilter) {
  const query = formatFilter(filter)

  return await db.post.findMany(query)
}

// export async function filterPost(query: filterProps) {
//   switch (query.sort) {
//     case 'asc':
//       return await filterNewToOld(query)
//     case 'desc':
//       return await filterOldToNew(query)
//     case 'watched':
//       return await filterMostWatched(query)
//     default:
//       return await filterNewToOld(query)
//   }
// }

// async function filterNewToOld(query: filterProps) {
//   return await db.post.findMany({
//     where: {
//       creatorId: query.creatorId,
//       time: { gte: query.time },
//       type: query.type,
//     },
//     orderBy: {
//       createdAt: 'asc',
//     },
//   })
// }

// async function filterOldToNew(query: filterProps) {
//   return await db.post.findMany({
//     where: {
//       creatorId: query.creatorId,
//       time: { gte: query.time },
//       type: query.type,
//     },
//     orderBy: {
//       createdAt: 'desc',
//     },
//   })
// }

// async function filterMostWatched(query: filterProps) {
//   return await db.post.findMany({
//     where: {
//       creatorId: query.creatorId,
//       time: { gte: query.time },
//       type: query.type,
//     },
//     orderBy: { watched: { _count: 'desc' } },
//   })
// }
