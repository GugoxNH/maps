const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/apagado.png","img/historial.png","img/home.png","img/loading.gif","img/pin.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.e4d185bd.js","app":"_app/immutable/entry/app.a9a15117.js","imports":["_app/immutable/entry/start.e4d185bd.js","_app/immutable/chunks/scheduler.7a3a151f.js","_app/immutable/chunks/singletons.697f2441.js","_app/immutable/entry/app.a9a15117.js","_app/immutable/chunks/scheduler.7a3a151f.js","_app/immutable/chunks/index.0def4ab9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-DHU1zWG0.js')),
			__memo(() => import('./chunks/1-DrqeFIr6.js')),
			__memo(() => import('./chunks/2-C7Lyzk10.js')),
			__memo(() => import('./chunks/3-DoiIpLAx.js'))
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
