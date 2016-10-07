const test = require('ava');
const apr = require('../');

const timeout = require('./common/timeout');

test('fulfill []  waterfall', async (t) => {
  const then = timeout(4);
  const order = [];

  const output = await apr.waterfall([
    async () => {
      order.push('before');
      const res = await then(1 * 2);
      order.push('after');
      return res;
    },
    async (prev) => {
      order.push('before');
      const res = await then(prev * 2);
      order.push('after');
      return res;
    },
    async (prev) => {
      order.push('before');
      const res = await then(prev * 2);
      order.push('after');
      return res;
    },
    async (prev) => {
      order.push('before');
      const res = await then(prev * 2);
      order.push('after');
      return res;
    }
  ]);

  t.deepEqual(order, [
    'before',
    'after',
    'before',
    'after',
    'before',
    'after',
    'before',
    'after'
  ]);

  t.deepEqual(output, 16);
});

test('fulfill {} waterfall', async (t) => {
  const then = timeout(4);
  const order = [];

  const output = await apr.waterfall({
    a: async () => {
      order.push('before');
      const res = await then(1 * 2);
      order.push('after');
      return res;
    },
    b: async (prev) => {
      order.push('before');
      const res = await then(prev * 2);
      order.push('after');
      return res;
    },
    c: async (prev) => {
      order.push('before');
      const res = await then(prev * 2);
      order.push('after');
      return res;
    },
    d: async (prev) => {
      order.push('before');
      const res = await then(prev * 2);
      order.push('after');
      return res;
    }
  });

  t.deepEqual(order, [
    'before',
    'after',
    'before',
    'after',
    'before',
    'after',
    'before',
    'after'
  ]);

  t.deepEqual(output, 16);
});

test('fail [] waterfall', async (t) => {
  const then = timeout(4);

  t.throws(apr.waterfall([
    async () => {
      return await then(1 * 2);
    },
    async (prev) => {
      return await then(prev * 2);
    },
    async (prev) => {
      throw new Error('expected error');
    },
    async (prev) => {
      return await then(prev * 2);
    }
  ]));
});

test('fail {} waterfall', async (t) => {
  const then = timeout(4);

  t.throws(apr.waterfall({
    a: async () => {
      return await then(1 * 2);
    },
    b: async (prev) => {
      return await then(prev * 2);
    },
    c: async (prev) => {
      throw new Error('expected error');
    },
    d: async (prev) => {
      return await then(prev * 2);
    }
  }));
});
