angular-timeline
==============

A really simple angular directive to display a loader image while loading ajax resources, relying on [Almende Timeline](http://almende.github.io/chap-links-library/timeline.html).

Added the ```range-popup``` item type to display contents on a tooltip when hovering, so you have to rely on Bootstrap tooltips.

Requirements
============

Include Almende Timeline (CSS, JS) and Bootstrap tooltip (CSS, JS) in your `<head>` section:
```
<link rel="stylesheet" href="PATH_TO_STYLES/bootstrap.css">
<link rel="stylesheet" href="PATH_TO_STYLES/timeline.css">

<script src="PATH_TO_LIB/timeline.js"></script>
<script src="PATH_TO_LIB/bootstrap-tooltip.js"></script>
```

Usage
=====

Create a div with the ```timeline``` attribute to instantiate a Timeline. Data must be passed as an array of objects, read the [Almende Timeline documentation on available fields](http://almende.github.io/chap-links-library/js/timeline/doc/#Data_Format).
```
<div timeline="data" 
  	 timeline-options="options"
     timeline-selection="selection"></div>
```

The ```timeline-options``` attribute provides access to Timeline configuration, read the [Almende Timeline documentation on available options](http://almende.github.io/chap-links-library/js/timeline/doc/#Configuration_Options).

The ```timeline-selection``` attribute provides two-way binding on selected/selecting object.

Credits
=======

Credits to [Almende](http://almende.com) providing the excellent [CHAP Links Library](http://almende.github.io/chap-links-library/)