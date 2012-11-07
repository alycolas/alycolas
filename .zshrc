#{{{ My function
#
#meizitu kankan
function meizi {
	curl http://jandan.net/ooxx | sed  -e /height=\"85\"/d -e /net\\/ad/d | grep img\ src=\" | sed -e s/^.\\+\"h/h/g -e s/\"\ .\\+$//g |  aria2c  -j35  -c -d /tmp/current -i - & ;sleep 5 ; feh  -R1 -FYZdD3 --cycle-once /tmp/current ; feh -t -W1280 -E95 --index-info '' /tmp/current
		let current=`curl http://jandan.net/ooxx | grep -o -m 1 "\[[[:digit:]]\{3\}\]" | sed -e "s/\[//g" -e "s/\]//"`
		current=$(($current-1))
	for i in {1..100}
	do
		mkdir /tmp/$current
		curl http://jandan.net/ooxx/page-$current | sed  -e /height=\"85\"/d -e /net\\/ad/d | grep img\ src=\" | sed -e s/^.\\+\"h/h/g -e s/\"\ .\\+$//g |  aria2c -j50 -q -c -d /tmp/$current -i - & ; sleep 5 ; feh  -R1 -FYdZD3 --cycle-once /tmp/$current  #; feh -t -W1280 -E100 --index-info '' /tmp/$current
		#curl http://jandan.net/ooxx | grep img\ src=\" | sed s/^.\\+\"h/h/g | sed s/\"\ .\\+$//g | aria2c -c -i - -d /tmp
		#curl http://jandan.net/ooxx/page-$current | grep img\ src=\" | sed s/^.\\+\"h/h/g | sed s/\.jpg\".\\+$/\.jpg/g |  aria2c -j33 --connect-timeout=1 -c -d /tmp/$current -i - & ;sleep 5 ; feh -R1 -F -Y -d -S name --cycle-once /tmp/$current ; feh -t -a50 --index-info '' /tmp/$current
		rm -r /tmp/$current
		echo $current
	#	echo "Press any key to view next page !"
		current=$(($current-1))
		read -n 1 
	done
}
#end of meizitu

# cpu temp
function temp {
    for i in  {1..10000}
    do 
        temp=`cat /sys/bus/pci/drivers/k8temp/0000:00:18.3/temp1_input|cut -c1,2`
        echo -ne " \033[40;32m[$temp]\033[0m"
        if [ $temp -le 45 ]; then
            for a in $(seq 40 $temp)
            do 
                echo -ne '\033[32m|||\033[0m'
            done
            echo -ne "\033[32m{$temp} \n\033[0m"
        elif [ $temp -lt 50 ]; then
            for a in $(seq 40 $temp)
            do 
                echo -ne '\033[33m|||\033[0m'
            done
            echo -ne "\033[33m{$temp} \n\033[0m"
        else 
            for a in $(seq 40 $temp)
            do 
                echo -ne '\033[31m|||\033[0m'
            done
            echo -ne "\033[31m{$temp} \n\033[0m"
        fi
        sleep 1
    done
}
#end of cpu tmep
#end of function}}}

