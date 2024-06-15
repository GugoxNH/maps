const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/apagado.png","img/historial.png","img/home.png","img/pin.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.33fd2a28.js","app":"_app/immutable/entry/app.6d5febab.js","imports":["_app/immutable/entry/start.33fd2a28.js","_app/immutable/chunks/scheduler.7d0fa860.js","_app/immutable/chunks/singletons.7c98622d.js","_app/immutable/entry/app.6d5febab.js","_app/immutable/chunks/scheduler.7d0fa860.js","_app/immutable/chunks/index.bbb90c98.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-DxBlYrxn.js')),
			__memo(() => import('./chunks/1-Gmmr7rj7.js')),
			__memo(() => import('./chunks/2-CWugw6YT.js')),
			__memo(() => import('./chunks/3-DTzaRPL5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/historial",
				pattern: /^\/historial\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
