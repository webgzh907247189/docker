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
 */
