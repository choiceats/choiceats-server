// @flow
import { getTags } from '../db/pg-adapter'
import type { Tag } from '../types'

const tagsResolver:
  () => Promise<Tag[]> =
  async () => {
    try {
      return await getTags()
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

export default tagsResolver
