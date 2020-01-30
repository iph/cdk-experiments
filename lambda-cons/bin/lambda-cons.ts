#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaConsStack } from '../lib/lambda-cons-stack';

const app = new cdk.App();
new LambdaConsStack(app, 'LambdaConsStack', { env: { account: '326750834372', region: 'us-east-2'}});
