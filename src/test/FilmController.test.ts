import { App } from "@/app";
import request from "supertest";
import { expect, describe, it, afterAll } from "@jest/globals";

describe("Film Controller tests", () => {
  const app = new App().getServer();

  it("tests GET /films endpoints", async () => {
    const response = await request(app).get("/films");
    expect(response.body).toEqual({
      status: true,
      data: [
        { id: 1, name: "The boy and the heron" },
        { id: 2, name: "Poor Things" },
      ],
    });

    expect(response.statusCode).toBe(200);
  });

  it("tests POST /films endpoints", async () => {
    let body = { name: "Spider Man" };
    const response = await request(app).post("/films").send(body);
    expect(response.body).toEqual({
      status: true,
      data: {
        id: 3,
        name: body.name,
      },
    });

    expect(response.statusCode).toBe(200);
  });

  it("tests DLETE /films endpoints", async () => {
    const response = await request(app).delete("/films/1").send();

    expect(response.statusCode).toBe(204);
  });

  it("tests DLETE /films endpoint not found", async () => {
    const response = await request(app).delete("/films/100").send();

    expect(response.statusCode).toBe(404);
  });
});
