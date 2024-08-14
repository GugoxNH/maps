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
		client: {"start":"_app/immutable/entry/start.eb98d822.js","app":"_app/immutable/entry/app.4796d5f3.js","imports":["_app/immutable/entry/start.eb98d822.js","_app/immutable/chunks/scheduler.9a237aef.js","_app/immutable/chunks/singletons.7b7e3f04.js","_app/immutable/entry/app.4796d5f3.js","_app/immutable/chunks/scheduler.9a237aef.js","_app/immutable/chunks/index.6c2636d8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-DbjfLYWv.js')),
			__memo(() => import('./chunks/1-iWUgpgU4.js')),
			__memo(() => import('./chunks/2-DFzqdUdB.js')),
			__memo(() => import('./chunks/3-DrZWPOhK.js'))
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
