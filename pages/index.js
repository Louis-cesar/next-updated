import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../compo/banner";
import Card from "../compo/card";
import Louiscoffee from "../data/louis-coffee.json";

const handlebanner = () => {
  console.log("banner clicked");
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Louis Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handlebanner} />
        <div className={styles.heroImage}>
          <img src="/static/hero-image.png" width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {Louiscoffee.map((Louiscoffe) => {
            return (
              <Card
                name={Louiscoffe.name}
                imgUrl={Louiscoffe.imgUrl}
                href={`/louis-store/${Louiscoffe.id}`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
