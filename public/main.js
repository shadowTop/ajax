
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/style.css")
    request.onload=()=>{
        console.log(request.response) 
        console.log('成功加载')
        const style =document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror=()=>{
        console.log('失败')
    }
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/2.js")
    request.onload=()=>{
        console.log(request.response) 
        console.log('成功加载')
        const script =document.createElement('script')
        script.innerHTML = request.response
        document.head.appendChild(script)
    }
    request.onerror=()=>{
        console.log('失败')
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/3.html")
    request.onload=()=>{
        console.log(request.response) 
        console.log('成功加载')
        const div =document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{
        //如果失败不会触发
        console.log('失败')
    }
    request.send()
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent.trim()
            console.log(text)
        }
    }
    request.send()
}
getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status ===200){
            const object = JSON.parse(request.response)
            myName.textContent=object.name
        }
    }
    request.send()
}
let n= 2
getPAGE.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get', `/page${n}`)
    request.onreadystatechange=()=>{
      
        if(request.readyState ===4 && request.status ===200){
        
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                page.appendChild(li)
            });
        }
        
    }
    request.send()
    n+=1
    if (n>4){
        alert("已经到底了")
    }
}