/* eslint-disable no-undef */
const ff = require('../bin/fileFunctions');
const ReactTestRenderer = require('react-test-renderer');

test('Checks if it can add a directory', () => {
  expect(ff.addDirectory('./dist')).toBeUndefined();
});

it('Markdown to HTML renders correctly', () => { 
ff.markdownToHTML('test/markdownTest.md').then(html => {
  const tree = ReactTestRenderer
    .create(html)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});

it('Markdown to HTML renders correctly with language option', () => {
ff.markdownToHTML('test/markdownTest.md', 'It').then(html => {
  const tree = ReactTestRenderer
    .create(html)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});

