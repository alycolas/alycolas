#!/bin/sh
#
# ~/.xinitrc
#
# Executed by startx (run your window manager from here)


if [ -d /etc/X11/xinit/xinitrc.d ]; then
  for f in /etc/X11/xinit/xinitrc.d/*; do
    [ -x "$f" ] && . "$f"
  done
  unset f
fi

xrdb .Xresources
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"

eval `dbus-launch --sh-syntax --exit-with-session`
export XIM=fcitx
export XMODIFIERS=@im=fcitx
export GTK_IM_MODULE=XIM
export QT_IM_MODULE=XIM
fcitx &
xcompmgr -CcfF -I-.015 -O-.03 -D2 -t-5 -l-5 -r4.2 -o.75 &
parcellite &
# xcompmgr -Ss -n -Cc -fF -I-10 -O-10 -D1 -t-3 -l-4 -r4
# xcompmgr &
# exec gnome-session
# exec startkde
exec awesome
# exec openbox-session
# exec ck-launch-session startlxde
# exec startxfce4
# ...or the Window Manager of your choice
# DEFAULT_SESSION=openbox-session

# case $1 in
# *)
#         exec $DEFAULT_SESSION
#         ;;
# fvwm)
#         exec ck-launch-session fvwm
#         ;;
# awesome)
#         exec awesome
#         ;;
# esac
