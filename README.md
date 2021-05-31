# Onetime

Create shareable timers and control them remotely.

## Technology
React, Node.js, Express, Socket.IO.

## Motivation

This is the successor to a [similar project](https://github.com/danielireson/oneclock) that was originally built for use at a conference for sharing speaker timings across the compère and AV staff. I decided to rewrite the application to drop the Firebase dependency.

## Development

```shell
# install dependencies
npm install

# start servers
npm start
```

This starts the React dev server and Express server and watches for changes.

## Production

```shell
# install dependencies
npm install

# start server
npm run prod
```

This builds the client app and starts the Express server in production mode. A Dockerfile has also been included for building and launching the app in container environments.

## License

This project is licensed under the MIT License.
