FROM node:21.6.1

WORKDIR /app

COPY . .

RUN npm install

RUN npm uninstall bcrypt

RUN npm install bcrypt@latest --save


EXPOSE 8000

CMD ["npm", "run", "start"]