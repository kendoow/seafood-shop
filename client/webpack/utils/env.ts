
export const mode = process.env.MODE === 'development' ? 'development' : 'production'
export const isDev = process.env.MODE === 'development'
export const isProd = !isDev