# Property
The property module and its related classes are for dealing with a property with relation to its finances, whether renting or flipping.

## How to use
### Installation
`npm install @votemike/property` or `yarn add @votemike/property`

### Examples
```js
const mortgageFee = new Fee(1495);
const valuationFee = new Fee(195);
const mortgage = new Finance(200000, false, 35, 2.45, [mortgageFee, valuationFee]);
const bridgingLoan = new Finance(5000, true, 2, 8, []);
const insurance = new Payment(45, 'monthly');
const room1 = new Rental(600, 9);
const room2 = new Rental(550, 0);
const property = new Property([mortgage, bridgingLoan], [insurance], [room1, room2]);

console.log(property.calculateMonthlyProfit()); // 416.53
```
If you have stringified the Property, you can reconstruct it with `JSON.parse(jsonString, Property.reviver)`.

## Assumptions
* Only one currency is used throughout the classes
* The currency has 100 sub-units

## TODO
* Add multiple currency support
* Add name/label for fees, properties, finances
* Add tests to test TS typing
* Linting and all that jazz

### Finance
* Teaser length/expiry (get calculateTotalCostOfFinance() working with teaser rate)

### Property
* Value
* Leasehold
* Lease Expiry
* Lease Extension Cost
* Refurbishment

## More
No guarantee is given and no responsibility taken for inaccuracies.
