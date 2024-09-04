const Hero = () => {
  return (
    <div className="h-[20vh] md:h-[30vh] grid place-items-center relative bg-hero-pattern bg-center bg-cover rounded-3xl p-5 ">
      <div className="text-white text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
          Tripster ile Rezervasyon Yap
        </h1>
        <p>Dünya Çapında Yüz Binlerce Otel Odası Seni Bekliyor!</p>
      </div>
    </div>
  );
};

export default Hero;
