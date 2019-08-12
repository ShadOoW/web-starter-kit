<p align="center">
  <a href="https://circleci.com/gh/ShadOoW/web-starter-kit/tree/master" alt="CircleCI">
    <img src="https://circleci.com/gh/ShadOoW/web-starter-kit/tree/master.svg?style=svg" />
  </a>
  <a href="https://web-starter-kit-nextjs.herokuapp.com/" alt="Heroku">
    <img src="https://heroku-badge.herokuapp.com/?app=web-starter-kit-nextjs" />
  </a>
</p>

<h3><a href="https://web-starter-kit-nextjs.herokuapp.com/" alt="Heroku">Demo</a></h3>

<h3>Known Issues</h3>
<ul>
  <li>Demo fails to connect to graphql-server if adblock is installed.</li>
  <li>
    Server side console error
    <code>
    	TypeError: Cannot read property '2' of undefined
    </code>
    caused by theme being undefined at server time
    <code>
    	props.theme.space[2]
    </code>.
    This error doesn't cause any UI/UX issues and I have no idea how to fix it :(
  </li>
<ul>
