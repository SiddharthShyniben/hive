export default function logger(devMode: boolean) {
	type Args = (Error | string)[];
	const argsToString = (args: Args) =>
		args.map((arg) => (arg instanceof Error ? arg.message : arg)).join(' ');
	const styleStr = (color: string) =>
		`color: black; background-color: ${color}; font-weight: bold; padding: 2px 5px;`;
	return {
		error(...error: Args) {
			if (!devMode) return;
			console.log('%cError', styleStr('#ff7f7f'), argsToString(error));
		},
		warn(...warning: Args) {
			if (!devMode) return;
			console.log('%cWarning', styleStr('#ffd800'), argsToString(warning));
		},
		log(...message: Args) {
			if (!devMode) return;
			console.log('%cInfo', styleStr('#00b7eb'), argsToString(message));
		}
	};
}
