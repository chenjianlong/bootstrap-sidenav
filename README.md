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

    <link rel="stylesheet" href="bootstrap.min.css" />
    <link rel="stylesheet" href="sidenav.css" />

#### includde js script

    <script src="jquery.min.js"></script>
    <script src="bootstrap.min.js"></script>
    <script src="sidenav.js"></script>
    <script>
      $('#post').sideNav({
        container: '#menu',
        hs: ['h3', 'h4', 'h5'],
        offset: {
          top: 125,
          bottom: 0
        },
        back_to_top: {
          href: "top",
          text: "Back to top"
        }
      });
    </script>

#### pararms

##### container

element to contain the sidebar navigation

##### hs

headers to generate sidebar navigation

##### offset

same meaning as Bootstrap Affix plugin

##### back\_to\_top

back\_top\_top relate info, if you don't need just ignore it
