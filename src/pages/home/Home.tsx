import imgAcne from "../../assets/imgacne.png";
export default function Home() {
  return (
    <>
      <div className="bg-[#BB2ED7] flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-5xl font-bold font-">FarmaGen</h1>
            <p className="text-2xl text-center">
              Se até seu deploy precisa de saúde, magina você.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={imgAcne}
              alt="Imagem cliente com acne"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
