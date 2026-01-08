import { test, expect } from '@playwright/test';


test.only('POST request', async ({request}) => {

const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}


}




)

expect(response.status()).toBe(200);

//     const text = await response.text();
// expect(text).toContain('1614');

console.log(await response.json());

}


);


test('API get request', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking')

    expect(response.status()).toBe(200);

    const text = await response.text();
expect(text).toContain('979');

console.log(await response.json());
}


);