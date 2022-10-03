# AvalancheDApp
Avalanche上で動作するDApp開発用のリポジトリです。

### --saveの意味
アプリの開発時のみ必要なパッケージ(テストツールなど)のインストールに使用するオプション指定です。  
アプリ自体が動くのに必要なパッケージのインストールには--saveまたは何も指定せずにnpm installを使用します。  

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