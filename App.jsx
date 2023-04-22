import Title from "./Components/Title";
import Body from "./Components/Body";
import '../src/index.css'
import Header from "./Components/Header";
import Section_name from "./Components/Section_name";
import Section_about from "./Components/Section_about";
import Section_contact from "./Components/Section_contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
    <Title></Title>
    {/* <Body></Body> */}
    <Header></Header>
    <Section_name></Section_name>
    <Section_about></Section_about>
    <Section_contact></Section_contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
