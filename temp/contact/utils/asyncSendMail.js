async function asyncSendMail(transporter, mailOptions){
  return new Promise((resolve,reject)=>{

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('error is '+error)
        resolve(false) // or use rejcet(false) but then you will have to handle errors
      }
      else {
        console.log('Email sent: ' + info.id + ' ' + info.response)
        resolve(true)
      }
    })
  }
  )
}

export default asyncSendMail
