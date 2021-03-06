import React from 'react';
import dateFormat, { masks } from "dateformat";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const LoadComments = (props) => {
      console.log(props);

      return (
            props.comments.map(comment => {
                  return (
                        <div key={comment.id}>
                              <h5>{comment.author} : </h5>
                              <p>{comment.comment}</p>
                              <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>

                        </div>
                  );
            })
      );
}
export default LoadComments;