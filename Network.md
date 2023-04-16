# Network

## HTTP

HTTP 协议是一种用于分布式、协作式和超媒体信息系统的 **应用层** 协议，最初设计 HTTP 的目的是为了提供一种发布和接收 HTML 页面的方法

通过 HTTP 或者 HTTPS 请求的资源由 **统一资源标识符（Uniform Resource Identifiers，URI）** 来标识

HTTP 是一个客户端（用户）和服务端（网站）之间请求和响应的标准
- 通过使用浏览器、爬虫或者其他工具，客户端发起一个 HTTP 请求到服务器上的指定端口（默认是80），我们称这个客户端为 **用户代理程序（user agent）**
- 响应的服务器上存储着一些资源，比如 HTML 文件和图像，我们称这个相应服务器为 **源服务器（origin server）**

### HTTP 的组成

> **HTTP 请求 = 请求 Request + 响应 Response**

![HTTP请求的组成](imgs/HTTP%E8%AF%B7%E6%B1%82%E7%9A%84%E7%BB%84%E6%88%90.png)
![HTTP请求的组成](imgs/HTTP%E5%93%8D%E5%BA%94%E7%9A%84%E7%BB%84%E6%88%90.png)

### HTTP 的版本

#### HTTP/0.9

- 发布于 1991 年
- 只支持 GET 请求方法获取文本数据，当时主要是为了获取 HTML 页面内容

#### HTTP/1.0

- 发布于 1996 年
- 支持 POST HEAD 等请求方法，支持请求头、响应头等，支持多种数据类型
- 但是浏览器的每次请求都需要与服务器建立一个 TCP 连接，请求完成后立即断开 TCP 连接，每次建立连接增加了性能损耗

#### HTTP/1.1

> **目前使用最广泛的版本**

- 发布于 1997 年
- 增加了 PUT DELETE 等请求方法
- 采用 **持久连接（Connection：keep-alive**，多个请求可以共用同一个 TCP 连接

#### HTTP/2.0

- 发布于 2015 年

#### HTTP/3.0

- 发布于 2018 年

### HTTP 的请求方式

- `GET` 请求一个指定资源的表示形式，使用 GET 的请求应该只被用于 **获取** 数据
- `HEAD` 请求一个与 GET 请求的响应相同的响应，但没有响应体（通常用于比较大的文件，可以先根据响应头中的内容判断文件大小，再决定要不要返回响应体）
- `POST` 用于将实体 **提交** 到指定的资源
- `PUT` 用请求有效载荷（payload）替换目标资源的所有当前表示
- `DELETE` **删除** 指定的资源
- `PATCH` 用于对资源相应部分 **修改**
- `CONNECT` 建立一个到目标资源标识的服务器的隧道，通常用在代理服务器，网页开发很少用到
- `TRACE` 沿着到目标资源的路径执行一个消息环回测试



## TCP/IP 

[TCP的那些事儿(上)](https://coolshell.cn/articles/11564.html)

[TCP的那些事儿(下)](https://coolshell.cn/articles/11609.html)

[TCP经典15连问](https://mp.weixin.qq.com/s/uMVTMkXVxOczjdXZR_7JbQ)

