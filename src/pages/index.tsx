import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://v2.vuejs.org/v2/api/">
            Vue 2 API
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://v2.vuejs.org/v2/guide/render-function.html#createElement-Arguments">
          {`$createElement`}
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js">
            VNode
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://v2.vuejs.org/v2/cookbook/avoiding-memory-leaks.html">
            Identifying Memory Leaks
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
