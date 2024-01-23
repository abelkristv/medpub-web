# Use an existing image as a base
FROM nginx:alpine

# Copy your website files into the container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]

