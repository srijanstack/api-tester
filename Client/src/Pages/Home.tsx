import Header from "../Components/Header";
import Body from "../Components/Body"
import Output from "../Components/Output";

function Home() {
  return (
    <>
    <div className="h-screen grow">
      <Header />
      <Body />
      <Output/>
      </div>
    </>
  );
}

export default Home;