##命令提示符 {{{
RPROMPT=$(echo '%{\033[31m%}%D %T%{\033[m%}')
PROMPT=$(echo '%{\033[40;36m%}%n%{\033[44;37m%} %{\033[40;35m%}%M%{\033[44;37m%} %{\033[40;32m%}%/
%{\033[0;31m%}>%{\033[33m%}>%{\033[36m%}> %{\033[m%}')
#}}}

#标题栏、任务栏样式{{{
case $TERM in (*xterm*|*rxvt*|(dt|k|E)term)
   precmd () { print -Pn "\e]0;%n@%M//%/\a" }
   preexec () { print -Pn "\e]0;%n@%M//%/\ $1\a" }
   ;;
esac
#}}}

#关于历史纪录的配置 {{{
#历史纪录条目数量
export HISTSIZE=10000
#注销后保存的历史纪录条目数量
export SAVEHIST=10000
#历史纪录文件
export HISTFILE=~/.zhistory
#以附加的方式写入历史纪录
setopt INC_APPEND_HISTORY
#如果连续输入的命令相同，历史纪录中只保留一个
setopt HIST_IGNORE_DUPS      
#为历史纪录中的命令添加时间戳      
setopt EXTENDED_HISTORY      

#启用 cd 命令的历史纪录，cd -[TAB]进入历史路径
setopt AUTO_PUSHD
#相同的历史路径只保留一个
setopt PUSHD_IGNORE_DUPS

#在命令前添加空格，不将此命令添加到纪录文件中
setopt HIST_IGNORE_SPACE      
#}}}

#每个目录使用独立的历史纪录{{{
cd() {
    builtin cd "$@"                             # do actual cd
    fc -W                                       # write current history  file
    local HISTDIR="$HOME/.zsh_history$PWD"      # use nested folders for history
        if  [ ! -d "$HISTDIR" ] ; then          # create folder if needed
            mkdir -p "$HISTDIR"
        fi
        export HISTFILE="$HISTDIR/zhistory"     # set new history file
    touch $HISTFILE
    local ohistsize=$HISTSIZE
        HISTSIZE=0                              # Discard previous dir's history
        HISTSIZE=$ohistsize                     # Prepare for new dir's history
    fc -R                                       #read from current histfile
}
mkdir -p $HOME/.zsh_history$PWD
export HISTFILE="$HOME/.zsh_history$PWD/zhistory"

function allhistory { find $HOME/.zsh_history -name zhistory | sed "s/^/'/g" | sed "s/$/'/g" | xargs cat }
function convhistory {
            sort $1 | uniq |
            sed 's/^:\([ 0-9]*\):[0-9]*;\(.*\)/\1::::::\2/' |
            awk -F"::::::" '{ $1=strftime("%Y-%m-%d %T",$1) "|"; print }'  
}
#使用 histall 命令查看全部历史纪录
function histall { convhistory =(allhistory) |
            sed '/^.\{20\} *cd/i\\' }
#使用 hist 查看当前目录历史纪录
function hist { convhistory $HISTFILE }

#全部历史纪录 top44
function top44 { allhistory | awk -F':[ 0-9]*:[0-9]*;' '{ $1="" ; print }' | sed 's/ /\n/g' | sed '/^$/d' | sort | uniq -c | sort -nr | head -n 44 }

#}}}

#杂项 {{{
#允许在交互模式中使用注释  例如：
#cmd #这是注释
setopt INTERACTIVE_COMMENTS      
      
#启用自动 cd，输入目录名回车进入目录
#稍微有点混乱，不如 cd 补全实用
#setopt AUTO_CD
      
#扩展路径
#/v/c/p/p => /var/cache/pacman/pkg
setopt complete_in_word
      
#禁用 core dumps
limit coredumpsize 0

#Emacs风格 键绑定
bindkey -e
#设置 [DEL]键 为向后删除
bindkey "\e[3~" delete-char

#以下字符视为单词的一部分
WORDCHARS='*?_-[]~=&;!#$%^(){}<>'
#}}}

#自动补全功能 {{{
setopt AUTO_LIST
setopt AUTO_MENU
#开启此选项，补全时会直接选中菜单项
#setopt MENU_COMPLETE

autoload -U compinit
compinit

#自动补全缓存
#zstyle ':completion::complete:*' use-cache on
#zstyle ':completion::complete:*' cache-path .zcache
#zstyle ':completion:*:cd:*' ignore-parents parent pwd

#自动补全选项
zstyle ':completion:*:match:*' original only
zstyle ':completion::prefix-1:*' completer _complete
zstyle ':completion:predict:*' completer _complete
zstyle ':completion:incremental:*' completer _complete _correct
zstyle ':completion:*' completer _complete _prefix _correct _prefix _match _approximate

#路径补全
zstyle ':completion:*' expand 'yes'
zstyle ':completion:*' squeeze-shlashes 'yes'
zstyle ':completion::complete:*' '\\'

zstyle ':completion:*' menu select
zstyle ':completion:*:*:default' force-list always

#彩色补全菜单 
eval $(dircolors -b) 
export ZLSCOLORS="${LS_COLORS}"
zmodload zsh/complist
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'

#修正大小写
zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}'
#错误校正      
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle ':completion:*:approximate:*' max-errors 1 numeric

#kill 命令补全      
compdef pkill=kill
compdef pkill=killall
zstyle ':completion:*:*:kill:*' menu yes select
zstyle ':completion:*:*:*:*:processes' force-list always
zstyle ':completion:*:processes' command 'ps -au$USER'

#补全类型提示分组 
zstyle ':completion:*:matches' group 'yes'
zstyle ':completion:*' group-name ''
zstyle ':completion:*:options' description 'yes'
zstyle ':completion:*:options' auto-description '%d'
zstyle ':completion:*:descriptions' format $'\e[01;33m -- %d --\e[0m'
zstyle ':completion:*:messages' format $'\e[01;35m -- %d --\e[0m'
zstyle ':completion:*:warnings' format $'\e[01;31m -- No Matches Found --\e[0m'
#}}}

##行编辑高亮模式 {{{
# Ctrl+@ 设置标记，标记和光标点之间为 region
zle_highlight=(region:bg=magenta #选中区域 
               special:bold      #特殊字符
               isearch:underline)#搜索时使用的关键字
#}}}

##空行(光标在行首)补全 "cd " {{{
user-complete(){
    case $BUFFER in
        "" )                       # 空行填入 "cd "
            BUFFER="cd "
            zle end-of-line
            zle expand-or-complete
            ;;
        "cd --" )                  # "cd --" 替换为 "cd +"
            BUFFER="cd +"
            zle end-of-line
            zle expand-or-complete
            ;;
        "cd +-" )                  # "cd +-" 替换为 "cd -"
            BUFFER="cd -"
            zle end-of-line
            zle expand-or-complete
            ;;
        * )
            zle expand-or-complete
            ;;
    esac
}
zle -N user-complete
bindkey "\t" user-complete
#}}}

