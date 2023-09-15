import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text flex-center flex-col">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        promptopia is a community of writers, artists, and creatives who use
        artificial intelligence to generate prompts for their work.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
