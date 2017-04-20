# wdir-project2
Web Development Immersive Project 2 CRUD CRAP application

<a href="https://safe-chamber-59689.herokuapp.com/"> link to live page </a>

<h2> Project Requirements </h2>
Project Two requirements: create a full stack application using two models and mvc folder structure. Complete with Node.js, Express, Mongoose and EJS with RESTFUL routes.

<h2> Background </h2>
During Unit 6 of the General Assembly course students learned about mongoDB and ejs dynamic web pages. This assignment was given after several days of building data bases using two models. In class students practiced by making models of authors which were related to models of articles. They also completed homework based on a previous students' project two assignment that had photographers that had photographs. We were prompted to think of things that relate to each other to come up with what our apps could be about.

<h2> The Idea </h2>
In the week leading up the this assignment in mid April, my family has been gardening a lot. I decided that I would create an app where gardens could be made and plants could be put into them.

<h2> Wire Framing </h2>
<img src="https://raw.githubusercontent.com/EmilyCali/wdir-project2/master/public/assets/IMG_9536.jpg">
<br />
<img src="https://raw.githubusercontent.com/EmilyCali/wdir-project2/master/public/assets/IMG_9537.jpg">
<br />
<img src="https://raw.githubusercontent.com/EmilyCali/wdir-project2/master/public/assets/IMG_9538.jpg">
<br />

<h2> The Approach </h2>
I approached the assignment like the homework involving photographers and photos. Once I had a relationship working between the gardens and the plants I verified that my application was a full crud app for both models. I ran into some errors that resulted in me dropping the database a few times but once I had it running I set to altering the application to allow for asset images I drew and several other selection processes.

For the images I drew I took inspiration from the below pictures:
<br />
<img src="https://s-media-cache-ak0.pinimg.com/236x/c5/54/5a/c5545ae717ce2a84bbbe048fda0f5545.jpg" >
<br />
<img src="https://s-media-cache-ak0.pinimg.com/736x/c2/8f/a7/c28fa7588bfe47420c886f82e6a9c7bf.jpg">
<br />
<img src="https://thumb1.shutterstock.com/display_pic_with_logo/272785/272785,1240327773,4/stock-vector-vector-illustration-of-flowers-design-set-made-with-simple-line-only-28902391.jpg">
<br />
I had initially set out to create a select tool that would show the images but got lost in the possibilities for several hours and still wasn't getting it to work so I instead made it so that users could select a flower and there would be an img value to it that would be pushed into the plant object. This worked great and since it starts on a flower it shouldn't come as a null value.

Once I had the image choices working I went back and altered all my pages to show the images instead of lists of names etc. I had trouble with this for a bit because I wasn't siting my images correctly. This was causing rampant errors and display breaks. I fixed this by adding /assets/ to the beginning of each image option value.

I then went about styling my pages, I incorporated bootstrap, was confused about why it wouldn't easily do columns, realized that was a skeleton functionality and decided to keep bootstrap for the text choices and nice margins. I tweaked a few  things and added a new typeface from google fonts called "Ribeye Marrow" which can be seen below.
<br />
<br />
<img src="http://www.fontscape.com/pictures/google/RibeyeMarrow.gif">
<br />

I chose colors for my site from both the defaults in MS paint, which I used to draw all my flower images, and from the image below.
<br />
<br />
<img src="https://s-media-cache-ak0.pinimg.com/236x/7c/2d/d6/7c2dd66d451732f0ae545ae5d58bf92c.jpg">
<br />

I decided not to add a background to my site in part because I liked the more simplistic look and also because since I had to draw my flowers in MS Paint (photoshop and illustrator were not giving me the brushstroke pressure look) they do not have transparent backgrounds. I did attempt to make the bottom of them transparent to make a dirt patch for all the plants to appear to be growing out of but I was not able to make the plants rest at the absolute bottom of the page to allow for this and, with the responsive layout, they would most likely move out of place and not sit in the dirt at all.

I drew sixteen flowers to choose from and set the sixteenth one as the default, in case a user does not actually select an image option from the drop down when creating a plant. The default flower is a dandelion, if you don't pic a plant then you get to have a weed grow in your garden.
 <br />


<h2> Functionality </h2>
This application involves two Mongoose Schemas, one, for the gardens, and another for the plants that can be placed in the gardens. Both models require names, and can be given descriptions in various fields. The models are "relational" to an extent. The plants are copied to the garden plants array and all edits to the plants affect the array as well in a repeat function.
<br />
To enable more user friendly features the images of the flowers shake when hovered over to give the implication that they can be clicked. The links in the navigation area change color on hover and so do the buttons there. There is also an added feature on the show page for the plants that causes the flower to "wilt" or become more transparent, the plant can be brought back to life with the watering button. I had intended on this to be an interval or timeout that would work on each image as it was made- so if a flower was there it would wilt and stay wilted until watered and then wilt again. I could not figure out how to approach this with the dynamically created elements, when one changed they all did. I think if I were to do this I would need a setter and to retrieve the images via the array instead of just their classes. This would involve another keyvalue and there would need to be some kind of link somehow between that keyvalue and the wilting... I'd need to do some kind of route for just this but without clicking anything....

<h2> APIs </h2>
I wanted to incorporate an API into my app and attempted to do so using the United States Department of Agriculture's data base. Unlike the movie API that we used in class to get movie posters, the USDA API had a strange transition on search parameters that I could not decipher and I was unable to find a way to grab the information from the page that I wanted. I don't believe that the USDA API uses JSON. I worked around this by using an iframe element that would be filled with a certain page from the USDA site based on the image that was being shown on the plant show page. I turned this into a modal because having it on my page didn't really fit with the rest of my sites look.

<h2> Next Steps </h2>
If I have the opportunity and desire to come back to this I would like to create user sessions and to try and develop the game aspect a bit more. I also think it could be nice to have a feature that allows people to find where the plants are being sold in the area or learn about their area in regards to weather or growing conditions.

I'd also like to work out validators. I have set names to required and was working on making sure no one could not enter a name or enter a name that had already been used but it kept breaking my site.

<h2> Resources </h2>
<a href="https://expressjs.com/en/starter/static-files.html"> assets connections</a>
<br />
<a href="https://www.w3schools.com/html/html_form_elements.asp">form information </a>
<br />
<a href="http://www.cssreflex.com/snippets/css-button-with-wiggle-effect/"> animating a hover shake </a>
