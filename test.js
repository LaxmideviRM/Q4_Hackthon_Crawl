var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
 
var clicks = [];
var client = webdriverio.remote(options).init()

    .url('https://apply.king.com/vacancy/find/results/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);

    })
    .click(".rowContainerHolder1").pause(1000).then(function(res) {
        console.log("PPPPPPPPPPPPPPPPPPPPP")
        console.log(res);
    })
    
        .getURL().then(function(url){
            console.log("its here");
            console.log(url);
        })
        client.getCurrentTabId().then(function(tabid) {
            console.log(tabid);
            console.log("****************")
        })
        client.getHTML(res, function(html) {
            console.log("its inside page");
            console.log(html);
        })
        client.getText('h1').then(function(job_title){
            console.log("job title is " + job_title);
        })
    
    // .elements('a').then(function(res) {
    //     console.log("its coming here")
    //     console.log(res)
    //     res.value.forEach(function(ele) {
    //         // console.log(ele);
    //         clicks.push(client.elementIdClick(elem.ELEMENT)
    //                 // .pause(5000)
    //                 // .back()
    //                 // .pause(2000)

    //         );
    //         console.log(clicks);
    //     });
    //     return q.all(clicks);
    // })
    // .click(".jsopenwindow").then(function (argument) {
    //     console.log("PPPPPPPPPPPPPPPP");
    // })

    
    // .waitForVisible('.jsopenwindow',10000).then(function(){
    //     client.click(".jsopenwindow").then(function (argument) {
    //         console.log("PPPPPPPPPPPPPPPP");
    //     })
    // })
   

    .end();

