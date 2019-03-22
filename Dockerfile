FROM node:8
WORKDIR /src
COPY package.json .
RUN npm i

COPY . .
CMD ["npm", "start"]
# RUN npm i
