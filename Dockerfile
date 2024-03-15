FROM node:20.11.1-alpine3.19
WORKDIR node-app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

