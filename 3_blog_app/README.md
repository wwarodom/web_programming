# Blog Post

### Installation
git clone https://github.com/wwarodom/web_programming.git
cd web_programming/3_blog_app
npm i
ren .env.sample .env   # ( using ‘mv .env.sample .env’ for mac/linux)
npx prisma migrate dev --name blog_app
npm run dev

##### Missing part: 
- CRUD users
- Routing from editing message to blog-ui (not blog)