import 'reset-css';
import './css/index.scss';
import $ from 'jquery';

$(() => {
  const appElement = $('#app');
  appElement.addClass('app--loaded');
  console.info('Untitled corp - Demo init'); // eslint-disable-line no-console
});
