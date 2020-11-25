# Countdown

## Improved countdown

The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?

**Do a critique:** The current implementation isn't perfect. How could it be improved?

* Pick an area of improvement to implement.

    - I'll focus on improving the UI (CSS) and some JavaScript.

* What would happen to the current code if the date were changed, the page layout was changed or the format was changed?

   - The Countdown component expects a date as a string that can be correctly parsed by JavaScript's Date object – changing the input might change the output of the countdown numbers that are rendered. For example, using `"December 24, 2020"` instead would not change the countdown, but using `"2020-12-24"` would.

   - Also, if no date is passed into the Countdown component, the countdown won't work and will just show 00s. Since this is an app designed to countdown until a specific date, the CTO's birthday could be set as the default date within the Countdown component.

   - If the page layout is changed, the header's `font-size` is styled to be responsive, so will change slightly depending on the width of the viewport.

* Does the current implementation follow best practices for HTML, CSS, JS and React?

  HTML
  - `App.js (Line 11)`: the `<Countdown/>` component should use double quotes instead of single quotes in its JSX.
  - `App.js (Line 11)`: there's a rogue comma after the `<Countdown/>` component!

  CSS
  - `App.css` should clean-up its unused styles (`.App-logo`, `.App-link`)
  - `Countdown.css (Line 2)`: `padding-right: 10px;` makes it so the content appears to be off-center (there's an extra 10px of whitespace on the right) of the countdown
  - The numbers should be monospaced, and/or use `font-variant-numeric: tabular-nums;`

  JS
  - `Countdown.jsx` does a good job of extracting logic into well-named helper functions
  - using `clearInterval()` to clear `this.interval` in `componentWillUnmount()` is good!
  - `Countdown.jsx (Line 37)`: `timeLeft.millisec` is never used, and should be removed
  - `Countdown.jsx (Line 77)`: could destructure `this.state` to be more explicit about what data is required
  - The countdown doesn't render years, even though they're calculted in `calculateCountdown()`.

  React
  - `App.js (Line 2)`: `Countdown.css` should be imported in `Countdown.jsx`, not in `App.js`
  - The one test is currently failing.

**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.

* What could you do to create a greater sense of urgency?

  - Use color
  - Use sound
  - The numbers could flash when the countdown gets close

* How would you make this countdown more aesthetically pleasing?
  - We probably don’t need to include the word “Countdown” as the main text on the page.
  - Instead, we could add some text explaining what we’re counting down to, which is CTO Eric’s birthday on December 24.
  - Make the numbers much bigger, and make sure they're the point of focus on the page.
  - Remove or minimize the supplementary information (days, hours, min, sec). At the very least, add space between the numbers and text.
  - The numbers should have a fixed-width, so that the content doesn't move from left to right when the numbers change.
  - Bonus: add the actual countdown numbers to the page title (that shows in the tab), perhaps add a favicon related to the CTO.

* Trust your design instincts, and explain how your design choices impact the user experience

  - If someone is using this app, they want to know how much time is left until the CTO's birthday. I want them to be able access the information they care about (his birthdate, the countdown!) as quickly and clearly as possible.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
