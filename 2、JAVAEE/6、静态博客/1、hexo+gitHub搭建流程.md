# 1、搭建参考博客

> https://blog.csdn.net/sinat_37781304/article/details/82729029



# 2、搭建博客：==遇到问题==

## 1、出现404

> https://blog.csdn.net/qq32933432/article/details/87955133



## 2、出现：模板字符

![image-20210315102432837](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210315102432837.png)

==解决方法==

~~~
1、安装依赖
    npm install hexo-renderer-ejs --save
    npm install hexo-renderer-stylus --save
    npm install hexo-renderer-marked --save

2、修改hexo版本：改为4.0.2

3、删除：models

4、npm install            //重新安装依赖 
~~~





## 3、显示html：不显示css

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





# 3、引入配置

## 3.1、引入：统计数量（插件）

> 官网介绍插件：https://hexo.io/zh-cn/docs/plugins

> 不蒜子：https://busuanzi.ibruce.info/





## 3.2、评论组件

> 1、disqus（需要翻墙）：https://blog.disqus.com/
> 2、来必力（推荐）：https://www.livere.com/
> 3、畅言：https://changyan.kuaizhan.com/





## 3.3、给博客增加搜索功能

> 1、提供搜索网（收费）：swiftype.com
>
> 2、自定义site语法：进行跳转





## 3.4、多个博客（统计系统的）接入方案分析

> 1、cnzz（友盟）：https://www.umeng.com/web
>
> 2、百度：

