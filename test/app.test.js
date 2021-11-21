const  options = require('../bin/options'); 

const parsedArgs = (args) => {
  const argvs = options(args);
  return{
      input: argvs.input,
      output: argvs.output, 
      lang: argvs.lang
  };
};

describe("testing parsing arguments", () => {
  const defaultOptions = {
    input: 'path',
    output: './dist',
    lang: 'en_CA'
  }

  test ('passing single arguement', () => {
    expect(parsedArgs(['-i','path'])).toEqual(defaultOptions);
  })

  test('full arguement options', () => {
    expect(parsedArgs(['-i','path', '-o', 'dist', '--lang','en_CA'])).toEqual({
      input: 'path',
      output: 'dist',
      lang: 'en_CA'
    });
  });
});