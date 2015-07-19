---
output: pdf_document
---
# Frontend Nanodegree P4: Webpage Optimization
### Author: Abigail Mathews

This project is designed to showcase an understanding of web performance 
optimization, both in the delivery of html and css, and in ensuring smooth
user experience from scripted page components.

For the first goal, the aim was to achieve a 90+ PageSpeed Insights score for
index.html.

For the second goal -- this time looking at views/pizza.html -- the aim was twofold:

  * improve scrolling performance of background pizzas to 60fps 
  
  * ensure that the foreground pizzas could be resized in less than 5ms.
  
##File and Directory Structure

For ease of evaluation, the project files include both minified and unminified versions of html, css, and js files.
Certain js files (perfmatters and bootstrap) that are not unique to the project were left unminified. The index.html
located in the root directory will allow for viewing of the full web page. 

To view **html** source code, please refer to the unminified versions of these files, designated with the .unmin.html 
extensions. These are located in the same locations as the minified files.

In the case of **css** and **js**, the minified file names have been changed to the .min.css or .min.js extension, 
respectively. As with the html, the minified css and js files which are used by the webpage appear in the same 
directory as their unminified sources.

The **pizza.html** file which is relevant for the second portion of this project is accessible either by navigating via
web browser from the index.html home page and clicking on the 'Cam's Pizzeria' link, or directly, in views/pizza.html.

The repository also contains a gruntfile (gruntfile.js) along with the related node_modules directory and package.json files.

##Part 1: Optimize PageSpeed Insights score for index.html

Steps taken to achieve the target result in this stage:

  1. Optimized images.
    * I used Irfanview (with it's optimization plugin) along with Photoshop.
    * I created several versions of pizzeria images for thumbnail vs. full size views.
  2. Inlined Styles.
    * There was no real 'below the fold' so everything was inlined, in this case.
    * I modified the styles to prioritize loading for smaller (mobile devices). Though there
    was no performance gain, I wanted to make a practice of mobile-first development.
    * Used media queries to remove print styles from blocking page rendering.
  3. Made Javascript async where possible.
  4. Optimized deliver of Web Fonts using Javascript.
  5. Minified html/css and js. I used grunt to facilitate this process.


##Part 2: Optimize Frames per Second in pizza.html

Steps take to improve performance of pizza.html: 

  1. Reduced the number of animated pizzas in the background to 36, which is enough to fill
  the background of a large monitor.
  
  2. Changed the style of .mover class (which is the class for the animated pizzas) to will-change:transform; to create a new layer for the pizzas.
  
  3. Moved variable definitions outside of loops in both changePizzaSizes and updatePositions functions.
  
  4. Created a variable pizzaElements in changePizzaSizes to hold the results of a document element lookup, and used the more efficient getElementsByClassName rather than querySelectorAll to retrieve relevant portions of the html document.
  
  5. Significantly streamlined the code that calculates the pizza resizing delta in determineDx.


I additionally performed minification tasks on the html css and javascript for the pizzas.html portion of the project.