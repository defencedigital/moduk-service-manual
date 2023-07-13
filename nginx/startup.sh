#!/bin/sh

echo "Starting Nginx"
echo "=============="
echo ""
echo "Is Prod : $IS_PROD"
echo "Basic Auth : $BASIC_AUTH"
echo "Password : $HTPASSWD"

# If this is not prod, add basic auth
if [ "$IS_PROD" = 'false' ]; then
  echo "Not production - implementing basic auth"
  echo $BASIC_AUTH | base64 -d > /opt/app-root/etc/nginx.default.d/basic-auth.conf
  echo $HTPASSWD | base64 -d > /opt/app-root/etc/.htpasswd
fi

nginx -g 'daemon off;'