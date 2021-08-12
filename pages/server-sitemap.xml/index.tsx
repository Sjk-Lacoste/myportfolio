import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const response = await fetch('api-endpoint');
  // const data: any[] = await response.json();
  const fields: ISitemapField[] = [];
  return getServerSideSitemap(context, fields);
};

const Site = () => {};

export default Site;
