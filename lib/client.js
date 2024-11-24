import {createClient} from '@sanity/client'

// import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient({
//   projectId: "wfjh4je7",
//   dataset: "production",
//   apiVersion: "2024-06-11",
//   useCdn: true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

export const client = createClient({
    projectId: 'wfjh4je7',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-06-11', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
