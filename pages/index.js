import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../compo/banner";
import Card from "../compo/card";
import LouisStoreData from "../data/louis-coffee.json";

export async function getStaticProps(context) {
  const APIKEY = "<fsq3YrxzK5qYMzcyF2wtNIsvxC8UsLfLpN4nZQ/V2gc5izM=>";

  const options = {
    method: "GET",
    headers: { Accept: "application/json", Authorization: APIKEY },
  };

  fetch(
    "https://api.foursquare.com/v3/places/nearby?ll=14.327915370461799%2C%20120.94288126172168",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return {
    props: {
      LouisStore: LouisStoreData,
    }, // will be passed to the page component as props
  };
}

const handlebanner = () => {
  console.log("banner clicked");
};

export default function Home(props) {
  console.log("prop", props);
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
        {props.LouisStore.length > 0 && (
          <div>
            <h2 className={styles.heading2}> Manila stores</h2>
            <div className={styles.cardLayout}>
              {props.LouisStore.map((Louiscoffe) => {
                return (
                  <Card
                    key={Louiscoffe.id}
                    name={Louiscoffe.name}
                    imgUrl={Louiscoffe.imgUrl}
                    href={`/louis-store/${Louiscoffe.id}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
