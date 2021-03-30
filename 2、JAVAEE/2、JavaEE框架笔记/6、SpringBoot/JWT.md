# 1、什么是JWT

> 官网：https://jwt.io/introduction

![image-20210330105356434](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330105356434.png)



# 2、JWT能做什么？

![image-20210330105626375](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330105626375.png)





# 3、为什么用JWT

## 3.1、基于传统session认证



![image-20210330110659865](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330110659865.png)

---

![image-20210330111039839](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330111039839.png)

---



## 3.2、基于JWT认证

![image-20210330111446324](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330111446324.png)

![image-20210330112206863](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330112206863.png)





# 4、JWT的结构

![image-20210330113007330](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330113007330.png)

![image-20210330142016343](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330142016343.png)

![image-20210330142224648](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330142224648.png)

---



# 5、第一个JWT程序

## 5.1、导入依赖

> https://jwt.io/  去libraries中找到：java， 然后去gitHub



## 5.2、生成token

~~~java
//生成日期类：
Calendar instance = Calendar.getInstance();

//设置为20秒：//java.util.GregorianCalendar[time=1617087120076,areFieldsSet=true]
instance.add(Calendar.SECOND, 20);

//令牌的获取：header可以不写，用默认的 alg:"HS256", "typ":"JWT"
String token = JWT.create()
    //payload
    .withClaim("userId", 21)
    .withClaim("username", "laoyang")
    //过期时间
    .withExpiresAt(instance.getTime())     //Tue Mar 30 14:53:19 CST 2021
    //签名
    .sign(Algorithm.HMAC256("!yyy@#i1"));

//打印token (header.payload.signature)
System.out.println(token);
~~~

> 生成结果：
>
> eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTcwODcxOTksInVzZXJJZCI6MjEsInVzZXJuYW1lIjoibGFveWFuZyJ9.UJdRNdG2gL28B60Lh0WCPqsZQ9M0Qx9MwQKpO7FGbN4





## 5.3、验证令牌

~~~java
//1、构建：验证signature对象
JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256("!yyy@#i1")).build();

//2、进行校验
DecodedJWT verify = jwtVerifier.verify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTcwODkzMDcsInVzZXJJZCI6MjEsInVzZXJuYW1lIjoibGFveWFuZyJ9.RvhVsKt2VEBwduinuL7zCGeISBo4Z2ktTrx0tpN0sD8");

//3、显示内容
System.out.println(verify.getClaim("userId"));
System.out.println(verify.getClaim("username"));

//4、显示过期时间: Tue Mar 30 15:28:27 CST 2021
System.out.println(verify.getExpiresAt());
~~~



## 5.4、常见异常信息

![image-20210330153032262](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210330153032262.png)







# 6、Springboot整合JWT

> 环境使用：springboot + mybatis + jwt



## 6.1、导入依赖

~~~xml
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>3.14.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.4</version>
</dependency>

<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.16</version>
</dependency>

<!-- https://mvnrepository.com/artifact/com.alibaba/druid -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.21</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.22</version>
</dependency>        
~~~



## 6.2、建表

~~~mysql
create database jwt
use jwt

create table user(
	id int primary key,
	name varchar(20) not null, 
	password varchar(20)
);

select * from user;

insert into user values(1, 'laoyang', 123);
~~~



## 6.3、entity层

~~~java
@Data
@Accessors(chain = true)        //set设置值后返回：其对象，让其称为（链式）
public class User {
    private String id;
    private String name;
    private String password;
}
~~~





## 6.4、dao层

~~~java
@Mapper
public interface UserDao {
    User login(User user);
}
~~~





## 6.5、mapper.xml绑定

> 路径：resource/com/yyy/mapper

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.yyy.dao.UserDao">
    <select id="login" parameterType="user" resultType="user">
        select * from user where name = #{name} and password = #{password}
    </select>
</mapper>
~~~



## 6.5、service接口

~~~java
public interface UserService {
   User login(User user);
}
~~~



## 6.6、serviceImple

~~~java
@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public User login(User user) {
        //根据接收：用户信息查询数据库
        User userDB = userDao.login(user);

        if(userDB != null){
            return userDB;
        }

        throw new RuntimeException("登陆失败");
    }
}
~~~



## 6.7、controller

> UserController

~~~java
@RestController
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/login")
    public Map<String, Object> login(User user){
        log.info("用户名 --->>> " + user.getName());
        log.info("密码 --->>> " + user.getPassword());

        Map<String, Object> map = new HashMap<>();

        try{
            User userDB = userService.login(user);
            Map<String, String> payload = new HashMap<>();
            payload.put("id", userDB.getId());
            payload.put("name", userDB.getName());
            String token = JWTUtils.getToken(payload);


            map.put("state", true);
            map.put("msg", "认证成功");
            map.put("token", token);
        }catch(Exception e){
            map.put("state", false);
            map.put("msg", e.getMessage());
        }

        return map;
    }

    @PostMapping("/user/test")
    public Map<String, Object> test(HttpServletRequest request){
        Map<String, Object> map = new HashMap<>();

        //处理自己的业务逻辑， 因为token已经放在Header里面了， 并且通过拦截器去验证token了
        String token = request.getHeader("token");
        DecodedJWT verify = JWTUtils.verify(token);
        Claim id = verify.getClaim("id");
        Claim name = verify.getClaim("name");

        log.info("用户ID ==>>> " + id);
        log.info("用户name ==>>> " + name);

        map.put("state", true);
        map.put("msg", "请求成功");
        return map;
    }
}
~~~

> 由于：每一个接口，都需要传入token，这样的话，代码冗余。改进如下



## 6.8、优化：添加拦截器

~~~java
public class JWTInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取请求头中的：令牌
        String token = request.getHeader("token");
        Map<String, Object> map = new HashMap<>();

        try {
            DecodedJWT verify = JWTUtils.verify(token);
            return true;            //放行请求
        }catch (SignatureVerificationException e) {
            e.printStackTrace();
            map.put("msg", "无效签名");
        }catch (TokenExpiredException e) {
            e.printStackTrace();
            map.put("msg", "token过期");
        } catch (AlgorithmMismatchException e) {
            e.printStackTrace();
            map.put("msg", "token算法不一致异常");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("msg", "token无效！！");
        }

        map.put("state", false);        //设置状态
        //将map转为json 利用jackson
        String json = new ObjectMapper().writeValueAsString(map);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(json);
        return false;
    }
}
~~~



## 6.9、导入拦截器

> 创建一个：config包 ，建立InterceptorConfig.java

~~~java
@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new JWTInterceptor())
                .addPathPatterns("/user/test")      //按理：其他接口token验证
                .excludePathPatterns("/user/login");    //所有用户都放行
    }
}
~~~

