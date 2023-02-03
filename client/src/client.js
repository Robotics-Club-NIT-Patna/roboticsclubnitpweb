import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "58siqeyu",
  dataset: "production",
  apiVersion: "2023-02-01",
  useCdn: true,
  token: process.env.VITE_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
