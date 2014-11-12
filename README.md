Bootstrap sidenav
=================

Bootstrap official website style sidebar navigation plugin !

### Dependences

* Bootstrap 3 CSS
* jQuery
* Bootstrap 3 Affix plugin
* Bootstrap 3 ScrollSpy plugin

### How to use

#### include CSS style

```html
<link rel="stylesheet" href="bootstrap.min.css">
<link rel="stylesheet" href="sidenav.css">
```

#### includde JavaScript

```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="sidenav.js"></script>
```

#### Via data attritube

```html
<div id="post" data-toggle="sidenav" data-container="#sidenav">
```

#### Via JavaScript

```js
$('#post').sideNav({
    container: '#sidenav',
    hs: ['h3', 'h4', 'h5'],
    offset: {
        top: 125,
        bottom: 0
    },
    backtoTop: {
        href: 'top',
        text: 'Back to top'
    }
});
```

#### Params

##### container

element to contain the sidebar navigation

##### hs

headers to generate sidebar navigation

##### offset

same meaning as Bootstrap Affix plugin

##### backtoTop

backtopTop relate info, if you don't need just ignore it
