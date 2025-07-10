const { test, request } = require('@playwright/test');

test('API Testing', async () => {
  const apiContext = await request.newContext();

  // 1. GET all countries
  const allCountries = await apiContext.get('https://restcountries.com/v3.1/all');
  console.log('All Countries Response Status:', allCountries.status());
  const allCountriesData = await allCountries.json();
  console.log('First country:', allCountriesData[0]?.name?.common);

  // 2. GET country by name
  const armenia = await apiContext.get('https://restcountries.com/v3.1/name/armenia');
  console.log('Armenia Response:', await armenia.json());

  // 3. GET country by alpha code
  const byCode = await apiContext.get('https://restcountries.com/v3.1/alpha/am');
  console.log('By Alpha Code:', await byCode.json());

  // 4. GET countries in Europe
  const europe = await apiContext.get('https://restcountries.com/v3.1/region/europe');
  console.log('European countries count:', (await europe.json()).length);

  // 5. POST request with body (to httpbin.org)
  const postResponse = await apiContext.post('https://httpbin.org/post', {
    data: {
      message: "Hello from Playwright!",
      test: true
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log('POST response:', await postResponse.json());
});
