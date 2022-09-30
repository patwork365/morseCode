import {convertToMorse} from "./app";// importing the function from index.js
import {it,expect} from "@jest/globals" // import

it("convert 'hey there to morse'",() =>{
    const result = convertToMorse('hey there');
    expect(result).toBe(".....-.-- -......-..");
});