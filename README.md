# wdir-project2
Web Development Immersive Project 2 CRUD CRAP application

<a href="https://safe-chamber-59689.herokuapp.com/"> link to live page </a>

Project Two requirements: create a full stack application using two models and mvc folder structure. Complete with Node.js, Express, Mongoose and EJS with RESTFUL routes.

During Unit 6 of the General Assembly course students learned about mongoDB and ejs dynamic web pages. This assignment was given after several days of building data bases using two models. In class students practiced by making models of authors which were related to models of articles. They also completed homework based on a previous students' project two assignment that had photographers that had photographs. We were prompted to think of things that relate to each other to come up with what our apps could be about.

In the week leading up the this assignment in mid April, my family has been gardening a lot. I decided that I would create an app where gardens could be made and plants could be put into them. I approached the assignment like the homework involving photographers and photos. Once I had a relationship working between the gardens and the plants I verified that my application was a full crud app for both models. I ran into some errors that resulted in me dropping the database a few times but once I had it running I set to altering the application to allow for asset images I drew and several other selection processes.

For the images I drew I took inspiration from the below pictures:
<br />
<img src="https://s-media-cache-ak0.pinimg.com/236x/c5/54/5a/c5545ae717ce2a84bbbe048fda0f5545.jpg" >
<br />
<img src="https://s-media-cache-ak0.pinimg.com/736x/c2/8f/a7/c28fa7588bfe47420c886f82e6a9c7bf.jpg">
<br />
<img src="https://thumb1.shutterstock.com/display_pic_with_logo/272785/272785,1240327773,4/stock-vector-vector-illustration-of-flowers-design-set-made-with-simple-line-only-28902391.jpg">
<br />
I had initially set out to create a select tool that would show the images but got lost in the possibilites for several hours and still wasn't getting it to work so I instead made it so that users could select a flower and there would be an img value to it that would be pushed into the plant object. This worked great and since it starts on a flower it shouldn't come as a null value.

Once I had the image choices working I went back and altered all my pages to show the images instead of lists of names etc. I had trouble with this for a bit because I wasn't siting my images correctly. This was causing rampant errors and display breaks. I fixed this by adding /assets/ to the beginning of each image option value.

I then went about styling my pages, I incorporated bootstrap, was confused about why it wouldn't easily do columns, realized that was a skeleton functionality and decided to keep bootstrap for the text choices and nice margins. I tweaked a few  things and added a new typeface from google fonts called "Ribeye Marrow" which can be seen below.
<br />
<img src="http://www.fontscape.com/pictures/google/RibeyeMarrow.gif">
<br />

I chose colors for my site from both the defaults in MS paint, which I used to draw all my flower images, and from the image below.
<br />
<img src="https://s-media-cache-ak0.pinimg.com/236x/7c/2d/d6/7c2dd66d451732f0ae545ae5d58bf92c.jpg">
<br />

I decided not to add a background to my site in part because I liked the more simplistic look and also because since I had to draw my flowers in MS Paint (photoshop and illustrator were not giving me the brushstroke pressure look) they do not have transparent backgrounds. I did attempt to make the bottom of them transparent to make a dirt patch for all the plants to appear to be growing out of but I was not able to make the plants rest at the absolute bottom of the page to allow for this and, with the responsive layout, they would most likely move out of place and not sit in the dirt at all.

<a href="https://expressjs.com/en/starter/static-files.html"> where I looked about my assets images not working</a>
<a href="https://www.w3schools.com/html/html_form_elements.asp"> where I looked for form information </a>
