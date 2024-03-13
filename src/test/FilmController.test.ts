import { App } from "@/app";
import request from 'supertest';
import {expect, describe, it} from '@jest/globals';

describe("Film Controller tests", () => {
  it("tests GET /films endpoints", async () => {
    const response = await request(new App().server).get("/films");
    expect(response.body).toEqual({
      status: true,
      data: [
          {id: '1', name: 'The boy and the heron'},
          {id: '2', name: 'Poor Things'}
      ]
    });

    expect(response.statusCode).toBe(200);
  });
});