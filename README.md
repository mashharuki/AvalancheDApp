# AvalancheDApp
Avalanche上で動作するDApp開発用のリポジトリです。

### --saveの意味
アプリの開発時のみ必要なパッケージ(テストツールなど)のインストールに使用するオプション指定です。  
アプリ自体が動くのに必要なパッケージのインストールには--saveまたは何も指定せずにnpm installを使用します。  

### Next.jsの雛形作成コマンド
`npx create-next-app frontend --ts --use-npm`

### テスト結果

```cmd
  Messenger
    Post
Here is my first smart contract!
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[1]
      ✔ Should emit an event on post (3014ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[10]
      ✔ Should send the correct amount of tokens (44ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[1]
      ✔ Should set the right Message (53ms)
    Accept
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[1]
      ✔ Should emit an event on accept (38ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[0]
      ✔ isPending must be changed (54ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[10]
      ✔ Should send the correct amount of tokens (39ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[1]
      ✔ Should revert with the right error if called in duplicate (77ms)
    Deny
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[1]
      ✔ Should emit an event on deny
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[0]
      ✔ isPending must be changed (53ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[10]
      ✔ Should send the correct amount of tokens (56ms)
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 posts text:[text] token:[1]
      ✔ Should revert with the right error if called in duplicate (44ms)


  11 passing (4s)
```

### スマートコントラクトをデプロイする方法
 `cd backend && npx hardhat run scripts/deploy.ts --network fuji`  

 レスポンスの一例
 ```cmd
 Deploying contract with the account: 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
 Contract deployed at: 0x67ADc29278d87D87b212C59fDffd2749fe7418c4
 Contract's fund is: BigNumber { value: "100" }
 ```

### ABI とは
📓 ABI (Application Binary Interface) はコントラクトの取り扱い説明書のようなものです。  
Web アプリケーションがコントラクトと通信するために必要な情報が,ABI ファイルに含まれている。

1. そのコントラクトに使用されている関数の名前
2. それぞれの関数にアクセスするため必要なパラメータとその型
3. 関数の実行結果に対して返るデータ型の種類

### トランザクションの一例

1. [0x8479ccc27ea6cb8b82019674ec483598f771e76404bf4fbacb42ff4161910863](https://testnet.avascan.info/blockchain/c/tx/0x8479ccc27ea6cb8b82019674ec483598f771e76404bf4fbacb42ff4161910863)
2. [0xa01cc0b643e990fec2a371ac1d5f6e7a7313e95053eb97cecf382370a25adf20](https://testnet.avascan.info/blockchain/c/tx/0xa01cc0b643e990fec2a371ac1d5f6e7a7313e95053eb97cecf382370a25adf20)