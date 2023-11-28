import yodaLottie from "../../../assets/baby_yoda_lottie.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <Lottie
      animationData={yodaLottie}
      loop={true}
      style={{
        height: 550,
      }}
    />
  );
};

export default Loader;
