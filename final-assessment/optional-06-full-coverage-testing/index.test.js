import { describe, it } from "node:test";
import assert from "node:assert";
import  sum  from "./index.js";

describe("Sum", () =>{
    it("Should sum correctly", () => {
        const a = 1;
        const b = 1;
        const expectedValue = 2;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });

    it("Should return 0 if string passed on param a", () => {
        const a = '1';
        const b = 1;
        const expectedValue = 0;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });

    it("Should return 0 if string passed on param b", () => {
        const a = 1;
        const b = '1';
        const expectedValue = 0;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });

    it("Should return 0 if string passed on both param", () => {
        const a = '1';
        const b = '1';
        const expectedValue = 0;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });

    it("Should return 0 if param a is negative", () => {
        const a = -9999;
        const b = 1;
        const expectedValue = 0;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });

    it("Should return 0 if param b is negative", () => {
        const a = 9999;
        const b = -1;
        const expectedValue = 0;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });

    it("Should return 0 if both param is negative", () => {
        const a = -9999;
        const b = -1;
        const expectedValue = 0;
        const actualValue = (sum(a,b));

        assert.equal(actualValue,expectedValue);
    });
})