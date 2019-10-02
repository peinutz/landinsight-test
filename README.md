# Test

I have included both front-end and back-end implementation, the back-end is a rest API using Node.js, Express.js and Jest as a test framework. The front-end solution is a Vue.js app generated using the Vue CLI using Jest and Vue Test Utils for testing.

## How to run

- You can run the app by running docker-compose up --build on the root of the project, and then browse to http://localhost:4000.

- To run the tests go into the server or client folders, run npm install and then npm test

## Technical decisions/Compromises

- Decided to use the tech stack described on the job description.
- Kept the CSS as simple as possible.
- Went for a more functional approach on the backend so its easier to test.
- Took me a bit more than two hours to complete the whole project.
- Frontend solution is slow at rendering the map, that is because for every square rendered it performs a lookup on the price map array. Could have made it faster but didn't have the time as it involved a backend change and redoing some of the tests.
