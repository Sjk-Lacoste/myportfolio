import NextHead from "next/head";
import { string } from "prop-types";

const defaultMetaTitle = "SjkFolio";
const defaultDescription = "";
const defaultKeywords = "";
const defaultOGURL = "";
const defaultOGImage = "";
const defaultCopyright = "Tshepo Mohlatlole";
const defaultLang = "en";
const defaultAuthor = "Tshepo Mohlatlole";

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{`${$props.title} - sjkFolio` || defaultMetaTitle}</title>

    {/* Meta Tags */}
    <meta name="title" content={props.metaTitle || defaultMetaTitle} />
    <meta name="copyright" content={props.copyright || defaultCopyright} />
    <meta name="language" content={props.language || defaultLang} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="author" content={props.author || defaultAuthor} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=8,chrome=1" />

    <link rel="shortcut icon" href="/favicon.ico" />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
};

export default Head;
