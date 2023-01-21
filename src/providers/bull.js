import Bull from 'bull'; 
import { saveInStorageAndDb } from '../workers/file/jobs';


// Reuse the ioredis instance
const addQueue = new Bull('addFiles', {
  redis: {
    port: process.env.REDIS_PORT || 32768, // pass in the redis credentials
    host: process.env.REDIS_HOST || 'localhost',
    password: process.env.REDIS_PASSWORD || 'redispw'
  }
}); 

const removeQueue = new Bull('removeFiles', {
  redis: {
    port: process.env.REDIS_PORT || 32768, // pass in the redis credentials
    host: process.env.REDIS_HOST || 'localhost',
    password: process.env.REDIS_PASSWORD || 'redispw'
  }
}); 

addQueue.process(async (job) => {
  console.log('processando');
  await saveInStorageAndDb(job);
});

export { addQueue, removeQueue }