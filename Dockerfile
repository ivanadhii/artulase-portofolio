FROM node:20-alpine

WORKDIR /app

# Install dependencies for production
RUN apk add --no-cache libc6-compat

# Set environment
ENV NODE_ENV=development

CMD ["sh"]