##在命令前插入 sudo {{{
#定义功能 
sudo-command-line() {
    [[ -z $BUFFER ]] && zle up-history
    [[ $BUFFER != sudo\ * ]] && BUFFER="sudo $BUFFER"
    zle end-of-line                 #光标移动到行末
}
zle -N sudo-command-line
#定义快捷键为： [Esc] [Esc]
bindkey "\e\e" sudo-command-line
#}}}
  
#命令别名 {{{
alias dropbox='dropbox stop;sleep 3;dropbox start'
alias xpdf='xpdf -fullscreen'
alias wget='wget -c'
alias aria2c='aria2c -c'
alias -g cp='cp -i'
alias -g mv='mv -i'
#alias -g rm='rm -i'
alias -g ls='ls -F --color=auto'
alias -g ll='ls -l'
alias -g grep='grep --color=auto'
alias -g ee='emacsclient -t'
alias df='df -h'
alias du='du -m | sort -n'
alias halt='sudo halt'
alias reboot='sudo reboot'
function cdl {cd $1; ls}
alias slurm='slurm -i eth0'
alias mount='sudo mount'
alias umount='sudo umount'
alias usb='sudo mount -o iocharset=utf8'
alias mp4="mencoder -of lavf -lavfopts format=mp4 -oac lavc -ovc lavc -lavcopts aglobal=1:vglobal=1:acodec=libfaac:vcodec=mpeg4:abitrate=32:vbitrate=200:keyint=25:mbd=1:vqmax=10:lmax=10:vpass=1:turbo -ofps 15 -af lavcresample=44100 -vf harddup,scale=320:-3 -alang chi"
alias lftp='lftp ftp://192.168.0.3:2121'
alias qjdl="export http_proxy='http://127.0.0.1:1998'"
alias vd='/home/alycolas/lixian/video_lixian.py'
# alias py='/home/alycolas/proxy/localproxy-2.0.0/proxy.py'
alias al='cd /home/alycolas'
alias we='/home/alycolas/proxy/west-chamber-proxy/westchamberproxy.py'
alias -s html=$BROWSER
alias -s org=$BROWSER
alias -s php=$BROWSER
alias -s com=$BROWSER
alias -s net=$BROWSER
alias -s png=feh
alias -s jpg=feh
alias -s gif=feg
alias -s sxw=soffice
alias -s doc=soffice
alias -s gz='tar -xzvf'
alias -s bz2='tar -xjvf'
alias -s java=$EDITOR
alias -s txt=$EDITOR
alias -s PKGBUILD=$EDITOR
# Normal aliases
alias ls='ls --color=auto -F'
alias lsd='ls -ld *(-/DN)'
alias lsa='ls -ld .*'
alias f='find |grep'
alias c="clear"
alias dir='ls -1'
alias ..='cd ..'
alias ppp-on='sudo /usr/sbin/ppp-on'
alias ppp-off='sudo /usr/sbin/ppp-off'
alias firestarter='sudo su -c firestarter'
alias mpg123='mpg123 -o oss'
alias mpg321='mpg123 -o oss'
alias vba='~/downloads/VisualBoyAdvance -f 4'
#alias hdir="grep $1 -r ~/.zsh_history"
function hdir {grep $1 -r ~/.zsh_history --color=auto}
alias h="histall | grep "
alias hist="history 0 | grep "
alias irssi="irssi -c irc.freenode.net -n aly"
alias mem="free -m"
#}}}

#{{{[Esc][h] man 当前命令时，显示简短说明 
alias run-help >&/dev/null && unalias run-help
autoload run-help

#历史命令 top10
alias top10='print -l  ${(o)history%% *} | uniq -c | sort -nr | head -n 10'
#}}}


#{{{自定义补全
#补全 ping
zstyle ':completion:*:ping:*' hosts 192.168.128.1{38,} www.g.cn \
       192.168.{1,0}.1{{7..9},}

#补全 ssh scp sftp 等
my_accounts=(
{r00t,root}@{192.168.1.1,192.168.0.1}
kardinal@linuxtoy.org
123@211.148.131.7
)
zstyle ':completion:*:my-accounts' users-hosts $my_accounts
#}}}

####{{{
function calc { echo $(($@)) }
function timeconv { date -d @$1 +"%Y-%m-%d %T" }

# }}}


## END OF FILE #################################################################
# vim:filetype=zsh foldmethod=marker autoindent expandtab shiftwidth=4 

##xmodmap .Xmodmap

export EDITOR="vim"
set -o vi
