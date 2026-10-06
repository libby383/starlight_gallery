/**
 * Scattered Photo Wall with Fade Carousel
 * - photo4.jpeg (img8) as full-screen background
 * - All photo cards fade in (3s) → stay (5~15s random) → fade out → swap to random image → repeat
 * - No duplicate images shown simultaneously (global active-image tracking)
 */

(function () {
    'use strict';

    // No videos — image-only wallpaper


                var ALL_IMAGES = [
        'images/0bDk1AjyANCOCoZ1-1786180637497.jpg',
        'images/0db75a8f-cfcf-42b6-9ea7-fdec6ad28878.jpg',
        'images/0MfQ7fYi_o-1783756650884.jpg',
        'images/0twTVwTZ_o-1783397914721.jpg',
        'images/001-1784920524211.jpg',
        'images/1.jpg',
        'images/2.jpg',
        'images/2a366a9613993267df59b.jpg',
        'images/2aa9883c-7f00-42c2-8eb4-f6f627fc7727.jpg',
        'images/2ec6dede-73b4-4746-807f-85340cea74fc.jpg',
        'images/3b65e2d8-bda1-489a-911b-0343eaf27f39.jpg',
        'images/3d599946-18e6-4958-a15c-7cdfd82eb536.jpg',
        'images/3fb8a246-972f-4aef-8677-42b42ca9afbd.jpg',
        'images/4h5m8xivdkg1s5kqhohw-1786958615105.jpg',
        'images/4zDCbcao_o-1783397914754.jpg',
        'images/5f090dfe-0900-4243-8977-028d970308ae.jpg',
        'images/6.gif',
        'images/6ef1ef21-02a9-4e24-8479-459b96d22c1f.jpg',
        'images/0009.jpg',
        'images/0010.jpg',
        'images/0012.jpg',
        'images/12.jpg',
        'images/0013.jpg',
        'images/0014.jpg',
        'images/21_prno-1784722454320.jpg',
        'images/21fae389-e281-4fef-b2d5-d39b9ee90b42.jpg',
        'images/0024.jpg',
        'images/0026.jpg',
        'images/0035 (1).jpg',
        'images/0035.jpg',
        'images/0036.jpg',
        'images/37_augu-1784722454436.jpg',
        'images/0037.jpg',
        'images/39_hxbk-1784722454449.jpg',
        'images/0042.jpg',
        'images/44_vwtx-1784722454483.jpg',
        'images/44-1783241094444.jpg',
        'images/44.jpg',
        'images/045fa0b4-e2b6-4e9d-b37c-b62f2913a681.jpg',
        'images/0061.jpg',
        'images/62c5194d-8335-4a0a-8d31-99624c1e4267.jpg',
        'images/0068.jpg',
        'images/74a964e073b7f18f7951d.jpg',
        'images/83f629905e952869bb02a.jpg',
        'images/85f05f04-23ea-4eb7-9d57-c6f75f3c8408.jpg',
        'images/86e13bf3-618c-4f6e-85a9-2cf538439886.jpg',
        'images/0089.jpg',
        'images/0091.jpg',
        'images/0111.jpg',
        'images/0119.jpg',
        'images/0130.jpg',
        'images/0137.jpg',
        'images/0163.jpg',
        'images/0165.jpg',
        'images/0170.jpg',
        'images/0172.jpg',
        'images/0180.jpg',
        'images/0196.jpg',
        'images/0226.jpg',
        'images/0236.jpg',
        'images/0240.jpg',
        'images/0256.jpg',
        'images/0257.jpg',
        'images/0260.jpg',
        'images/0261.jpg',
        'images/0278 (1).jpg',
        'images/0278.jpg',
        'images/0279.jpg',
        'images/0282.jpg',
        'images/0284.jpg',
        'images/0288.jpg',
        'images/0309.jpg',
        'images/0327.jpg',
        'images/0329.jpg',
        'images/0338.jpg',
        'images/0353.jpg',
        'images/1615d15a-ea76-4b9f-b529-7f8d25856b4c.jpg',
        'images/4967d6f1-da29-40b3-a445-9633189c1f21.jpg',
        'images/5241e380-7b65-4ceb-88b3-4b37ee0c3d75.jpg',
        'images/10002-1782785044516.jpg',
        'images/10004-1782785044516.jpg',
        'images/10008-1782785044596.jpg',
        'images/013707bvc8z6mvazcpuuvb.jpg',
        'images/014022v8czyvvc03rwgdvv.jpg',
        'images/014023x3xh347l7o34hhph (1).jpg',
        'images/014214fyavfdyadpjsaqjv.jpg',
        'images/014226wfji73fz3n63rhpi.jpg',
        'images/014229t6twy5m94twmnzq3.jpg',
        'images/014240ltqfffrc6v6f6u9k.jpg',
        'images/014241bbz8d99a3s694614.jpg',
        'images/014300eobxeeomb3etzxhe.jpg',
        'images/014415arhcm6rr66kg6m6h.jpg',
        'images/014510cw4422quw4ccaw2o.jpg',
        'images/014517p3w3owx5oqy09qnq.jpg',
        'images/014611fxv7vqxu8v8v87fw.jpg',
        'images/014626zze9azz8jn9vqeja.jpg',
        'images/014739zrd8oead8eq1kxdq.jpg',
        'images/014754xo50dx7gttoqd420.jpg',
        'images/014811dcevdsoyqvokoyvn.jpg',
        'images/014825nyn0uu0ueb1yoq0u.jpg',
        'images/014846jlz5gzlgtztx8jaj.jpg',
        'images/014849xkksi55yk4ohotym.jpg',
        'images/014850d9dmxsd9fctiv4cf (1).jpg',
        'images/014851uiyusif10dssskxh.jpg',
        'images/014852ofa4odod4zx9u7kk.jpg',
        'images/014859tfq7gssvgvm7iipi.jpg',
        'images/014901bbacouofukuw6uho.jpg',
        'images/014903d0t6tkiio3ooont5.jpg',
        'images/014904dubdur44zpg9buub.jpg',
        'images/014906beer86regtora0tg.jpg',
        'images/014912v8dw3dm12nnkk3n3.jpg',
        'images/015328akhkh2ikh2qgx57x.jpg',
        'images/015340t1tzefzoan96t6o3.jpg',
        'images/015623wvz773lwxjn9j94v.jpg',
        'images/015822sczp76op7bj4uj6h.jpg',
        'images/20486c5e-67c6-44f6-85bc-981da5290d04.jpg',
        'images/031452w1fwbv2e2fkv0wtz.jpg',
        'images/031456ahafp6ztav6aitaj.jpg',
        'images/031605en2lb2nulhh42hvl.jpg',
        'images/031621jmj1rttb9cj9ffbb.jpg',
        'images/031623vvihovikisyssp4s.jpg',
        'images/043204i86gdqi9gf9iie9p-1782977074665.jpg',
        'images/043204roqyo1xo3z3pgygx-1782977074826.jpg',
        'images/043204txzwgxr514y148xa-1782977074874.jpg',
        'images/66234b3c-d84c-41df-997b-a3db3fa36831.jpg',
        'images/0140200z40uafes5q2p1dp.jpg',
        'images/0140386li68zkliwnhwcai.jpg',
        'images/0140525sn8v9zsd7osyz0k.jpg',
        'images/0142368ay9j301gbzd8y80.jpg',
        'images/0143093af0tvjjdgttjjnl.jpg',
        'images/0145417f7sr3z5i17c1sd2.jpg',
        'images/0147435x51sj7ja4a66hxh.jpg',
        'images/0148483qwyymbdg7qgezgy.jpg',
        'images/0149086cf74lqwfsrz7bz6.jpg',
        'images/0156273mgh3jgth1h3h1j1.jpg',
        'images/0156294trw6c43nkanlw6n.jpg',
        'images/160339lm6uiluznkd1esue.jpg',
        'images/160346cn9n8hg5ernejj89.jpg',
        'images/160347l2ottztr888xcsps.jpg',
        'images/160728gt4mslggjybkjwwr.jpg',
        'images/205751ourd3s46ni6z4p44.jpg',
        'images/210532afgiuq0gt5e0j5vi-1782544759384.jpg',
        'images/0314453ss5g4plmmeegg45.jpg',
        'images/0314468nl2p27drnpdr1sr.jpg',
        'images/715354c6-e2ff-4a25-9626-1d48cb872e5c.jpg',
        'images/874911cc-232c-4b2d-aca4-295582995dc3.jpg',
        'images/01423472wcsgglzmwyswlp.jpg',
        'images/01472299g9i5ru7r777442.jpg',
        'images/01472466lmi8mmkkg83m8g.jpg',
        'images/014818422t6j6z6iqcw34t.jpg',
        'images/1782191809-d0f8872d1800491.jpg',
        'images/1787736234528.jpg',
        'images/1787736273490.jpg',
        'images/屏幕截图 2026-08-25 022050.jpg',
        'images/a7bacd98-dba1-4e7e-8638-0790780be4a3.jpg',
        'images/a7059050-c479-40de-97d4-8fda951d39f8.jpg',
        'images/b7a32599-10e9-4003-88ef-6cb40c827fa3.jpg',
        'images/b7b41e3d-4968-41c2-9d90-9132996536c5.jpg',
        'images/b803d0a9-b320-4011-aee5-89f8b5764366.jpg',
        'images/b49995bd-a780-4cf7-89ef-6b387fbd733c.jpg',
        'images/b268578b-a556-4e54-8b0a-03a8d26fff9d.jpg',
        'images/bb21473a-2ca1-4acb-a01b-eac61e1a8c3a.jpg',
        'images/BDmDTU9xDmsc1FuR-1786178487114.jpg',
        'images/bedf517d-3d82-42c0-a483-dbbb4ac5b645.jpg',
        'images/BlueCake-6529-1784798831969.jpg',
        'images/c3986e26-610a-47f1-98f6-68b2164ed5b3.jpg',
        'images/ceed5602-3e6e-4207-ab34-8ce86ac51f0f.jpg',
        'images/CM7vifxwAHM5j-gn-1786178487016.jpg',
        'images/cncmeng_0266.jpg',
        'images/Coser-Nnian-A-Cup2D-0221-1786008552146.jpg',
        'images/crawler005-1784275649139.jpg',
        'images/crawler005-1785312027112.jpg',
        'images/crawler006-1785312027155.jpg',
        'images/cUc7hAnQ_o-1784638250764.jpg',
        'images/d6b42d2f-1b29-4b27-aee9-505c5f335e43.jpg',
        'images/d23ZZFsu_o-1784638250788.jpg',
        'images/d91ef956-2729-4d83-bd4b-ca79d90be7d4.jpg',
        'images/d407ab92-d774-43ac-bf41-be389d3a046e.jpg',
        'images/d663ef98-8c6d-449b-bdc4-7b4270b55262.jpg',
        'images/d4818cd2-f8e5-44ab-9562-58022c135c91.jpg',
        'images/d335550e-e9d4-432b-99f7-385a3cb81b85.jpg',
        'images/da779806-242a-472c-ab3d-6cdf8bf145cf.jpg',
        'images/dbc894b4-79a6-45f9-b894-9ff030b1edca.jpg',
        'images/dc396bdb-3da8-4075-b794-97a2e3c6c0ee.jpg',
        'images/dcfb8106-2bac-4de3-b568-7903a9cc241a.jpg',
        'images/e28a4b53-a2a7-40aa-ad94-24e6b61a59e3.jpg',
        'images/EfRdYG9U8AA7KLe (1).jpg',
        'images/EfRdYG9UYAITl_J (1).jpg',
        'images/F_3GjAca4AEqQ21.jpg',
        'images/F_n_wKibsAAcGgQ.jpg',
        'images/F_n_wKmawAAEV6_.jpg',
        'images/F_n_wOWakAA1lKF.jpg',
        'images/F_Y-6w8aMAENiC_ (1).jpg',
        'images/F-4QLp4bEAAND5d.jpg',
        'images/F0cP7MsWAAALmfr.jpg',
        'images/F0cP7RZWwAcablN.jpg',
        'images/F0cQC-eX0AEzSwQ.jpg',
        'images/F0iOcIbacAATF6n.jpg',
        'images/F4IWV50XEAA78i0.jpg',
        'images/F4IWV51WsAAza8R.jpg',
        'images/F6mHM9kbUAAn_-v.jpg',
        'images/F6RNXVlaoAAbXWx.jpg',
        'images/F7RHdhrbMAAmP3t.jpg',
        'images/F7RHqToaoAAXlUu.jpg',
        'images/F7xAJq_aIAAQna9.jpg',
        'images/f8cdba20-885a-4670-856d-7df34c30d845.jpg',
        'images/F9rBrZMbEAA0fas.jpg',
        'images/F9W-X56aYAA3etR.jpg',
        'images/F400ZFsaEAExsvI.jpg',
        'images/F400ZFwbMAArGsy.jpg',
        'images/f8792388-a5b2-49bc-8502-1b23b0c8594f.jpg',
        'images/Fa4h1YxaUAE72ba.jpg',
        'images/FAbAhQlVgAYWrhG.jpg',
        'images/FayM2F6aMAEOJHu.jpg',
        'images/FayM2HXaQAANz8p.jpg',
        'images/Fb8OI7-agAAPcts.jpg',
        'images/FbAgbMSakAIvS7U.jpg',
        'images/FBRaKI-VUAUVM3y (1).jpg',
        'images/Fc5O5f0akAAvLO2.jpg',
        'images/FCDkjK2VcAQbP-U.jpg',
        'images/FCDkjK7VQAADRFd.jpg',
        'images/FCDkjMJVcAcQ3m2.jpg',
        'images/FCDkrcCUUAMf3rB.jpg',
        'images/FCzC55UVkAQtgXU.jpg',
        'images/Fd8-q4YakAAOv35.jpg',
        'images/Fe_XoWQakAEntEt.jpg',
        'images/FEjBw0NVEAMaomJ.jpg',
        'images/FeSgbFqacAILQC-.jpg',
        'images/FHiJ2jaVcAQnpv7.jpg',
        'images/FHiJ2nLUUAUBlNQ.jpg',
        'images/Fi9tkz3UUAAuqk_.jpg',
        'images/FinMixGagAA3vgu.jpg',
        'images/Fl5v0EiaEAAtwTb.jpg',
        'images/Fm-GLI1aEAEfLqP.jpg',
        'images/FmOh5wIakAEa4yU.jpg',
        'images/Fn4eeOaagAA8xo9.jpg',
        'images/FodcmOlaIAElxTD.jpg',
        'images/FodcmPraIAEPpO4.jpg',
        'images/FoQ_Lg4aIAE4TLv.jpg',
        'images/FoQ_LhAaQAEzE5z.jpg',
        'images/FoQ_LhDagAErecW.jpg',
        'images/Fp9E0ztagAAyZk1.jpg',
        'images/Fpf8SSpaMAAIC-6.jpg',
        'images/FPG6nsFVEAAV1vx.jpg',
        'images/FpjVbwCacAA4kgN.jpg',
        'images/FrEX1lCaEAMwUP9.jpg',
        'images/FsWDNIfaMAA3In_.jpg',
        'images/FuxmFhxaIAAJdB3.jpg',
        'images/Fv1Zzh2aYAAY7Ts.jpg',
        'images/FwuCUQ_aEAUkA_8.jpg',
        'images/FxR8CMfagAAkwBW.jpg',
        'images/FypfmhCagAA3xgh.jpg',
        'images/FzX0vhgacAEP-Ma.jpg',
        'images/FzX0vhhaQAEXwOr.jpg',
        'images/G_k8bF3XoAAyuzs.jpg',
        'images/G_VEJfDXEAAZnho.jpg',
        'images/G-EnfOjawAEUwv0.jpg',
        'images/G1_4Ue2aAAAEAxY.jpg',
        'images/G1bktHCbMAAf5Rl.jpg',
        'images/G1CMsdCaEAIlJSN.jpg',
        'images/G1CMseDaoAACZaX.jpg',
        'images/G1JEtFMacAAT9jy.jpg',
        'images/G2evBU0aAAAE1b-.jpg',
        'images/G2JuhXCaoAAS0yQ.jpg',
        'images/G2QfeNeaAAApfo2.jpg',
        'images/G2rqKXIbIDM_EqD.jpg',
        'images/G2vL8BraIAElfyG.jpg',
        'images/G2ZXWi1a0AA0mZz.jpg',
        'images/G3czTmUWsAEXeCb.jpg',
        'images/G3czTmWWIAA3g4f.jpg',
        'images/G3iyU1MXEAEquKR.jpg',
        'images/G3iyU1NXMAA4Y7z.jpg',
        'images/G3XKcM4aEAAVo4u.jpg',
        'images/G4FfV3lWUAAh6fQ.jpg',
        'images/G4fPaUfbIAAPbUG.jpg',
        'images/G4vkptmbUAAfoHP.jpg',
        'images/G5CwuLwbsAEaG7F.jpg',
        'images/G7FsLylaQAAz4KP.jpg',
        'images/G7U-gJLbgAEnIY7.jpg',
        'images/G7U-gJMaYAAYROp.jpg',
        'images/G7Wu6uMboAAlh9J.jpg',
        'images/G7Wu6uQaYAAnuC4.jpg',
        'images/G8ib-nybcAAvIK7.jpg',
        'images/G9BLXwzbkAABkm8.jpg',
        'images/G9ejCN7aAAAShyU.jpg',
        'images/G9fVGbeWIAAs-OV.jpg',
        'images/G9fVGbgXYAELj-A.jpg',
        'images/G9KHvKYbgAIjx63.jpg',
        'images/G9RA_1haIAAAGDc.jpg',
        'images/G9RA_v3a4AAugl0.jpg',
        'images/G9RA_v5bwAAa9ye.jpg',
        'images/G16UWwsb0AAuYOX.jpg',
        'images/G32ycZWWgAAVxcZ.jpg',
        'images/G54Zo_rbUAAgt99.jpg',
        'images/GaeT3UDaoAAw3cL.jpg',
        'images/GaJx8y1XgAARGdR.jpg',
        'images/GaofkgDaIAAw1ux.jpg',
        'images/GatsqRQaAAA2yKq.jpg',
        'images/Gb1dL67bwAEizUN.jpg',
        'images/Gb4uA9takAA5jUz.jpg',
        'images/Gb182X-bwAElwiW.jpg',
        'images/GbD-ic4a8AA-oE4.jpg',
        'images/GbD-iZnbsAApPaZ.jpg',
        'images/GdA7emqbgAAbTec.jpg',
        'images/Ge_EiHibwAABSaO.jpg',
        'images/Ge_EiHVbwAMjKYm.jpg',
        'images/GER4bnWaoAAkxNL.jpg',
        'images/GER48ZLaUAANNPg.jpg',
        'images/GER48ZMbUAAz17f.jpg',
        'images/Gf91YmuakAExm8c.jpg',
        'images/Gf91Yp7bQAA2R1m.jpg',
        'images/GFE1EJzbUAA-OpT.jpg',
        'images/GgoEaQxawAAPzK2.jpg',
        'images/GgrdGVma0AAnbVU.jpg',
        'images/GGxbRthbEAEyTfJ.jpg',
        'images/GH-4kIIbQAAOgDu.jpg',
        'images/GH-4kMdaMAAg0A4.jpg',
        'images/GhEZE36acAEI_do.jpg',
        'images/GHP1mZnbUAAW9vn.jpg',
        'images/GjHKZ_DbcAAAWS8.jpg',
        'images/GjluFYUaEAAlSkT.jpg',
        'images/GjZyLAnbMAAPeur.jpg',
        'images/GjZyLAnbwAANVbq.jpg',
        'images/GjZyLBka4AATNcp.jpg',
        'images/GkX0zKoXcAAWUsS.jpg',
        'images/Gl1Z7ieboAAT2FG.jpg',
        'images/GlQVwEcWUAA-uwS.jpg',
        'images/GlQYRrVawAAPc66.jpg',
        'images/Gm8v1XFbMAALb1S.jpg',
        'images/GMN8gWsbAAAuIKS.jpg',
        'images/GmZBAU7a8AA1QvK.jpg',
        'images/GmZBAYdagAACwEz.jpg',
        'images/Gn2LcPwasAA-zbO.jpg',
        'images/GNHYH0SbUAAAG4y.jpg',
        'images/GnRaso4a0AEBj43.jpg',
        'images/GnSEWyvaQAAev9P.jpg',
        'images/GnSEWyvbQAAh3S7.jpg',
        'images/Go-44asbgAAv5TH.jpg',
        'images/Go-44FEacAABG20.jpg',
        'images/Goaf9_cWQAEBySR.jpg',
        'images/GOFnOyFbsAA_em_.jpg',
        'images/GoUxpsiWwAAoVjl.jpg',
        'images/Gpd1N1YbEAMkF6P.jpg',
        'images/GpH1ynsa4AI0OEa.jpg',
        'images/GpH1ynua4AAWEtd.jpg',
        'images/GpYpTgabgAAB68C.jpg',
        'images/GqlEr1AbcAElt2m.jpg',
        'images/GQW2ok2aUAAobKS.jpg',
        'images/GQW2ok4a4AA5j4x.jpg',
        'images/GrDAsxJaAAEJUDG.jpg',
        'images/GryoR3wXwAAHnwC.jpg',
        'images/GryoRsqXkAAHRpN.jpg',
        'images/GTUGbbnaYAAagUg.jpg',
        'images/GTUGbfaaYAAGCQD.jpg',
        'images/GtZix-CbwAEq9-g.jpg',
        'images/GtZix7gaMAAtqbx.jpg',
        'images/GtZix8MbIAEgZmj.jpg',
        'images/GtZix87bkAAhreo.jpg',
        'images/GuCIun0boAABnKW.jpg',
        'images/GUwtq25bcAAxVUg.jpg',
        'images/GuxFKJnWgAAOIXl.jpg',
        'images/GuxRv9QXMAAk6Qo.jpg',
        'images/GuxRv64WgAAGyKK.jpg',
        'images/GVAOOfJa4AAT6Lq.jpg',
        'images/GVkpU-oXQAAdum9.jpg',
        'images/GvQPaZtacAA-eX0.jpg',
        'images/GW2jdClXEAAH31H.jpg',
        'images/GwiW7tgbgAAZCYh.jpg',
        'images/GwTdZiYW4AA97nW.jpg',
        'images/Gx0toGRacAAdX1b.jpg',
        'images/GX0YjRxakAInTvr.jpg',
        'images/GyN4TrmbkAA3ofY.jpg',
        'images/GyN4TrobYAAsE-h.jpg',
        'images/GYOKto-XMAAGcJr.jpg',
        'images/GYS6QjOakAAdB-6.jpg',
        'images/GZ7FaCJb0AQeya2.jpg',
        'images/GZlXaqRaAAIzzWL.jpg',
        'images/GzQ0LAgagAAYW8l.jpg',
        'images/GzScVaAbYAAEKb_.jpg',
        'images/HAOnTaiaUAAiqEL.jpg',
        'images/HAtXUNqaoAAHAUW.jpg',
        'images/HAtXUNrbAAAxZm5.jpg',
        'images/HB2veLKacAACPi3.jpg',
        'images/HBdInLFbUAIO-rE.jpg',
        'images/HBHjOFuaUAEdCzy.jpg',
        'images/HBHjOGZawAAfDDJ.jpg',
        'images/HBiKmiNbUAE3H2H.jpg',
        'images/HBtQ8P1bwAALMuT.jpg',
        'images/HCI29aoboAEFveu.jpg',
        'images/HCJyHzFaQAAiieS.jpg',
        'images/HCJyHzHaEAEHUMO.jpg',
        'images/HD1xyI3boAM2goG.jpg',
        'images/HDhRdDAbAAA0lLA.jpg',
        'images/HDNAGyvbQAUZ9nb.jpg',
        'images/HDncyU6awAA4UD5.jpg',
        'images/HF-cE2lbEAAZt3l.jpg',
        'images/HF7eAxGbwAEKW5s.jpg',
        'images/HF9vqQKbEAAjFV8.jpg',
        'images/HGfUuurbsAAxoDv.jpg',
        'images/HGpg-qWaUAA-vP7.jpg',
        'images/HGZaVaSbkAAnN1Q.jpg',
        'images/HH2h2DpaMAAGPwi.jpg',
        'images/HH5vvrSaEAAF6k_.jpg',
        'images/HH9tVm3bMAAeTAW.jpg',
        'images/HHawMpVbgAANvzP.jpg',
        'images/HHjkmLDasAAduIq.jpg',
        'images/HHjkmLEagAAocXo.jpg',
        'images/HHjSRloacAAUkM5.jpg',
        'images/HHjSRlxagAAmuna.jpg',
        'images/HI7QfNAa8AAb82U.jpg',
        'images/HI7QfS6bgAA6tZe.jpg',
        'images/HIRy_jwbcAA7f-U.jpg',
        'images/HIV0QjVaAAA5_7z.jpg',
        'images/HIWzjmVa4AABI78.jpg',
        'images/HIxUFiYaEAE0JXD.jpg',
        'images/HJagTylbsAEHqFn.jpg',
        'images/HJBeiD2aoAATeon.jpg',
        'images/HJBjAT-b0AACd_N.jpg',
        'images/HJBjAzpb0AAdkH0.jpg',
        'images/HJBsT1LbAAAAUzY.jpg',
        'images/HJfIOumbkAAdNva.jpg',
        'images/HJKCLHmacAA231a.jpg',
        'images/HJtzMzTa4AAhMqu.jpg',
        'images/HJYT972acAAK-mU.jpg',
        'images/HJzVmW6acAAZ7ud.jpg',
        'images/HKiMSo1awAAnGQC.jpg',
        'images/HKJ9UNfboAALccm.jpg',
        'images/HKnkYIXXcAAkEf0.jpg',
        'images/HKnkYLLWkAAcVws.jpg',
        'images/HLarWvfbYAECmfd.jpg',
        'images/HLbEjO0akAAjZj_.jpg',
        'images/HLgh--paUAA6jFu.jpg',
        'images/HLgiAt9a8AAcgaO.jpg',
        'images/HLgiB9daIAAZXd4.jpg',
        'images/HMApuGHbEAA4OWf.jpg',
        'images/HMKUkGEa0AAybsY.jpg',
        'images/HMnjz-MbsAAuRPN.jpg',
        'images/HMo6svoaMAYvvya.jpg',
        'images/HMoPCnZaEAAp_H1.jpg',
        'images/HMS68kbbYAAxJ8s.jpg',
        'images/HMVN-wdbkAACFTc.jpg',
        'images/HMW6eoeaQAEWLar.jpg',
        'images/HMZ0GlvbYAAcsC2.jpg',
        'images/HN6xhWkaQAAZhQK.jpg',
        'images/HNBwd7jacAAXeO0.jpg',
        'images/HNFJ5Caa4AAZIwm (1).jpg',
        'images/HNFJ5Caa4AAZIwm.jpg',
        'images/HNlglmzaIAACc9h (1).jpg',
        'images/HNRIKAQbIAA-20e.jpg',
        'images/HO_ixpVa4AADRy_.jpg',
        'images/HO4V4A4a0AAmlTU.jpg',
        'images/HO4V4A5acAAnSXJ.jpg',
        'images/HOcwC-JbkAA5vUO.jpg',
        'images/HODQWZta8AAuKWC.jpg',
        'images/HOiCHOIXIAA1v24.jpg',
        'images/HOIiK8IbUAAy4eN.jpg',
        'images/HOO1mMsasAArrlF.jpg',
        'images/HP-9hmhbUAAqIyl.jpg',
        'images/HP0lIVRaAAAXbaA.jpg',
        'images/HP7oXzobgAAkDBf.jpg',
        'images/HPCz4D7a8AA3ZpF.jpg',
        'images/HPF_7M9bkAAqcU2.jpg',
        'images/HPJF-tYaUAAuLZL.jpg',
        'images/HQ1FdAAa8AAy_aj.jpg',
        'images/HQ8z9TfbwAAWJ1C.jpg',
        'images/HQcWcy9bsAAMtbl.jpg',
        'images/HQePpBoaAAAeB_f.jpg',
        'images/HQePpBwb0AAYMZp (1).jpg',
        'images/HQflq_fa0AAsiIE.jpg',
        'images/HQGWCR1bEAcOV6r.jpg',
        'images/HQJlFUFXwAAWstr.jpg',
        'images/HQk0PFzaAAAkPXn.jpg',
        'images/HQpG_ADb0AAoMPO.jpg',
        'images/HQtzr1YagAAyTux.jpg',
        'images/HQtzr1YagAE1lBP.jpg',
        'images/HQUvOMJakAAbmWY.jpg',
        'images/HQyeIlbaIAASp1U.jpg',
        'images/HR7tXZ_a0AAp4mk.jpg',
        'images/HRDj01tbkAALppo.jpg',
        'images/HRSw0qOaoAAGOTL.jpg',
        'images/HRSw0qOaQAABOZQ.jpg',
        'images/HRSwdOjbIAAHxA5.jpg',
        'images/HTDzMqlbMAADZQk.jpg',
        'images/HTHx_QubYAAQubN.jpg',
        'images/HTHyDwGa8AA8HwT.jpg',
        'images/HTHyDwMbMAADm_v.jpg',
        'images/HTHyDwSaQAEDODy.jpg',
        'images/HTHyRqoa8AAomed.jpg',
        'images/HTIE7jIasAAZ5WM.jpg',
        'images/HTIE7jLbMAAKEiY.jpg',
        'images/HTIE7jNbcAApOhi.jpg',
        'images/HTIE7m_bAAAbLiD.jpg',
        'images/HTnWuZLXMAA21XX.jpg',
        'images/HTsgsgkXsAAcOor.jpg',
        'images/HTUompiaMAAED30.jpg',
        'images/IMG_1642.jpg',
        'images/IMG_2334.jpg',
        'images/IMG_2371.jpg',
        'images/MAE-001-1784257953916.jpg',
        'images/MAE-007-1783017957621.jpg',
        'images/MAE-027-1783320374188.jpg',
        'images/MAE-033-1783320374236.jpg',
        'images/MAE-035-1783320374241.jpg',
        'images/MAE-042-1782524289948.jpg',
        'images/MAE-043-1787158804698.jpg',
        'images/MAE-047-1783320374313.jpg',
        'images/MAE-049-1783320374329.jpg',
        'images/MAE-052-1783320389639.jpg',
        'images/MAE-053-1783320389639.jpg',
        'images/MAE-055-1783320389640.jpg',
        'images/MAE-060-1783320389674.jpg',
        'images/MAE-097-1782524302024.jpg',
        'images/MAE-104-1782524311299.jpg',
        'images/MAE-221-1784738620433.jpg',
        'images/MAE-226-1787074232760.jpg',
        'images/MAE-243-1784738620564.jpg',
        'images/MAE-252-1784916063152.jpg',
        'images/MAE-316-1786987698280.jpg',
        'images/MAE-350-1785688093044.jpg',
        'images/MAE-352-1785688093046.jpg',
        'images/MAE-357-1785688093120.jpg',
        'images/MAE-380-1785688093250.jpg',
        'images/MAE-383-1785688093272.jpg',
        'images/MAE-415-1783010575331.jpg',
        'images/MAE-418-1784916154056.jpg',
        'images/MAE-426-1784916154131.jpg',
        'images/MAE-430-1785002377101.jpg',
        'images/MAE-431-1784916154159.jpg',
        'images/MAE-432-1785002377101.jpg',
        'images/MAE-434-1784916154171.jpg',
        'images/MAE-436-1785002377165.jpg',
        'images/MAE-446-1784916154243.jpg',
        'images/MAE-448-1785002377231.jpg',
        'images/MAE-449-1785002377235.jpg',
        'images/MAE-457-1784916154309.jpg',
        'images/MAE-458-1784916154311.jpg',
        'images/MAE-490-1784916165067.jpg',
        'images/MAE-492-1784916165087.jpg',
        'images/MAE-504-1784916165148.jpg',
        'images/MAE-524-1784916197917.jpg',
        'images/MAE-525-1784916197945.jpg',
        'images/MAE-526-1784916197946.jpg',
        'images/MAE-559-1784916198144.jpg',
        'images/MAE-565-1784916198168.jpg',
        'images/MAE-569-1784916198192.jpg',
        'images/MAE-571-1784916209767.jpg',
        'images/MAE-582-1784916209884.jpg',
        'images/MAE-599-1784916209977.jpg',
        'images/MAE-604-1784916210001.jpg',
        'images/MAE-605-1784916210008.jpg',
        'images/MAE-611-1784916210037.jpg',
        'images/NEFIQkJFZzdmbVpuckRuQjNKaWN4Q1d2cy8zZUczMUhlSnhkUWZBT2N3ZDRjaFdnUGhIbmt6OWQ3c05qaks3c0QzYkJSNGZDajlCNUN5WnlwaG8zOGlBdEpKVGlTQ0dYWVowWmdMaVNjS3d4a1lVb2lLQjBzN2pHYVRYczR4eno-d.jpg',
        'images/NEFIQkJFZzdmbVpuckRuQjNKaWN4Q1d2cy8zZUczMUhlSnhkUWZBT2N3ZDRjaFdnUGhIbmt6OWQ3c05qaks3c0QzYkJSNGZDajlCNUN5WnlwaG8zOHBlZjNSbnlJS3o1M3JtMTlxNnJraUVub2YrRDEreE9SQmFBamc4SUhXSU0-d.jpg',
        'images/NEFIQkJFZzdmbVpuckRuQjNKaWN4Q1d2cy8zZUczMUhlSnhkUWZBT2N3ZDRjaFdnUGhIbmt6OWQ3c05qaks3c2VabDFoWWFwbGJCZ29jSXVKUnYrLzNlTXpMMWJSTmRTdkRJVkNiYlRYSHBCS3laNlppK3RFNkJIT1I1NHAvUWU-d.jpg',
        'images/oBh2DU1D_o-1784638250985.jpg',
        'images/OtherXXX-LL.VISION-A-large-collection-of-erotic-and-aesthetic-art-private-photos-PixiBB.COM-300.jpg',
        'images/OtherXXX-LL.VISION-A-large-collection-of-erotic-and-aesthetic-art-private-photos-PixiBB.COM-1071.jpg',
        'images/OtherXXX-LL.VISION-A-large-collection-of-erotic-and-aesthetic-art-private-photos-PixiBB.COM-1072.jpg',
        'images/OtherXXX-LL.VISION-A-large-collection-of-erotic-and-aesthetic-art-private-photos-PixiBB.COM-1356.gif',
        'images/ph7PeLMb_o-1783397915087.jpg',
        'images/photo1.jpg',
        'images/photo2.jpg',
        'images/photo3.jpg',
        'images/photo4.jpg',
        'images/photo5.jpg',
        'images/photo6.jpg',
        'images/photo7.jpg',
        'images/Q-ZcZ3b9aLiVw8bN-1786178487098.jpg',
        'images/Shika-hatsu-Classroom-4_result-scaled.webp.jpg',
        'images/Shika-hatsu-Classroom-17_result-scaled.webp.jpg',
        'images/Shika-hatsu-Classroom-22_result-scaled.webp.jpg',
        'images/Shika-hatsu-Classroom-65_result-scaled.webp.jpg',
        'images/Shika-hatsu-Classroom-75_result-scaled.webp.jpg',
        'images/Shika-hatsu-Classroom-81_result-scaled.webp.jpg',
        'images/Shika-hatsu-Classroom-88_result-scaled.webp.jpg',
        'images/suPEG2Iu_o-1784638251057.jpg',
        'images/UhCw7LZMFsN-UVML-1786178487106.jpg',
        'images/Unmark_0b657f92.jpg',
        'images/Unmark_0c466f62.jpg',
        'images/Unmark_00e61d9f.jpg',
        'images/Unmark_0e739eb1.jpg',
        'images/Unmark_0fbdad7b.jpg',
        'images/Unmark_0fc9dd20.jpg',
        'images/Unmark_1b3ef8fe.jpg',
        'images/Unmark_1be48210.jpg',
        'images/Unmark_1c5cf02f.jpg',
        'images/Unmark_1c8c1821.jpg',
        'images/Unmark_1c0453c7.jpg',
        'images/Unmark_1ca73d5f.jpg',
        'images/Unmark_001d3f49.jpg',
        'images/Unmark_1f87b790.jpg',
        'images/Unmark_2ac5ad50.jpg',
        'images/Unmark_2c46124b.jpg',
        'images/Unmark_2cb23def.jpg',
        'images/Unmark_2ce380e7.jpg',
        'images/Unmark_2d311237.jpg',
        'images/Unmark_02e2a943.jpg',
        'images/Unmark_2ece18bd.jpg',
        'images/Unmark_3b0a8ecd.jpg',
        'images/Unmark_3b3c5856.jpg',
        'images/Unmark_3b3e3089.jpg',
        'images/Unmark_3eaea94e.jpg',
        'images/Unmark_3ee04fe2.jpg',
        'images/Unmark_4a7d68ac.jpg',
        'images/Unmark_4ce36d9c.jpg',
        'images/Unmark_4d8c5d4d.jpg',
        'images/Unmark_4ef7c9c1.jpg',
        'images/Unmark_4fc34c9c.jpg',
        'images/Unmark_5a217edd.jpg',
        'images/Unmark_5ae9310e.jpg',
        'images/Unmark_5c3a28e9.jpg',
        'images/Unmark_5c3e10ad.jpg',
        'images/Unmark_5f6c7fd0.jpg',
        'images/Unmark_5f211bea.jpg',
        'images/Unmark_6a1b5c40.jpg',
        'images/Unmark_6b3f4d9b.jpg',
        'images/Unmark_6b15e5df.jpg',
        'images/Unmark_6c40ca96.jpg',
        'images/Unmark_6ca48a51.jpg',
        'images/Unmark_06e3afe9.jpg',
        'images/Unmark_6f52750a.jpg',
        'images/Unmark_7c8c2b53.jpg',
        'images/Unmark_7c36a33f.jpg',
        'images/Unmark_07f10033.jpg',
        'images/Unmark_8b0cc894.jpg',
        'images/Unmark_8e5ba806.jpg',
        'images/Unmark_8e13ebc0.jpg',
        'images/Unmark_8ee6ebdd.jpg',
        'images/Unmark_8f43f3e1.jpg',
        'images/Unmark_09b4f29d.jpg',
        'images/Unmark_9b6eaf8e.jpg',
        'images/Unmark_9bde679d.jpg',
        'images/Unmark_9d04eb6f.jpg',
        'images/Unmark_9d43f1ab.jpg',
        'images/Unmark_9e86e7a8.jpg',
        'images/Unmark_9ea099ad.jpg',
        'images/Unmark_18ea918b.jpg',
        'images/Unmark_19e67abb.jpg',
        'images/Unmark_20f22bbd.jpg',
        'images/Unmark_21d1cfc0.jpg',
        'images/Unmark_23c3c0a2.jpg',
        'images/Unmark_25e62328.jpg',
        'images/Unmark_27c128ab.jpg',
        'images/Unmark_27e929d2.jpg',
        'images/Unmark_32ab863d.jpg',
        'images/Unmark_32dc4af2.jpg',
        'images/Unmark_37f2c3e2.jpg',
        'images/Unmark_45f64b81.jpg',
        'images/Unmark_48dd655c.jpg',
        'images/Unmark_53ed9ac0.jpg',
        'images/Unmark_56e561d2.jpg',
        'images/Unmark_59f4a7c1.jpg',
        'images/Unmark_62a411f6.jpg',
        'images/Unmark_67ff20c2.jpg',
        'images/Unmark_69bf0322.jpg',
        'images/Unmark_70bc699f.jpg',
        'images/Unmark_71c96f88.jpg',
        'images/Unmark_71f2a5e4.jpg',
        'images/Unmark_72b03885.jpg',
        'images/Unmark_72fdb438.jpg',
        'images/Unmark_076ad21b.jpg',
        'images/Unmark_78bd0899.jpg',
        'images/Unmark_78e46da5.jpg',
        'images/Unmark_079d6e31.jpg',
        'images/Unmark_80dad3d4.jpg',
        'images/Unmark_87ddcf01.jpg',
        'images/Unmark_96c7af43.jpg',
        'images/Unmark_98a2dfb0.jpg',
        'images/Unmark_110f230b.jpg',
        'images/Unmark_205bcc16.jpg',
        'images/Unmark_263fa070.jpg',
        'images/Unmark_280a034d.jpg',
        'images/Unmark_302c1ed9.jpg',
        'images/Unmark_310e68de.jpg',
        'images/Unmark_331a809f.jpg',
        'images/Unmark_356fe735.jpg',
        'images/Unmark_418c0953.jpg',
        'images/Unmark_467e67b7.jpg',
        'images/Unmark_576c4931.jpg',
        'images/Unmark_578a3f31.jpg',
        'images/Unmark_599a5183.jpg',
        'images/Unmark_658ab52b.jpg',
        'images/Unmark_703dea8d.jpg',
        'images/Unmark_756c50ea.jpg',
        'images/Unmark_767a72a3.jpg',
        'images/Unmark_802bbae4.jpg',
        'images/Unmark_1099c8af.jpg',
        'images/Unmark_1378aacf.jpg',
        'images/Unmark_1401df04.jpg',
        'images/Unmark_1605ebcf.jpg',
        'images/Unmark_2152ab6b.jpg',
        'images/Unmark_02644fb6.jpg',
        'images/Unmark_3049b774.jpg',
        'images/Unmark_4103a7bd.jpg',
        'images/Unmark_5093af08.jpg',
        'images/Unmark_5457f22f.jpg',
        'images/Unmark_6202c8b0.jpg',
        'images/Unmark_6221f763.jpg',
        'images/Unmark_6645b6ac.jpg',
        'images/Unmark_7078b7b1.jpg',
        'images/Unmark_7482f66b.jpg',
        'images/Unmark_7892dd09.jpg',
        'images/Unmark_08007d24.jpg',
        'images/Unmark_9248d458.jpg',
        'images/Unmark_27263ab7.jpg',
        'images/Unmark_30032bb1.jpg',
        'images/Unmark_041945fa.jpg',
        'images/Unmark_47688f07.jpg',
        'images/Unmark_65173aa6.jpg',
        'images/Unmark_077886f9.jpg',
        'images/Unmark_92823d59.jpg',
        'images/Unmark_93963dee.jpg',
        'images/Unmark_95477bc1.jpg',
        'images/Unmark_95757abe.jpg',
        'images/Unmark_279752e5.jpg',
        'images/Unmark_330027d0.jpg',
        'images/Unmark_0575596b.jpg',
        'images/Unmark_653260d0.jpg',
        'images/Unmark_03406028.jpg',
        'images/Unmark_6641231e.jpg',
        'images/Unmark_9521556f.jpg',
        'images/Unmark_50596695.jpg',
        'images/Unmark_64723806.jpg',
        'images/Unmark_69484654.jpg',
        'images/Unmark_80273069.jpg',
        'images/Unmark_81085005.jpg',
        'images/Unmark_a1eb347d.jpg',
        'images/Unmark_a4bd8a03.jpg',
        'images/Unmark_a6b236da.jpg',
        'images/Unmark_a8e98c1b.jpg',
        'images/Unmark_a09efa24.jpg',
        'images/Unmark_a25ec099.jpg',
        'images/Unmark_a1974b42.jpg',
        'images/Unmark_aa75cfb5.jpg',
        'images/Unmark_ab10e069.jpg',
        'images/Unmark_ace10c7d.jpg',
        'images/Unmark_ace920b9.jpg',
        'images/Unmark_ad3a499e.jpg',
        'images/Unmark_ae40e03c.jpg',
        'images/Unmark_af304b99.jpg',
        'images/Unmark_afbfaaa3.jpg',
        'images/Unmark_afe72ddc.jpg',
        'images/Unmark_b0ffdb97.jpg',
        'images/Unmark_b7cbff44.jpg',
        'images/Unmark_b8eca0c1.jpg',
        'images/Unmark_b041cfe6.jpg',
        'images/Unmark_b60e4117.jpg',
        'images/Unmark_b66e7be4.jpg',
        'images/Unmark_b477b51d.jpg',
        'images/Unmark_b0529ad8.jpg',
        'images/Unmark_b0522693.jpg',
        'images/Unmark_bc292c0f.jpg',
        'images/Unmark_bdb91e9f.jpg',
        'images/Unmark_beb3ec1b.jpg',
        'images/Unmark_bed77768.jpg',
        'images/Unmark_c0f295d9.jpg',
        'images/Unmark_c1cb3b82.jpg',
        'images/Unmark_c7cf18c4.jpg',
        'images/Unmark_c9c54793.jpg',
        'images/Unmark_c59ccf61.jpg',
        'images/Unmark_c62ae118.jpg',
        'images/Unmark_c64b7dff.jpg',
        'images/Unmark_c81c8533.jpg',
        'images/Unmark_c107d257.jpg',
        'images/Unmark_c493a87d.jpg',
        'images/Unmark_c23263e1.jpg',
        'images/Unmark_c175033b.jpg',
        'images/Unmark_c352970f.jpg',
        'images/Unmark_c3122199.jpg',
        'images/Unmark_ca088c5a.jpg',
        'images/Unmark_cc1c6101.jpg',
        'images/Unmark_cca9b5dd.jpg',
        'images/Unmark_cdc49d3f.jpg',
        'images/Unmark_d0ab45d7.jpg',
        'images/Unmark_d0c136ae.jpg',
        'images/Unmark_d6b1adfb.jpg',
        'images/Unmark_d56fd07b.jpg',
        'images/Unmark_d86fc6e8.jpg',
        'images/Unmark_d89c7102.jpg',
        'images/Unmark_d260be78.jpg',
        'images/Unmark_d0430e45.jpg',
        'images/Unmark_d563cbfa.jpg',
        'images/Unmark_d701f969.jpg',
        'images/Unmark_d844bdb8.jpg',
        'images/Unmark_d5386b9e.jpg',
        'images/Unmark_da1fd75a.jpg',
        'images/Unmark_da8d1bc9.jpg',
        'images/Unmark_ddd2934b.jpg',
        'images/Unmark_dddfab1f.jpg',
        'images/Unmark_de3583b6.jpg',
        'images/Unmark_de830397.jpg',
        'images/Unmark_e23f5734.jpg',
        'images/Unmark_e31cc5eb.jpg',
        'images/Unmark_e60ffebd.jpg',
        'images/Unmark_e82c2f22.jpg',
        'images/Unmark_e83b0716.jpg',
        'images/Unmark_e164ca5e.jpg',
        'images/Unmark_e8020dfc.jpg',
        'images/Unmark_e92747bc.jpg',
        'images/Unmark_ea8bbd8e.jpg',
        'images/Unmark_eac7c136.jpg',
        'images/Unmark_eb5d0150.jpg',
        'images/Unmark_ebb03f75.jpg',
        'images/Unmark_ecdab538.jpg',
        'images/Unmark_ecff145c.jpg',
        'images/Unmark_ed6ec1bc.jpg',
        'images/Unmark_ed46e7c3.jpg',
        'images/Unmark_ee06e5c2.jpg',
        'images/Unmark_eed47b03.jpg',
        'images/Unmark_eefe0b9d.jpg',
        'images/Unmark_ef0ed1d4.jpg',
        'images/Unmark_ef7843ad.jpg',
        'images/Unmark_f0bfd199.jpg',
        'images/Unmark_f07aa8c7.jpg',
        'images/Unmark_f7dd54ee.jpg',
        'images/Unmark_f9e5bafe.jpg',
        'images/Unmark_f281a83c.jpg',
        'images/Unmark_f387a1d1.jpg',
        'images/Unmark_f08024b0.jpg',
        'images/Unmark_fa3ccea3.jpg',
        'images/V19SZrBhHdWyKTv8-1786180637488.jpg',
        'images/vNwATd96_o-1784638251119.jpg',
        'images/watermark-removed (1).jpg',
        'images/watermark-removed (2).jpg',
        'images/watermark-removed (3).jpg',
        'images/watermark-removed (4).jpg',
        'images/watermark-removed (5).jpg',
        'images/watermark-removed (6).jpg',
        'images/watermark-removed.jpg',
        'images/waXBkH.jpg',
        'images/waXctz.jpg',
        'images/waXg2U.jpg',
        'images/wmremove-transformed (1).jpg',
        'images/wmremove-transformed (2).jpg',
        'images/xlwj88RxvLBhdtjJ-1786964399028.jpg',
        'images/y7Wbto8Q_o-1784638251156.jpg',
        'images/ynfZH94o_o-1784638251178.jpg',
        'images/YUsrUDBZWTV1MDVWZkFmUXBEZmVGSkUrbVMxVEVLT05kSVhkOXBqem9rNlI3WXlHNjY5WmMyenJvYkdFOFVOaUVzZ3pkVHFsUVdGL2p3SjBQVDNUQWc9PQ-d.jpg',
        'images/YUsrUDBZWTV1MDVWZkFmUXBEZmVGSkUrbVMxVEVLT05kSVhkOXBqem9rNmxVcXBXR0Q0NFh4YW13RGJPbzVrcFJUZWFUb0FrRXRTS1BnR09IWVl4YkE9PQ-d.jpg',
        'images/YUsrUDBZWTV1MDVWZkFmUXBEZmVGSkUrbVMxVEVLT05kSVhkOXBqem9rNnFxT3FtN3RzMGdjckY2dWhZT1FHRTE3SVN3YWZjbmVYang5Qm5kSnRNR0E9PQ-d.jpg',
        'images/YUsrUDBZWTV1MDVWZkFmUXBEZmVGSkUrbVMxVEVLT05kSVhkOXBqem9rNnFxT3FtN3RzMGdjckY2dWhZT1FHRVNhYUxGM2kyYlRWTzBjRjZORFBXOFE9PQ-d.jpg',
        'images/zioLYrzL_o-1783397915248.jpg',
        'images/znFU306e_o-1784638251180.jpg'
    ];

    var FADE_MS = 3000;   // 3s fade in / out
    var BG_INTERVAL = 10000; // 10s background rotation

    // ---- Global active-image registry ----
    // Tracks every image currently visible on screen so we never show duplicates.
    var activeImages = new Set();

    /**
     * Pick a random image from pool, excluding:
     *   1. All currently active images (shown by other cards)
     *   2. The card's own current image (passed as ownSrc)
     * Falls back to just excluding ownSrc if all others are active.
     */
    function pickUnique(ownSrc) {
        var available = ALL_IMAGES.filter(function (s) {
            return s !== ownSrc && !activeImages.has(s);
        });
        // Edge case: all images are active (shouldn't happen with 11 imgs / 8 cards)
        if (available.length === 0) {
            available = ALL_IMAGES.filter(function (s) { return s !== ownSrc; });
        }
        return available[Math.floor(Math.random() * available.length)];
    }

    function isImage(s) { return /\.(jpe?g|png|gif|webp|bmp)$/i.test(s); }

    // Pick center media: always an image
    function pickCentral(own) {
        return pickUnique(own);
    }

    // ---- Helpers ----

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function preload(src, done) {
        var tmp = new Image();
        tmp.onload = done;
        tmp.onerror = done;
        tmp.src = src;
    }

    // ---------- Starfield overlay (per-card, random chance) ----------
    var STARFIELD_CHANCE = 0.45; // 45% of image cards get a starfield

    function createStarfield(card) {
        // Remove existing starfield if any
        var old = card.querySelector('.starfield');
        if (old) old.remove();

        // Random chance of having a starfield
        if (Math.random() > STARFIELD_CHANCE) return;

        var canvas = document.createElement('canvas');
        canvas.className = 'starfield';
        canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:2;';
        card.appendChild(canvas);

        var ctx = canvas.getContext('2d');
        var stars = [];
        var w, h;

        function resize() {
            w = canvas.width = card.offsetWidth * (window.devicePixelRatio || 1);
            h = canvas.height = card.offsetHeight * (window.devicePixelRatio || 1);
            canvas.style.width = card.offsetWidth + 'px';
            canvas.style.height = card.offsetHeight + 'px';
        }

        function makeStar() {
            return {
                x: Math.random() * w,
                y: Math.random() * h,
                size: (0.25 + Math.random() * 1.1) * (window.devicePixelRatio || 1),
                baseOpacity: 0.15 + Math.random() * 0.7,
                twinkleSpeed: 0.03 + Math.random() * 0.08, // faster twinkling
                twinkleOffset: Math.random() * Math.PI * 2,
                // Birth/death animation
                life: 0, // current age in seconds
                maxLife: 3 + Math.random() * 8, // live 3-11 seconds
                fadeIn: 0.3 + Math.random() * 0.7, // fade in duration
                fadeOut: 0.3 + Math.random() * 0.7 // fade out duration
            };
        }

        function initStars() {
            resize();
            stars = [];
            var targetCount = Math.floor((w * h) / 900); // very high density
            targetCount = Math.max(120, Math.min(targetCount, 400));
            for (var i = 0; i < targetCount; i++) {
                var s = makeStar();
                // Random starting age so they don't all spawn at once
                s.life = Math.random() * s.maxLife;
                stars.push(s);
            }
        }

        var rafId = null;
        var lastTime = null;

        function animate(timestamp) {
            if (!canvas.parentNode) { cancelAnimationFrame(rafId); return; }
            if (!lastTime) lastTime = timestamp;
            var dt = (timestamp - lastTime) / 1000; // delta time in seconds
            lastTime = timestamp;

            ctx.clearRect(0, 0, w, h);

            var targetCount = Math.floor((w * h) / 900);
            targetCount = Math.max(120, Math.min(targetCount, 400));

            // Update stars and remove dead ones
            for (var i = stars.length - 1; i >= 0; i--) {
                var s = stars[i];
                s.life += dt;

                if (s.life >= s.maxLife) {
                    stars.splice(i, 1);
                    continue;
                }

                // Calculate opacity multiplier from life (fade in / fade out)
                var lifeMult = 1;
                if (s.life < s.fadeIn) {
                    lifeMult = s.life / s.fadeIn;
                } else if (s.life > s.maxLife - s.fadeOut) {
                    lifeMult = (s.maxLife - s.life) / s.fadeOut;
                }

                // Twinkle — faster, deeper range
                var tw = Math.sin(s.life * s.twinkleSpeed * 12 + s.twinkleOffset);
                var minOp = s.baseOpacity * 0.1; // dimmer at lowest point
                var op = (minOp + (s.baseOpacity - minOp) * (0.5 + tw * 0.5)) * lifeMult;

                // Glow for larger / brighter stars (subtle)
                if (s.size > 0.9 * (window.devicePixelRatio || 1) && op > 0.4) {
                    var glowR = s.size * 2;
                    var grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
                    grad.addColorStop(0, 'rgba(255, 255, 255, ' + (op * 0.45) + ')');
                    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.max(0, op) + ')';
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Spawn new stars to maintain target count
            // Spawn rate: proportional to how many are missing, spread over time
            var deficit = targetCount - stars.length;
            if (deficit > 0) {
                var spawnRate = Math.min(deficit, 2 + deficit * 0.3); // spawn per second
                var spawnThisFrame = spawnRate * dt;
                var spawnCount = Math.floor(spawnThisFrame);
                // fractional chance for the last one
                if (Math.random() < (spawnThisFrame - spawnCount)) spawnCount++;
                for (var j = 0; j < spawnCount; j++) {
                    stars.push(makeStar());
                }
            }

            rafId = requestAnimationFrame(animate);
        }

        // Delay init slightly so card has dimensions
        setTimeout(function () {
            initStars();
            rafId = requestAnimationFrame(animate);
        }, 50);

        // Recompute on resize
        window.addEventListener('resize', function () {
            if (canvas.parentNode) initStars();
        });
    }

    // ---------- Raindrop window overlay (per-card, random chance, static) ----------
    var RAINDROP_CHANCE = 0.25; // 25% of image cards get raindrop effect
    var RAINDROP_DENSITY = 0.5; // rain amount: 0~1, higher = more drops

    function createRaindrops(card) {
        // Remove existing raindrop layer
        var old = card.querySelector('.raindrop-layer');
        if (old) old.remove();

        if (Math.random() > RAINDROP_CHANCE) return;

        var img = card.querySelector('img');
        if (!img) return;

        var dpr = Math.min(window.devicePixelRatio || 1, 2);

        // Wrapper
        var wrap = document.createElement('div');
        wrap.className = 'raindrop-layer';
        wrap.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:3;overflow:hidden;';

        // Layer 1: Fog / frosted glass (blurred + dimmed image)
        var fogImg = document.createElement('img');
        fogImg.src = img.src;
        fogImg.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;filter:blur(5px) brightness(0.85) contrast(0.85) saturate(0.85);opacity:0.92;';
        wrap.appendChild(fogImg);

        // Layer 2: Refraction canvas (magnified sharp image, clipped to drop shapes — lens effect)
        var refrCanvas = document.createElement('canvas');
        refrCanvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
        wrap.appendChild(refrCanvas);

        // Layer 3: Highlights + rim details
        var hlCanvas = document.createElement('canvas');
        hlCanvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
        wrap.appendChild(hlCanvas);

        card.appendChild(wrap);

        var refrCtx = refrCanvas.getContext('2d');
        var hlCtx = hlCanvas.getContext('2d');
        var w, h;
        var drops = [];

        function resize() {
            w = refrCanvas.width = hlCanvas.width = card.offsetWidth * dpr;
            h = refrCanvas.height = hlCanvas.height = card.offsetHeight * dpr;
            refrCanvas.style.width = card.offsetWidth + 'px';
            refrCanvas.style.height = card.offsetHeight + 'px';
            hlCanvas.style.width = card.offsetWidth + 'px';
            hlCanvas.style.height = card.offsetHeight + 'px';
        }

        // Compute image draw rect (object-fit: contain equivalent)
        function getImageRect() {
            var imgRatio = img.naturalWidth / img.naturalHeight;
            var cardRatio = w / h;
            var dw, dh, dx, dy;
            if (imgRatio > cardRatio) {
                dw = w; dh = w / imgRatio;
                dx = 0; dy = (h - dh) / 2;
            } else {
                dh = h; dw = h * imgRatio;
                dx = (w - dw) / 2; dy = 0;
            }
            return { x: dx, y: dy, w: dw, h: dh };
        }

        // Build a path for all drops (used for clipping / masking)
        function buildDropPath(ctx) {
            ctx.beginPath();
            for (var i = 0; i < drops.length; i++) {
                var d = drops[i];
                ctx.moveTo(d.x + d.rx, d.y);
                ctx.ellipse(d.x, d.y, d.rx, d.ry, 0, 0, Math.PI * 2);
            }
        }

        // Generate drops with random distribution (density controlled by RAINDROP_DENSITY)
        function generateDrops() {
            drops = [];

            // Base count per area, scaled by density
            var area = w * h;
            var baseDensity = RAINDROP_DENSITY;

            // Total drop count — proportional to area and density
            var totalCount = Math.floor(area / (1800 / baseDensity / dpr));
            totalCount = Math.max(20, Math.min(totalCount, 400));

            for (var i = 0; i < totalCount; i++) {
                var cx = Math.random() * w;
                var cy = Math.random() * h;

                // Size distribution: mostly small, some medium, few large
                var sizeR = Math.random();
                var rx;
                if (sizeR < 0.7) {
                    // Small
                    rx = (1.2 + Math.random() * 2.2) * dpr;
                } else if (sizeR < 0.93) {
                    // Medium
                    rx = (2.8 + Math.random() * 2.5) * dpr;
                } else {
                    // Large (rare)
                    rx = (5.5 + Math.random() * 3.5) * dpr;
                }
                var ry = rx * (0.75 + Math.random() * 0.35);

                // Per-drop refraction offset
                var refrOffsetX = (Math.random() - 0.5) * rx * 0.25;
                var refrOffsetY = -Math.abs((Math.random() - 0.2) * rx * 0.18);

                drops.push({
                    x: cx, y: cy,
                    rx: rx, ry: ry,
                    refrX: refrOffsetX,
                    refrY: refrOffsetY,
                    mag: 1.03 + Math.min(rx / (50 * dpr), 0.05)
                });
            }
        }

        // Draw refraction: each drop is a tiny lens with its own distortion
        function drawRefraction() {
            refrCtx.clearRect(0, 0, w, h);
            var r = getImageRect();

            for (var i = 0; i < drops.length; i++) {
                var d = drops[i];
                refrCtx.save();

                // Clip to drop shape
                refrCtx.beginPath();
                refrCtx.ellipse(d.x, d.y, d.rx, d.ry, 0, 0, Math.PI * 2);
                refrCtx.clip();

                // Draw magnified + shifted image (lens refraction)
                var mag = d.mag || 1.03;
                var mw = r.w * mag;
                var mh = r.h * mag;
                var mx = r.x - (mw - r.w) / 2 + (d.refrX || 0);
                var my = r.y - (mh - r.h) / 2 + (d.refrY || 0);
                refrCtx.drawImage(img, mx, my, mw, mh);

                // Subtle edge darkening for larger drops
                if (d.rx > 3 * dpr) {
                    var rimGrad = refrCtx.createRadialGradient(d.x, d.y, d.rx * 0.5, d.x, d.y, d.rx * 1.05);
                    rimGrad.addColorStop(0, 'rgba(0, 0, 20, 0)');
                    rimGrad.addColorStop(0.85, 'rgba(0, 0, 30, 0.03)');
                    rimGrad.addColorStop(1, 'rgba(0, 0, 40, 0.12)');
                    refrCtx.fillStyle = rimGrad;
                    refrCtx.beginPath();
                    refrCtx.ellipse(d.x, d.y, d.rx * 1.05, d.ry * 1.05, 0, 0, Math.PI * 2);
                    refrCtx.fill();
                }

                refrCtx.restore();
            }
        }

        // Draw highlights
        function drawHighlights() {
            hlCtx.clearRect(0, 0, w, h);

            for (var i = 0; i < drops.length; i++) {
                var d = drops[i];

                // Very small drops get a single tiny highlight dot
                if (d.rx < 2.2 * dpr) {
                    hlCtx.fillStyle = 'rgba(255, 255, 255, 0.55)';
                    hlCtx.beginPath();
                    hlCtx.arc(d.x - d.rx * 0.25, d.y - d.ry * 0.25, d.rx * 0.38, 0, Math.PI * 2);
                    hlCtx.fill();
                    continue;
                }

                hlCtx.save();
                hlCtx.translate(d.x, d.y);

                // Main specular highlight (top-left)
                var hlGrad = hlCtx.createRadialGradient(
                    -d.rx * 0.35, -d.ry * 0.45, 0,
                    -d.rx * 0.35, -d.ry * 0.45, d.rx * 0.55
                );
                hlGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
                hlGrad.addColorStop(0.35, 'rgba(255, 255, 255, 0.4)');
                hlGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                hlCtx.fillStyle = hlGrad;
                hlCtx.beginPath();
                hlCtx.ellipse(-d.rx * 0.35, -d.ry * 0.45, d.rx * 0.4, d.ry * 0.3, -0.4, 0, Math.PI * 2);
                hlCtx.fill();

                // Crisp highlight core
                hlCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                hlCtx.beginPath();
                hlCtx.ellipse(-d.rx * 0.3, -d.ry * 0.4, d.rx * 0.14, d.ry * 0.09, -0.4, 0, Math.PI * 2);
                hlCtx.fill();

                // Secondary highlight (bottom-right, fainter)
                hlCtx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                hlCtx.beginPath();
                hlCtx.ellipse(d.rx * 0.25, d.ry * 0.3, d.rx * 0.1, d.ry * 0.07, 0.3, 0, Math.PI * 2);
                hlCtx.fill();

                hlCtx.restore();
            }

            // Fine mist grain
            hlCtx.globalAlpha = 0.03;
            var mistCount = Math.floor((w * h) / 3000);
            for (var m = 0; m < mistCount; m++) {
                hlCtx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.6)' : 'rgba(180,200,220,0.4)';
                hlCtx.fillRect(Math.random() * w, Math.random() * h, 1 * dpr, 1 * dpr);
            }
            hlCtx.globalAlpha = 1;
        }

        // Punch holes in fog layer where drops are
        function applyFogMask() {
            var maskCanvas = document.createElement('canvas');
            maskCanvas.width = w;
            maskCanvas.height = h;
            var mctx = maskCanvas.getContext('2d');

            mctx.fillStyle = 'white';
            mctx.fillRect(0, 0, w, h);

            mctx.globalCompositeOperation = 'destination-out';
            buildDropPath(mctx);
            mctx.filter = 'blur(0.5px)';
            mctx.fill();
            mctx.filter = 'none';
            mctx.globalCompositeOperation = 'source-over';

            var dataUrl = maskCanvas.toDataURL('image/png');
            fogImg.style.webkitMaskImage = 'url(' + dataUrl + ')';
            fogImg.style.maskImage = 'url(' + dataUrl + ')';
            fogImg.style.webkitMaskSize = '100% 100%';
            fogImg.style.maskSize = '100% 100%';
            fogImg.style.webkitMaskRepeat = 'no-repeat';
            fogImg.style.maskRepeat = 'no-repeat';
        }

        function init() {
            if (!img.naturalWidth) { setTimeout(init, 100); return; }
            resize();
            generateDrops();
            drawRefraction();
            drawHighlights();
            applyFogMask();
        }

        if (img.complete && img.naturalWidth > 0) {
            setTimeout(init, 50);
        } else {
            img.addEventListener('load', function () { setTimeout(init, 50); });
        }

        window.addEventListener('resize', function () {
            if (wrap.parentNode) init();
        });
    }

    /**
     * Fade-in → stay → fade-out → swap → repeat.
     * Uses global activeImages to prevent duplicates.
     */
    function startRotation(card, imgEl, currentSrc) {
        function cycle() {
            var stay = rand(5000, 15000); // 5~15s random per cycle

            // After fade-in + stay, fade out
            setTimeout(function () {
                card.classList.remove('visible');

                // After fade-out completes, swap image and fade in
                setTimeout(function () {
                    // Remove old image from active pool before picking new one
                    activeImages.delete(currentSrc);

                    var newSrc = pickUnique(currentSrc);
                    // Reserve new image IMMEDIATELY (before async preload)
                    // so no other card can grab the same one during the gap
                    activeImages.add(newSrc);

                    preload(newSrc, function () {
                        imgEl.src = newSrc;
                        currentSrc = newSrc;

                        // Random starfield overlay on image cards
                        createStarfield(card);

                        // Trigger fade-in on next frame
                        requestAnimationFrame(function () {
                            card.classList.add('visible');
                            // Schedule next cycle
                            setTimeout(cycle, FADE_MS + rand(5000, 15000));
                        });
                    });
                }, FADE_MS);
            }, FADE_MS + stay);
        }

        cycle();
    }

    // ---- Random intro effects for main card images ----
    // Mutually exclusive: zoom-pan OR one transition effect OR none
    var INTRO_ZOOM_PAN_CHANCE = 0.40;  // 40%: zoom + bouncing pan
    var INTRO_TRANSITION_CHANCE = 0.50; // 50%: one of several transition effects
    // Remaining 10%: no effect

    var TRANSITION_DURATION = 4000; // how long the transition takes
    var TRANSITION_DELAY = 800;     // hold initial state before transitioning

    // DEBUG: cycle through effects sequentially to verify all work
    // Set to true for sequential testing, false for random
    var INTRO_EFFECT_DEBUG_CYCLE = false;
    var INTRO_EFFECT_DEBUG_INDEX = 0;
    var INTRO_EFFECT_DEBUG_LIST = [
        'gaussian',
        'pixelate',
        'blackWhite',
        'overexpose',
        'contrast',
        'wave'
    ];

    function applyImageIntroEffects(img, card) {
        if (!card.classList.contains('main-card')) return;

        var effect;

        if (INTRO_EFFECT_DEBUG_CYCLE) {
            // Sequential cycle mode for testing
            var type = INTRO_EFFECT_DEBUG_LIST[INTRO_EFFECT_DEBUG_INDEX % INTRO_EFFECT_DEBUG_LIST.length];
            INTRO_EFFECT_DEBUG_INDEX++;
            effect = 'trans_' + type;
            console.log('[Intro Effect] ' + type + ' (#' + INTRO_EFFECT_DEBUG_INDEX + ')');
        } else {
            var r = Math.random();
            if (r < INTRO_ZOOM_PAN_CHANCE) {
                effect = 'zoomPan';
            } else if (r < INTRO_ZOOM_PAN_CHANCE + INTRO_TRANSITION_CHANCE) {
                var types = ['gaussian', 'pixelate', 'blackWhite', 'overexpose', 'contrast', 'wave'];
                effect = 'trans_' + types[Math.floor(Math.random() * types.length)];
            } else {
                effect = 'none';
            }
        }

        if (effect === 'none') return;

        // Disable default kenburns during intro effects
        img.style.animation = 'none';

        // --- Transition effects (filter-based and canvas-based) ---
        if (effect.indexOf('trans_') === 0) {
            var tType = effect.replace('trans_', '');
            var dur = TRANSITION_DURATION;
            var delay = TRANSITION_DELAY;

            // Special canvas-based effects
            if (tType === 'pixelate') {
                applyPixelateEffect(img, card, dur, delay);
                return;
            }
            if (tType === 'wave') {
                applyWaveEffect(img, card, dur, delay);
                return;
            }

            // CSS filter-based effects
            var startFilter = '';
            var endFilter = 'none';

            switch (tType) {
                case 'gaussian':
                    // 高斯模糊 — 强模糊慢慢变清晰
                    startFilter = 'blur(30px) brightness(0.75)';
                    endFilter = 'blur(0px) brightness(1)';
                    break;
                case 'blackWhite':
                    // 黑白变彩色 — 纯黑白慢慢变成彩色
                    startFilter = 'grayscale(1) saturate(0) contrast(1.15) brightness(0.9)';
                    endFilter = 'grayscale(0) saturate(1) contrast(1) brightness(1)';
                    break;
                case 'overexpose':
                    // 过曝闪入 — 超亮发白慢慢恢复
                    startFilter = 'brightness(3.5) saturate(1.5) blur(4px)';
                    endFilter = 'brightness(1) saturate(1) blur(0px)';
                    break;
                case 'contrast':
                    // 高对比度褪色 — 强对比低饱和慢慢恢复
                    startFilter = 'contrast(2.5) saturate(0.15) brightness(0.75) sepia(0.3)';
                    endFilter = 'contrast(1) saturate(1) brightness(1) sepia(0)';
                    break;
            }

            // Apply initial state immediately
            img.style.filter = startFilter;
            img.style.willChange = 'filter';

            // After delay, transition to normal
            setTimeout(function () {
                if (!img.parentNode) return;
                img.style.transition = 'filter ' + dur + 'ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                // Force reflow to ensure transition starts
                var _reflow = img.offsetWidth;
                img.style.filter = endFilter;

                // Clean up after transition completes
                setTimeout(function () {
                    if (!img.parentNode) return;
                    img.style.filter = '';
                    img.style.transition = '';
                    img.style.willChange = '';
                    img.style.animation = '';
                }, dur + 100);
            }, delay);
            return;
        }

        // --- Pixelate / mosaic effect using canvas overlay ---
        function applyPixelateEffect(img, card, dur, delay) {
            var canvas = document.createElement('canvas');
            canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:3;opacity:1;';
            var ctx = canvas.getContext('2d');

            function renderPixelated() {
                if (!img.naturalWidth) { setTimeout(renderPixelated, 50); return; }
                if (!card.offsetWidth) { setTimeout(renderPixelated, 50); return; }

                var cw = card.offsetWidth;
                var ch = card.offsetHeight;
                canvas.width = cw;
                canvas.height = ch;
                canvas.style.width = cw + 'px';
                canvas.style.height = ch + 'px';

                // Image rect (object-fit: contain)
                var imgRatio = img.naturalWidth / img.naturalHeight;
                var cardRatio = cw / ch;
                var dw, dh, dx, dy;
                if (imgRatio > cardRatio) {
                    dw = cw; dh = cw / imgRatio;
                    dx = 0; dy = (ch - dh) / 2;
                } else {
                    dh = ch; dw = ch * imgRatio;
                    dx = (cw - dw) / 2; dy = 0;
                }

                // Big pixel size for obvious mosaic effect
                var pixelSize = 36;
                var smallW = Math.max(4, Math.floor(dw / pixelSize));
                var smallH = Math.max(3, Math.floor(dh / pixelSize));

                ctx.imageSmoothingEnabled = false;
                // Draw full image into small area (downscale with nearest-neighbor)
                ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight,
                    dx, dy, smallW, smallH);
                // Scale up to get blocky pixelated look
                ctx.drawImage(canvas, dx, dy, smallW, smallH, dx, dy, dw, dh);
            }

            card.appendChild(canvas);

            if (img.complete && img.naturalWidth > 0) {
                renderPixelated();
            } else {
                img.addEventListener('load', renderPixelated);
            }

            // After delay, fade out the pixelated overlay to reveal sharp image
            setTimeout(function () {
                if (!canvas.parentNode) return;
                canvas.style.transition = 'opacity ' + dur + 'ms ease-out';
                var _reflow = canvas.offsetWidth;
                canvas.style.opacity = '0';

                // Remove canvas after fade
                setTimeout(function () {
                    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
                    if (img.parentNode) img.style.animation = '';
                }, dur + 100);
            }, delay);
        }

        // --- Water wave / ripple effect: Canvas 2D displacement ---
        // Uses radial sine waves that propagate outward and gradually calm down.
        // Image is sampled with offset based on wave height to simulate refraction.
        function applyWaveEffect(img, card, dur, delay) {
            var canvas = document.createElement('canvas');
            canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:3;opacity:1;';
            var ctx = canvas.getContext('2d');
            card.appendChild(canvas);

            var startTime = performance.now();
            var rafId = null;
            var cw = 0, ch = 0;
            var dw = 0, dh = 0, dx = 0, dy = 0;

            // Wave sources (ripple origins)
            var ripples = [];

            function init() {
                if (!img.naturalWidth || !card.offsetWidth) return false;

                cw = card.offsetWidth;
                ch = card.offsetHeight;
                canvas.width = cw;
                canvas.height = ch;
                canvas.style.width = cw + 'px';
                canvas.style.height = ch + 'px';

                // Image rect (object-fit: contain)
                var imgRatio = img.naturalWidth / img.naturalHeight;
                var cardRatio = cw / ch;
                if (imgRatio > cardRatio) {
                    dw = cw; dh = cw / imgRatio;
                    dx = 0; dy = (ch - dh) / 2;
                } else {
                    dh = ch; dw = ch * imgRatio;
                    dx = (cw - dw) / 2; dy = 0;
                }

                // Create 6-8 ripple sources at random positions within the image
                var count = 6 + Math.floor(Math.random() * 3);
                for (var i = 0; i < count; i++) {
                    ripples.push({
                        cx: dx + dw * (0.15 + Math.random() * 0.7),
                        cy: dy + dh * (0.15 + Math.random() * 0.7),
                        speed: 100 + Math.random() * 80,  // px per second
                        strength: 12 + Math.random() * 10, // pixel displacement
                        startDelay: Math.random() * 0.6, // seconds, staggered start
                        wavelength: 22 + Math.random() * 14
                    });
                }

                return true;
            }

            function getWaveOffset(px, py, t) {
                var totalDx = 0;
                var totalDy = 0;
                var totalWeight = 0;

                for (var i = 0; i < ripples.length; i++) {
                    var r = ripples[i];
                    var age = t - r.startDelay;
                    if (age <= 0) continue;

                    var dist = Math.sqrt((px - r.cx) * (px - r.cx) + (py - r.cy) * (py - r.cy));
                    var waveFront = age * r.speed;

                    // Wave amplitude decays over time (calming down)
                    var timeDecay = Math.exp(-age * 0.35);

                    // Only area near the wave front has strong displacement
                    // (ring of ripples, not the whole area)
                    var distFromFront = Math.abs(dist - waveFront);
                    var ringWidth = r.wavelength * 2.5;
                    var ringMask = Math.exp(-(distFromFront * distFromFront) / (ringWidth * ringWidth));

                    // Sine wave along the radius
                    var phase = (dist - waveFront) / r.wavelength * Math.PI * 2;
                    var waveVal = Math.sin(phase) * r.strength * timeDecay * ringMask;

                    // Direction from ripple center to this pixel
                    var dirX = dist > 0.1 ? (px - r.cx) / dist : 0;
                    var dirY = dist > 0.1 ? (py - r.cy) / dist : 0;

                    // Displace perpendicular to wave direction (tangential)
                    // and slightly radially for more realistic refraction
                    totalDx += -dirY * waveVal * 0.7 + dirX * waveVal * 0.3;
                    totalDy += dirX * waveVal * 0.7 + dirY * waveVal * 0.3;
                    totalWeight += Math.abs(waveVal);
                }

                return { dx: totalDx, dy: totalDy, weight: totalWeight };
            }

            function render() {
                var now = performance.now();
                var t = (now - startTime) / 1000; // seconds

                ctx.clearRect(0, 0, cw, ch);

                // Draw the wave-distorted image using strip-based approach
                // Split image into vertical strips, shift each horizontally based on wave
                var stripW = 4; // width of each strip in pixels
                var numStrips = Math.ceil(dw / stripW);

                for (var i = 0; i < numStrips; i++) {
                    var sx = i * stripW;
                    var stripWidth = Math.min(stripW, dw - sx);

                    // Sample at the center of the strip
                    var sampleX = dx + sx + stripWidth / 2;
                    var sampleY = dy + dh / 2;

                    // Get wave displacement at this position
                    var offset = getWaveOffset(sampleX, sampleY, t);

                    // Source rect from the original image
                    var srcX = (sx - offset.dx) / dw * img.naturalWidth;
                    var srcW = stripWidth / dw * img.naturalWidth;

                    // Clamp source rect
                    if (srcX < 0) srcX = 0;
                    if (srcX + srcW > img.naturalWidth) srcW = img.naturalWidth - srcX;
                    if (srcW <= 0) continue;

                    // Dest rect with vertical wave offset too
                    var destX = dx + sx;
                    var destY = dy + offset.dy * 0.5;

                    ctx.drawImage(
                        img,
                        srcX, 0, srcW, img.naturalHeight,
                        destX, destY, stripWidth, dh
                    );
                }

                // Also add horizontal strip displacement for more realistic 2D waves
                // (second pass for Y-axis distortion)
                // Skip for performance — vertical strips + slight Y offset is enough

                // Specular highlight overlay — brighten wave crests
                ctx.globalCompositeOperation = 'lighter';
                for (var i = 0; i < ripples.length; i++) {
                    var r = ripples[i];
                    var age = t - r.startDelay;
                    if (age <= 0) continue;

                    var waveFront = age * r.speed;
                    var timeDecay = Math.exp(-age * 0.35);
                    var alpha = 0.08 * timeDecay;

                    if (alpha < 0.005) continue;

                    // Only draw highlight within image bounds
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(dx, dy, dw, dh);
                    ctx.clip();

                    ctx.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(r.cx, r.cy, waveFront, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
                ctx.globalCompositeOperation = 'source-over';

                // Fade out at the end
                var totalDur = delay + dur;
                if (t * 1000 > totalDur - 600) {
                    var fadeProgress = (t * 1000 - (totalDur - 600)) / 600;
                    canvas.style.opacity = Math.max(0, 1 - fadeProgress);
                }

                if (t * 1000 < totalDur + 100) {
                    rafId = requestAnimationFrame(render);
                } else {
                    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
                    if (img.parentNode) img.style.animation = '';
                }
            }

            // Wait for everything to be ready
            function startWhenReady() {
                if (init()) {
                    rafId = requestAnimationFrame(render);
                } else {
                    setTimeout(startWhenReady, 30);
                }
            }
            startWhenReady();
        }

        // --- Zoom + bouncing pan effect: continuous ---
        if (effect === 'zoomPan') {
            var zoom = 1.8 + Math.random() * 0.4; // 1.8 ~ 2.2x
            // Max safe pan in % (image dim): keep image fully covering the card
            var maxPanX = (zoom - 1) / (2 * zoom) * 100 * 0.95;
            var maxPanY = (zoom - 1) / (2 * zoom) * 100 * 0.95;

            // Random starting position
            var posX = (Math.random() * 2 - 1) * maxPanX;
            var posY = (Math.random() * 2 - 1) * maxPanY;

            // Random velocity (percent per second)
            var baseSpeed = 1.5 + Math.random() * 2; // 1.5~3.5 %/s
            var angle = Math.random() * Math.PI * 2;
            var vx = Math.cos(angle) * baseSpeed;
            var vy = Math.sin(angle) * baseSpeed;

            var lastTime = null;

            img.style.transformOrigin = 'center center';
            img.style.transform = 'scale(' + zoom + ') translate(' + posX + '%, ' + posY + '%)';

            function animate(ts) {
                if (!img.parentNode) return;
                if (!lastTime) lastTime = ts;
                var dt = (ts - lastTime) / 1000; // seconds
                lastTime = ts;

                // Update position
                posX += vx * dt;
                posY += vy * dt;

                // Bounce off edges
                if (posX >= maxPanX) {
                    posX = maxPanX;
                    vx = -Math.abs(vx);
                    vy += (Math.random() - 0.5) * 0.4;
                } else if (posX <= -maxPanX) {
                    posX = -maxPanX;
                    vx = Math.abs(vx);
                    vy += (Math.random() - 0.5) * 0.4;
                }
                if (posY >= maxPanY) {
                    posY = maxPanY;
                    vy = -Math.abs(vy);
                    vx += (Math.random() - 0.5) * 0.4;
                } else if (posY <= -maxPanY) {
                    posY = -maxPanY;
                    vy = Math.abs(vy);
                    vx += (Math.random() - 0.5) * 0.4;
                }

                // Clamp speed
                var speed = Math.sqrt(vx * vx + vy * vy);
                if (speed > baseSpeed * 1.3) {
                    vx = vx / speed * baseSpeed * 1.1;
                    vy = vy / speed * baseSpeed * 1.1;
                } else if (speed < baseSpeed * 0.7) {
                    vx = vx / speed * baseSpeed * 0.9;
                    vy = vy / speed * baseSpeed * 0.9;
                }

                img.style.transform = 'scale(' + zoom + ') translate(' + posX + '%, ' + posY + '%)';
                requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
        }
    }

    function buildMainMedia(card, src, depth) {
        depth = depth || 0;
        card.innerHTML = '';
        card.style.display = '';

        var im = document.createElement('img');
        im.alt = '';
        im.onerror = function () {
            if (depth >= 2) return;
            buildMainMedia(card, pickUnique(src), depth + 1);
        };
        card.appendChild(im);
        // Set onload BEFORE src to catch cached images
        im.onload = function () {
            // Wait for card to have dimensions before running effects
            function runEffects() {
                if (!card.offsetWidth || !card.offsetHeight) {
                    requestAnimationFrame(runEffects);
                    return;
                }
                applyImageIntroEffects(im, card);
                createStarfield(card);
            }
            runEffects();
        };
        im.src = src;
    }

    /**
     * Rotation for the center card — swaps between images.
     */
    function startMainRotation(card, currentSrc) {
        function cycle() {
            var stay = rand(5000, 15000);
            setTimeout(function () {
                card.classList.remove('visible');
                setTimeout(function () {
                    activeImages.delete(currentSrc);
                    var newSrc = pickCentral(currentSrc);
                    activeImages.add(newSrc);
                    buildMainMedia(card, newSrc);
                    currentSrc = newSrc;
                    requestAnimationFrame(function () {
                        card.classList.add('visible');
                        setTimeout(cycle, FADE_MS + rand(5000, 15000));
                    });
                }, FADE_MS);
            }, FADE_MS + stay);
        }
        cycle();
    }

    // ---- Background crossfade rotation ----
    // Uses stacked <img> elements: each new image is appended, faded in,
    // then the old one is removed. No background-image swapping = no flash.

    function initBackground() {
        var container = document.getElementById('bg-container');
        var currentBg = null;
        var currentImg = null;

        // Pick initial background
        currentBg = ALL_IMAGES[Math.floor(Math.random() * ALL_IMAGES.length)];
        currentImg = new Image();
        currentImg.src = currentBg;
        currentImg.classList.add('active');
        container.appendChild(currentImg);

        function rotateBg() {
            // Pick a random image, excluding current background
            var pool = ALL_IMAGES.filter(function (s) { return s !== currentBg; });
            var newBg = pool[Math.floor(Math.random() * pool.length)];

            // Create new <img> element (opacity 0 by default from CSS)
            var newImg = new Image();

            // IMPORTANT: attach handlers BEFORE setting src.
            // If the image is already cached (photo cards load the same images),
            // Chromium fires load synchronously on src assignment — handlers
            // set afterwards would miss the event entirely.
            newImg.onload = function () {
                // Capture old image reference BEFORE updating currentImg.
                // Otherwise the setTimeout closure below would reference the
                // already-updated currentImg (the new image) and fade out
                // the wrong layer — causing the background to "revert".
                var oldImg = currentImg;

                // Image is fully decoded & ready — append to DOM
                container.appendChild(newImg);

                // Next frame: fade in the new image
                requestAnimationFrame(function () {
                    newImg.classList.add('active');
                });

                // After crossfade completes, fade out & remove OLD image
                setTimeout(function () {
                    if (oldImg && oldImg.parentNode) {
                        oldImg.classList.remove('active');
                        // Remove from DOM after fade-out finishes
                        setTimeout(function () {
                            if (oldImg.parentNode) {
                                oldImg.parentNode.removeChild(oldImg);
                            }
                        }, 3000);
                    }
                }, 3000);

                // Update references
                currentImg = newImg;
                currentBg = newBg;

                // Schedule next rotation
                setTimeout(rotateBg, BG_INTERVAL);
            };

            // Fallback: if image fails to load, try again next cycle
            newImg.onerror = function () {
                setTimeout(rotateBg, BG_INTERVAL);
            };

            // Now set src (triggers load — handlers are already in place)
            newImg.src = newBg;
        }

        setTimeout(rotateBg, BG_INTERVAL);
    }

    // ---- Build the wall ----

    function buildWall() {
        var wall = document.getElementById('photo-wall');
        wall.innerHTML = '';

        // Reset active pool
        activeImages.clear();

        var W = window.innerWidth;
        var H = window.innerHeight;
        var cx = W / 2;
        var cy = H / 2;

        // == Main media at center (bottom layer): images only ==
        var mainSrc = pickCentral(null);
        activeImages.add(mainSrc);

        var mainWrapper = document.createElement('div');
        mainWrapper.className = 'photo-wrapper';
        mainWrapper.style.left = cx + 'px';
        mainWrapper.style.top = cy + 'px';
        mainWrapper.style.setProperty('--z', 1);

        var mainCard = document.createElement('div');
        mainCard.className = 'photo-card main-card';

        buildMainMedia(mainCard, mainSrc);
        mainWrapper.appendChild(mainCard);
        wall.appendChild(mainWrapper);

        setTimeout(function () {
            mainCard.classList.add('visible');
            startMainRotation(mainCard, mainSrc);
        }, 100);

        // == Scattered images around center ==
        var zoneW = 750;
        var zoneH = 480;

        var cols = W >= 2560 ? 5 : 4;
        var rows = 3;
        var cellW = W / cols;
        var cellH = H / rows;

        // Build cells, sort outermost first
        var cells = [];
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                var bcx = c * cellW + cellW / 2;
                var bcy = r * cellH + cellH / 2;
                var dist = Math.sqrt((bcx - cx) * (bcx - cx) + (bcy - cy) * (bcy - cy));
                cells.push({ col: c, row: r, dist: dist });
            }
        }
        cells.sort(function (a, b) { return b.dist - a.dist; });

        var NUM_SCATTERED = 7;

        for (var i = 0; i < NUM_SCATTERED; i++) {
            (function (idx) {
                var src = pickUnique(null);
                activeImages.add(src);

                var wrapper = document.createElement('div');
                wrapper.className = 'photo-wrapper';

                var card = document.createElement('div');
                card.className = 'photo-card';

                var img = document.createElement('img');
                img.src = src;
                img.alt = '';

                var positioned = false;
                img.onload = function () {
                    if (positioned) return; // ignore subsequent loads from rotation
                    positioned = true;

                    var cell = cells[idx % cells.length];
                    var baseX = cell.col * cellW + cellW / 2;
                    var baseY = cell.row * cellH + cellH / 2;
                    var x = baseX + rand(-cellW * 0.3, cellW * 0.3);
                    var y = baseY + rand(-cellH * 0.25, cellH * 0.25);

                    // Push away from center exclusion zone
                    var dx = x - cx;
                    var dy = y - cy;
                    if (Math.abs(dx) < zoneW && Math.abs(dy) < zoneH) {
                        var angle = Math.atan2(dy || rand(-1, 1), dx || rand(-1, 1));
                        x = cx + Math.cos(angle) * (zoneW + rand(0, 80));
                        y = cy + Math.sin(angle) * (zoneH + rand(0, 60));
                    }

                    // Clamp to viewport margins
                    var marginX = 170;
                    var marginY = 160;
                    x = Math.max(marginX, Math.min(W - marginX, x));
                    y = Math.max(marginY, Math.min(H - marginY, y));

                    var rotation = rand(-10, 10);
                    var z = Math.floor(rand(5, 16));
                    var floatDur = rand(4, 7);
                    var floatDelay = rand(0, 3);
                    var kbDelay = rand(0, 8);
                    var appearDelay = 300 + idx * 120;

                    wrapper.style.left = x + 'px';
                    wrapper.style.top = y + 'px';
                    wrapper.style.setProperty('--z', z);

                    card.style.setProperty('--rot', rotation + 'deg');
                    card.style.setProperty('--float-dur', floatDur + 's');
                    card.style.setProperty('--float-delay', floatDelay + 's');
                    card.style.setProperty('--kb-delay', kbDelay + 's');

                    setTimeout(function () {
                        card.classList.add('visible');
                        createStarfield(card);
                        startRotation(card, img, src);
                    }, appearDelay);
                };

                img.onerror = function () { card.style.display = 'none'; };

                card.appendChild(img);
                wrapper.appendChild(card);
                wall.appendChild(wrapper);
            })(i);
        }
    }

    // Debounced resize
    var resizeTimer = null;
    window.addEventListener('resize', function () {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildWall, 300);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            buildWall();
            initBackground();
        });
    } else {
        buildWall();
        initBackground();
    }
})();
