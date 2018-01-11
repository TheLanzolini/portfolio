# Alex Lanzoni's Portfolio Website

I built this project in order to use everything I liked about the `React` stack in one place. I am going to try to hit all the points for a Progressive Web App.

- [X] Use Babel and Webpack to leverage latest dev tools for easier development
- [X] React for Rendering everything
- [X] Redux for controlling the state of the App
- [X] React Router to handle the routing (both server and client)
- [X] Server Side Rendering: The process of rendering Client Side Components for faster 1st-request loads and also SEO
- [X] Code Splitting: Ability to lazy-load or asynchronously load components that the app doesn't need initially
  - [X] Have it also work with SSR
- [X] React Helmet for head tags for the `<head>`
  - [ ] Meta tags for SEO & google
- [X] 404 Handling on Client and Server
- [X] Responsive
- [ ] Implement lazy loading for images
- [ ] Move off of Heroku onto AWS
- [ ] Service Worker Register for caching and offline
- [ ] Offline Experience with canvas game
- [ ] Manifest XML splashscreen & icons

and then after that... implementing everything on [Google's PWA checklist](https://developers.google.com/web/progressive-web-apps/checklist)

Content Dev
- [X] Home Page
  - [X] My smug face
  - [X] Skills
  - [X] Dancing Browsers
  - [ ] Dancing Devices
- [X] Projects
  - [X] Professional
  - [X] Personal
- [X] About
  - [ ] Short Life Story
- [X] Contact
 - [X] Formal
 - [X] Informal
- [X] Footer
- [X] Fetching Data
  - [X] FIX YO COMMENTS / rename Example
  - [X] Reformat champions to work with spritemap

# If you want to run this

`npm install -g yarn`

`yarn install`

`yarn dev` (may have to run this twice because I haven't worked out the kinks in the build process)

look at localhost:3000
