import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, img, repo, keyword, liveUrl } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="700" height="350" />
      </div>

      

      {/* <div className={`${classes.portfolio__live} bg-transparent`}>
        {
          repo && 
            <button className="primary__btn">
              <Link href={repo}>Repo</Link>
            </button>
        }

        {
          liveUrl &&
            <button className="secondary__btn">
              <Link href={liveUrl}>Demo</Link>
            </button>
        }
      </div> */}

      <div className="mt-5">
        {repo && 
        <Link href = {repo}>
          <button className="primary__btn">Repo</button>
        </Link>
        }
        {liveUrl && 
        <button className="secondary__btn">
          <Link href={liveUrl} download>liveUrl</Link>
        </button>
        }
      </div>
      
    </div>
  );
};

export default PortfolioItem;
