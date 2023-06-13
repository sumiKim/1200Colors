FROM node:16.14.0-bullseye-slim

# set working directory
RUN mkdir /app
COPY . /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY . .

RUN yarn install 
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]