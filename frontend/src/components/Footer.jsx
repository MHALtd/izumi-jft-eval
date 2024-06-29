const Footer = () => {
  return (
    <div className="bg-pale md:px-14 p-4 max-w-screen mx-auto">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        {/* COPYRIGHT */}
        <div className="md:w-1/2">
          <p className="text-2xl font-semibold space-x-3 text-primary">Visi</p>
          <p className="text-brokenwhite">
            "Menjadi lembaga pelatihan bahasa terkemuka yang menginspirasi dan membantu SDM mencapai kemahiran bahasa asing
            yang tinggi serta memahami budaya asing secara mendalam.""
          </p>
          <div></div>
        </div>
        {/* HELP */}
        <div>
          <p className="text-2xl font-semibold space-x-3 text-primary">Misi</p>
          <ul className="text-brokenwhite">
            <li>1. Memberikan pendidikan bahasa berkualitas tinggi dengan metode pembelajaran yang inovatif dan efektif.</li>
            <li>
              2. Memfasilitasi pengembangan kemampuan komunikasi berbahasa yang baik dalam berbagai situasi dan konteks.
            </li>
            <li>3. Memperkenalkan dan mempromosikan budaya asing kepada para pelajar.</li>
            <li>4. Menyediakan program pelatihan yang fleksibel dan disesuaikan dengan kebutuhan dan tujuan SDM.</li>
            <li>5. Membangun komunitas belajar yang aktif dan saling mendukung bagi para pelajar.</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-center">
        <p className="text-primary">@Izumi Indonesia 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
