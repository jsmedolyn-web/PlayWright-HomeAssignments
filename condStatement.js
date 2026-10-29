function launchBrowser(){
    let browserName = 'Chrome'
    if (browserName === 'Chrome')
    {
        console.log('BroswerName is:', browserName)
    }
    else
        console.log('BrowserName is firefox')
}
launchBrowser();

//switchCase - RunTest

function runTest()
{
    let testName = 'Smoke'
    switch(testName){
        case 'Smoke':
            console.log('Test type is Smoke')
            break;
        case 'Sanity':
            console.log('Test type is Sanity')
            break;
        case 'Regression':
           console.log('Test type is Regression')
            break; 
        default:
           console.log('Test type is Smoke')
    }

}
runTest()