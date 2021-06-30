export type AbiItemType = 'event' | 'function'

export interface AbiItem {
	anonymous: boolean
	inputs: {
		indexed: boolean
		internalType: string
		name: string
		type: string
	}[]
	name: string
	type: AbiItemType
}

export interface Contract {
	abi?: AbiItem[]
	bytecode?: string
	contractName?: string
	creationTransaction?: any
	logoURI?: string
	source?: string
}
