import React, {useEffect, useState} from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'

import { useSetting } from '../provider/setting';
import { owner } from '../api/nft';

export const AuthRoute = ({ children, ...rest }) => {
  const [setting] = useSetting()
  const [ownerAddress, setOwnerAddress] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async() => {
      setLoading(true)
      try {
        const res = await owner()
        setOwnerAddress(res)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    })()
  }, [])
  return (
    <>
      {!loading && setting.address!== '' ?
      <Route
        {...rest}
        render={({ location }) =>
          setting.address !== '' && ownerAddress!== '' && setting.address === ownerAddress? (
            children
          ) : (
            (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            )
          )
        }
      />:
      <div></div>
      }
    </>
  );
}
