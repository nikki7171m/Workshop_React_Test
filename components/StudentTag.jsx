import React from "react";
import "./StudentTag.css"

function StudentTag (props) {

    const year = new Date().getFullYear() - props.tagAge;
    const age = props.tagAge;

    let retired = age > 60;
    let classYear;

    if(age%4===0) {
        classYear = "Blue";
    }else if(age%3===0) {
        classYear = "Red";
    }else if(age%2===0) {
        classYear = "Green";
    }else {
        classYear = "LightBlue";
    }


    return (
        <div className="AgeGroup">
            <div className={"Tag " + classYear}>{year}</div>
            <div className={retired ? "Tag Retried":"Tag Working"}>
                {retired ? "Retried" : "Working"}
            </div>
        </div>
    );

}

export default StudentTag;