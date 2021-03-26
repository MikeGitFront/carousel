<h1>Carousel component</h1>
<br>

<h2>Here you can find short <a href="https://imgur.com/a/HIG1fyr">Demo</a></h2> 

<h2><i>Carousel characteristics:</i></h2>
 <ul>
  <li>Works for mobile and desktop devices</li>
  <li>Supports swipes</li>
  <li>Works for any HTML content</li>
  <li>Animated</li>
  <li><b>Supports infinite option</b></li>
  <li><b>Supports scrolling to a selected slide</b></li>
</ul>

<h3><i>Installing:</i></h3>
Write it in your terminal: 

```terminal
//Make sure you don't have folder named 'carousel' in the directory

git clone https://github.com/MikeGitFront/carousel.git
```

```terminal
//Installing all dependencies

git init
```

```terminal
// Launching local server

npm run dev
```

<h3><i>Usage:</i></h3>

<h4>Infinite option</h4>

```javascript
//If you want carousel to be infinite you should write 'infinite' attribute inside the Carousel tag

<Carousel infinite>
         //...Some content
</Carousel>
```
<h4>Slide options</h4>
<h2>Your content must be wrapped in 'div' block</h2>

```javascript
//If you want to display an image you should pass external link or imported image inside 'src' attribute

import picture from './images/picture'

<Carousel infinite>
            <div src={picture} ></div>
            <div src={'https://your.image'} ></div>
</Carousel>
```



```javascript
//You can pass different parameters to your wrapper 'div' to customize it, by the way, parameters are optional

<Carousel>
            <div
                src={picture5}
                align="flex-start"
                padding="4px 10px"
                color="black"
            >
                <h1>Some content</h1>
            </div>
</Carousel>
```

<h3><i>Full list of options:</i></h3>

<ul>
 <li>display <i>--By default flex</i></li>
 <li>template (for display:grid) <i>--By default none</i></li>
 <li>justify (Simple justify-content) <i>--By default center</i></li>
 <li>align (Simple align-items) <i>--By default center</i></li>
 <li>bgcolor (Simple background-color, src prop has higher priority) <i>--By default white</i></li>
 <li>color (Simple text color)<i>--By default white</i></li>
 <li>padding <i>--By default 4px</i></li>
</ul>

```javascript
//You can style inner content the way you want

const Heading = styled.h1`
color:red;
`

<Carousel>
            <div>
                <Heading>Some content</Heading>
            </div>
</Carousel>
```

```javascript
//If you want to insert iframe, you should also wrap it with 'div' block

<Carousel>
            <div><iframe width="80%" height="300" src="https://your.content"></iframe></div>
</Carousel>
```

<h4>Dependencies</h4>
<ul>
 <li><a href="https://styled-components.com/">Styled components</a></li>
 <li><a href="https://react-icons.github.io/react-icons/" >React-icons</a></li>
</ul>

Don't hesitate to become a stargazer :dart:

