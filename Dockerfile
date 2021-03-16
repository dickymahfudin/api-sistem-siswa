FROM node:14.15-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . /usr/src/app
COPY start.sh /opt/bin/start.sh
RUN chmod +x /opt/bin/start.sh
CMD /opt/bin/start.sh