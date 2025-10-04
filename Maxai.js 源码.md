63398: function(e, t, a) {
        "use strict";
        a.d(t, {
            n: function() {
                return h
            }
        });
        var n = a(96771)
          , i = a(64984)
          , r = a(90211)
          , o = a(8894)
          , s = a(27802)
          , l = a(59739);
        let u = "4d415841495f4150495f46455443485f54494d455f444946465f534156455f4b4559" // hexToString(u) === "MAXAI_API_FETCH_TIME_DIFF_SAVE_KEY"
          , c = "MAXAI_DEVICE_ID";
        class d {
            // e= 'https://api.maxai.me/gpt/cwc/chat'
            // t = { "provider": "USE_CHAT_GPT_PLUS", "taskId": "052a7c80-0782-466f-b07f-5059db6a3f28", "parse": null, "method": "POST", "body": "{\"conversation_id\":\"352afe1f-fc60-42f5-bafa-b516c93f519b\",\"chat_history\":[],\"message_content\":[{\"type\":\"text\",\"text\":\"hi\"}],\"chrome_extension_version\":\"webpage_7.1.0\",\"model_name\":\"gpt-4o\",\"prompt_id\":\"chat\",\"prompt_name\":\"chat\",\"prompt_inputs\":{\"RELATED_QUESTION_CNT\":\"5\",\"AI_RESPONSE_LANGUAGE\":\"Simplified Chinese\"},\"doc_ids\":[],\"event_source\":\"web\",\"streaming\":true,\"prompt_type\":\"freestyle\",\"feature_name\":\"immersive_chat\",\"source_type\":\"NA\",\"use_artifact\":true}", "streaming": true, "url": "https://api.maxai.me/gpt/cwc/chat", "fromUrl": "https://www.maxai.co/app/?id=352afe1f-fc60-42f5-bafa-b516c93f519b", "extraData": { "authInfo": { "userId": "9147ffb1-038d-48a3-aa35-5a765eff9be7", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7InVzZXJfaWQiOiI5MTQ3ZmZiMS0wMzhkLTQ4YTMtYWEzNS01YTc2NWVmZjliZTcifSwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTczOTkzNjg4NCwiaWF0IjoxNzM5ODkzNjg0LCJqdGkiOiJlMmRhMTE3ZC1mM2RjLTQyYmMtYjJlMC1jOTg3MThkN2RmZjYifQ._s9qttbVogCoL-Y4otM2GuzUZFS65iWtYuH2UfSFbUs" } }, "headers": { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7InVzZXJfaWQiOiI5MTQ3ZmZiMS0wMzhkLTQ4YTMtYWEzNS01YTc2NWVmZjliZTcifSwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTczOTkzNjg4NCwiaWF0IjoxNzM5ODkzNjg0LCJqdGkiOiJlMmRhMTE3ZC1mM2RjLTQyYmMtYjJlMC1jOTg3MThkN2RmZjYifQ._s9qttbVogCoL-Y4otM2GuzUZFS65iWtYuH2UfSFbUs" } }
            // a = 'https://www.maxai.co/app/?id=352afe1f-fc60-42f5-bafa-b516c93f519b'
            async getAPIEncryptHeaders(e, t, a) {
                let i = new Headers({
                    ...t.body instanceof FormData ? {} : {
                        "Content-Type": "application/json"
                    },
                    ...t.headers
                })
                  , l = {};
                try {
                    var u, c;
                    let d = new URL(e) // d= URL {origin: 'https://api.maxai.me', protocol: 'https:', username: '', password: '', host: 'api.maxai.me', …}
                      , h = d.pathname + d.search; // h= '/gpt/cwc/chat'
                    h.endsWith("?") && (h = h.slice(0, -1));
                    let p = await this.getAPIFetchTimestamp() // p= 时间戳
                      , f = n.F8 // n.F8= 'webpage_7.1.0'
                      , m = navigator.userAgent // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
                      , g = (null === (u = t.extraData) || void 0 === u ? void 0 : null === (c = u.authInfo) || void 0 === c ? void 0 : c.userId) || ""
                      , _ = "".concat(f, ":").concat(p, ":").concat(h, ":").concat(g) // 基础签名串构造规则 // f=应用版本号 p=时间戳 h=请求路径 g=用户ID
                      , y = "".concat(p, ":").concat(n.Mn) // 时间戳拼接固定密钥 // p=时间戳 n.Mn= 'b7a143b1e55ae5bdceb3a4bc7482c75c99d8353b3831f0406a8a5333'
                      , v = (0,
                    r.M7)(_, y).toString() // SHA1哈希计算 HMAC_SHA1(_, y).toString() 
                      , k = (0,
                    r.ic)("".concat(p, ":").concat(v, ":").concat(n.Mn)); // 最终SM3签名 SM3(`${p}:${v}:${n.Mn}`) 
                    l.sm3_sign = n.Mn,
                    l.req_time = String(p),
                    l.app_version = f,
                    l.user_agent = m,
                    l.sign_str = _,
                    l.sha1_secret_key = y,
                    l.sha1_hash = v,
                    l.sm3_sign = k;
                    let b = (0,
                    o.S7)()
                      , w = a || window.location.href
                      , x = (0,
                    s.x)(w);
                    i.set((0,
                    r.nj)("582d42726f777365722d4e616d65"), b.name || (0,
                    r.nj)("554e4b4e4f574e")),
                    i.set((0,
                    r.nj)("582d42726f777365722d56657273696f6e"), b.version || (0,
                    r.nj)("554e4b4e4f574e")),
                    i.set((0,
                    r.nj)("582d42726f777365722d4d616a6f72"), b.major || (0,
                    r.nj)("554e4b4e4f574e")),
                    i.set((0,
                    r.nj)("582d4170702d56657273696f6e"), n.F8),
                    i.set((0,
                    r.nj)("582d4170702d456e76"), (0,
                    r.nj)("4d617841492d42726f777365722d457874656e73696f6e")),
                    i.set((0,
                    r.nj)("582d417574686f72697a6174696f6e"), (0,
                    r.P0)({ // 签名函数
                        [(0,
                        r.nj)("582d436c69656e742d446f6d61696e")]: x, // X-Client-Domain
                        [(0,
                        r.nj)("582d436c69656e742d50617468")]: w, // X-Client-Path
                        [(0,
                        r.nj)("582d52616e646f6d")]: Math.floor(1e5 + 9e5 * Math.random()).toString(),  // X-Random
                        [(0,
                        r.nj)("74")]: p, // t 时间戳 时间戳p
                        [(0,
                        r.nj)("70")]: k, // p SM3签名k,
                        [(0,
                        r.nj)("64")]: await this.getAPIFetchDeviceID() // d 设备ID
                    }, n.Rl)) // 盐值,  n.Rl 'b7a143b1e55ae5bdceb3a4bc7482c75c99d8353b3831f0406a8a5333'
                } catch (e) {}
                return {
                    headers: i,
                    encryptData: l
                }
            }
            async getAPIFetchDeviceID() {
                let e = await i.D.getItem(c);
                if (e)
                    return e;
                let t = (0,
                l.Z)();
                return await i.D.setItem(c, t),
                t
            }
            async getAPIFetchTimestamp() {
                let e = await this.getAPIFetchTimeDiff();
                return new Date().getTime() + e
            }
            async getAPIFetchTimeDiff() {
                // hexToString(u) === "MAXAI_API_FETCH_TIME_DIFF_SAVE_KEY"
                // 相当于 Number(localStorage.getItem("MAXAI_API_FETCH_TIME_DIFF_SAVE_KEY"))
                let e = await i.D.get((0, 
                r.nj)(u)) || {}; // r.nj: e=>{let t="";for(let a=0;a<e.length;a+=2)t+=String.fromCharCode(parseInt(e.substr(a,2),16));return t}
                return Number(e[(0,
                r.nj)(u)] || 0)
            }
            async setAPIFetchTimeDiff(e) { 
                await i.D.set({
                    [(0,
                    r.nj)(u)]: e
                })
            }
