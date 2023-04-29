import Carousel from "react-material-ui-carousel";
import slider1 from "../images/reciclaje.png";
import slider2 from "../images/mercho.png";
import slider3 from "../images/nosotras.png";
import slider4 from "../images/feria.png";

const Slider = () => {
  const sliders = [slider1, slider2, slider3, slider4];

  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={false} duration={600}>
      {sliders.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt="slider"
            style={{
              objectFit: "cover",
              height: "75vh",
              width: "100%",
              borderRadius: "1.5rem",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
