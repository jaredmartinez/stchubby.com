#!/bin/bash
echo Uploading the ServerUp page...

HOST='gator2008.hostgator.com'
USER='travisci@stchubby.com'
PASSWD='testtravis'

ftp -n -v $HOST << EOT
ascii
user $USER $PASSWD
prompt
rm -r */
ls -la
bye
EOT
