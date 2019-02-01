# Final image
FROM node:10
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
