<p align="center">
  <!-- https://shields.io/ -->
  <a href="https://circleci.com/gh/ShadOoW/web-starter-kit/tree/master" alt="CircleCI">
    <img src="https://img.shields.io/circleci/build/github/ShadOoW/web-starter-kit/master?style=for-the-badge&logo=circleci" />
  </a>
  <!-- http://heroku-shields.herokuapp.com/ -->
  <a href="https://web-starter-kit-nextjs.herokuapp.com/" alt="Heroku">
    <img src="https://img.shields.io/badge/heroku-up-brightgreen.svg?style=for-the-badge&logo=heroku" />
  </a>
  <!-- http://heroku-shields.herokuapp.com/ -->
  <a href="#">
    <img src="https://img.shields.io/github/package-json/dependency-version/ShadOoW/web-starter-kit/next?style=for-the-badge" />
  </a>
</p>

<h3><a href="https://web-starter-kit-nextjs.herokuapp.com/" alt="Heroku">Demo</a></h3>

# Starter Kit

A starter kit for a next js project.

## Motivation

I love react, but I also love pages that load fast (static sites), this is my attempt at getting the best of both worlds (or as much as possible).

Enter nextjs with SSR and Hydration.
[Read More](https://medium.com/better-programming/next-js-react-server-side-rendering-done-right-f9700078a3b6) if you are unfamiliar with the idea.

Note that for maximum performance, you may want to look at [Partial hydration](https://medium.com/@luke_schmuke/how-we-achieved-the-best-web-performance-with-partial-hydration-20fab9c808d5) techniques, and remove some dependencies.

## CSS

From my experience working as frontend dev, CSS is always the black sheep of the web stack, most people underestimate it and tend to avoid learning it, it doesn't help that browser encourage you to write bad CSS, "if it works, then it most be correct" is the dominant mindset in most teams.

CSS is not simple nor is it boring, it is fun and alive, new tools and techniques are always emerging, without a basic understanding of the fundamentals, this techniques will not help you write better css.

The fundamental struggle in CSS is always the same, we need to write code that makes sense to humans, to allow maintainability, but we need to write code that is performent to speed up the time it takes for the page to load on the user's device.

One good news though is that not every website needs aggressive CSS optimization, most of the time we do have room for improving maintainability.

Many patterns have emerged to solve this fundamental struggle:

### Atomic CSS (ex: [https://acss.io/](https://acss.io))

This technique is one of the best when writing CSS as CSS, by creating a class for each CSS property, we can reuse code everywhere, it also improves readability of HTML

```HTML
<div class='box'>
    Hello
</div>
```

vs

```HTML
<div class='flex flex-align-center flex-jusfity-center'>
    Hello
</div>
```

As a developer I can tell what is the layout of the div in the second example just by looking at the HTML, while in the first example I would need to find the `.box` class to get the same information.

We could use a scale (0, 5px, 10px, 20px...) to standardize spaces and allow css reusability (padding-0, padding-0-5, padding-1, padding-2...), but for this to work, the designer and the programmer need to be fully synced and work hand in hand, which is not always possible.

This technique also supports media queries.

```HTML
<div class='none flex-m'>
    This div will have display: none, on mobile and display: flex on medium and above
</div>
```

This is possible, because media queries are usually standardized by most designers.

Finally if for some reason something can't be atomic, then you can always use good old css, because atomic css will improve performance as long as the property is used twice or more in the same page, you can also mix and match `<div class='menu flex'>`

```CSS
.flex{display:flex}
```

This class has 19 chars, which is already better than using `display:flex` twice (20 chars).

### CSS in JS

CSS in JS is trying to solve a new problem, namely CSS encapsulation, recently browsers and client side view libraries have embraced the concept of components, either as a standard, or simulated with javascript.

The problem with ShadowDom encapsulation (standard) is that it does it job properly, shadow dom component are fully encapsulated, but we do actually still want global css, for exmple, an `<input>` reset should be set only once per website.

Simulated encapsulation works by automatically generating a unique ID that is then added to the component and the css, to simulate the desired behavior, this is more flexible as we can still use css the normal way, imagine you are using a third party library that asks you to add a css file to your index.html, with the simulated approach, you can still do that.

On the topic of optimization/maintainability, CSS in JS can lead to some bad code if the developer doesn't have a good understanding of CSS, but if used in the right way, theoratically they should be no difference from manually optimized CSS, as any optimization done by a human could technically be done by a transpiler, the transpiler could in theory detect opportunities for optimization and create reusable classes, as the technology matures, this should reach the point where it makes no sense to do optimization at the developer level, similar to how we trust typescript to generate efficient javascript code.

### Styled System

CSS in JS, is not just about writing css in a javascript file, it is a new way of thinking that opens new possibilities, and this is the reason it is worth the effort to learn, once our CSS becomes Javascript, anything is possible (imagine sass's varibles/mixins but even better). Instead of just writing our CSS and Component as 2 independent blocks of code, we can make our CSS fully part of the components by taking advantage of component's props, default props, typechecking and so on....

What if instead of doing this:

```JSX
import styled from 'styled-components';

const Box = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
`
const MyComponent = () =>
    <Box>Hello</Box>
```

We did this:

```JSX
import { Flex }  from 'layout';

const MyComponent = () =>
    <Flex alignItems='center' justifyContent='center' px='2rem'>
        Hello
    </Flex>
```

Instead of just writing css as needed, we can write reusable components that can be used for layouting, typography...

We could use booleans to enable specific behaviors, the component's state could be used to style our jsx.

```JSX
import { Text }  from 'typography';

const MyComponent = () =>
    <Text bold capitalize error={hasError}>Hello</Text>
```

Styled system can also handle variants.

```JSX
import { Button }  from 'common';

const MyComponent = () =>
    <Button size='small'>Hello</Button>
```

### Conclusion

I initially had some reserve toward CSS in JS, that made me want to stick to my battle tested patterns, but after I discovered Style System, I managed to overcome all my initial assumptions and I came to realize the benefits and especially the potential of this new approach, I hope I was able to share with you some of my enthusiasm.

### Mobx

Implemented based on this repo <a href="https://github.com/borekb/nextjs-with-mobx">nextjs-with-mobx</a>

Work in Progress...

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
