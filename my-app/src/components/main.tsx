import { data } from "../utils/data";
import Flavanoids from "./flavanoids";
import { GammaStats } from "./gamma";

const Main = () => {
  return (
    <div style={{ margin: "auto", width: "380px" }}>
      <Flavanoids data={data} />
      <GammaStats data={data} />
    </div>
  );
};

export default Main;
