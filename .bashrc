#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '


# modprobe vboxdrv
set -o vi

alias lftp='lftp ftp://192.168.0.3:2121'
alias qjdl="export http_proxy='http://127.0.0.1:1998'"
alias vd='/home/alycolas/lixian/video_lixian.py'
alias py='/home/alycolas/proxy/localproxy-2.0.0/proxy.py'
alias al='cd /home/alycolas'
alias pr='sudo /home/alycolas/proxy/west-chamber-proxy/westchamberproxy.py'

#eval `dbus-launch --sh-syntax --exit-with-session`
#export XMODIFIERS=@im=fcitx
#export GTK_IM_MODULE=fcitx
#export QT_IM_MODULE=fcitx
export EDITOR=vim
