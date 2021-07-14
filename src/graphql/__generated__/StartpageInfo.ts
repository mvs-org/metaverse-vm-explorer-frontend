/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StartpageInfo
// ====================================================

export interface StartpageInfo_price {
  __typename: "Price";
  current_USD: number | null;
  change7d_USD: number | null;
  change24h_USD: number | null;
  low24h_USD: number | null;
  high_USD: number | null;
}

export interface StartpageInfo_blocks {
  __typename: "Block";
  hash: string | null;
  number: number | null;
  timestamp: number | null;
}

export interface StartpageInfo_txs {
  __typename: "Tx";
  hash: string | null;
  blockNumber: number | null;
  from: string | null;
  to: string | null;
  confirmedAt: number | null;
}

export interface StartpageInfo {
  price: StartpageInfo_price | null;
  blocks: (StartpageInfo_blocks | null)[] | null;
  txs: (StartpageInfo_txs | null)[] | null;
}
