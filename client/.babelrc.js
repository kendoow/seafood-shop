
const isDev = process.env.MODE === 'development'

module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: true
            },
            isDev && 'react-refresh/babel',
        ].filter(Boolean),
    ]
}