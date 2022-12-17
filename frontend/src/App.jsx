import "./styles/App.css";
import logo from "./img/CatwikiLogo.svg";

function App() {
  return (
    <>
      <header className="">
        <div className="container">
          <div className="intro">
            <img src={logo} alt="" />
            <p>Get to know more about your cat breed</p>
            <input placeholder="Enter your breed" type="text" height="70" />
          </div>
        </div>
      </header>
      <section className="breeds">
        <div className="container">
          <p>Most Searched Breeds</p>
          <div className="suggestion-container">
            <h1>66+ Breeds For you to discover</h1>
            <button>SEE MORE &#8594;</button>
          </div>
          
          <div className="top-cats">
            <div>
              <img src="https://via.placeholder.com/220" alt="" />
              <h5>cat name</h5>
            </div>
            <div>
              <img src="https://via.placeholder.com/220" alt="" />
              <h5>cat name</h5>
            </div>
            <div>
              <img src="https://via.placeholder.com/220" alt="" />
              <h5>cat name</h5>
            </div>
            <div>
              <img src="https://via.placeholder.com/220" alt="" />
              <h5>cat name</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-part">
        <div className="container">
          <div className="text-part">
            <h1>Why should you have a cat?</h1>
            <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
            <button>READ MORE &#8594;</button>
          </div>
          <div className="photos"></div>
        </div>
      </section>
    </>
  );
}

export default App;
