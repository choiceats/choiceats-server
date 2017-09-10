// @flow
import { query } from '../'
import type { Tag } from '../../types' 

const getTags:
  () => Promise<Tag[]> =
  async () => {
    const tagsResults = await query(tagSql, [])
    if (tagsResults) {
      return tagsResults.rows;
    }
    return []
  }

const tagSql = `
SELECT * FROM tags
`

export default getTags
