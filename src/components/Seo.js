import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, pathname, routename }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl
  } = useSiteMetadata();

  const seo = {
    title: `${routename + ` | ` || ``}${title || defaultTitle}`,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="url" content={seo.url} />
    </>
  );
};
