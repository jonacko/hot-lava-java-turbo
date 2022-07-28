# hot-lava-java-turbo
- Challenge 4 assignment for BCU Bootcamp due 28-07-22
- Deployed URL: https://jonacko.github.io/hot-lava-java-turbo/

Image of deployed web page:

![image](https://user-images.githubusercontent.com/106882755/181591278-e591c8ce-5cf1-4c43-864f-350d99709744.png)


Contents:

1. Summary
2. Key features
3. Issues encountered/further amendments
4. Credits

## 1. Summary

This project was undertaken as a submission for a Birmingham City Bootcamp assignment, with a brief to create a timed coding quiz that records, stores and displays high scores.  The user story and acceptance criteria are below:

![image](https://user-images.githubusercontent.com/106882755/181591366-28cc6f44-7d36-4a2d-ada1-8f66847d53d5.png)

## 2. Key features:

- page styled to create a user-friendly interface
- timer added, deducts points when user clicks wrong answer (supposed to add points when right answer selected but doesn't work)
- 'next' button appears when user clicks an answer
- console logs amount of time left on timer when question is answered, taking into account correct/incorrect time adjustments


## 3. Issues encountered/further amendments

Please see commented out code for detail of issues/further amendments needed, but summary is below:

- TO DO: restyle front 'start' page to lose container box and centralise start button; move next button to more intuitive place on page
- TO DO: fix timer issue - add 10s when user answers correctly (currently deducts 10)
- TO DO: stop game when timer = 0 OR all questions have been answered
- TO DO: record and display highest timer scores using local storage

## 4. Credits
- Help linking HTML button id's to JS and declaring variables in JS: https://www.youtube.com/watch?v=riDzcEQbX6k&t=1278s 
- Help with creating timer functionality: https://www.youtube.com/watch?v=x7WJEmxNlEs
