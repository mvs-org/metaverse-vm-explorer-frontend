/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTx
// ====================================================

export interface getTx_price {
  __typename: "Price";
  current_USD: number | null;
}

export interface getTx_tx_receipt_logs_decoded {
  __typename: "DecodedLog";
  name: string | null;
  signature: string | null;
  values: (any | null)[] | null;
}

export interface getTx_tx_receipt_logs {
  __typename: "Log";
  address: string | null;
  data: string | null;
  topics: (string | null)[] | null;
  decoded: getTx_tx_receipt_logs_decoded | null;
}

export interface getTx_tx_receipt {
  __typename: "TxReceipt";
  status: boolean | null;
  gasUsed: string | null;
  logs: (getTx_tx_receipt_logs | null)[] | null;
}

export interface getTx_tx_decoded {
  __typename: "DecodedTx";
  name: string | null;
  arguments: (any | null)[] | null;
  signature: string | null;
}

export interface getTx_tx {
  __typename: "Tx";
  hash: string | null;
  blockNumber: number | null;
  blockHash: string | null;
  from: string | null;
  to: string | null;
  input: string | null;
  confirmedAt: number | null;
  creates: string | null;
  value: string | null;
  raw: string | null;
  receipt: getTx_tx_receipt | null;
  gasPrice: string | null;
  gas: string | null;
  decoded: getTx_tx_decoded | null;
}

export interface getTx {
  price: getTx_price | null;
  tx: getTx_tx | null;
}

export interface getTxVariables {
  hash: string;
}
