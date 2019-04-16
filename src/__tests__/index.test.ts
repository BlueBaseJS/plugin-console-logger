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



// describe('Filters test specifications', () => {
// 	describe('add filter', () => {
// 		it('should run fine', () => {
// 			const func = () => undefined;
// 			BR.Filters.add('test.hook', func);
// 			expect(BR.Filters.data.has('test.hook')).toEqual(true);
// 		});
// 		it('should have length 2 of test.hook', () => {
// 			const two = 2;
// 			const func1 = prevVal => prevVal + two;

// 			BR.Filters.add('test.hook', func1, null, 1);

// 			expect(BR.Filters.data.get('test.hook').size).toEqual(two);
// 		});
// 		it('should add errorhook', () => {
// 			const func = () => {
// 				throw new Error('error occured');
// 			};

// 			BR.Filters.add('error.hook', func);

// 			expect(BR.Filters.get('error.hook').size).toEqual(1);
// 		});
// 		it('should not throw error b/c unnamed function ', () => {
// 			expect(() =>
// 				BR.Filters.add('test.hook', prevVal => {
// 					const number = 2;
// 					return prevVal + number;
// 				})
// 			).not.toThrow();
// 		});
// 		it('should throw error b/c function null', () => {
// 			expect(() => BR.Filters.add('', null)).toThrow();
// 		});
// 		it('should throw error b/c name in not given', () => {
// 			expect(() => BR.Filters.add('', null, value => value + 2)).toThrow();
// 		});
// 		it('should throw error b/c  function in not given', () => {
// 			expect(() => BR.Filters.add('', 'null', null)).toThrow();
// 		});
// 		it('should throw error b/c  function with same name is already available', () => {
// 			expect(() => BR.Filters.add('test.hook', function func() {})).toThrow();
// 		});
// 		it('should throw error b/c function undefined', () => {
// 			expect(() => BR.Filters.add('', undefined)).toThrow();
// 		});
// 		it('should throw error b/c hook undefined', () => {
// 			expect(() =>
// 				BR.Filters.add(undefined, function abc() {
// 					return 2;
// 				})
// 			).toThrow();
// 		});
// 	});