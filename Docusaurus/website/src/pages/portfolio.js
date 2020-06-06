import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { editors, environments, langAndframewarks } from '../data/skills';
import careers from '../data/careers';

function Skill({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.skillImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h4 className="text--center">{title}</h4>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Career({ period, title, langAndFw, db, environment, cloudService, other, description }) {
  return (
    <div class="card-demo margin-vert--sm">
      <div class="card shadow--tl">
        <div class="card__header">
          <p className="text--italic">{period}</p>
          <h3>{title}</h3>
        </div>
        <div class="card__body">
          <ul>
            {langAndFw && <li>言語・FW：{langAndFw}</li>}
            {db && <li>DB：{db}</li>}
            {environment && <li>環境：{environment}</li>}
            {cloudService && <li>クラウドサービス：{cloudService}</li>}
            {other && <li>その他：{other}</li>}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={'portfolio from h-yoshikawa'}
      description="よしのポートフォリオ">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="avatar avatar--vertical">
            <img
              className={classnames('avatar__photo avatar__photo--xl', styles.avatar__photo_color)}
              src={useBaseUrl("img/lion-custom.svg")}
            />
            <div className="avatar__intro">
              <h2 className="avatar__name">Hitomi Yoshikawa</h2>
              <p className="avatar__subtitle">
                精神疾患持ちのプログラマー
                <br />
                JavaScirpt(React) + Java(Spring)をメインにしたい人
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="padding--md">
          <h2 className="text--center">スキル</h2>
          <h3 className={classnames('text--center', styles.decorationLine)}>エディタ</h3>
          {editors && editors.length && (
            <section className={styles.skills}>
              <div className="container">
                <div className="row">
                  {editors.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
          <h3 className={classnames('text--center', styles.decorationLine)}>開発環境</h3>
          {environments && environments.length && (
            <section className={styles.skills}>
              <div className="container">
                <div className="row">
                  {environments.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
          <h3 className={classnames('text--center', styles.decorationLine)}>言語・フレームワーク</h3>
          {langAndframewarks && langAndframewarks.length && (
            <section className={styles.skills}>
              <div className="container">
                <div className="row">
                  {langAndframewarks.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
        <div className="padding--md">
          <h2 className="text--center">経歴</h2>
          {careers && careers.length && (
            <section>
              <div className="container">
                {careers.map((props, idx) => (
                  <Career key={idx} {...props} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Portfolio;
