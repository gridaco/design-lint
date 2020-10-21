import { test as namingLintTest } from "./naming.test"

function runAllExamples() {
    var nameLintTestResult = namingLintTest()
    console.log("Number of test data  : " + (nameLintTestResult.successful.length + nameLintTestResult.fail.length))
    console.log("Number of success data  : " + (nameLintTestResult.successful.length))
    console.log("Number of fail data  : " + (nameLintTestResult.fail.length))

    nameLintTestResult.fail.forEach(s => {
        console.log(s.message)
    })
}


if (require.main === module) {
    runAllExamples();
}