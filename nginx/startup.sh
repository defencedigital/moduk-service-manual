#!/bin/sh

echo "Starting Nginx"
echo "=============="
echo ""
echo "Password : $HTPASSWD"

echo $HTPASSWD | base64 -d > /opt/app-root/etc/.htpasswd

nginx -g 'daemon off;'