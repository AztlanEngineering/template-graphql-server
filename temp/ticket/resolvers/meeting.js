import { meetingController } from '../controllers'
import pm from 'utils/protectedMethod'


const meetingResolver = {
  Query:{
    async allMeetings(r, a, c ){
      return pm(meetingController.all(r), c.user)
    },
    meeting(r, a, c) {
      return meetingController.get(r, a, c)
    },
  },
  Mutation: {
    async addMeeting(r, a, c) {
      return pm(meetingController.add(r, a.input, c), c.user)
    },
    async updateMeeting(r, a, c) {
      return pm(meetingController.update(r, a, c), c.user)
    },
    async deleteMeeting(r, a, c) {
      return pm(meetingController.del(r, a.id, c), c.user)
    }
  }
}

export default [
  meetingResolver
]
