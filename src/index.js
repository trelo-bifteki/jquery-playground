import 'reset-css';
import $ from 'jquery';

console.info('Hey there'); // eslint-disable-line no-console

$(() => {
  const appElement = $('#app');
  appElement.addStyle('visibility', 'normal');
  console.info('document loaded'); // eslint-disable-line no-console
});

export default (one, another) => one + another;
