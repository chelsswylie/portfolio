import React, {useState} from "react";

// this needs to accept props, which need to be passed in to the format below
export default function ContentContainer() {

    const [heading, setHeading] = useState("")
    const [contentInfo, setContentInfo] = useState("")

    return (
    <div className="content-container">
        <h1>{heading}</h1>
        <span>Software Engineer | Musician </span>
</div>
    )
}
