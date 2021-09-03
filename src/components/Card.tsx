import React from 'react'
import { timeSince } from '../helpers/RelativeTime'
import { Card }  from 'react-bootstrap'


const CardComponent = (props: any) => {
  const created = new Date(props.created)
  return(<>
    <Card>
      <Card.Body>
        <blockquote className="mb-0 blockquote">
          <p>
            {props.content}
          </p>
          <br />
          <p></p>
          <footer className="blockquote-footer">
            by <cite title="{props.owner}">{props.owner}</cite>
          </footer>
          <span className="badge badge-light text-secondary">{timeSince(created.getTime())} ago</span>
        </blockquote>
      </Card.Body>
    </Card>
  </>)
}

export default CardComponent