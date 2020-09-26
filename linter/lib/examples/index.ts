import { test as namingLintTest } from "./naming"

function runAllExamples() {
    namingLintTest()
}


if (require.main === module) {
    runAllExamples();
}