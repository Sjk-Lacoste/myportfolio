import { FC } from 'react';
import NextHead from 'next/head';
import { IHeadProps } from '@utils/interfaces';

const defaultMetaTitle = 'SjkFolio';
const defaultDescription = '';
const defaultKeywords = 'Software Engineer, Web Developer';
const defaultOGURL = 'https://www.tshepomohlatlole.co.za';
const defaultOGImage = '';
const defaultCopyright = 'Tshepo Mohlatlole';
const defaultLang = 'en';
const defaultAuthor = 'Tshepo Mohlatlole';

const Head: FC<IHeadProps> = ({
  title = defaultMetaTitle,
  metaTitle = defaultMetaTitle,
  copyright = defaultCopyright,
  language = defaultLang,
  keywords = defaultKeywords,
  description = defaultDescription,
  author = defaultAuthor,
  url = defaultOGURL,
  ogImage = defaultOGImage,
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{`${title} - SjkFolio`}</title>

    {/* Meta Tags */}
    <meta name="title" content={metaTitle} />
    <meta name="copyright" content={copyright} />
    <meta name="language" content={language} />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=8,chrome=1" />

    <link rel="shortcut icon" href="/favicon.ico" />

    <meta property="og:url" content={url} />
    <meta property="og:title" content={title || ''} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </NextHead>
);

export default Head;
