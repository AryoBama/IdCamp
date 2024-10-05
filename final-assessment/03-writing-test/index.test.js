import { it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js"

it("Should be correctly", () =>{
    
    const a = 1;
    const b = 2;

    const actualValue = sum(a,b);

    const expectedValue = 3;

    assert.equal(actualValue,expectedValue);
});