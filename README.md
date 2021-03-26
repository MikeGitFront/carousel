<h1>Carousel component</h1>
<br>

<a href="https://imgur.com/a/HIG1fyr">Demo</a>

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
//If you want to display image you should pass external link or imported image in 'src' attribute

<Carousel infinite>
            <div src={pictureURL} ></div>
            <div src={'https://your.image'} ></div>
</Carousel>
```



```javascript
//You can pass different parameters to your wrapper 'div', by the way,  they are optional

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
//You can pass different parameters to your wrapper 'div', by the way,  they are optional

<Carousel>
            <div><iframe width="80%" height="300" src="https://www.youtube.com/embed/o_Ay_iDRAbc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
</Carousel>
```
