# 1、cmd查看

> netstat -ano -p tcp | find "3389" >nul 2>nul && echo 3389端口已开启 || echo 3389未开启





# 2、cmd开启3389

>  REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server /v fDenyTSConnections /t REG_DWORD /d 00000000 /f





# 3、关闭3389

> REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server /v fDenyTSConnections /t REG_DWORD /d 11111111 /f