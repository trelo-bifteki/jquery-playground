import $ from 'jquery';

console.info('Hey there'); // eslint-disable-line no-console

const handler = $(() => {
  console.info('document loaded'); // eslint-disable-line no-console
});

export default handler;
