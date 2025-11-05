export default function Navbar() {
  return (
    <>
      <div className="bg-[#BB2ED7] flex justify-between p-5 text-white">
        <div className="flex flex-col ">
          <p>Projeto FarmaGen</p>
        </div>
        <div className="flex gap-8">
          <p>Listar Categorias</p>
          <p>Cadastrar Categoria</p>
        </div>
      </div>
    </>
  );
}
