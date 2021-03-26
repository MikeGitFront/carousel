<h1>Carousel component</h1>
<br>

<a href="https://imgur.com/a/HIG1fyr">Demo</a>

<i>Carousel characteristics:</i>
 <ul>
  <li>Works for mobile and desktop devices</li>
  <li>Supports swipes</li>
  <li>Works for any HTML content</li>
  <li>Animated</li>
  <li><b>Supports infinite option</b></li>
  <li><b>Supports scrolling to a selected slide</b></li>
</ul>

<i>Installing:</i>
Write it in your terminal: 
```terminal
//Make sure you don't have folder named 'carousel' in the directory

git clone https://github.com/MikeGitFront/carousel.git
```
```terminal
//Installing all dependencies

git init
```

<i>Usage:</i>

<h3>Infinite option</h3>

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
