import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  let data = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center bg-[#BB2ED7] text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">FarmaGen | CopyRights: {data}</p>
          <p className="text-lg">Nossos contatos</p>
          <div className="flex gap-2">
            <LinkedinLogoIcon size={48} weight="bold" />
            <InstagramLogoIcon size={48} weight="bold" />
            <FacebookLogoIcon size={48} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}
