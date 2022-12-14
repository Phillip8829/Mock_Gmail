import React from "react";



function PrintAllEmailsController(props)
{
    //Main Return
    return  (
    <div>
        {
            props.allEmails.map(function (email) {
                  const  {id, subject,sender} = email;
                  return (
                      <div key={id}>
                          <p>Sender: {sender}</p>
                          <p>Subject: {subject}</p>
                          <br/>
                      </div>
                  )

            } )
        }
    </div>
    )
}

export default PrintAllEmailsController