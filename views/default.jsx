const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
                <title>NASA API's!</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>

            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default