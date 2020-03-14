import crypto from 'crypto';
import verify from "../src/lib/verify";
import { CurrencyCode, Signature, Transaction } from "../src/types";

describe("Verifier test suite", function() {
  describe('successful verified', function(){
    it("when the signature hash and transaction hash are equal", function() {
      const signatureMock: Signature = {
        clientId: '123456',
        privateKey: 'really-secret-private-key',
        hash:'wait a second . . .'
      };
  
      const transactionMock:Transaction = {
        amount: 12000,
        reference: "16276156",
        currencyCode: CurrencyCode.USD,
        transactionId: "16276156"
      };
  
      const separator = '^';
      const signatureToVerify = `${signatureMock.clientId}${separator}${signatureMock.privateKey}${separator}${transactionMock.reference}${separator}${transactionMock.transactionId}${separator}${transactionMock.amount}${separator}${transactionMock.currencyCode}`;
  
      const defaultSHA256Hash = crypto.createHash('sha256');
      signatureMock.hash = defaultSHA256Hash.update(signatureToVerify, 'utf8').digest('hex');
  
      const transactionIsVerified = verify({
        signature: signatureMock,
        transaction: transactionMock,
        separator
      });
      
      expect(transactionIsVerified).toBeTruthy();
    });
  });

  describe('unsuccessful verified', function(){
    it("when the signature hash and transaction hash are different", function() {
      const signatureMock: Signature = {
        clientId: '123456',
        privateKey: 'really-secret-private-key',
        hash:'wait a second . . .'
      };
  
      const transactionMock:Transaction = {
        amount: 12000,
        reference: "16276156",
        currencyCode: CurrencyCode.USD,
        transactionId: "16276156"
      };
  
      const separator = '*';
      const signatureToVerify = `${signatureMock.clientId}${separator}${signatureMock.privateKey}${separator}${transactionMock.reference}${separator}${transactionMock.transactionId}${separator}${transactionMock.amount}${separator}${transactionMock.currencyCode}`;
  
      const defaultSHA256Hash = crypto.createHash('sha256');
      signatureMock.hash = defaultSHA256Hash.update(signatureToVerify, 'utf8').digest('hex');
  
      const transactionIsVerified = verify({
        signature: signatureMock,
        transaction: transactionMock,
        separator:'^'
      });
      
      expect(transactionIsVerified).toBeFalsy();
    });
    it("when the separator used for the signature and transaction hash are different", function() {
      const signatureMock: Signature = {
        clientId: '123456',
        privateKey: 'really-secret-private-key',
        hash:'wait a second . . .'
      };
  
      const transactionMock:Transaction = {
        amount: 12000,
        reference: "16276156",
        currencyCode: CurrencyCode.USD,
        transactionId: "16276156"
      };
  
      const separator = '*';
      const signatureToVerify = `${signatureMock.clientId}${separator}${signatureMock.privateKey}${separator}${transactionMock.reference}${separator}${transactionMock.transactionId}${separator}${transactionMock.amount}${separator}${transactionMock.currencyCode}`;
  
      const defaultSHA256Hash = crypto.createHash('sha256');
      signatureMock.hash = defaultSHA256Hash.update(signatureToVerify, 'utf8').digest('hex');
  
      const transactionIsVerified = verify({
        signature: signatureMock,
        transaction: transactionMock,
        separator:'^'
      });
      
      expect(transactionIsVerified).toBeFalsy();
    });
  });
});
