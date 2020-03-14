import crypto from "crypto";
import { HashType } from "../types";

export default function hash({
  data,
  hashType
}: {
  data: string;
  hashType: HashType;
}) {
  const hash = crypto.createHash(hashType.algorithm);
  return hash.update(data, hashType.encoding).digest(hashType.digestEncoding);
}
