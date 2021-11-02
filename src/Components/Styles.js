import "../Styles.css";
import style from "../custom.module.css";
const Styles = () => {
  return (
    <>
      <h1 className='type1'>Style Type 1</h1>
      <h1 style={{ backgroundColor: "green", color: "yellow" }}>
        Style Type 2
      </h1>
      <h1 className={style.type3}>Style Type 3</h1>
    </>
  );
};

export default Styles;
