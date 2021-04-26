require('dotenv').config()

// projectId api-archshop

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

console.log(process.env.GOOGLE_CLOUD_PROJECT)
// const storage = new Storage();

// Creates a client from a Google service account key
const storage = 
  new Storage({
    keyFilename: 
    'C:\\Users\\Flavio\\Documents\\Google-cloud\\credentials\\api-archshop-216313659e2b.json'
  });

  // console.log(storage)

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// The ID of your GCS bucket
const bucketName = 'api-archshop-bucket-name';

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

createBucket().catch(console.error);