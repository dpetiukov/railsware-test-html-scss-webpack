# Railsware HTML/CSS exercise

In order to run the project:

Clone the repository to your local computer. Do:

`npm install`

`npm start`

login.html and password.html will open in the browser.

## SCSS

SCSS files are in src/scss

**style.scss** puts everything together.

**global.scss** - currently only global font-size.

**loginForm.scss** form component. It's flexible, can be put in any container width, and items can be rearranged. To reaarange rows all _librero_ classes must be removed - they are page-specific.

**librero.scss** - utility classes library I started for this exercise - currently contains only one scss loop which produces margin-top rem classes.

**demo.scss** - demo styles, just sets body width and centers it on the screen.
