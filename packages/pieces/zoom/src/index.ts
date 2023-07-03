import { PieceAuth, createPiece } from '@activepieces/pieces-framework';
import { zoomCreateMeeting } from './lib/actions/create-meeting';
import { zoomCreateMeetingRegistrant } from './lib/actions/create-meeting-registrant';

export const zoomAuth = PieceAuth.OAuth2({
  description: "",
  displayName: 'Authentication',
  authUrl: "https://zoom.us/oauth/authorize",
  tokenUrl: "https://zoom.us/oauth/token",
  required: true,
  scope: [
    "meeting:write:admin", "meeting:write"
  ]
})

export const zoom = createPiece({
  displayName: "Zoom",
  logoUrl: 'https://cdn.activepieces.com/pieces/zoom.png',
  actions: [zoomCreateMeeting, zoomCreateMeetingRegistrant],
  auth: zoomAuth,
  authors: ['kanarelo'],
  triggers: [],
});
