import { c as create_ssr_component, g as get_store_value, a as subscribe, d as add_attribute, e as escape, v as validate_component, b as each, f as getContext, s as setContext, o as onDestroy } from './ssr-CPRE0PQn.js';
import { L as Leaflet, M as Marker, p as pin, P as Popup } from './pin-B1IPIofj.js';
import { p as page } from './stores-CukRVnx0.js';
import { w as writable } from './index-DV0ZTojg.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/es.js';

const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { latLngC1 } = $$props;
  let { latLngC2 } = $$props;
  let line;
  let lineElement;
  const { getMap } = getContext("map");
  getMap();
  setContext("layer", {
    // L.Marker inherits from L.Layer
    getLayer: () => line
  });
  onDestroy(() => {
    line?.remove();
    line = void 0;
  });
  if ($$props.latLngC1 === void 0 && $$bindings.latLngC1 && latLngC1 !== void 0)
    $$bindings.latLngC1(latLngC1);
  if ($$props.latLngC2 === void 0 && $$bindings.latLngC2 && latLngC2 !== void 0)
    $$bindings.latLngC2(latLngC2);
  {
    if (line && latLngC1 && latLngC2) {
      let lineMap = [latLngC1, latLngC2];
      line.setLatLngs(lineMap);
    }
  }
  return `<div${add_attribute("this", lineElement, 0)}>${line ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
const DateTimePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { holder = "" } = $$props;
  let { onChange } = $$props;
  let inputElement;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.holder === void 0 && $$bindings.holder && holder !== void 0)
    $$bindings.holder(holder);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  return `<input class="text-black p-1 rounded-md w-full" type="text"${add_attribute("placeholder", holder, 0)}${add_attribute("value", value, 0)} readonly${add_attribute("this", inputElement, 0)}>`;
});
const home = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK8SURBVHic7drLSxVxGMbx580uUghGgXQjIyiIiiAigooWEW6CooSglu0Mgv4CaVXLwE2rFuk+IzBaRG2ioOhGUCDdqIQiuhllqN8WhymbjseZc34zr+LvA26OM3Oe52Xm58zxSFEURZEPYCWwxjtH6YBmoJe/bgPt3rlKAbQCN/nfELDFO1+hgGXA/SrlE5+AXd45CwGsBQZrlE/8BA555w0K2Aa8z1A+MQoc984dBLAX+JqjfGIc6PbO3xDgGPCrjvITnQPmeHfJDTgJjDVYPnERmOfdKRPAgLOBik90BVjo3a8mYD7QV0D5xB1gqXfPqoBFwECB5RNPgFXeff8BLAFulVA+8RJY791bkgS0A89KLJ/4COzwLr8ReONQPjEMdHiV3wN8diyfGAGOlF3+IPDDufhE48Cpssp3Ee4GJ7QzRRY3oNu7YQYXgLmhyzcB53175XIJaM7SzTKUXyCpT9JMe0a/IemAmX2ptVHNAQCLJV2WtDNcrlI9ltRhZu8m22DSAQDLJQ1I2lxAsDK9kLTPzAar/bLqAIANkq5KCnHPfa/B/bcGyDCkypnwaMotge3Ah1CrUaPJQ+Wg8oHr7vTx56TebL+k65Km5yNnY1olXQMOT3zxz99LoEXSOkmnJznAJklHC4sXVp8qC2A1q4EWM/uW64hAZz3nXaNN6jzdO7Mef+Z92BiYywCAHuB56qfHI0vYe+bs2iSl/yvc5hEkXgLeAbzN+gF4rQG9ku6mXnvqEcRlAGbWL6nf473TZv0lEAfgHcBb4WsAEOJ5vjBlLILp1X5amfWXQByAdwBvcQDeAbzFAXgH8BYH4B3AW54BjBSWIrzMWfMM4KGk0fxZSjcq6UHWjTMPwMxeSToh6XsdocoyLKnLzF5n3WHKL0ikUfn6yQpJTXn3LdiYpLdmNhPO0iiKounhNxpIz71JZlYJAAAAAElFTkSuQmCC";
const css = {
  code: "#map.svelte-sbtl6z{height:calc(100vh - 90px);cursor:n}.marker.svelte-sbtl6z{width:25px;height:25px}",
  map: null
};
var zoom = 15;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showFilters, $$unsubscribe_showFilters;
  const url = get_store_value(page).url;
  const imei = url.searchParams.get("imei");
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  var initialView = [lat, lon];
  let rangeValue = 0;
  let maxValue = 0;
  const showFilters = writable(false);
  $$unsubscribe_showFilters = subscribe(showFilters, (value) => $showFilters = value);
  let startDate = "";
  let endDate = "";
  var markerShows = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `  <nav class="bg-gray-800 text-white p-4 flex justify-between items-center"><div class="flex items-center"><button class="text-l font-semibold flex justify-center"><img${add_attribute("src", home, 0)} width="20" alt="pin"></button> <span class="w-[20px]"></span> <div class="text-lg font-semibold">Histórico de Ubicaciones del vehiculo <span class="text-green-300">${escape(imei)}</span></div></div> <div class="hidden md:flex space-x-4"><div class="flex flex-col"><label for="start-date" class="text-sm" data-svelte-h="svelte-aeh2th">De la fecha</label> ${validate_component(DateTimePicker, "DateTimePicker").$$render(
      $$result,
      {
        holder: "Seleccione incio",
        onChange: (date) => startDate = date,
        value: startDate
      },
      {
        value: ($$value) => {
          startDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-col"><label for="end-date" class="text-sm" data-svelte-h="svelte-mk3ua8">Hasta la fecha</label> ${validate_component(DateTimePicker, "DateTimePicker").$$render(
      $$result,
      {
        holder: "Seleccione termino",
        onChange: (date) => endDate = date,
        value: endDate
      },
      {
        value: ($$value) => {
          endDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-2ma2gb">Filtrar</button></div> <div class="md:hidden"><button class="focus:outline-none" data-svelte-h="svelte-1yzyror"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button></div></nav> ${$showFilters ? `<div class="md:hidden bg-gray-800 text-white p-4 flex flex-col space-y-4"><div class="flex flex-col"><label for="start-date-mobile" class="text-sm" data-svelte-h="svelte-1uhjdoy">De la fecha</label> ${validate_component(DateTimePicker, "DateTimePicker").$$render(
      $$result,
      {
        onChange: (date) => startDate = date,
        value: startDate
      },
      {
        value: ($$value) => {
          startDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-col"><label for="end-date-mobile" class="text-sm" data-svelte-h="svelte-30hv7b">Hasta la fecha</label> ${validate_component(DateTimePicker, "DateTimePicker").$$render(
      $$result,
      {
        onChange: (date) => endDate = date,
        value: endDate
      },
      {
        value: ($$value) => {
          endDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-2ma2gb">Filtrar</button></div>` : ``} <div class="${["relative z-[401] bg-gray-100", "invisible"].join(" ").trim()}">  <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[700px] h-[100px] bg-white rounded-lg shadow-lg flex items-center justify-between p-4"><button class="${[
      "rounded-full px-4 py-2",
      " bg-gray-400  text-gray-600 cursor-not-allowed "
    ].join(" ").trim()}" ${"disabled"}>Atras</button> <div class="flex flex-col items-center w-full mx-4"><label class="mb-2 text-lg font-bold">${escape(rangeValue)} de ${escape(maxValue)}</label> <input type="range" min="0"${add_attribute("max", maxValue, 0)} class="w-full"${add_attribute("value", rangeValue, 0)}></div> <button class="${[
      "rounded-full px-4 py-2",
      " bg-gray-400  text-gray-600 cursor-not-allowed "
    ].join(" ").trim()}" ${"disabled"}>Sig.</button></div></div> <div id="map" class="svelte-sbtl6z">${validate_component(Leaflet, "Leaflet").$$render($$result, { view: initialView, zoom }, {}, {
      default: () => {
        return `${each(markerShows, (location, index) => {
          return `${index < markerShows.length - 1 ? `${validate_component(Line, "Line").$$render(
            $$result,
            {
              latLngC1: location.latLng,
              latLngC2: markerShows[index + 1].latLng
            },
            {},
            {}
          )}` : ``} ${validate_component(Marker, "Marker").$$render(
            $$result,
            {
              latLng: location.latLng,
              width: 20,
              height: 20
            },
            {},
            {
              default: () => {
                return `<img${add_attribute("src", pin, 0)} alt="pin" class="marker svelte-sbtl6z"> ${validate_component(Popup, "Popup").$$render($$result, {}, {}, {
                  default: () => {
                    return `Latitud: ${escape(location.latLng[0])} <br>
					Longitud: ${escape(location.latLng[1])} <br>
					Fecha: ${escape(location.date)} `;
                  }
                })} `;
              }
            }
          )}`;
        })}`;
      }
    })} </div>`;
  } while (!$$settled);
  $$unsubscribe_showFilters();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-R_pE59Y8.js.map
