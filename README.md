# metalpic

Bare metal HTML web componenents based gallery and picture album

# Live website

https://metalpic.jstudios.ovh/

# Main features

* Upload and organize pictures into albums
* Set albums as private or public
* Single-user login with minimal configuration
* Amazon S3-stored pictures
* MongoDB database
* Frameworkless design
* Bare metal CSS styles, minimalist look
* Works with standard Cloudflare caching to reduce S3 load
* Google crawlable, Search Engine Optimized (SEO)

# Web Components and Custom Elements client side logic

All standard logic and resources fetching is client side.

HTML5-style routing is supported.

# Catches

Fetch as google was not rendering initially, and google could not index.

Issues were debugged using the Mobile preview: https://blog.jstudios.ovh/post/5c28dae2c4eecc511bf5e00b

Several differences between native custom elements support and polyfill logic caused Maximum Stack size exceeded errors. They were solved by rewriting some custom elements initial rendering logic: https://blog.jstudios.ovh/post/5c28dfc4dcf57952614892f1
