# Github Timeline API
This project is a small responsive web application that consumes an API created in NodeJs and SailsJS to render all the commits done in an especific project.

## Features  

- Calls the Github API to retrieved the commits done in this project

# Table of contents  
1. [Tech Stack](https://github.com/joxedanielc/github-timeline-api#tech-stack)  
2. Code Explanation
    1. [API](https://github.com/joxedanielc/github-timeline-api#api)
    2. [Utils](https://github.com/joxedanielc/github-timeline-api#utils)
4. [Run Locally](https://github.com/joxedanielc/github-timeline-api#run-locally)  
5. [Feedback](https://github.com/joxedanielc/github-timeline-api#feedback)
6. [License](https://github.com/joxedanielc/github-timeline-api#license)

## Tech Stack  

**Backend:** NodeJs, SailsJs

## Code Explanation  

### API

The file `callapi.js` contains the logic to both call the url provided concatenated with the username and repository name and also normalize the data extracting only the requested fields that will be use for the frontend.

### Utils

The file `normalizedata.js` creates an object with an array of commits that contains only the requested properties from the frontend.

## Run Locally  

### Important: 

In the file `config/local.js`, paste in the property `githubkey` the secret key provided via email.

Clone the project  

~~~bash  
  git clone https://github.com/joxedanielc/github-timeline-api.git
~~~

Go to the project directory  

~~~bash  
cd github-timeline-api
~~~

Install dependencies  

~~~bash  
npm install
~~~

Start the server  

~~~bash  
sails lift
~~~

## Feedback  

If you have any feedback, please leave a comment.

## License  

[MIT](https://choosealicense.com/licenses/mit/)
