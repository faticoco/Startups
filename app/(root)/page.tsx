import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <section className="pink_container ">
      <div className="pattern-pink"></div>
      <h1 className="heading bg-white  max-w-5xl">
        Pitch Your Startup, Connect with Entrepreneurs
      </h1>
      <p className=" ptag ">
        {" "}
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <div className="pattern-pink"></div>
      <SearchForm/>
    </section>
  );
}
