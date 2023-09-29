var queryString = window.location.hash.slice(1);
var params = new URLSearchParams(queryString);
var accessToken = params.get('access_token');

// you can also get the state param if you're using it:
var state = params.get('state');

document.querySelector('#app').innerHTML = `
<h1>Hello</h1>
<button id="connect">connect</button>
<h2>token</h2>
${accessToken}
`;

document.querySelector('#connect').addEventListener('click', () => {
  const url = new URL('https://itch.io/user/oauth');
  url.searchParams.append('client_id', '85d82bb5b894b1b9a9288cf99a8287c5');
  url.searchParams.append('scope', 'profile');
  url.searchParams.append(
    'redirect_uri',
    'https://vitejs-vite-rrqigu.vercel.app/'
  );
  window.location.replace(url);
});
