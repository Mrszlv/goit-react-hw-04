import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => (
  <div className={s.load}>
    <ThreeDots height="60" width="80" color="gray" ariaLabel="loading" />
  </div>
);

export default Loader;
