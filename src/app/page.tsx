import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#B59B84" }}
    >

      <div
        className="relative flex overflow-hidden shadow-2xl"
        style={{
          border: "14px solid #E7E7E7",
          width: "calc(100vw - 400px)",
          height: "calc(100vh - 120px)",
        }}
      >

      <div
        className="relative flex flex-col items-center justify-center border-[12px] border-[#E7E7E7] z-3"
        style={{
          width: "72%",
          backgroundImage: "url('/fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "10px 0 40px rgba(0,0,0,0.45)",
        }}
      >
          <div className="flex flex-col items-center">
            <Image
              src="/IconoCat.png"
              alt="GatoPedia"
              width={300}
              height={300}
              className="object-contain"
              priority
            />
            <h1
              className="text-5xl font-bold italic tracking-tight -mt-6"
              style={{ color: "#5A6543" }}
            >
              GatoPedia
            </h1>
            <button
              className="mt-1 rounded-full px-23 py-1 text-lg font-semibold text-white transition-opacity hover:opacity-80 shadow-md"
              style={{ backgroundColor: "#BFA080" }}
            >
              Iniciar
            </button>
          </div>
        </div>


        <div
          className="relative overflow-hidden w-[28%] bg-[#E7E7E7]"
        >
          <div
            className="absolute"
            style={{
              bottom: "10px",
              left: "-800px",
              width: "450%",
              height: "110%",
            }}
          >
            <Image
              src="/michimimiendo.png"
              alt="Gato mimado"
              fill
              className="object-contain object-bottom mix-blend-multiply"
              priority
            />
          </div>

          <p
            className="absolute z-10 text-xs italic leading-relaxed text-right"
            style={{
              color: "#7A5C3A",
              maxWidth: "130px",
              right: "16px",
              top: "61%",
              transform: "translateY(-50%)",
            }}
          >
            &ldquo;La nariz de cada gato tiene un patrón de protuberancias
            único, equivalente a la huella dactilar de un humano&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}