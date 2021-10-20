import classnames from 'classnames';
import Page from '../components/page';
import Layout from '../components/layout';
import H1 from '../components/h1';
import { SITE_NAME, META_DESCRIPTION } from '../common/const';
import styles from '../styles/index.module.less';

export default function Home({ posts }) {
  const meta = {
    title: `Live - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  const cls = classnames('pb-8', 'flex flex-col	', styles.container);

  return (
    <Page meta={meta}>
      <main className="min-h-screen	flex w-full flex-1 justify-center items-center bg-black	">
        <H1 className="text-white">Live comming soon...</H1>
      </main>
    </Page>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/common/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  };
}
