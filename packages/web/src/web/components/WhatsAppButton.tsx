import { infoContacto } from "../data/mockDatabase";

export function WhatsAppButton() {
  const mensaje = encodeURIComponent(
    "Hola Exotic World, deseo consultar sobre las tarifas y programar una visita."
  );
  const href = `https://wa.me/${infoContacto.telefonoWhatsapp}?text=${mensaje}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 hover:scale-110 transition-transform animate-pulse"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.69A11.94 11.94 0 0016.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.912 0-3.7-.51-5.244-1.4l-.376-.222-4.712 1.003 1.01-4.59-.245-.386A9.71 9.71 0 016.25 15c0-5.385 4.38-9.75 9.754-9.75 5.375 0 9.75 4.365 9.75 9.75 0 5.386-4.375 9.75-9.75 9.75zm5.354-7.302c-.293-.147-1.734-.858-2.003-.956-.27-.098-.466-.147-.663.147-.196.293-.76.955-.933 1.152-.171.196-.343.22-.636.073-.293-.147-1.238-.457-2.358-1.457-.872-.778-1.46-1.74-1.632-2.033-.171-.293-.018-.452.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.663-1.597-.909-2.187-.24-.575-.483-.497-.663-.507l-.564-.01a1.08 1.08 0 00-.784.367c-.27.293-1.03 1.006-1.03 2.455s1.054 2.848 1.2 3.045c.147.196 2.075 3.168 5.03 4.44.703.303 1.252.484 1.68.62.706.224 1.348.192 1.856.117.566-.085 1.734-.71 1.978-1.395.245-.685.245-1.273.171-1.396-.073-.122-.269-.196-.562-.343z" />
      </svg>
    </a>
  );
}
