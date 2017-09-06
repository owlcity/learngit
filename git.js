/*
* @Author: owlcity
* @Date:   2017-09-06 09:55:24
* @Last Modified by:   owlcity
* @Last Modified time: 2017-09-06 13:38:35
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
6:工作区和暂存区
	Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD
	-第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；
	-第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。
7:撤销修改
	1:$ git checkout -- readme.txt
		git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
			一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
			一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
	2:在commit之前，你发现了问题。用git status查看一下，修改只是添加到了暂存区-add，还没有提交：
		$ git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区：
		git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。
		再用git status查看一下，现在暂存区是干净的，工作区有修改：
		$ git checkout -- readme.txt
	小结：
		场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。
		场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。
8:删除文件
	$ git rm test.txt
	删错了把误删的文件恢复到最新版本：
	$ git checkout -- test.txt
9:远程仓库
	小结
		-要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；

		-关联后，使用命令git push -u origin master第一次推送master分支的所有内容；

		-此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；
	参考:
	https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000
10:创建与合并分支
	1:-创建dev分支，然后切换到dev分支：
	$ git checkout -b dev
		git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
		$ git branch dev
		$ git checkout dev
	$ git branch命令查看当前分支
	git branch命令会列出所有分支，当前分支前面会标一个*号。
	2:合并分支
		$ git merge dev
	3:合并完成后删除dev分支了
		$ git branch -d dev
11:解决冲突




































