#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkRestApiStack } from "../lib/cdk-rest-api-stack";

const app = new cdk.App();
new CdkRestApiStack(app, "CdkRestApiStack", {});
