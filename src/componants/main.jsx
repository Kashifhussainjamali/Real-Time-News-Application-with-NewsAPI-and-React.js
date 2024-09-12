import style from "./section.module.css";

const Section = (props) => {
  let data = props.data;
  return (
    <>
      <h1>
        {/* <u>All News Chanels.</u> */}
      </h1>
    <div className={style["maindiv"]}>
      <h2 style={{marginBottom:"10px"}}>Chanel Name: {data.source.name}</h2>
      <div className={style["imgdiv"]}>
        <img
          className={style["img"]}
          src={data.urlToImage}
          alt="..."
        />
        <h3 className={style["title"]}>Title: {data.title}</h3>
        
      </div>
      <p>Publisted at: {data.publishedAt}</p>
      <p className={style["desc"]}>Description: {data.description}</p>
      <p className={style["cont"]}>Content: {data.content}</p>
      <a href={data.url} target="_blank"><button className={style["button"]}>Click here to visit Site</button></a>
      </div>
    </>
  );
};
export default Section;
