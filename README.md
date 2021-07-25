# Onetime

Create shareable timers and control them remotely.

![Screenshot 2021-06-10 at 21:26:33](https://user-images.githubusercontent.com/9462036/121592446-97ddc080-ca32-11eb-93e3-85c63f5395c3.png)

## Technology
React, Node.js, Express, Socket.IO.

## Motivation

This was originally built for use at a conference for sharing speaker timings across the compère and AV staff. More recently I've used this in Zoom games to manage round times with players.

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
