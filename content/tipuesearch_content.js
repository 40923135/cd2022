var tipuesearch = {"pages": [{'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w2', 'text': '以永續便捷的方式取得已經選好組別的 學員學號 、學員 個人倉儲連結 、學員 個人網站 、各組位於學員帳號下的 大組倉儲 以及各學員帳號下各大組的 協同網站 \n \n \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '每一學員分配 5 個影片的原則, 由各學員在 w3 標題頁面中, 根據影片中的教學內容, 以 Wink 影片互相對照的方式採 NX1980 執行操作進行整理, 完成後請將所負責的 Wink 教學影片嵌入個人與大分組的 w3 標題頁面中 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w7', 'text': '設法以隨身程式系統編譯此程式碼: \n \n git clone \xa0 https://github.com/mdecourse/scarysim.git \n 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS\xa0\xa0\xa0\xa0 += -lglut -lGLU \n cd scarysim \n qmake -o Makefile scarysim.pro \n mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe \n 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄執行. \n 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的 \xa0 Pick and Place demo \xa0 範例. \n 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製 \xa0 Pick and Place demo \xa0 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '編譯 \xa0 simExtMtb \xa0 plugin: \n 針對 simExtMtb.pro: \n \n CoppeliaSim 4.1.0 原始碼編譯專案 \xa0 (登入 @gm OneDrive 後下載). \n E:\\downloads\\cop410\\programming\\simExtMTB>qmake -o Makefile simExtMtb.pro \n E:\\downloads\\cop410\\programming\\simExtMTB>mingw32-make -f Makefile.Release \n 在 release 目錄中取得 simExtMtb.dll, 啟動前放入 Coppeliasim 根目錄. \n \n 任務二: 請各組依照下列零件檔案, 將組員分為三組, 分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件 工程圖 與 組合圖 後, 將 uarm 組合件轉為 \xa0 STL 格式後轉入 CoppeliaSim , 並安排以 GUI Slider 方式 控制前三軸作動 . 各組員需將零組件繪製過程與 CoppeliaSim 操控流程及心得, 寫為 Pelican Blog 與 Reveal.js 簡報, 並在期中考週將個人與分組網誌與簡報流程透過 Wink 製作為 mp4 影片嵌入個人與分組網頁, 流程中的 cmsimde H1 頁面命名為 \xa0 midterm , 而網誌命名為 \xa0 midterm.html , \xa0 簡報 則採 index.html 命名. \n 查驗項目: \n \n uarm 各零件工程圖 \n uarm 組合圖 \n uarm 組合圖 STL 格式轉入 CoppeliaSim \n GUI slider 控制前三軸作動 \n cmsimde 中第一階頁面, 標題為 midterm \n 網誌名稱為 midterm.html \n 流程與心得簡報 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'hm', 'text': '', 'tags': '', 'url': 'hm.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'w10_block_ui', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_block_ui.html'}, {'title': 'w10_nx_integ', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_nx_integ.html'}, {'title': 'w10_ssh', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_ssh.html'}, {'title': '組員名單', 'text': '大組 \n 小組 \n 40923131 \n 40923134 \n 40923133 \n 40923135 \n', 'tags': '', 'url': '組員名單.html'}, {'title': 'NX_viedo', 'text': '5 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n --------------------------------------------- \n 8 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n --------------------------- \n 16 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ---------------------- \n 21 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ----------------------------- \n 32 \n \n \n \n \n   \n \n \n \n \n \n over \n', 'tags': '', 'url': 'NX_viedo.html'}, {'title': 'midterm', 'text': '零件 \n https://drive.google.com/drive/folders/1HT56DykfZvNOuoGyKWDIxF5TXR04bWwO?usp=sharing \n 工程圖 \n https://drive.google.com/drive/folders/1Xk4HDN3PSpHoRuTy978-hH_NjFnxTKum?usp=sharing \n \n 流程與心得報告 \n 我們分組工作，所以說我是負責畫圖以及工程圖以及組裝，剛開始要把一些零件簡單化，再更改一些尺寸以便配合，把各零件畫好後組裝起來，一定會發現有些地方是組合不起來的，再去依照錯誤的地方進行更改，完成後就把接下來的步驟交給負責的同學。 \n \xa0 \n \n', 'tags': '', 'url': 'midterm.html'}]};