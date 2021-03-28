FROM node:14.16.0

LABEL version="1.0"
LABEL description="This is the Frontend of MeLi Test from Juan Ignacio Gidoni"
LABEL maintainer = ["juan.gidoni@gmail.com"]

WORKDIR /.

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]