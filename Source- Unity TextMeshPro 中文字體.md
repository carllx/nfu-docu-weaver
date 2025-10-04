**Unity TextMeshPro 中文字體**

- **此篇重點** *** * * * ***

→ 預設的TextMeshPro雖然可以解決字體模糊的問題，但是並不支援中文字，本篇重點在於如何在TextMeshPro中使用中文字體。

- **此篇效果** *** * * *** 

![](https://pic.pimg.tw/cindyalex/1536978990-481581325.png)

![](https://pic.pimg.tw/cindyalex/1536979141-2212306147.png)

**-**  **大概了解重點後，接下來進入完整教學**   **-**

一、 問題敘述：當我們在使用 TextMeshPro的時候會發現如果我們在 TEXT INPUT BOX中打入中文字，在畫面中只會出現正方形的框框而不是我們所要的中文字。

![](https://pic.pimg.tw/cindyalex/1536979401-1927827033.png)

 ![](https://pic.pimg.tw/cindyalex/1536978990-481581325.png)

  
  
二、 要解決這個問題，首先我們要先取得中文字體的 TTF 檔

1. 打開我的電腦進入到C:\WINDOWS\Fonts的檔案位置

![](https://pic.pimg.tw/cindyalex/1536979670-2148680551.png)

2. 挑選自己要的中文字體

![](https://pic.pimg.tw/cindyalex/1536979728-2391315620_n.png)

3. 將中文字體拖曳至Unity的Assets資料夾中

![](https://pic.pimg.tw/cindyalex/1536979849-2249941503.png)

三、接下來我們要開始製造給 TextMeshPro使用的中文字體 ，首先先在Unity編輯器上方點擊Unity Window → TextMeshPro →Font Asset Creator。

![](https://pic.pimg.tw/cindyalex/1536980248-641436857_n.png)

1. 開啟創建字體面板

![](https://pic.pimg.tw/cindyalex/1536980989-1114301934.png)

2. 更改Font Source為剛剛所拖曳進來的中文字體(我使用的是標楷體)

![](https://pic.pimg.tw/cindyalex/1536981100-2312462108.png)

3. 更改Character Set為Custom Character

![](https://pic.pimg.tw/cindyalex/1536981161-2639848231.png)

3. 更改完畢後下面會出現一個Custom Character List

![](https://pic.pimg.tw/cindyalex/1536981278-2956516555.png)

4. Custom Character List是你的中文字庫，接下來我們新增我們所要的中文字到字庫裡面，我們在Custom Character List打上我們所要使用的中文字

![](https://pic.pimg.tw/cindyalex/1536981380-417954095.png)

5. 接著修改一下字體大小，將Font Size改成Custom Size

![](https://pic.pimg.tw/cindyalex/1536981671-3932887372.png)

5. 修改字體大小為24

![](https://pic.pimg.tw/cindyalex/1536981756-1816573502.png)

6. 在來就是生產字體囉!按下Generate Font Atlas開始生產字體，生產完畢後可以在右邊看到我們的字體庫(**請自行新增自己所需要的文字**)

![](https://pic.pimg.tw/cindyalex/1536982119-680875444_n.png)

6. 確認沒有問題後，就按下最下方的Save TextMeshPro Font Asset，並且輸入新的文字檔案名稱儲存新的文字檔(**方便辨識為主**)

![](https://pic.pimg.tw/cindyalex/1536982284-3638661483_n.png)

四、接下來我們創建一個新的 TextMeshPro 並設定它的字體為我們剛剛創建的字體。

![](https://pic.pimg.tw/cindyalex/1536982419-17780605.png)

五、在TextMeshPro 中的TEXT INPUT BOX打入中文字(**注意! 這裡只有辦法呈現剛剛在字庫中輸入的中文字，不在字庫中的仍然會是亂碼)**

![](https://pic.pimg.tw/cindyalex/1536982595-3501150273.png)

六、成功!

![](https://pic.pimg.tw/cindyalex/1536982653-3156449176.png)

- **備註** *** * * * ***

→ 各位親愛的開發者一定要記住，這裡能夠使用的中文字只有在中文字庫中的可以用在TextMeshPro，所以可能要麻煩各位花點時間去做新增了!!!