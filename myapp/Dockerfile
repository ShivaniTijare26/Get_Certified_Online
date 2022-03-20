FROM node:16.13.1
WORKDIR /myapp
COPY ["package.json","package-lock.json","./"]
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
CMD ["npm","start"]