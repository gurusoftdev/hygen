const context = require('../context')

describe('context', () => {
  it('should populate with capitalized keys', () => {
    expect(context({ name: 'foobar' })).toMatchSnapshot()
  })
  it('allows helpers to be initialized with current context',()=>{
    const helpers = (args,context) => ({
      testArgs: () => args,
      testCtx: () => context
    })
    const locals = {}
    const config = {
      helpers
    }
    const ctx = context(locals,config);
    expect(typeof ctx.h.testArgs).toBe('function');
    expect(typeof ctx.h.testCtx).toBe('function');
    expect(ctx.h.testArgs()).toBe(locals);
    expect(ctx.h.testCtx()).toBe(config);
  })
})
