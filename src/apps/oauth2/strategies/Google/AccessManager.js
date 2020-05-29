import OAuth2Configuration from './Config'
import BaseAccessManager from '../AccessManager'

export default class GoogleManager extends BaseAccessManager {
  constructor(
    context,
  ) {
    super(
      OAuth2Configuration,
      context
    )
  }
}
