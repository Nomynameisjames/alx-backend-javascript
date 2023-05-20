/* suing the function sendPaymentRequestToApi from 3-payment.js
 * create a test with an updated version of calculateNumber
 * make sure to revert the function after the test
 * make sure to cover all possible cases
 */
const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi function', () => {
  const spyUtils = sinon.spy(Utils, 'calculateNumber');

  it('validate the usage of the Utils function', () => {
    const myStub = sinon.stub((Utils, 'calculateNumber'));
    myStub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    chai.expect(spyUtils.calledOnce).to.be.true;
    chai.expect(spyUtils.calledWith('The total is: 10')).to.be.true;
    myStub.restore();
    spyUtils.restore();
  });
});
