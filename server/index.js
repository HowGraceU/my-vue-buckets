const { resolve } = require('path');
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');
const Router = require('@koa/router');
const { createBundleRenderer } = require('vue-server-renderer');

const app = new Koa();
const router = new Router();

app.use(serve('.'));

const serverBundle = require(resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(resolve(__dirname, './template.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
	runInNewContext: false,
	template,
	clientManifest
});

router
	.get('*', async(ctx, next) => {
		try {
			let context = {
				url: ctx.url
			};

			const html = await renderer.renderToString(context);
			ctx.body = html;
		} catch (e) {
			if (e.code === 404) {
				next();
			}
		}
	})
	.get('/version', (ctx, next) => {
		let { dependencies: { vue }} = JSON.parse(fs.readFileSync(resolve(__dirname, '../package.json')));
		ctx.body = vue;
	})
	.get('/package', (ctx, next) => {
		let { dependencies, devDependencies } = JSON.parse(fs.readFileSync(resolve(__dirname, '../package.json')));
		ctx.body = { ...dependencies, ...devDependencies };
	});

app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000, () => {
		console.log('server start at http://localhost:3000/');
	});
