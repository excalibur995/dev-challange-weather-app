import React from "react";
import Head from "next/head";
import { GenericProps } from "types/types";

interface SeoProperties extends GenericProps {
  title: string;
  description: string;
  image?: string;
}

const defaultSeoProps: SeoProperties = {
  title: "Weather App - excalibur995",
  description: "Dev Challange",
  children: undefined,
};

function Seo({ title, description, image, children }: SeoProperties) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta name="image" property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="image" property="twitter:image" content={image} />
      </Head>
      {children}
    </React.Fragment>
  );
}

Seo.defaultProps = defaultSeoProps;
export default Seo;
