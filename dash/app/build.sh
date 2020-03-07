mkdir artifacts
cd app
GOPROXY=off go mod vendor
GOOS=linux go build
zip app.zip app
rm -rf vendor

mv app.zip ../artifacts
rm app
cd ..
