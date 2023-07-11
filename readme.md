Hi - i'm making a drag and drop inspired game similar to https://drlingua.com/japanese/games/kana-bento/ for learning the Korean alphabet as an English speaker. 

Pulled info from:
https://www.90daykorean.com/how-to-learn-the-korean-alphabet/
& duolingos grammar categories

Music from:
Morning Routine by Ghostrifter Official | https://soundcloud.com/ghostrifter-official
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons CC BY-SA 3.0
https://creativecommons.org/licenses/by-sa/3.0/
 

Icons used in early testing from:
fontawesome.com

Vanilla JS tech stack

Website currently deployed at: https://jbacheldor.github.io/dragAndDropHangul/

to-do:

bugs:
- when you try to add "ng" onto the element it adds instead of replacing & same w/ "eo" on the initial screen & "yeo"

readiability:
- try to break elements into their own files

features:
- change it so no matter what browser/size you view it from it shouldn't impact things
- get it onto the website

small things:
- remove the character from mapping - not being used
- would it be better to use blocks for the components to ensure people know where to click?
- change the clickable component in the blocks to be something else - like is active
- the body is weird and not sized properly to match the elements
- menu and background body are not the same size !!
- the home button is changing every so slightly as the counter goes 
- the filter inactive shows the same as when the game start and is frozen. makes it hard to know what is running
- there are still some repeats on letting (besides the 't' that cause issues) - p (final) - is ss final accurate ?
- using text instead of pictures causes blocks to be higlighted as you move it. can this be fixed
- the dropping is finicky - maybe increase the drop area to ensure ease of us 
- when the bottom board is empty the timer should stop - but also needs to stop even with the greyed out ones too - maybe lil fireworks on completion    
 - maybe once all of the values of a specific type on top that aren't unclickable are of type letter
- i want the stars on the menu to use keyframe animations but at different times 