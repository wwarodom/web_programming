# Blog Post

This example demostrates basic features as follows:
* The prisma CRUD 1-Many relation 
* useFormState and useFormStatus with server actions
* session with JWT stored in cookie-httpOnly 
* middleware and matcher for route protection
* form validation with zod library
* server and client components design
* UI ShadCN and layout

### Installation
git clone https://github.com/wwarodom/web_programming.git
cd web_programming/3_blog_app
npm i
ren .env.sample .env   # ( using ‘mv .env.sample .env’ for mac/linux)
npx prisma migrate dev --name blog_app
npm run dev

##### Missing parts: 
- CRUD users
- Routing from editing message to blog-ui (not blog)