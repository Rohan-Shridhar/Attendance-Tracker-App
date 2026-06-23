# TODO

- [ ] Update `src/services/api.js` to validate `EXPO_PUBLIC_API_HOST` and avoid constructing `http://undefined:3000/...`.
- [ ] Add clear runtime error/log when host is missing.
- [ ] Normalize base URL construction (protocol/port/path).
- [x] Run lint/build or start to verify no runtime URL is `undefined`.
