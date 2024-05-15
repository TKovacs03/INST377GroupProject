const supabaseClient = require('@supabase/supabase-js')
const express = require('express')

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))


const supabaseURL = 'https://prwypsbxgfzqwqltvszm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByd3lwc2J4Z2Z6cXdxbHR2c3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MjM1ODQsImV4cCI6MjAzMTI5OTU4NH0.zO5Egnl8RKYhn-YzEd3m5qsZh_Udgk2VuDdZQUSTfkY'
const supabase = supabaseClient.createClient(supabaseURL,supabaseKey)

app.get('/test', async (req, res) => {
    console.log('Hooray!')

    const {data, error} = await supabase
        .from('users')
        .select()

    res.send(data)
})


app.listen(port, () => {
    console.log('idk what is happening')
})