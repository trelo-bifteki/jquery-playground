import 'reset-css';
import './css/index.scss';
import $ from 'jquery';

console.info('Hey there'); // eslint-disable-line no-console

$(() => {
  const appElement = $('#app');
  appElement.addClass('app--loaded');
  console.info('document loaded'); // eslint-disable-line no-console
});

export default (one, another) => one + another;
