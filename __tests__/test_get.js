const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(201);
  });
});


// 1505506418:AAE-JEBt2SWCD6AYnCDDMC94lFcCGQDuQ0U
// -444343642

// https://api.telegram.org/bot$token/sendMessage?chat_id=$chat&text=Hello+World

// https://api.telegram.org/bot1505506418:AAE-JEBt2SWCD6AYnCDDMC94lFcCGQDuQ0U/sendMessage?chat_id=-1001204782215&text=Hello+World


// - name: Telegram
// uses: appleboy/telegram-action@master
// with:
//  to: ${{ secrets.TELEGRAM_TO }}
//  token: ${{ secrets.TELEGRAM_TOKEN }}
//  message: ${{ steps.tests.outputs.test }}