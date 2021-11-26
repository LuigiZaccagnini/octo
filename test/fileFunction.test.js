/* eslint-disable no-undef */
const ff = require('../bin/fileFunctions');
const ReactTestRenderer = require('react-test-renderer');

test('Checks if it can add a directory', () => {
  expect(ff.addDirectory('./dist')).toBeUndefined();
});

it('Markdown to HTML renders correctly', () => { 
ff.markdownToHTML('test/markdownTest.md').then(html => {
  const tree = ReactTestRenderer.create(html).toJSON();
  expect(tree).toMatchSnapshot();
  });
});

it('Markdown to HTML renders correctly with language option', () => {
ff.markdownToHTML('test/markdownTest.md', 'It').then(html => {
  const tree = ReactTestRenderer.create(html).toJSON();
  expect(tree).toMatchSnapshot();
  });
});

it('TEXT to HTML renders correctly', () => { 
ff.textToHTML('test/testing.txt').then(html => {
  const tree = ReactTestRenderer.create(html).toJSON();
  expect(tree).toBeTruthy();
  });
});

test('Checks if it lineChecker filter without first line', () => {
  expect(ff.lineChecker('Hello World', false)).toBe('<p>Hello World</p>');
});

test('Checks if it lineChecker filter with first line', () => {
  expect(ff.lineChecker('Hello World', true)).toBe('<h1>Hello World</h1>');
});

test('Checks if it lineChecker filters a empty line', () => {
  expect(ff.lineChecker('', false)).toBe('<br />');
});