// components/lib/JWTSessionProvider.js

import React from 'react';
import Cookies from 'js-cookie'; // Import the js-cookie library
import jwt from 'jsonwebtoken';

// Create context.
const SessionContext = React.createContext(null)

export default function JWTSessionProvider(){
  const [decodedSession, setDecodedSession] = React.useState({})

  React.useEffect(() => {
      // Check if the session_token cookie exists
      const sessionToken = Cookies.get('session_token');
      if(!sessionToken) {
          setDecodedSession({}) // No token, hence set to an empty object!
      }

      // Verify token.
      try {
          const decodedToken = jwt.verify(sessionToken, 'your_secret_key');
              setDecodedSession(decodedToken)
      } catch (error) {
          console.error('Token verification failed:', error.message);
      }
  }, [])

  return (
      <SessionContext.Provider value={decodedSession}>
          {children}
      </SessionContext.Provider>
  )
}


// Create and export session hook.
export const useSession = () => React.useContext(SessionContext)