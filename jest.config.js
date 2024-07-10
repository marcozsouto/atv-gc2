/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@routes/(.*)": "<rootDir>/src/routes/$1",
    "@services/(.*)": "<rootDir>/src/api/services/$1",
    "@middlewares/(.*)": "<rootDir>/src/api/middlewares/$1",
  },
};
