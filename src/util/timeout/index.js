export default function(timeout) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res();
		}, timeout);
	});
}
