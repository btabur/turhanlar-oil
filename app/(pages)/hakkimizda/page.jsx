import Map from "@/app/components/Map";
import SliderAbout from "@/app/components/SliderAbout";
import Link from "next/link";
import React from "react";

const Hakkimizda = () => {
  return (
    <main className=" mt-20  ">
      {/* top */}
      <article className="flex flex-col items-center justify-center py-10 mx-20 gap-4 border-b-[7px] border-double border-[#fdc133]">
        <h1 className="text-3xl font-semibold ">Turhanlar Petrol</h1>
        <div className="flex items-center gap-2 text-gray-500">
          <Link className="hover:underline" href={"/"}>
            Ana Sayfa
          </Link>
          <span> / Hakkımızda</span>
        </div>
      </article>
      <article className=" px-20 gap-10">
        <div className="flex flex-col items-center justify-center  my-5">
          <h1 className="text-2xl font-semibold ">Hakkımızda</h1>
          <hr className="w-32 h-[3px] bg-primary"></hr>
        </div>
        <div className="items-center justify-center gap-4  w-full  mt-5 ">
          <p className="flex items-center justify-center mb-4">
            1949 yılında kurulan Turhanlar Petrol, akaryakıt sektöründe köklü
            bir geçmişe sahip olup, yıllardır güvenilir hizmet anlayışıyla
            müşterilerine en kaliteli yakıtı sunmaktadır. Kuruluşumuzdan bu yana
            müşteri memnuniyetini ön planda tutarak, sektördeki yenilikleri
            yakından takip edip hizmet kalitemizi sürekli olarak artırıyoruz.
          </p>
          <p className="flex items-center justify-center mb-4">
            Sadece akaryakıt hizmetiyle sınırlı kalmayarak, istasyonumuzda
            market, oto yıkama ve cafe hizmetleri de sunarak müşterilerimize
            konforlu bir deneyim yaşatıyoruz. Marketimizde temel ihtiyaçlarınızı
            karşılayabilir, oto yıkama hizmetimizle aracınızı temiz ve bakımlı
            tutabilir, cafe alanımızda ise keyifli bir mola vererek sıcak bir
            kahve veya lezzetli atıştırmalıklarla yolculuğunuza devam
            edebilirsiniz.
          </p>
          <p className="flex items-center justify-center mb-4">
            Yarım asrı aşkın süredir dürüstlük, kalite ve güven ilkeleriyle
            faaliyet gösteren firmamız, akaryakıt ve enerji sektöründeki
            gelişmelere öncülük etmeye devam etmektedir. Modern altyapımız,
            güçlü lojistik ağımız ve uzman ekibimizle, müşterilerimize sadece
            yakıt sunmakla kalmayıp, onların ihtiyaçlarına en uygun çözümleri de
            sağlamaktayız.
          </p>
          <p className="flex items-center justify-center mb-4">
            Bugün, Turhanlar Petrol olarak köklü geçmişimizin verdiği güçle,
            geleceğe emin adımlarla ilerliyor; müşteri odaklı hizmet anlayışımız
            ve kaliteli ürünlerimizle sektörde iz bırakmaya devam ediyoruz.
          </p>
        </div>
      </article>
      {/* middle */}
      <article className="flex flex-col lg:flex-row items-start justify-start px-20 gap-10">
        <div className="flex flex-col items-start gap-4 h-[80vh] lg:w-1/2 w-full  mt-5">
          <h1 className="text-2xl font-semibold">Turhanlar Petrol</h1>
          <span className="w-24 h-[2px] bg-primary"></span>
          <SliderAbout />
        </div>

        <div className="flex flex-col items-start gap-4 my-5">
          <h1 className="text-2xl font-semibold">Turhanlar Petrol</h1>
          <span className="w-24 h-[2px] bg-primary"></span>
          <div className="flex items-center gap-2 mt-5">
            <p className="p-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              1
            </p>
            <p className="text-xl text-gray-500">Petrol İstasyonu</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="p-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              2
            </p>
            <p className="text-xl text-gray-500">Market</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="p-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              3
            </p>
            <p className="text-xl text-gray-500">Cafe</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="p-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              4
            </p>
            <p className="text-xl text-gray-500">Oto Yıkama</p>
          </div>
        </div>
      </article>

      <article
        className='h-[50vh] w-full relative bg-[url("/bg-contact.jpg")] pt-20 pl-20 flex flex-col
            items-start gap-10 bg-cover bg-center bg-no-repeat border-b'
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 flex flex-col lg:gap-10 gap-5">
          <h2 className="text-3xl text-white font-semibold">Bize Ulaşın!</h2>
          <p className="text-xl text-white">
            Turhanlar Petrol hizmetleri hakkında bize ulaşabilirsiniz
          </p>
          <Link
            href={"/iletisim"}
            className="py-2 w-32 text-center font-semibold bg-primary text-white"
          >
            İletişim
          </Link>
        </div>
      </article>
      <article className="my-5 w-full px-20">
        <Map />
      </article>
    </main>
  );
};

export default Hakkimizda;
