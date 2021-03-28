FROM node:14.16.0

LABEL version="1.0"
LABEL description="This is the Backend of MeLi Test from Juan Ignacio Gidoni"
LABEL maintainer = ["juan.gidoni@gmail.com"]

WORKDIR /.

COPY ["package.json", "package-lock.json", "./"]

RUN ls

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]