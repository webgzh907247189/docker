// https://juejin.im/post/5dde46b2e51d4554350715f5
const http = require('http');

http.createServer((req,res)=>{
    res.end('hello docker')
}).listen(3001,()=>{
    console.log('server start~~')
})

/**
 * docker --version
 * 命令可以检查安装后的 Docker 版本
 * 
 * docker info 来查看是否配置成功
 * 
 * https://www.jianshu.com/p/12c9a9654f83  ->  pull一个jenkins镜像
 * pull一个jenkins镜像  docker pull jenkins/jenkins:lts
 * 查看已经安装的镜像 docker images
 * 查看jenkins服务 docker ps | grep jenkins
 * docker run -d --name jenkins_01 -p 8081:8080 -v /Users/web/Documents/workspace/gzh/jenkins_home:/Users/web/Documents/workspace/gzh/jenkins_home jenkins/jenkins:lts
 * docker run -itd --name jenkins_01 jenkins/jenkins:lts /bin/bash
 * 启动服务端 。localhost:8081
 * 
 * 进入容器内部docker exec -it jenkins_home bash
 * cat /var/jenkins_home/secrets/initialAdminPassword，得到密码并粘贴过去
 * docker restart {CONTAINER ID}
 * 
 * 查看所有的容器命令
 * docker ps -a
 * 
 * docker run -itd --name jenkins_01
 * 
 * docker 安装
 * ce -> https://docs.docker.com/v18.09/install/linux/docker-ce/ubuntu
 * 
 * 
 * sudo su  -> 普通用户切换成root用户
 * root用户切成为普通用户  ->  su xxxx
 * vi xxx.js :set num 显示行号
 * 
 * 要删除images 先删除引用的容器
 * docker ps -a 查看dokcer容器
 * docker rm xxx  删除容器
 * 
 * 停止所有的container，这样才能够删除其中的images： docker stop $(docker ps -a -q)
 * 如果想要删除所有container的话再加一个指令：docker rm $(docker ps -a -q)
 * 
 * 想要删除untagged images，也就是那些id为<None>的image的话可以用
 * docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
 * 要删除全部image的话  docker rmi $(docker images -q)
 * 删除images 报错的话，采用name+tag删除
 */
