FROM node:8.11.3

# Create app directory
# 相对于容器的根目录
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# 第一个点 build的. 第二点相对于WORKDIR的位置
COPY . .

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .

EXPOSE 3001

# RUN ls
# RUN pwd
cmd npm run server 
