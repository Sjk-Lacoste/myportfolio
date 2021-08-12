const uuidV1 = () => {
  const chars = '0123456789abcdefghijklmnop'.split('');

  let r;
  const uuid = [];
  const rnd = Math.random;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '1'; // version 1

  for (let i = 0; i < 36; i += 1) {
    if (!uuid[i]) {
      r = 0 | (rnd() * 16);
      uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r & 0xf];
    }
  }

  return uuid.join('');
};

module.exports = uuidV1;
