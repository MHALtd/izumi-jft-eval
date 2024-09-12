import { Link } from "react-router-dom";

const Card = ({ ilust, title, desc, path }) => {
  return (
    <div>
      <div className="border py-5 md:px-6 px-4 rounded-[35px] shadow-3xl">
        <h3 className="text-3xl font-bold text-center text-tartiary">{title}</h3>
        <div className="flex items-center justify-center">
          <img src={ilust} alt="" />
        </div>
        <p className="text-pale text-center my-5">{desc}</p>
        <div className="flex items-center justify-center pb-3">
          <Link to={path}>
            <button className="btnPrimary text-2xl text-brokenwhite rounded-[35px]">Mulai Tes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
