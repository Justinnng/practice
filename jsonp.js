// jsonp

function jsonp(url, data={}, cb = 'MusicJsonCallback') {
            data[cb] = cb
            // 拼装参数
            const params = []
            for (let key in data) {
                params.push(`${key}=${data[key]}`)
            }
            const script = document.createElement('script')
            script.src = url + '?' + params.join('&')
            script.defer = true
            document.body.appendChild(script)
            return new Promise((resole, reject) => {
                try {
                    window[cb] = function (data) {
                        resole(data)
                    }    
                } catch (error) {
                    reject(error)
                } finally {
                    // 每次删除
                    script.parentNode.removeChild(script)
                }
            })
        }
        
        // call jsonp
        jsonp('https://y.qq.com/download/download.js', { format: 'jsonp'})
        .then(res => {
            console.log(res)
        })
