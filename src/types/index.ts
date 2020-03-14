import crypto from "crypto";

export interface Signature {
  hash: string;
  privateKey: string;
  clientId: string;
}

export interface Transaction {
  transactionId: string;
  reference: string;
  amount: number;
  currencyCode: CurrencyCode;
}

export interface HashType {
  algorithm: string;
  encoding: crypto.Utf8AsciiLatin1Encoding;
  digestEncoding: crypto.HexBase64Latin1Encoding;
}

export enum CurrencyCode {
  COP = "COP",
  USD = "USD"
}
