import { Queue } from 'bullmq'; 


// Reuse the ioredis instance
const addQueue = new Queue('addFiles', { 
  connection: {
    port: process.env.REDIS_PORT, // pass in the redis credentials
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
  },
});


const removeQueue = new Queue('removeFiles', {
  connection: {
    port: process.env.REDIS_PORT, // pass in the redis credentials
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
  },
});

export { addQueue, removeQueue }