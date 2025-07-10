import { expect, test} from '@playwright/test';

test.describe.parallel('API tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
      

    test('Assert responce status', async ({request}) => {
        const response = await request.get(`${baseURL}/users/1`);
        expect(response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
    })

    test('Assert Invalid Endpoint', async ({request}) =>{
        const response = await request.get(`${baseURL}/users/non-existing-endpoint`);
        expect(response.status()).toBe(404);
    })

    test('Get user detail', async ({request}) =>{
        const response = await request.get(`${baseURL}/users/1`);
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.id).toBe(1);
        expect(responseBody.name).toContain('Leonne Graham');
    })

    test('Post request-create new user', async ({request}) =>{
        const response = await request.post(`${baseURL}/users` ,{
        data: {
            name: 'test',
        }
    })
    const responseBody = JSON.parse(await response.text());
    console.log('postac',responseBody);
    expect(responseBody.name).toContain('test');
})
    // test('Post request - Login', async ({request}) => {
    //     const response = await request.post(`https://dummyjson.com/auth/login`, {
    //         data: {
    //             username: 'kminchelle',
    //             password: '0lelplR'
    //           },
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //     })
    //     const responseBody = JSON.parse(await response.text())
    //     expect(response.status()).toBe(200);
    // })
    test('Put request-update user', async ({request}) => {
        const response = await request.put(`${baseURL}/users/1`, {
            data: {
                name: 'Ann',
            }
        })
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.name).toContain('Ann');
    })
    test('Delete -delete an user', async ({request}) => {
        const response = await request.delete(`${baseURL}/users/2`);
        expect(response.status()).toBe(204);
    })
})