import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  const brands = [
    {
      name: "Andy Dane Carter",
      audience: "153K+",
      image: "/images/profiles/andy_dane_carter.png",
      url: "https://www.youtube.com/@AndyDaneCarter",
    },
    {
      name: "Nick Koumalatsos",
      audience: "360K+",
      image: "/images/profiles/nick_koumalatsos.png",
      url: "https://www.youtube.com/@NickKoumalatsos82",
    },
    {
      name: "Bob Proctor",
      audience: "1.98M+",
      image: "/images/profiles/bob_proctor.png",
      url: "https://www.youtube.com/@bobproctor",
    },
    {
      name: "Robert Syslo Jr.",
      audience: "27K+",
      image: "/images/profiles/robert_syslo.jpg",
      url: "https://www.youtube.com/@RobertSysloJr",
    },
    {
      name: "Shaahin Cheyene",
      audience: "65K+",
      image: "/images/profiles/shaahin_cheyene.jpg",
      url: "https://www.youtube.com/@shaahincheyene",
    },
    {
      name: "Matt Artisan",
      audience: "941K+",
      image: "/images/profiles/matt_artisan.jpg",
      url: "https://www.youtube.com/@AttractionExplained",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background/0 opacity-50 z-0"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Brands We <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've helped these creators grow their audience and online presence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-border group-hover:border-primary/50 transition-all">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
              </div>
              <h3 className="text-lg font-bold text-center">{brand.name}</h3>
              <p className="text-primary text-sm">{brand.audience} Audience</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="https://calendly.com/monsterkongmarketing/monsterkong60"
            className="btn-primary text-xl px-10 py-6"
          >
            Apply To See If You Qualify
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brands;
