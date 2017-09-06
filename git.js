/*
* @Author: owlcity
* @Date:   2017-09-06 09:55:24
* @Last Modified by:   owlcity
* @Last Modified time: 2017-09-06 10:05:37
*/
1:安装git
2:创建版本库
	通过git init命令把这个目录变成Git可以管理的仓库：
	$ mkdir learngit
	$ cd learngit
	$ pwd
	/Users/michael/learngit
	$ git init
3:把文件添加到版本库
	$ git add readme.txt
	把文件提交到仓库
	$ git commit -m "wrote a readme file"
4:git status命令可以让我们时刻掌握仓库当前的状态
	查看修改内容
	$ git diff readme.txt 
5:版本回退
	$ git log命令查看
	$ 或者git log --pretty=oneline
	$ git reset --hard HEAD^ 返回上一个版本
	$ git reset --hard HEAD^ 返回上上一个版本
	$ git reset --hard HEAD~100 返回上100个版本
	$ git reset --hard 3628164 返回指定版本


