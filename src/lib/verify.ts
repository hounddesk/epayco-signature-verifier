import { Signature, Transaction, HashType } from "../types";
import defaultHashType from "./hashTypes";
import hash from "./hash";

/**
 * Verifies the transaction integrity against the provided signature.
 * @param signature
 * @param transaction
 * @param separator
 * @param hashType
 * @returns boolean
 */
export default function verify({
  signature,
  transaction,
  separator,
  hashType = defaultHashType
}: {
  signature: Signature;
  transaction: Transaction;
  separator: string;
  hashType?: HashType;
}) {
  const signatureToVerify = `${signature.clientId}${separator}${signature.privateKey}${separator}${transaction.reference}${separator}${transaction.transactionId}${separator}${transaction.amount}${separator}${transaction.currencyCode}`;
  const hashedTransaction = hash({ data: signatureToVerify, hashType });
  return hashedTransaction === signature.hash;
}
