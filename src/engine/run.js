const Iterator = require('./iterator');

module.exports = function(input, fn, opts) {
  const ittr = Iterator(input);

  let done = false;
  let brk = false;
  let i = 0;

  const after = function(items, end) {
    return function(v) {
      brk = brk || items.some(function(item, y) {
        return opts.after && opts.after(v[y], item, i++);
      });

      done = done || brk;

      return done ? end() : next(end);
    };
  };

  const next = function(end) {
    const items = ittr.next(opts.limit).filter(function(item) {
      done = done || item.done;
      return !item.done;
    });

    const call = opts.call || function(item) {
      return fn(item.value, item.key, input);
    };

    Promise.all(items.map(call)).then(after(items, end), end);
  };

  return new Promise(function(resolve, reject) {
    next(function(err, res) {
      return err ? reject(err) : resolve(res);
    });
  });
};