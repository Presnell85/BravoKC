const Url = 'https://hooks.slack.com/services/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 ';

const data = {
    name: '',
    email: '',
    message: ''
}

$('.btn').click(function(){
    $post(Url,data, function(data, status){
        console.log(`${data} and status is ${status}`)
    })
})