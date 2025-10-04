# extMeshPro无法显示中文字的问题

[澄鷹](https://home.gamer.com.tw/sumitaka)|2024-01-21 21:00:09|巴幣2450|人氣4317

---

　　Unity使用版本：2023.1.9f1

  

　　這半年手邊有個AVG遊戲專案，採用Naninovel進行製作。後來有一次上去Naninovel官網查詢文件的時候，意外發現他們更新了，新版的Naninovel全面使用TextMeshPro，移除舊版的Text（的樣子）

　　其實TextMeshPro這東西我從之前就有看到過，但是看見他的元件上設定多到爆，我一個逃避之下，至今都沒有好好面對過他。

　　既然連套件都決定捨棄舊版Text元件採用TextMeshPro，那看來面對它是不可避免的趨勢，於是我下定決心，跟他來個正面對決！馬上安裝TextMeshPro來玩玩。

　　──結果剛玩就出事。

![](https://truth.bahamut.com.tw/s01/202401/62e74a730a9f5d94a56832900e010814.JPG)

　　啊我的中文咧？是在哈囉？

  

　　會沒出現是因為Unity的字型資源設定中，並沒有設定中文字的字元碼。我們可以看看預設的字型中，有包含哪些字元。

　　點擊TextMeshPro套用的字型資源設定，導到字型資源設定的所在位置後，按Update Atlas Texture（我們還沒有要更新，只是先打開來看看設定而已）

![](https://truth.bahamut.com.tw/s01/202401/88a80f9b452bffe03d5450e9e79c55f7.JPG)

![](https://truth.bahamut.com.tw/s01/202401/ea4071e3708ad00c1c795c63322fd2c9.JPG)

　　打開以後可以在Font Asset Creator中看到，在Character Sequence (Hex)那個欄位中，有許多16進制的資料，這些就是用來定義可使用字元的資料（Unicode）。

　　TextMeshPro原本預設的內容如下：

|   |
|---|
|20-7E,A0-FF,2000-200F,2012-2022,2026,202A-2030,2032-2034,2039-203A,203C,203E,2044,205E,206A-206F,20AC,2122,25A1|

　　對應到的字元集如下：

|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{\|}~ ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ‍‒–—―‖‗‘’‚‛“”„‟†‡•…‰′″‴‹›‼‾⁄⁞€™□ |

　　就是說套用這個字型資源後，只有上面這些字Unity認識，其他沒有在這上面的字都會送你一塊豆腐當作賠禮。

　　為了要解決無法顯示中文的問題，我們就只要把中文的字元碼都加上去就好。

  

　　我這次使用Google Fonts 中的中文字體[Noto Sans Traditional Chinese](https://ref.gamer.com.tw/redir.php?url=https%3A%2F%2Ffonts.google.com%2Fnoto%2Fspecimen%2FNoto%2BSans%2BTC%3Fsubset%3Dchinese-traditional%26noto.script%3DHant)來做測試。從google fonts中下載字體下來後會得到一包有許多不同字重的字型，請依照自己的喜好與需求來使用，我這邊先使用Regular來說明。

　　將字體拉進Unity後，打開剛剛的Font Asset Creator視窗──如果已經關掉的話，可以從「Window → TextMeshPro → Font Asset Creator」打開 ──把Source Font File改成我們剛剛拉進專案的NotoSansTC-Regular字體。

　　然後把Character Set設定成「Unicode Range (Hex)」這樣Unity才知道待會我們是怎樣定義字元集的。

　　在下面Character Sequence (Hex)上方，有一個Select Font Asset，如果這邊不是None的話，請把他調成None，因為我們想建立一個新的字型資源設定，不要讓他和任何其他資源有瓜葛。

　　再來就可以在Character Sequence (Hex)設定我們要的字了！

  

　　──但這個網路上抓的字體支援甚麼字，我怎麼知道？！

　　──就算我知道支援甚麼字，但那些字的Unicode，我又怎麼知道？！

  

　　關於第一個問題，可以直接看Google Fonts頁面的說明：

![](https://truth.bahamut.com.tw/s01/202401/146ad062824dfe79def2a6b7ecdebf0c.JPG)

　　這裡告訴了我們所有有包含的字，而我們就可以從Google提供的這些資料去找每個字集的Unicode範圍了！例如直接找他提供的第一個字集CJK Unified Ideographs，馬上就可以知道他的Unicode範圍！

![](https://truth.bahamut.com.tw/s01/202401/822cb4cbca1f852105bd8d555bbf2d59.JPG)

　　是不是很方便！！

  

　　好，並沒有。麻煩死了！這麼多欸。![](https://i2.bahamut.com.tw/editor/emotion/3.gif)

  

　　雖然這真的很麻煩，但先預告一下，真正的夢靨不只這樣而已。

　　關於這個字體所有支援字的Unicode範圍，我貼在這裡：

|   |
|---|
|20-7E,A0-FF,2000-200F,2012-2022,2026,202A-2030,2032-2034,2039-203A,203C,203E,2044,205E,206A-206F,20AC,2122,25A1,4E00-9FFF,3400-4DBF,20000-2A6DF,2A700-2B73F,2B740-2B81F,2B820-2CEAF,2CEB0-2EBEF,AC00-D7A3,F900-FAFF,1100-11FF,3300-33FF,FF00-FFEF,2E80-2FD5,3200-32FF,2E80-2EF3,30A0-30FF,3130-318F,3040-309F,D7B0-D7FF,1F200-1F2FF,2F800-2FA1F,3100-312F,31A0-31BF,31C0-31EF,A960-A97F,31F0-31FF,3190-319F,2FF0-2FFB,FE10-FE1F,1F100-1F1FF,2500-257F,1E00-1EFF,0080-00FF,0000-007F,2460-24FF,2200-22FF,0400-04FF,0500-052F,2DE0-2DFF,A640-A69F,1C80-1C8F,1E030-1E08F,3000-303F,2600-26FF,0370-03FF,25A0-25FF,2000-206F,2580-259F,FE30-FE4F,0100-017F,31A0-31BF,2300-23FF,FE50-FE6F,2190-21FF,0180-024F,2100-214F,02B0-02FF,2700-27BF,0300-036F,2B00-2BFF,FB00-FB4F|

　　有需要全部的朋友歡迎自取。不過，這邊會有延伸的另一個問題，但這個我們待會再提。

  

　　先把這串丟上去Character Sequence (Hex)之後，按下Generate Font Atlas，我們就可以得到一個可以顯示「中文」、「日文」、「韓文」、「英文」的字型資源設定檔了。（不過如果讓它生產全部的字體，這個過程可能會需要大約5~10分鐘）

　　生產完畢後，請記得Save as...將這個設定檔存起來，並將這個設定檔套到TextMeshPro 上，中文就能正常顯示啦！

![](https://truth.bahamut.com.tw/s01/202401/906382f57754001d9a8e9434baefbbba.JPG)

  

　　如果在需求中，需要動態的設定某些字詞的粗細，那麼我們可能就會需要把同樣的步驟套用在其他如Thin、Black的字體，讓Unity幫我們產生不同字重的資源設定檔。然後選擇預設的字重（Regular），分別把其他的字重套用到各個對應的數值中。

　　以這次使用的字體為例，下載整包字體檔以後，除了Regulat以外，還有其他如Black、Bold、ExtraBold、ExtraLight、Medium、SeimiBold、Thin等字體。

　　我們將這些字體放進專案後，重複上述的步驟，分別產出資源設定檔後，點選Regular並查看Inspector，稍微往下拉可以看到這個區塊。

![](https://truth.bahamut.com.tw/s01/202401/ae20ccc1c935eaf0a87d6b68c0c1be47.JPG)

　　這個區塊可以設定不同的字重下，需要套用哪一個資源檔。對照著Google提供給我們的名稱，把對應的檔案放到對應的字重上。（名稱可能會有些許差異）

![](https://truth.bahamut.com.tw/s01/202401/70f9652d439a64cf0ae548a064fe68cf.JPG)

　　這樣我們在TextMeshPro套用這個字型設定檔後，就可以用RichText的語法動態的給某段文字特定的粗細啦！

![](https://truth.bahamut.com.tw/s01/202401/062a3b17e21074ad5511804c04311dbc.JPG)

　　其實到這個地方，TextMeshPro無法輸入中文的部分應該算是解決了，只是還有一個問題是關於專案包體的部分。

　　如果我們要把原字體有支援的字全部都放到設定檔裡的話，那這個設定檔的檔案大小會很大！一個字重的字體就大約有50M左右，如果有動態設定字體粗細的需求，八個字重加起來就會高達400M。

　　甚麼！我遊戲都還沒開始做，光字體就要0.5G嗎？

　　如果說預期遊戲中甚麼字元都可能會用到，為了要能夠顯示各式各樣的文字，那樣的話，這樣的包體大小應該是無法避免的，但如果只是為了應對一些UI、劇情文字顯示，我想應該可以只挑幾個會用到的就可以

　　關於這部分，可能就真的要好好的去查前面說到各個字集了，看看那個字集是不是真的是自己需要的。

　　若不確定查到的Unicode範圍是不是真的有自己要的字元，可以寫一段簡單的程式來驗證就行，這部分可以滑到最下方參考附件

　　這個字體有支援的所有字加總起來，根據Google Fonts的描述，有六萬五千多字，如果很極限的把自己想要的字挑出來，我想應該可以少個2/3的大小吧。

　　不過就我自己而言，在出事之前我可能暫時不會去改這塊，除非專案到後來真的大到不合理，不然我可能就會直接像這樣讓所有的字都涵蓋進來了。