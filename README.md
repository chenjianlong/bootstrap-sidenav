# Bootstrap sidenav

Bootstrap official website style sidebar navigation plugin!

## Dependences

* Bootstrap 3 CSS
* jQuery
* Bootstrap 3 Affix plugin
* Bootstrap 3 ScrollSpy plugin

## How to use

### include CSS style

```html
<link rel="stylesheet" href="bootstrap.min.css">
<link rel="stylesheet" href="sidenav.css">
```

### include JavaScript

```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="sidenav.js"></script>
```

### Via data attritube

```html
<div id="post" 
     data-toggle="sidenav" 
     data-container="#sidenav" 
     data-hs="h1, h2, h3"
     data-top="#sidenav"
     data-bottom=".bs-footer"
     data-to-top-href="#top"
     data-to-top-text="Back to top">
```

### Via JavaScript

```js
$('#post').sideNav({
    container: '#sidenav',
    hs: ['h3', 'h4', 'h5'],
    top: 125,
    bottom: 50,
    toTopHref: '#top',
    toTopText: 'Back to top'
});
```

## Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to data-, as in data-container="#sidenav".

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Attribute</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>-</td>
            <td>data-toggle</td>
            <td>String</td>
            <td>sidenav</td>
            <td>Active sidenav without writing JavaScript.</td>
        </tr>
        <tr>
            <td>container</td>
            <td>data-container</td>
            <td>String</td>
            <td>'body'</td>
            <td>Element to contain the sidebar navigation.</td>
        </tr>
        <tr>
            <td>hs</td>
            <td>data-hs</td>
            <td>Array/String</td>
            <td>['h2', 'h3', 'h4']</td>
            <td>Headers to generate sidebar navigation.</td>
        </tr>
        <tr>
            <td>smartId</td>
            <td>data-smart-id</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Set true to use the ID link with title text.</td>
        </tr>
        <tr>
            <td>top</td>
            <td>data-top</td>
            <td>Number/String</td>
            <td>undefined</td>
            <td>Pixels to offset top from screen when calculating position of scroll.</td>
        </tr>
        <tr>
            <td>bottom</td>
            <td>data-bottom</td>
            <td>Number/String</td>
            <td>undefined</td>
            <td>Pixels to offset bottom from screen when calculating position of scroll.</td>
        </tr>
        <tr>
            <td>toTopHref</td>
            <td>data-to-top-href</td>
            <td>String</td>
            <td>'#top'</td>
            <td>The link of back to top.</td>
        </tr>
        <tr>
            <td>toTopText</td>
            <td>data-to-top-text</td>
            <td>String</td>
            <td>'Back to top'</td>
            <td>The text of back to top.</td>
        </tr>
    </tbody>
</table>
