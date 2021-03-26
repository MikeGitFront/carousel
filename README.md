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
<h4>Slide option</h4>

```javascript
//If you want to display picture you should pass picture URL or just

<Carousel infinite>
            <div src={pictureURL} ></div>
            <div src={picture} ></div>
            <div src={picture2} ></div>
            <div src={picture3} ></div>
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
