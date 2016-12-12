### Twitter feed client

This is a React.js application to handle stream data

### Install dependencies
```sh
npm install
```

### Run tests
```sh
npm run test
```
### Run type checking tests
```sh
npm run test:typecheck
```

### Run Application
```sh
npm run start
```

### Notes:
- EventSource break the `unit tests` and `type checking tests` in order to get the test runnung comment out line 7 in TweetsList and from Line 22 to 25, change line 32 with ` <Tweet key={index} data={tweet} />`.
- Stream server can be found [here](https://github.com/mhd999/twitter-feed-server)