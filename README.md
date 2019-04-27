# Edfa3ly Store "React App"

---

## Table of Contents

- [Description](#description)

- [The Technical Choices](#the-technical-choices)
- [Upgrades For Project](#upgrades-for-project)
- [Dependencies](#dependencies)
- [Resources](#resources)

## Description

**Edfa3ly Store** responsive web app store based on ***reactjs*** technology .

### The Problem :

There is lots of products data received from the server , and it must be usable and easy for users to interact with it .

### The Solution :
The app fetch data from server and display it in usable UI . 
In the UI there is four options for users to control the displayed products data (categories - price range - color - rating) .

### How It Works ?

 1.  After the app run in browser a list of products will be loaded in the main page (the full list without filter) , and users can use the Pagination to move between the full list .

 2.  Users will find filters that will help them to display the products that they want :-
 
***Categories Filter*** :  "users can choose one of five different categories".

***Price Range Filter*** : "users can assign price range for the products that will be displayed by assign min & max value on slider, and to clear the filter user can click on the clear filter button under the range slider"

***Color Filter*** : "users can choose one color or more from color list, also to clear the filter user can click again on the chosen color to deselect it or press on the clear filter button under the color list".

***Rating Filter*** : "also users can assign rating range for the products that will be displayed by assign the number of stars , and to clear the filter user can click on the clear filter button under the color list"

3. Users can combine more than one filter together to get better results .

 ***

> ***The basic idea that filter depend on is redux store and react life cycle called `getDerivedStateFromProps`***

***


## The Technical Choices

 1. **I choose to build this app with reactjs because the basic concept is based on it (Virtual DOM) and this will provide higher efficiency because it will not destroy and rebuild the full dom on every change in UI rendering , the rebuild will be only for the changed element in UI .**
 2. **I build this project structure based on "*Grouping by file type*" , there is another way "Grouping by features" but i found "the file type" good for this project because (it's not a big project) .**
 3. **I choose to put all the communications with back-end (using fetch library) in one place so that i can change it easily in the future "if needed" .**

## Upgrades For Project

 1. **Categories Slider** : There is another way to make the categories "instead of using buttons" . The idea is creating slider for each main category and display the top 10 products in it , then add show more button that take the user for page that display the products that related with this category only (but in this case we will use react router dom) .
 2. **Pagination** : The best practices for pagination that the back-end make it , because in real life app there is lot's of products data , and it's not right to send all of it in response from one end point to the request from front-end (like the case in this app) .

## Dependencies

 1. **React.js .**
 2. **Redux .**
 3. **Redux Thunk .**
 4. **Redux Logger .**
 5. **ES6 .**
 6. **Prop Type .**
 7. **Prime React .**
 8. **Prime Flex .**
 9. **Font Awesome .**

## Resources 

 1. **Useing Concept R.S.A (Read, Search, Ask) .**
 2. **React Documentation .**
 3. **Redux Documentation .**
 4. **Stack Overflow .**
 5. **Prime React Documentation .**
 6. **Font Awesome Documentation .**
