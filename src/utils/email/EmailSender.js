import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const GOOGLE_OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

class EmailSender {
  constructor({service='gmail', ...props}) {

    this.service = service

    this.props = { 
      clientId    :process.env.UTILS_EMAIL_GOOGLE_OAUTH2_CLIENT_ID,
      clientSecret:process.env.UTILS_EMAIL_GOOGLE_OAUTH2_CLIENT_SECRET,
      refreshToken:process.env.UTILS_EMAIL_GOOGLE_OAUTH2_REFRESH_TOKEN,
      user        :process.env.UTILS_EMAIL_DEFAULT_SENDER,
      sender      :process.env.UTILS_EMAIL_DEFAULT_SENDER,
    }

    this.props = {
      ...this.props,
      ...props
    }

  }

  getTransport() {
    this.smtpTransport = nodemailer.createTransport({
      service:this.service,
      auth   :{
        type        :'OAuth2',
        user        :this.props.user,
        clientId    :this.props.clientId,
        clientSecret:this.props.clientSecret,
        refreshToken:this.props.refreshToken,
        accessToken :this.props.accessToken || this.accessToken
      }
    })
    return this.smtpTransport

  }

  getGoogleAccessToken() {
    this.oauth2Client = new google.OAuth2(
      this.props.clientId,
      this.props.clientSecret,
      GOOGLE_OAUTH_PLAYGROUND,
    )
    this.oauth2Client.setCredentials()
    this.accessToken = this.oauth2Client.getAccessToken()
    return this.accessToken
  }

  async send(dry=false) {
    if(!this.props.accessToken) {
      if(this.provider === 'gmail') {
        this.getGoogleAccessToken()
      }
    }
    const transport = this.getTransport()
    
    const mailOptions = {
      from   :this.props.sender,
      to     :this.props.to,
      subject:this.props.subject,
      text   :this.props.text,
      html   :this.props.content,
    }
    
    if(dry) {
      return {
        accepted:[`${this.props.sender}`],
        response:`250 2.0.0 OK  ${Math.trunc(Date.now()/1000)}`
      }
    }
    const result = await transport.sendMail(mailOptions)
    /*result shape
     {
      accepted    :[ 'adrian.villa.g@gmail.com' ],
      rejected    :[],
      envelopeTime:192,
      messageTime :714,
      messageSize :650,
      response    :'250 2.0.0 OK  1590169379 p10sm9894385wrn.10 - gsmtp',
      envelope    :{ from: 'ale@gmail.com', to: [ 'avg@gmail.com' ] },
      messageId   :'<7a090bbb-e62c-0583-616a-f631b8390245@meccamico.com>'
    }*/
    return result
  }


}

export default EmailSender
