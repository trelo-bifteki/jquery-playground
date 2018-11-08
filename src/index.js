import $ from 'jquery';

console.info('Hey there'); // eslint-disable-line no-console

$(() => {
  console.info('document loaded'); // eslint-disable-line no-console
});

export default (one, another) => one + another;
