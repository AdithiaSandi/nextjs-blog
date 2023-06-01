import Head from "next/head";
import browseStyles from "../../styles/Browse.module.css"

export const getServerSideProps = async () => {
  const whislist = await fetch(
    "https://store.steampowered.com/wishlist/id/qavein/wishlistdata/"
  ).then((res) => res.json());

  return {
    props: {
      whislist,
    },
  };
};

const Index = (props) => {
  return (
    <main className="">
      <Head>
        <title>Browse</title>
      </Head>
      <h1>Browse</h1>
      {Object.keys(props.whislist).map((item) => {
        return <h3>{props.whislist[item].name}</h3>;
      })}
    </main>
  );
};

export default Index;
