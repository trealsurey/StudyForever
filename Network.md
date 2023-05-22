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
- 默认采用 **持久连接（Connection：keep-alive**，多个请求可以共用同一个 TCP 连接

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

### HTTP 请求头

#### content-type

这次请求携带的数据类型
- `application/x-www-form-urlencoded` 数据被编码成以 `&` 分割的键值对，同时以 `=` 分割键和值
  - 比如：name=lucy&age=28&level=10 这种形式的数据
- `application/json` JSON 类型
- `application/xml` XML 类型
- `text/plain` 文本类型
- `multipart/form-data` 上传文件 

#### content-length

文件的大小长度，自动计算的

#### keep-alive

- HTTP 基于 TCP，通常在进行一次请求和响应结束后会立刻中断，频繁建立连接会带来很大的性能损耗
- HTTP1.0 中，如果想要持续保持连接
  - 请求头和响应头中都要添加 `connection: keep-alive` 
  - 当客户端再次发送请求时，就会使用同一个连接，一方直接中断连接
- HTTP1.1 中，所有连接默认是 keep-alive 的
  - 不同的服务器会有不同的保持 keep-alive 时间
  - Node 中默认是 5s

#### accept-encoding

告知服务器，客户端支持的文件压缩格式，比如 JS 文件可以使用 gzip 编码，对应 .gz 文件

支持何种形式的压缩文件，浏览器也会自动配置

获取到压缩文件之后，浏览器会自动解压

可以通过 webpack 配置，在打包时自动生成压缩文件

#### accept

告知服务器，客户端可接受数据的格式类型，比如是接收 JSON/XML，`*/*` 表示任意格式

#### user-agent

客户端相关信息

> 还有很多其他信息……

### HTTP 响应状态码

[MDN中的响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

[RFC 7231 更新后的状态码](https://datatracker.ietf.org/doc/html/rfc7231#section-6)

- `1xx (Informational)` The request was received, continuing process
- `2xx (Successful)`  The request was successfully received, understood, and accepted
- `3xx (Redirection)` Further action needs to be taken in order to complete the request
- `4xx (Client Error)` The request contains bad syntax or cannot be fulfilled
- `5xx (Server Error)` The server failed to fulfill an apparently valid request

同时还允许服务器自定义响应码

![常见状态码](imgs/%E5%B8%B8%E8%A7%81HTTP%E7%8A%B6%E6%80%81%E7%A0%81.png)

## HTTPS :star:

> **HTTPS 的加密过程 = 非对称加密 + 对称加密 + CA + Hash** 
>
> 面试频率太高了 T^T

### 对称加密和非对称加密

#### 对称加密

加密和解密用同一套密钥

优点：速度快方便；高效，适用于大量数据加密的场景

#### 非对称加密

私钥一般放在服务器中

数据经过公钥加密就只能被私钥解密，被私钥加密就只能被公钥解密

### HTTPS 的加密过程



## TCP/IP 

[TCP的那些事儿(上)](https://coolshell.cn/articles/11564.html)

[TCP的那些事儿(下)](https://coolshell.cn/articles/11609.html)

[TCP经典15连问](https://mp.weixin.qq.com/s/uMVTMkXVxOczjdXZR_7JbQ)

