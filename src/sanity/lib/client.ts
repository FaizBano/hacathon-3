import { createClient } from 'next-sanity'

import { dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion:'2024-01-27',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
