# ToDo管理アプリケーションの作成
### 始めたての方へ
https://zenn.dev/jin237/articles/84c0d69198e1b6
以前に僕自身が書いた記事で，typescriptの環境構築を行いました．ここの環境構築とは，また別の方法で作っていますが，初心者の方は最初に上の記事をやってみても良いかと...これができている前提で始めます！

### 環境構築
前提として，**node.jsが**インストールされていることとしますー！
```terminal:temirnal
# node.jsのインストールされているかを確認
$ node -v
>> v14.18.1

# yarnはnpmと互換性があり，npmで使用していたプロジェクト設定ファイル（package.json）がそのまま使える．
# 今回はnpmを使ってyarnをグローバルにインストールする.(後者は省略形)
$ npm install --global yarn
$ npm i -g yarn
$ yarn -v
>> 1.22.17

# "todo_app"という名前でプロジェクトの大元を作成する
$ mkdir todo_app
$ cd todo_app
```

#### create react-appで起動まで持っていく．
、create-react-appでアプリを起動ができます．大抵，create-react-appをテンプレートとして起動します．

yarnでTypescriptやアプリの名前の名前を指定していきます．
```terminal:terminal
# todo-listというreacrプロジェクトを作っていきます．
$ yarn create react-app todo-list --template typescript
$ ls
>> todo-list
```

```
$ tree
.
└── todo-list
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── public	
    ├── src		
    ├── tsconfig.json
    └── yarn.lock
```
```todo-list```の中身はこのようになっています．ここまできたら，```yarn start```でReactのappの起動をします．勝手に立ち上がらない場合は，[http://localhost:3000/](http://localhost:3000/)を立ち上げましょう．そうするとReactのマークが回っていると思います．

ここまでが環境構築！完了！

### "Hello, Wolrd！"を作ってみる！
今，ディレクトリが，```todo-list```の中にいると思いますが，ひとつ階層を下げましょう．
```terminal:terminal
$ cd src
$ ls
>> App.css  App.tsx  index.tsx  react-app-env.d.ts  setupTests.ts  
   App.test.tsx  index.css  logo.svg  reportWebVitals.ts
```
これらのファイルが存在しますが，ここで，
- App.css 
- App.tsx  
- index.tsx  
- react-app-env.d.ts  
- setupTests.ts  
- App.test.tsx  
- index.css  
- logo.svg  
- reportWebVitals.ts

のうち，

- App.tsx
- index.tsx
- react-app-env.d.ts
- reportWebVitals.ts

のみでOKです．これをするために
```terminal:terminal
$ rm App.css App.test.tsx index.css logo.svg serviceWorker.ts setupTests.ts reportWebVitals.ts
$ ls
>> App.tsx  index.tsx  react-app-env.d.ts
```
しておきます．


#### コードを書いていきましょう！
```App.tsx```, ```index.tsx```, ```react-app-env.d.ts```をそれぞれコードを書いていきます．

```tsx:index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

```tsx:import React from 'react';

function App() {
  return <>Hello World</>;
}

export default App;
import React from 'react';

function App() {
  return <>Hello, World!</>;
}

export default App;
```

これで，[http://localhost:3000/](http://localhost:3000/) に"**Hello,World!**"が出てくると思います．


### todoアプリの根本を作っていきます！








# 参考資料
- [npm と yarn と pnpm 比較（2021年4月版）](https://qiita.com/e99h2121/items/7e38e592dc45b7c0407d)
- 