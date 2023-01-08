# go-vanity

Simple Caddy-powered site that redirects a vanity domain to GitHub repositories.
Utilizes a template to render a simple page with the relevant meta tags.

## Configuration

Configuration is very straightforward with only a few environment variables.

| Variable            | Default value | Description                          |
|---------------------|---------------|--------------------------------------|
| `VANITY_DOMAIN`     | `""`          | Vanity domain name, `go.example.com` |
| `VANITY_GITHUB_ORG` | `""`          | Name of GitHub user or organization  |
| `VANITY_GIT_BRANCH` | `"main"`      | Branch name for GitHub URLs          |

## License

The MIT License (MIT)

Copyright (c) 2023 Torgny Bjers

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
