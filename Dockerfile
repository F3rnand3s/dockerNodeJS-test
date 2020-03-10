FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./ 
RUN npm PY . .

EXPOSE 3000

CMD ["npm", "start"]
