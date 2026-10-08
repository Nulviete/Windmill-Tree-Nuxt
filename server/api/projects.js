import { serverSupabaseClient } from '#supabase/server'

function getProjectEndDate(dateRange) {
    const endDate = typeof dateRange === 'string' ? dateRange.split(/[-–—]/).pop().trim() : ''
    const match = endDate.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/)

    if (!match) return -Infinity

    const [, day, month, year] = match.map(Number)
    const timestamp = Date.UTC(year, month - 1, day)
    const date = new Date(timestamp)

    // Keep missing or invalid dates after projects with a valid end date.
    if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
        return -Infinity
    }

    return timestamp
}

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const query = getQuery(event)

    const year = query.year

     if (!year) {
    // Můžeš vrátit chybu nebo všechny projekty (doporučuji chybu)
    throw createError({ statusCode: 400, statusMessage: 'Year query parameter is required' })
  }

    const { data, error } = await client.from('projects').select('*').eq('year', year) 

    if (error) throw createError({ statusCode: 500, statusMessage: error.message })
        
    const sortedProjects = (data ?? [])
        .map(project => ({ project, endDate: getProjectEndDate(project.date) }))
        .sort((a, b) => a.endDate === b.endDate ? 0 : b.endDate - a.endDate)
        .map(({ project }) => project)

    return { data: sortedProjects }
})
