import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: 'r4yr2fpp',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31'

});

export default sanityClient;




/////////2nd method
// import { createClient } from '@sanity/client';



// const client = createClient({
//     projectId: 'r4yr2fpp',
//     dataset: 'production',


// });

// export default client;
