/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Messenger, MessengerInterface } from "../Messenger";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numOfPendingLimits",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "MessageConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositInWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPending",
        type: "bool",
      },
    ],
    name: "NewMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "limits",
        type: "uint256",
      },
    ],
    name: "NumOfPendingLimitsChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "accept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limits",
        type: "uint256",
      },
    ],
    name: "changeNumOfPendingLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwnMessages",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositInWei",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isPending",
            type: "bool",
          },
        ],
        internalType: "struct Messenger.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numOfPendingLimits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162001e7a38038062001e7a8339818101604052810190620000299190620001e0565b620000746040518060400160405280602081526020017f48657265206973206d7920666972737420736d61727420636f6e7472616374218152506200009260201b62000c5c1760201c565b620000846200013560201b60201c565b8060018190555050620002da565b6200013281604051602401620000a99190620002b6565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200017760201b60201c565b50565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080fd5b6000819050919050565b620001ba81620001a5565b8114620001c657600080fd5b50565b600081519050620001da81620001af565b92915050565b600060208284031215620001f957620001f8620001a0565b5b60006200020984828501620001c9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200024e57808201518184015260208101905062000231565b838111156200025e576000848401525b50505050565b6000601f19601f8301169050919050565b6000620002828262000212565b6200028e81856200021d565b9350620002a08185602086016200022e565b620002ab8162000264565b840191505092915050565b60006020820190508181036000830152620002d2818462000275565b905092915050565b611b9080620002ea6000396000f3fe60806040526004361061007b5760003560e01c8063837106bb1161004e578063837106bb1461010c5780638da5cb5b14610135578063acdb8efd14610160578063b38854be1461018b5761007b565b806313e262711461008057806319b05f491461009c57806339869bc3146100c557806356f66282146100f0575b600080fd5b61009a6004803603810190610095919061123a565b6101a2565b005b3480156100a857600080fd5b506100c360048036038101906100be91906112cc565b6104a8565b005b3480156100d157600080fd5b506100da6106df565b6040516100e79190611308565b60405180910390f35b61010a600480360381019061010591906112cc565b6106e5565b005b34801561011857600080fd5b50610133600480360381019061012e91906112cc565b61091c565b005b34801561014157600080fd5b5061014a6109ed565b6040516101579190611344565b60405180910390f35b34801561016c57600080fd5b50610175610a11565b604051610182919061156b565b60405180910390f35b34801561019757600080fd5b506101a0610c1a565b005b600154600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610225576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021c90611610565b60405180910390fd5b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610275919061165f565b925050819055506102bd6040518060400160405280601d81526020017f257320706f73747320746578743a5b25735d20746f6b656e3a5b25645d000000815250338434610cf5565b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200134815260200142815260200184815260200160011515815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030155608082015181600401908051906020019061043f929190610fdf565b5060a08201518160050160006101000a81548160ff02191690831515021790555050507f6b8f49facd5e00a27899ac1ac6cd3edeb40299f83f03eac03a0c04e7a90590963382344286600160405161049c9695949392919061175c565b60405180910390a15050565b6104b181610d97565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610504576105036117c4565b5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820180546105ed90611822565b80601f016020809104026020016040519081016040528092919081815260200182805461061990611822565b80156106665780601f1061063b57610100808354040283529160200191610666565b820191906000526020600020905b81548152906001019060200180831161064957829003601f168201915b505050505081526020016005820160009054906101000a900460ff161515151581525050905061069e81602001518260400151610f05565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d2878160200151836040516106d3929190611854565b60405180910390a15050565b60015481565b6106ee81610d97565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610741576107406117c4565b5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201805461082a90611822565b80601f016020809104026020016040519081016040528092919081815260200182805461085690611822565b80156108a35780601f10610878576101008083540402835291602001916108a3565b820191906000526020600020905b81548152906001019060200180831161088657829003601f168201915b505050505081526020016005820160009054906101000a900460ff16151515158152505090506108db81600001518260400151610f05565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d287816020015183604051610910929190611854565b60405180910390a15050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a1906118c9565b60405180910390fd5b806001819055507ff4add848113971c4866581c1df1951b8665a05140021ce0d344d1e823b8133c86001546040516109e29190611308565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610c1157838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482018054610b6590611822565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9190611822565b8015610bde5780601f10610bb357610100808354040283529160200191610bde565b820191906000526020600020905b815481529060010190602001808311610bc157829003601f168201915b505050505081526020016005820160009054906101000a900460ff16151515158152505081526020019060010190610a72565b50505050905090565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b610cf281604051602401610c7091906118e9565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610fb6565b50565b610d9184848484604051602401610d0f949392919061190b565b6040516020818303038152906040527f91d1112e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610fb6565b50505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610dea57610de96117c4565b5b906000526020600020906006020190508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e83906119d0565b60405180910390fd5b600115158160050160009054906101000a900460ff16151514610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb90611a62565b60405180910390fd5b60008160050160006101000a81548160ff0219169083151502179055505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610f2b90611ab3565b60006040518083038185875af1925050503d8060008114610f68576040519150601f19603f3d011682016040523d82523d6000602084013e610f6d565b606091505b5050905080610fb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa890611b3a565b60405180910390fd5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054610feb90611822565b90600052602060002090601f01602090048101928261100d5760008555611054565b82601f1061102657805160ff1916838001178555611054565b82800160010185558215611054579182015b82811115611053578251825591602001919060010190611038565b5b5090506110619190611065565b5090565b5b8082111561107e576000816000905550600101611066565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6110e9826110a0565b810181811067ffffffffffffffff82111715611108576111076110b1565b5b80604052505050565b600061111b611082565b905061112782826110e0565b919050565b600067ffffffffffffffff821115611147576111466110b1565b5b611150826110a0565b9050602081019050919050565b82818337600083830152505050565b600061117f61117a8461112c565b611111565b90508281526020810184848401111561119b5761119a61109b565b5b6111a684828561115d565b509392505050565b600082601f8301126111c3576111c2611096565b5b81356111d384826020860161116c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611207826111dc565b9050919050565b611217816111fc565b811461122257600080fd5b50565b6000813590506112348161120e565b92915050565b600080604083850312156112515761125061108c565b5b600083013567ffffffffffffffff81111561126f5761126e611091565b5b61127b858286016111ae565b925050602061128c85828601611225565b9150509250929050565b6000819050919050565b6112a981611296565b81146112b457600080fd5b50565b6000813590506112c6816112a0565b92915050565b6000602082840312156112e2576112e161108c565b5b60006112f0848285016112b7565b91505092915050565b61130281611296565b82525050565b600060208201905061131d60008301846112f9565b92915050565b600061132e826111dc565b9050919050565b61133e81611323565b82525050565b60006020820190506113596000830184611335565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611394816111fc565b82525050565b6113a381611296565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113e35780820151818401526020810190506113c8565b838111156113f2576000848401525b50505050565b6000611403826113a9565b61140d81856113b4565b935061141d8185602086016113c5565b611426816110a0565b840191505092915050565b60008115159050919050565b61144681611431565b82525050565b600060c083016000830151611464600086018261138b565b506020830151611477602086018261138b565b50604083015161148a604086018261139a565b50606083015161149d606086018261139a565b50608083015184820360808601526114b582826113f8565b91505060a08301516114ca60a086018261143d565b508091505092915050565b60006114e1838361144c565b905092915050565b6000602082019050919050565b60006115018261135f565b61150b818561136a565b93508360208202850161151d8561137b565b8060005b85811015611559578484038952815161153a85826114d5565b9450611545836114e9565b925060208a01995050600181019050611521565b50829750879550505050505092915050565b6000602082019050818103600083015261158581846114f6565b905092915050565b600082825260208201905092915050565b7f54686520726563656976657220686173207265616368656420746865206e756d60008201527f626572206f662070656e64696e67206c696d6974730000000000000000000000602082015250565b60006115fa60358361158d565b91506116058261159e565b604082019050919050565b60006020820190508181036000830152611629816115ed565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061166a82611296565b915061167583611296565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116aa576116a9611630565b5b828201905092915050565b6000819050919050565b60006116da6116d56116d0846111dc565b6116b5565b6111dc565b9050919050565b60006116ec826116bf565b9050919050565b60006116fe826116e1565b9050919050565b61170e816116f3565b82525050565b600061171f826113a9565b611729818561158d565b93506117398185602086016113c5565b611742816110a0565b840191505092915050565b61175681611431565b82525050565b600060c0820190506117716000830189611335565b61177e6020830188611705565b61178b60408301876112f9565b61179860608301866112f9565b81810360808301526117aa8185611714565b90506117b960a083018461174d565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061183a57607f821691505b6020821081141561184e5761184d6117f3565b5b50919050565b60006040820190506118696000830185611705565b61187660208301846112f9565b9392505050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b60006118b360148361158d565b91506118be8261187d565b602082019050919050565b600060208201905081810360008301526118e2816118a6565b9050919050565b600060208201905081810360008301526119038184611714565b905092915050565b600060808201905081810360008301526119258187611714565b90506119346020830186611335565b81810360408301526119468185611714565b905061195560608301846112f9565b95945050505050565b7f4f6e6c79207468652072656365697665722063616e20636f6e6669726d4d657360008201527f7361676520746865206d65737361676500000000000000000000000000000000602082015250565b60006119ba60308361158d565b91506119c58261195e565b604082019050919050565b600060208201905081810360008301526119e9816119ad565b9050919050565b7f54686973206d6573736167652068617320616c7265616479206265656e20636f60008201527f6e6669726d656400000000000000000000000000000000000000000000000000602082015250565b6000611a4c60278361158d565b9150611a57826119f0565b604082019050919050565b60006020820190508181036000830152611a7b81611a3f565b9050919050565b600081905092915050565b50565b6000611a9d600083611a82565b9150611aa882611a8d565b600082019050919050565b6000611abe82611a90565b9150819050919050565b7f4661696c656420746f20776974686472617720415641582066726f6d20636f6e60008201527f7472616374000000000000000000000000000000000000000000000000000000602082015250565b6000611b2460258361158d565b9150611b2f82611ac8565b604082019050919050565b60006020820190508181036000830152611b5381611b17565b905091905056fea264697066735822122016f49f10f7ee6006f60e8b4a95a95fb2ef7367436fc1db4ad9abea95bb1cbb4164736f6c63430008090033";

type MessengerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Messenger__factory extends ContractFactory {
  constructor(...args: MessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _numOfPendingLimits: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Messenger> {
    return super.deploy(
      _numOfPendingLimits,
      overrides || {}
    ) as Promise<Messenger>;
  }
  override getDeployTransaction(
    _numOfPendingLimits: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_numOfPendingLimits, overrides || {});
  }
  override attach(address: string): Messenger {
    return super.attach(address) as Messenger;
  }
  override connect(signer: Signer): Messenger__factory {
    return super.connect(signer) as Messenger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessengerInterface {
    return new utils.Interface(_abi) as MessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Messenger {
    return new Contract(address, _abi, signerOrProvider) as Messenger;
  }
}
