import React from 'react';
import classnames from 'classnames';

import Page from '../components/page';
import H1 from '../components/h1';

import { SITE_NAME, META_DESCRIPTION } from '../common/const';

// Twin-City Treasure Hunt
export default () => {
  const meta = {
    title: `Twin-City Treasure Hunt - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta}>
      <main className="min-h-screen	flex flex-col w-full flex-1 justify-center items-center bg-black py-8	">
        <H1 className="text-white">Comming soon...</H1>
      </main>
    </Page>
  );
};
