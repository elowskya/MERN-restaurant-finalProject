# Overview
This project started with a nextjs with strapi ecommerce starter:
 https://strapi.io/starters/strapi-starter-next-js-ecommerce

>Since this article was published, version 4 of Strapi has been released, so simply running the command from the website tutorial <code>npx create-strapi-starter my-project next-ecommerce</code>
 produces errors due to the installation script trying to pull version 4 of Strapi which this starter is not yet compatible with it. 

 >The Github repository for this project (<a href="https://github.com/strapi/strapi-starter-next-ecommerce">strapi-starter-next-ecommerce</a>) has an open issue for this and they recommended running:
<code>npx create-strapi-starter@3 my-project next-ecommerce</code>
to use version 3 of Strapi. 

## Instructions for local setup to use their ecommerce site template
1. Create a folder and navigate into it
2. Run <code>npx create-strapi-starter@3 my-project next-ecommerce</code>

>First time use start with step 3; otherwise, launch the backend server with step 4

3. Open backend folder in terminal and run <code>npm install</code> to add dependencies
4. Run <code>npm run develop</code> to launch the backend server
5. To access the server ⚡️, go to:
http://localhost:1337

---
To manage the backend of the project 🚀, go to the administration panel at:
http://localhost:1337/admin

---

>First time use start with step 6; otherwise, launch the frontend with step 7

6. Open the Frontend folder in a new terminal window and run <code>npm install</code> to add dependencies
7. Run <code>npm run develop</code> to launch the frontend
8. To access the frontend ⚡️, go to:
http://localhost:3000

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Instructions to view created Restaurant application
1. Create a folder and navigate into it
2. Run <code>git clone repo-name</code>