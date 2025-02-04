import Link from "next/link";
import React from "react";

const GrupSirketler = () => {
  const cards = [
    {
      logo: "/CardLogo/turhanlar.png",
      title: "Turhanlar Petrol",
      description:
        "Turhanlar Petrol olarak köklü geçmişimizin verdiği güçle, geleceğe emin adımlarla ilerliyor; müşteri odaklı hizmet anlayışımız ve kaliteli ürünlerimizle sektörde iz bırakmaya devam ediyoruz.",
    },
    {
      logo: "/CardLogo/turkuaz.png",
      title: "Turkuaz Yakıt",
      description:
        "Turkuaz Petrol, sadece bir akaryakıt istasyonu olmanın ötesine geçerek, toptan akaryakıt satışı ve akaryakıt nakliyesi gibi geniş kapsamlı hizmetler sunmaktadır. Akaryakıt sektöründeki gelişmeleri yakından takip ederek, yüksek standartlarda ürün ve hizmetler sağlamaktayız.",
    },
    {
      logo: "/CardLogo/perisu.png",
      title: "Perisu",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil iure non enim aperiam, quod, maiores quo impedit libero deserunt neque, at suscipit doloribus pariatur!...",
    },
    {
      logo: "/CardLogo/dagdeviren.png",
      title: "Dağdeviren",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil iure non enim aperiam, quod, maiores quo impedit libero deserunt neque, at suscipit doloribus pariatur!...",
    },
    {
      logo: "/CardLogo/degisim.png",
      title: "Değişim Tekstil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil iure non enim aperiam, quod, maiores quo impedit libero deserunt neque, at suscipit doloribus pariatur!...",
    },
    {
      logo: "/CardLogo/rima.png",
      title: "Rima",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil iure non enim aperiam, quod, maiores quo impedit libero deserunt neque, at suscipit doloribus pariatur!...",
    },
  ];
  return (
    <main className=" mt-20  ">
      {/* top */}
      <article className="flex flex-col items-center justify-center py-10 mx-20 gap-4 border-b-[7px] border-double border-[#fdc133]">
        <h1 className="text-3xl font-semibold ">Turhanlar Petrol</h1>
        <div className="flex items-center gap-2 text-gray-500">
          <Link className="hover:underline" href={"/"}>
            Ana Sayfa
          </Link>
          <span> / Grup Şirketlerimiz</span>
        </div>
      </article>
      <div className="flex flex-col items-center justify-center  my-5">
        <h1 className="text-2xl font-semibold mb-2">Grup Şirketlerimiz</h1>
        <hr className="w-48 h-[3px] bg-primary"></hr>
      </div>
      <div className="container mx-auto p-6 gap-4 m-12 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <img
                src={card.logo}
                alt={card.title}
                className="w-36 h-24 object-contain mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GrupSirketler;
