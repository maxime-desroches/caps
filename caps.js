const dotenv = require('dotenv').config();
const {google} = require('googleapis');

const Translates = google.translate({
    version: 'v2',
    auth: process.env.GOOGLE_API_KEY
})

if(process.argv.length < 5)
{
    exit_usage();
}else
{
    process.argv.forEach((value, index) => {
        if(value == "")
        {
            exit_usage();
        }
    });
}

const og_text = process.argv[2];
const source = process.argv[3];
const target = process.argv[4];

Translates.translations.list({
    source: source,
    q: og_text,
    target: target 
}).then((res) => {
    console.log(res.data.data.translations[0].translatedText);
}).catch((error) => {
    console.log(error.response.data.error.message);
});

function exit_usage()
{
    console.log('Usage : <string> <source> <target>');
    process.exit(333);
}
