Element Onscreen Visibility
===========================

This is a [jQuery](http://jquery.com/) plugin which allows us to quickly check if an element 
is within the browsers [visual viewport](http://www.quirksmode.org/mobile/viewports.html), 
regardless of the scroll position. If a user can see this element, the function will return true.


Documentation
-------------
### Basic visibility check

This basic check will return `true` if the entire element is visible to the user (within the visual viewport).

	$('#element').visible();

If you'd like to check for ANY PART of the element, you can use the following:

	$('#element').visible( true );

The plugin ignores the elements visibility by default. E.g., `display:none`, `visibility: hidden`, `offsetWidth` or `offsetHeight` is 0). 
To filter on css visibility, you can use the jQuery `:visible` selector:

	$('#element:visible').visible();

Optionally, you can sepecify a second parameter to the `.visible` plugin, which will check whether the element is visible, as well as
whether it's within the viewport too.

	$('#element:visible').visible( false, true );
	

Demos
-----

The Demos for this plugin live under the examples/ directory. Open them directly in your web browser, or view the following online examples:

- [Basic Demo](http://opensource.teamdf.com/visible/examples/demo-basic.html)

See the blog article:

- [Checking if an element is visible on-screen using jQuery](http://www.teamdf.com/web/jquery-element-onscreen-visibility/194/)


Limitations
-----------

Currently the plugin only checks for vertical positioning and scroll. We're planning on adding horizontal support soon, 
with the ability to optionally run the check on horizontal, vertical or both planes.
