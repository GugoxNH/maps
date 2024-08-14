import { c as create_ssr_component, b as each, v as validate_component, e as escape, d as add_attribute, g as getContext, o as onDestroy } from './ssr-BbgXjeAK.js';
import { L as Leaflet, M as Marker, p as pin } from './pin-BIlPrk5p.js';

const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let popup;
  let popupElement;
  const { getLayer } = getContext("layer");
  const layer = getLayer();
  onDestroy(() => {
    layer?.unbindPopup();
    popup?.remove();
    popup = void 0;
  });
  return `<div${add_attribute("this", popupElement, 0)}>${``}</div>`;
});
const hist = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAT5SURBVHic7ZtPaNRHFMc/bxsNFI2ECBIL4kElUpFAIuKlCLXYUEgOitXkUA8Fi4cS2mOFJlDSYqEe27SF2tL2ZGxaKkn/XIRSiuZQxf6xh3aLEiuC+CetiVW/Pcxv281v57f5ZbO7s83mC3PYN2/evHkzv7dv3swgiTQFGAAUKwNp21eqLFSvDHWOJQOEViA06t4AFjmS/whm3UAX0AlsBZYH0KucuAucByaAMUmfzarN86ZrgJMUetTFVk4Ca/4dd97gr9aActUqV3NGyBmgHma+YCXkPv/uGlAmVOnO4BxeHJeB54CVkkySAYMevsFcfagyl17Aymgslz18XQ04bx/HK5KGPfT/HSRNAcNmBvBWrLozg/uri+OjSisWAL4xbc3g+Z+PrLaokDCm5UuRIM4bzkLkPBYdzKxgrHW/AureAA0+opkNVFmPYPD6gHpC3X8CSwYIrUBoeJ0g/g3GYsDLccJSIBRCkVrCkgFCKxAaSU5wFsxsPbA+Rs5KylaSrwL4C3g4TizIlZV6AFluvgocpG4BLub3m2oF1ALMbAXwJNAGrAVaccmcK8AkkAXGJU0myZB0wcw6gfeAPZDyEwgFM8sA+4FeYBfQOEcTmdkZ4AQwLOl2AYN028z2AR8AfTXrBKMjuvO4XN5TzD14cHHNduB14Fcz6zezgnaSHgDPACNpV0AWOO2hlZ3PzJqAj3GDXghWA8eAw2bWI+mn/EpJ983sAKRwgtUqwAbgR59OCyw3gC5fnzUTCpvZBuA7oKUI2zRwDnfSOwFMAR24s40OoLlI2wfAPkkj8YrgKwBoovjMXwAeAxrmkLMJGC0iZwpoj7WpCQN8nqDwPWAIaJynvD7geoLM34GWeX0ClYzwIm//qafqN+BpSWdL1KUVeB94wiP7mKQXcj+qHgnm8Wdwy9s389sS2qTuA1gFXPLwTwPrpPDX5PYDj3roR+MzXwok3QSe9VQ1Akcg/G6w10P7gTJmpCR9AbzrqdprZsuCGSCK7Xd5qg5Lmilzdy8CN2O0ZmBnqEgQ3MYmHqZOA9+m1Ck1JN0yswng8VhVTyoDSDoOHC8XX4Q2D+2cpHsp2+ej3cwO5v3+Q9J4jMdngLaQu8G1HtpEibJ6opLDacBngAIdQjrBVg+tVAOkgU92a0gD+G6gVvJmiveGSJCcYIQrHloHLplRCXT4dEjrAw5SeKoyiIvKSuEDl8aKw3djLY7vcSFuMfycUvZkSCeY9dB8szQLkkZxO775wmeAbEgfME7hRqzZzDaVu6Mot7jNUzUWzABy2dsznqqjFejueeCRGO0ucCpkJAjO4W2P0XrMrE9SWS5rmtlGXE4hjq8k3YKACRHcPd5rHh2uA61lkJ8BvvGNEdihWsgIAf0JCn4JrFrg4F9NkD2ax8eMh2FFFQ3QCPySoOglYHcJMjcWmfk7wOZ8A5z1MB2q8irYjEtdJyUz3wGaUs56P+4QNElWb6wNbyZY/lCVV0IXcL+I4jeAr4HXgL24iHM1sBt4CfgE9yYgqb2AIU+/VX8x8iewJcEIe3AxeyX6HSJ6JTerz6jjar8Zuoh7jeIzQjsudV2uvu4QW/Y+A4R4NXYCyCQYoQV4A5chWkgfo+Q5vEQD5Bmh2ivhQ+ChIn5hHfA2yYccvjKDO2jZkcb31MLL0RHggKS/kxjMbBmwE5f1KXZBYgw4pSjCS4N/AByXxJDmIZsQAAAAAElFTkSuQmCC";
const off = "data:image/png;base64,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";
const css = {
  code: ".lastten.svelte-b30hd8{background-color:white;position:absolute;top:50px;left:50px;z-index:401;font-size:13px}@media(max-width: 768px){.lastten.svelte-b30hd8{display:none}}",
  map: null
};
function getTimeFromISOString(isoString) {
  const date = new Date(isoString);
  let dateEnd = isoString.slice(0, 10);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  return `${dateEnd} ${hours}:${minutes}:${seconds}`;
}
function isOnline(fechaString) {
  const newDate = fechaString.split(".")[0];
  const fechaRecibida = new Date(newDate);
  const fechaActual = /* @__PURE__ */ new Date();
  const diferencia = Math.abs(fechaActual.getTime() - fechaRecibida.getTime());
  const diferenciaEnSegundos = diferencia / 1e3;
  console.log(fechaRecibida, fechaActual, diferencia, diferenciaEnSegundos);
  return diferenciaEnSegundos <= 10;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var initialView = [0, 0];
  var zoom = 4;
  var markerLocations = [];
  $$result.css.add(css);
  return ` <div class="w-80 h-auto p-4 lastten shadow-lg rounded-lg svelte-b30hd8"><div class="font-bold text-xl mb-4 border-b pb-2" data-svelte-h="svelte-1o45mwq">Vehículos</div> <div class="space-y-3"><div class="space-y-3">${each(markerLocations, (location) => {
    return `<div class="flex items-center flex-col"><div class="w-full flex items-center justify-center"> ${isOnline(location.date) ? `<div class="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></div>` : `<div class="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></div>`} <button class="flex cursor-pointer text-red-800 font-bold"><span>${escape(location.imei)}</span> </button></div> <div class="w-full flex items-center justify-center mb-3"><p class="font-semibold">${escape(location.latLng[0])}, ${escape(location.latLng[1])}</p></div> <div class="w-full flex mb-5"><button class="flex-grow hover:bg-slate-300 border flex justify-center text-white rounded-l p-2"><img${add_attribute("src", hist, 0)} width="20" alt="pin"></button> <button class="flex-grow hover:bg-slate-300 border flex justify-center text-white rounded-r p-2"><img${add_attribute("src", off, 0)} width="20" alt="pin"></button></div> </div>`;
  })}</div></div></div> <div class="w-full h-screen">${validate_component(Leaflet, "Leaflet").$$render($$result, { view: initialView, zoom }, {}, {
    default: () => {
      return `${each(markerLocations, (location) => {
        return `${validate_component(Marker, "Marker").$$render(
          $$result,
          {
            latLng: location.latLng,
            width: 10,
            height: 10
          },
          {},
          {
            default: () => {
              return `<img${add_attribute("src", pin, 0)} alt="pin"> ${validate_component(Popup, "Popup").$$render($$result, {}, {}, {
                default: () => {
                  return `Latitud: ${escape(location.latLng[0])} <br>
					Longitud: ${escape(location.latLng[1])} <br>
					Imei: ${escape(location.imei)} <br>
					Último registro: ${escape(getTimeFromISOString(location.date))}`;
                }
              })} `;
            }
          }
        )}`;
      })}`;
    }
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iR_u5S_8.js.map
