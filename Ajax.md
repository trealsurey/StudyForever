# AJAX

[动力节点-老杜 AJAX 课程](https://www.bilibili.com/video/BV1cR4y1P7B1/)

Asynchronous JavaScript And XML

## 传统请求及缺点

传统请求有
- 浏览器地址栏输入 URL
- 点击超链接
- 提交 form 表单 form.submit
- 使用 JS 代码发送请求
  - window.open(url)
  - document.location.href = url
  - window.location.href = url
- ……

存在的问题
- 页面全部刷新导致用户的体验较差，不能局部刷新
- 传统请求导致用户的体验有空白期，用户体验不连贯

## AJAX 特点

- 可以在浏览器中发送 **异步请求**，类似于多线程并发 
- AJAX 请求发送后，不会出现页面清空，然后展示新页面的效果，可以局部刷新
- AJAX 代码属于前端代码，和后端用什么语言没有关系，可以是 Java PHP C 都没关系
- AJAX 应用程序可能使用 XML 来传输数据，但将数据作为纯文本或者 JSON 文本传输也同样常见

## XMLHttpRequest 对象

`XMLHttpRequest` 对象是 AJAX 的核心对象，发送请求以及接受服务器数据的返回 都靠它

```js
var xhr = new XMLHttpRequest();
```

### 对象方法

- `abort()`：取消当前请求
- `getAllResponseHeaders()`：返回所有头部信息
- `getResponseHeader()`：返回特定头部信息
- `open(method, url, async, user, psw)`：规定请求
  - method：GET/POST
  - url：文件位置
  - async：
    - true 异步，90% 情况下都是异步
    - false 同步
  - user：可选的用户名称
  - pwd：可选的密码
- `send()`：将请求发送到服务器，用于 GET 请求
- `send(string)`：将请求发送到服务器，用于 POST 请求
- `setRequestHeader()`：向要发送的报头添加标签/值对

### 对象属性

- `onreadystatechange`：当 readyState 属性发生变化时被调用的函数
- `readyState`：保存 XMLHttpRequest 状态
  - 0：请求未初始化
  - 1：服务器连接已建立
  - 2：请求已收到
  - 3：正在处理请求
  - 4：请求已完成且响应已就绪 
- `responseText`：以字符串返回相应数据
- `responseXML`：以 XML 返回相应数据
- `status`：返回请求的状态码
  - 200：OK
  - 403：forbidden
  - 404：not found
  - 500：服务器内部错误
- `statusText`：返回状态文本，比如 OK、forbidden、not found

```js
var div = document.querySelector('div')
var btn = document.querySelector('input')

// 点击按钮发送 ajax 请求，并在 div 中进行渲染
btn.addEventListener('click', function() {
    // 1. 新建对象
    var xhr = new XMLHttpRequest()
    // 2. 注册函数
    xhr.onreadystatechange = function() {
        // 最好不要直接写 4，而是写成 XHR.DONE
        if (this.readyState === XMLHttpRequest.DONE) {
            // 代表已经响应结束，响应结束一般会有 HTTP 状态码
            if (this.status == 404) {
                alert('对不起，您访问的资源不存在，请检查访问路径')
            } else if (this.status == 500) {
                alert('对不起，服务器发生了严重的内部错误，请联系管理员')
            } else if (this.status == 200) {
                // alert('响应成功')
                // 通过 responseText 来获取响应信息，然后进行渲染
                // 这里 responseText 接收到的就是 "<font color='red'>Welcome To AJAX!!!</font>"
                div.innerHTML = this.responseText   
            }
        }
    }
    // 3. 打开通道
    xhr.open('GET', '/ajax/ajaxrequest1', true)
    // 4. 发送请求
    xhr.send()

    // 没有 3 4 两步就不算一个完整的 ajax 请求
})
```

```java
// 这个路径要和 xhr.open 中的路径一致
@WebServlet("/ajaxrequest1")
public class AjaxRequestServlet extends HttpServlet {
    @override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
            如果写了这两句，就会报 500 的错误
            String s = null;
            s.toStirng;
        */

        // Servlet 向浏览器响应一段数据
        PrintWriter out = response.getWriter();

        // out 对象向浏览器输出信息
        // out 在响应的时候，浏览器客户端的 XMLHttpRequest 对象会接收到这个响应信息
        out.print("<font color='red'>Welcome To AJAX!!!</font>")
    }
}
```