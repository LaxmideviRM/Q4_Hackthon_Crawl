var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
 
var client = webdriverio.remote(options).init()

    .url('http://www.klier-karriere.de/jobs')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .elements('a')
    .then(function(links) {
        for (var i=0; i<links.value.length; i++) {
            console.log('Clicking link...');
            // console.log(links.value.length)
            var link = links.value[i].ELEMENT;
            // console.log(links[i].getText());
            client.elementIdClick(link).then(function(result) {
                console.log('Link clicked!');
                // console.log(link.getText());
                // console.log(result);
            });
        }
    })
    // .click(".jsopenwindow").then(function (argument) {
    //     console.log("PPPPPPPPPPPPPPPP");
    // })

    
    // .waitForVisible('.jsopenwindow',10000).then(function(){
    //     client.click(".jsopenwindow").then(function (argument) {
    //         console.log("PPPPPPPPPPPPPPPP");
    //     })
    // })
   

    .end();
