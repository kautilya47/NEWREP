import home_img1 from "../images/kyp-toys-home-pic3.jpg";
import Flasher from "../components/Flasher";
import "../css/Home.css";
import SimpleSlider from "../components/SimpleSlider";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <img src={home_img1} alt="" className="home-img" />
      </div>
      <div className="overflow-auto bg-white">
        <div className=" flex flex-col items-center justify-center font-bold mb-8">
          <h1 className="text-2xl px-4">Welcome to KYP!</h1>
          <h1>(Know Your Process)</h1>
          <br></br>
          <h4>
            This tool will act as a one stop solution for PSC, guiding reviewers
            with classification,new updates,quality errors, important links etc
          </h4>
        </div>
      </div>
      <div className="">
        <SimpleSlider />
      </div>
    </div>
  );
}
