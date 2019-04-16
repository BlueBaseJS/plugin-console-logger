import { BlueBase, 
	BootOptions 
} from '@bluebase/core';
import Plugin from '../index';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('@bluebase/plugin-console-logger')).toBeTruthy();
});


describe('Console Tests', () => {
	it('should logs output', async () => {
		const BB = new BlueBase();
		await BB.Plugins.register(Plugin);
		await BB.Filters.register(
			{
				event: 'bluebase.boot.end',
				value: (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
					BB.Logger.log();
					return BB
				}
			}
		)
		await BB.boot()
		jest.spyOn(global.console, 'log')
	})
	it('should logs output', async () => {
		const BB = new BlueBase();
		await BB.Plugins.register(Plugin);
		await BB.Filters.register(
			{
				event: 'bluebase.boot.end',
				value: (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
					BB.Logger.warn();
					return BB
				}
			}
		)
		await BB.boot()
		jest.spyOn(global.console, 'warn')
	})
	it('should logs output', async () => {
		const BB = new BlueBase();
		await BB.Plugins.register(Plugin);
		await BB.Filters.register(
			{
				event: 'bluebase.boot.end',
				value: (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
					BB.Logger.error('error');
					return BB
				}
			}
		)
		await BB.boot()
		jest.spyOn(global.console, 'error')
	})
	it('should logs output', async () => {
		const BB = new BlueBase();
		await BB.Plugins.register(Plugin);
		await BB.Filters.register(
			{
				event: 'bluebase.boot.end',
				value: (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
					BB.Logger.debug();
					return BB
				}
			}
		)
		await BB.boot()
		jest.spyOn(global.console, 'debug')
	})
	it('should logs output', async () => {
		const BB = new BlueBase();
		await BB.Plugins.register(Plugin);
		await BB.Filters.register(
			{
				event: 'bluebase.boot.end',
				value: (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
					BB.Logger.info();
					return BB
				}
			}
		)
		await BB.boot()
		jest.spyOn(global.console, 'info')
	})
})