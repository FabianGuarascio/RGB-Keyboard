# Rgb Keyboard with Sass and Stand Alone Component , also Tailwind

An programatic RGB keyboard using the functionalities of Sass
### How is made the keyboard?
Each key is an \<span> element. Each span element  is iterated trough a for loop but in Scss and not in Javascript. This allows to set a border color specific to each key. This combined with css animations gives the illusion of an RGB keyboard lights :fireworks: :fireworks: :fireworks:

Also this for loop is used in a nested form to change the direction of the lights. 

### Wait , where is the javascript for that :question:
This project takes advantage of the template reference that Angular provides to set the colors of the keyboard from the template :astonished: .
That's right, you don't need a function from the class component to set the color , it's all done from the HTML (except the changing direction).

The <input type="color"> has a template reference that is used to give to set the color variable in css.

### How is it made the visual effect of a Key with relieve
Each key has a border that has different sizes for the top , bottom , left and right border. Also, each border has a different opacity to give a visual effect as you were seeing it on the side.


## Wait , there is more.
At last , this is an Angular 15 project which uses stand alone component. The rgbKeyboard is aa standalone component so you can copy the folder and paste it onto your angular project (it must be Angular V15 or support Stand Alone Components)