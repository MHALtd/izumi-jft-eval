import Card from "./Card";
import choukai from "../assets/choukai.png";
import bunpou from "../assets/bunpou.png";
import dokkai from "../assets/dokkai.png";
import goi from "../assets/goi.png";

const Test = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto pt-10 pb-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl text-tartiary font-bold mb-2">Pilih Jenis Tes</h2>
      </div>

      {/* TEST CARD */}
      <div className="mt-8">
        <div className="grid sm-grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen mx-auto">
          <Card
            ilust={goi}
            title={"Goi-Kotoba"}
            desc={"Tes kemampuan kosakata dan penggunaan kata dalam bahasa Jepang."}
            path={"src/pages/goi-kotoba/index.html"}
          />
          <Card
            ilust={bunpou}
            title={"Bunpou-Hyougen"}
            desc={"Tes kemampuan tata bahasa dan ekspresi bahasa Jepang."}
            path={"src/pages/bunpou-hyougen/index.html"}
          />
          <Card
            ilust={dokkai}
            title={"Dokkai"}
            desc={"Tes kemampuan membaca dan memahami teks berbahasa Jepang."}
            path={"src/pages/dokkai/index.html"}
          />
          <Card
            ilust={choukai}
            title={"Choukai"}
            desc={"Tes kemampuan mendengarkan dan memahami percakapan berbahasa Jepang."}
            path={"src/pages/choukai/index.html"}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
