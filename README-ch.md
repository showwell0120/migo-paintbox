# Paintbox

Paintbox 是 TS/JS 元件或函式庫的套件集合，以 monorepo 的形式管理。

## 前置準備

- `npm i -g pnpm`
- `npm i -g commitizen`

## 使用工具

### [Nx](https://nx.dev/)

目前的使用情境有 - 

- 內建 monorepo 的目錄結構，並且將外部依賴統一在 root 管理。
- 以樣板快速產生 UI 元件或函式庫的套件目錄。
- 在產出 bundle、執行測試或 lint、產生 `tsconfig.json` 等任務，都已經有預設的設定。
- 視覺化套件間的依賴關係。
- 使用 [affected](https://nx.dev/using-nx/affected) 相關指令批次對有變更或有被影響到的套件執行任務。
- [Storybook](https://nx.dev/storybook/overview-react) 的導入與執行。

開發過程中會使用到的外掛有 -

- `@nrwl/js`: 產生 TS 的函式庫。
- `@nrwl/react`: 產生 React 的元件或函式庫。
- `@nrwl/workspace`: 管理套件目錄，例如移除。
- `@jscutlery/semver`: 管理語意化版本以及產生 CHANGELOG（非官方，[github](https://github.com/jscutlery/semver))。
- `ngx-deploy-npm`: 發布套件（非官方，[github](https://github.com/bikecoders/ngx-deploy-npm)）。

### [commitzen/cz-conventional-changelog](https://commitizen-tools.github.io/commitizen/)

- `type`: 選擇這次變更的類型。
- `scope`: 根據變更範圍的大小決定輸入 - 
   - 只有一個套件：`<group>-<name>`
   - 在一個分類下有數個套件：`<group>-`
   - 有數個分類：`<group1>-, <group2>-`
   - 套件以外的變更：不用輸入
- `subject`: 關於這次的變更輸入簡短的描述。如果有兩種以上的變更，使用 `|` 分隔。
- `body`: 選擇性的輸入更仔細的描述。
- `isBreaking`: 是否是重大變更。通常只會用在變動 major 版號的時候。
- `breakingBody`: 如果有輸入 `body` 的內容的話就不會顯示。
- `breaking`: 關於重大變更的更多描述。
- `isIssueAffected`: 是否有對應的 issue。
- `issuesBody`: 可以略過。
- `issues`: 輸入對應的 issue 編號，例如 `fix #123`。

### [pnpm](https://pnpm.io/)

在管理外部依賴時，請使用 `pnpm`。常用的指令有－
- 新增至 `dependencies`: `pnpm i -S <dependency1> <dependency2>`
- 新增至 `devDependencies`: `pnpm i -D <dependency1> <dependency2>`
- 移除依賴： `pnpm un <dependency1> <dependency2>`
- 將全部的依賴更新到最新版本：`pnpm up --latest`

## 開發流程

### 新增開發分支 (optional)

因為 CI 上有設定 Storybook 的部署 pipeline，之後也有可能使用 CI 進行版本的發佈。所以在開啟一個開發週期時前，先新增開發分支。

### 產生套件目錄

套件的根目錄是 `/packages`，底下會依照套件的類型跟用途區分為數個 group。目前有以下這些 group 以及對應的產生指令 - 

| group | 說明 | 指令 |
| -- | -- | -- |
| `react/` | React 元件或 hooks | `pnpm react:add --name=<name> --importPath=@paintbox/react-<name>` |
| `model/` | 資料模型 | `pnpm model:add --name=<name> --importPath=@paintbox/model-<name>` |
| `api/` | API entrypoints | `pnpm api:add --name=<name> --importPath=@paintbox/api-<name>` |
| `util/` | 靜態、無狀態的方法 | `pnpm util:add --name=<name> --importPath=@paintbox/util-<name>` |
| `helper/` | 有狀態的方法類別 | `pnpm helper:add --name=<name> --importPath=@paintbox/helper-<name>` |
| `lipsum/` | 假資料 | `pnpm lipsum:add --name=<name> --importPath=@paintbox/lipsum-<name>` |

### 加入設定

- `<group>/<name>/project.json`

```json
{
  "targets" {
    "lint-test": {
      "executor": "@nrwl/workspace:run-commands",
      "options": {
        "commands": ["nx lint <group>-<name>", "nx test <group>-<name>"]
      }
    },
    "version": {
      "executor": "@jscutlery/semver:version",
      "options": {
        "preset": "conventional",
        "tagPrefix": "<group>-<name>@",
        "postTargets": ["<group>-<name>:build", "<group>-<name>:publish"]
      }
    },
    "publish": {
      "executor": "ngx-deploy-npm:deploy"
    }
  }
}
```

### 主程式開發

預設的主程式在 `/<name>/src/lib/`中，包含進入點和樣式檔。完成一個段落後建議至少提交一個 commit。

### 寫單元/元件測試 (optional)

預設的測試檔在 `/<name>/src/lib/<group>-<name>.spec.ts(x)`。可以根據必要性寫好測試。順序的話，可以遵循 TDD，也可以先寫完主程式再補測試。 

如果這次的開發需求是修改既有的套件，先執行 `pnpm nx affected:graph`，查看哪些套件有被這次的變更影響到，有的話可以補上這些套件的測試。

完成後建議至少提交一個 commit。

### 跑測試與 lint (optional)

執行指令 - 

- 只有套件本身：`pnpm nx lint-test <group>-<name>`
- 所有影響到的套件：`pnpm nx affected --target=lint-test`

如果只有跑 `test`，可以加上 `--watch` 監聽程式的變動自動測試。

### 修正主程式或有被影響到的套件

持續上個步驟和這個步驟，直到所有的 lint 跟測試都成為綠燈 pass。完成後建議至少提交一個 commit。

### 新增 story

在 `app/document/src/stories/` 中新增 `<group>-<name.>stories.tsx` 來寫元件的 story；或是新增 `<group>-<name.>stories.mdx` 來寫函式庫的文件。

完成以後，可以執行 `pnpm doc:serve` 開啟本機的 Storybook 瀏覽。沒問題的話建議至少提交一個 commit。

### 在 `package.json` 新增欄位

- `author`: 維護者的 email (讓用的人可以知道找誰 report issue)
- `peerDependencies`: 告訴用的人安裝套件後，需要再裝列舉中的依賴才能正常執行

### 遞增版本 / 建置 / 發布

每個套件的版本號會是獨立的，根據變更的性質跟重要性，來決定遞增的層級。

執行指令 - 

- 只有套件本身：`pnpm nx version <group>-<name> --preset=conventional --releaseAs=<patch|minor|major>`
- 所有影響到的套件：`pnpm af:<patch|minor|major>`

成功的話，會逐步完成以下事情 - 

- 同步遞增所有影響到的套件版本，並且新增對應的 commit 和 git tags。
- 建置所有套件的 bundle。產出的檔案路徑在 `dist/packages/<group>/<name>/` 下。
- 將所有套件發佈到公司內部的 registry。

### 合併開發分支 (optional)

當開發分支完成後，請在 gitlab 中新增一個 Merge requests (MR)。合併完成後，就可以把開發分支移除。

### 移除套件

1. 移除套件本身的目錄 `pnpm nx g @nrwl/workspace:remove <group>-<name>`。
2. 如果有出現引入依賴的錯誤訊息，先將有引入該套件的地方移除。
3. 在 `tsconfig.base.json` 中的 `paths` 欄位，移除該套件。

## Storybook

每當 main 分支有新的 push 或 merge，並且有更新 `/apps/document/` 的檔案時，會觸發 GitLab CI 產生 Storybook 的靜態檔，部署到 [GitLab Pages](https://migotv.migoinc.io/paintbox)。