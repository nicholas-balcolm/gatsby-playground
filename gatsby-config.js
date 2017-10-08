module.exports = {
    plugins: [
        'gatsby-plugin-glamor',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `xwunyffmnjif`,
                accessToken: `48dbc554a4b7897ec6f910fe055b3ef25eb8fad9cfbe55e1e0d253f0c251d1c8`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        },
        'gatsby-plugin-sass'
    ]
}