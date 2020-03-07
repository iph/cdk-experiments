package main // import "github.com/iph/cdk-experiments/app"

import (
	"context"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Response struct {
	Output string
}

var cold = false

func init(){

}

func HandleRequest(ctx context.Context) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		StatusCode:        200,
		Headers: map[string]string{
			"Content-Type": "application/json",
		},
		Body:              `{"hi": "there"}`,
		IsBase64Encoded:   false,
	}, nil
}

func main(){
	lambda.Start(HandleRequest)
}

