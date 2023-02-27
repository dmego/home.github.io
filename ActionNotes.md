# GitHub Action 配置详细步骤

## 1.生成 GitHub API 令牌

- 在 [Create Tokens](https://github.com/settings/tokens) 这个地址，点击 `Generate new token` 按钮来创建 `GitHub API` 令牌

<img src="https://unpkg.com/dmego-home-page@latest/assets/img/action/action-1.png" alt="image-20230227085916038" style="zoom:33%;" />

- `Note` 填写 要生成的 `Token` 的备注值；`Expiration` 过期时间选择最后一项 `No expiration`  永不过期；`Select scopes` 勾选 `repo`，将 `Token` 的授权范围设置为仓库；点击最后的 `Generate Token` 按钮生成。

<img src="https://unpkg.com/dmego-home-page@latest/assets/img/action/action-2.png" alt="image-20230227090752728" style="zoom:33%;" />

## 2.创建仓库 Secrets

- 点击仓库的 `Settings`栏，选择左边 `Secret and variables`菜单下的 `Actions` 选项，点击进入创建界面。

<img src="https://unpkg.com/dmego-home-page@latest/assets/img/action/action-3.png" alt="image-20230227092324654" style="zoom:33%;" />

- 点击右侧的 `New repository secret` 按钮，在 `Name` 框中填 `GH_TOKEN`；在 `Secret` 栏中填写第一步生成的 `Token` 值。

<img src="https://unpkg.com/dmego-home-page@latest/assets/img/action/action-4.png" alt="image-20230227093655370" style="zoom:33%;" />