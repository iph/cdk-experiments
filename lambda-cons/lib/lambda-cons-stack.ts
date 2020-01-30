import * as cdk from '@aws-cdk/core';

import lambda = require('@aws-cdk/aws-lambda');


export class LambdaConsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const fn = new lambda.Function(this, 'MyFunction', {
      functionName: 'test-cdk-function',
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline('exports.handler = function(event, ctx, cb) { return cb(null, "hi2"); }'),
      tracing: lambda.Tracing.ACTIVE
    });

    const version = new lambda.Version(this, 'MyFunctionVersion', {
      lambda: fn
    });

    new lambda.Alias(this, "MyFunctionAlias", {
      aliasName: "prod",
      version: version
    });

  }
}
