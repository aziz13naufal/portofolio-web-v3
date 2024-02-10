import React from 'react'

const page = () => {
  return (
    <div>

    <form action="">
        <button className="g-recaptcha"
                data-sitekey="6LdrtmwpAAAAAF_1P3geCM6akORwM058vl5bB84j"
                data-callback='onSubmit'
                data-action='submit'>
              Submit
            </button>
    </form>
    </div>
  )
}

export default page
