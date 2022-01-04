1. 安装 NodeSource yun npm 等
   url --silent --location https://rpm.nodesource.com/setup_8.x | bash -

   yum install -y nodejs

2. linux环境升级node版本
   1. 清除缓存信息
      sudo npm cache clean -f
   2. 下载node安装包
      sudo npm install -g n
   3. 升级到nodejs最新稳定版本
      sudo n stable
   4. 查看当前版本
      node -v