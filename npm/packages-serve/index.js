#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { exec, execSync } = require("child_process");
console.log("packages-serve");
console.log(1123);


let result = execSync("yarn dev");
console.log(result.toString()); // 将结果转换为字符串，并打印出来
