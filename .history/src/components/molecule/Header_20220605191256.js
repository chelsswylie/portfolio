import React, {useState} from "react";

export default function HeaderContainer() {

    const [heading, setHeading] = useState("")
    return (
    <div className="header-container">
        <h1>Chelsea Wylie</h1>
        <span>Software Engineer | Musician </span>
</div>
    )
}
