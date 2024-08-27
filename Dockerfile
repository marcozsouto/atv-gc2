FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE ${PORT:-3001}

RUN npm run build

CMD ["npm", "start"]