# git-trends

### About this Project

This Project is a Simple ReactJS Project which demonstrates the following
  
An app that allows the user to login using GitHub credentials.
Post login to the Firestore.
Pull top ten trending repo information and display it.

### Cloning and Running the Application in local

 - Clone the project into local

Install all the npm packages. Go into the project folder and type the following 

 - command to install all npm packages

> npm install or yarn install

Run the application Type the following command

> npm start or yarn start

The Application Runs on [http://localhost:3000](http://localhost:3000)

### Application design
Components

Login Component :
![Login component](/docs/images/login-screen.png)
 This Component display login screen.User can login with their Github credentials and after successful login it will redirect to the List component
List Component : 
![list component](/docs/images/list.png)
This Component Displays the list of top 10 trending repos in GitHub.

##### HTTP client
axios library is used to make HTTP Calls.
##### Resources

 - create-react-app : The following link has all the commands that can
   be used
 - with create-react-app https://github.com/facebook/create-react-app
 - ReactJS: Refer to https://reactjs.org/Êto understand the concepts of
   ReactJS
 - Ant Design: Refer tohttps://ant.design/ to understand how to use Ant
   Design

