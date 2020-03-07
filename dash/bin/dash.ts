#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DashStack } from '../lib/dash-stack';

const app = new cdk.App();
new DashStack(app, 'DashStack', {
    env: {
        account: '326750834372',
        region: 'us-west-2'
    }
});
