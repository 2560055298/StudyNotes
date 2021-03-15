> 参考视频教程：https://www.bilibili.com/video/BV1q741167PJ?p=7&spm_id_from=pageDriver



# 1、安装node.js

> 安装步骤：看自己的博客



# 2、安装git

> 直接搜一下：安装教程





# 3、安装hexo

> 官网：https://hexo.io/zh-cn/

~~~java
//注意：从第二条开始，用git
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
~~~





# 4、生成静态文件：public目录

> 官网的命令栏，注意使用git：hexo generate

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210310214434673.png" alt="image-20210310214434673" style="zoom: 50%;" />

---



# 5、写作

> 参考官网：https://hexo.io/zh-cn/

![image-20210311075403717](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210311075403717.png)

---

![image-20210311075359908](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210311075359908.png)

---



# 6、引入：统计数量（插件）

> 官网介绍插件：https://hexo.io/zh-cn/docs/plugins

> 不蒜子：https://busuanzi.ibruce.info/





# 7、评论组件

> 1、disqus（需要翻墙）：https://blog.disqus.com/
> 2、来必力（推荐）：https://www.livere.com/
> 3、畅言：https://changyan.kuaizhan.com/





# 8、给博客增加搜索功能

> 1、提供搜索网（收费）：swiftype.com
>
> 2、自定义site语法：进行跳转





# 9、多个博客（统计系统的）接入方案分析

> 1、cnzz（友盟）：https://www.umeng.com/web
>
> 2、百度：





# 10、部署到gitHub

> 一键部署：在博客根目录
>
> 可能会出现要绑定ssh：才能部署问题

~~~javascript
//安装部署的git
npm install --save hexo-deployer-git

//修改配置文件_config.yml  (注意空格)
deploy:
  type: 'git'
  repo: git@github.com:2560055298/yangblog.git
  branch: master
  
//部署：命令
hexo d
~~~





# 11、不能出现：==样式==的问题

> 第一步：修改配置文件_config.yml

~~~yml
# URL
# url 生成的gitPage页面地址
# root 仓库名
url: https://2560055298.github.io/jinyangblog.github.io/	
root: /jinyangblog.github.io/
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210311111947454.png" alt="image-20210311111947454" style="zoom:50%;" />

> 第二步：清除、生成静态文件、重新部署

~~~yml
# 清除缓存文件 (db.json) 和已生成的静态文件 (public)。
# 在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。
hexo clean

#hexo g, --generate	部署之前预先生成静态文件
hexo g

# 部署网站
hexo d
~~~





# 12、域名：绑定阿里云

~~~
1、购买域名，实名认证，不需要备案
2、域名解析（本地与服务器映射）
3、接下来会让你输入IP，完成解析
4、我的记录类型显示的是两个A，然后做了修改，最终效果如下：
5、在D:\blog\source中新建CNAME记事本，内容输入www.heimu24.com【个人域名】，保存关闭。
6、进入github设置，绑定域名
7、浏览器输入www.heimu24.com，效果如下，成功！！！。
~~~

> 绑定域名：https://blog.csdn.net/heimu24/article/details/81159099?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=1328627.24447.16154656121478027&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control







# 13、详细：搭建博客

> hexo + gitHubPage + 阿里云：
>
> https://developer.aliyun.com/article/208375







# 14、绑定阿里云后：找不到css

> 没有绑定阿里云时：能显示页面；
>
> 绑定阿里云后，不能显示页面。原因是：域名代替的（内容是否对呢？）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210311215301411.png" alt="image-20210311215301411" style="zoom:67%;" />

此处：www.yangzaikongzhongfei.com

代替的应该是：2560055298.gitHub.io==而不是== （我的：博客项目真实路径）

==jinyangblog.github.io==







# 15、gitHub访问后显示：模板字符串

![image-20210315102432837](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210315102432837.png)

==解决方法==

~~~
npm install hexo-renderer-ejs --save
npm install hexo-renderer-stylus --save
npm install hexo-renderer-marked --save
~~~



