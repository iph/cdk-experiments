import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
import {Duration} from "@aws-cdk/core";

export class DashStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const fn = new lambda.Function(this, 'GolangFunc', {
      functionName: 'test-cdk-go',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'app',
      code: lambda.Code.fromAsset('artifacts/app.zip'),
      tracing: lambda.Tracing.ACTIVE,
      timeout: Duration.seconds(15)
    });

    const restApi = new apigw.LambdaRestApi(this, 'MyApi', {
      handler: fn,
      deployOptions: {},

    });

    const stage = restApi.deploymentStage;

  }
}
