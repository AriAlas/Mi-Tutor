import React from "react";

export const LargeForm = () => {
    return (

        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s4">
                        <input id="first_name" type="text" className="validate" name="first_name"></input>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="last_name" type="text" className="validate" name="last_name"></input>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div className="input-field col s4">
                         <input type="text" className="datepicker"></input>
                        <label htmlFor="last_name">Birthdate</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="bio" type="text" className="validate" name="bio"></input>
                        <label htmlFor="bio">Tell us a little about yourself!</label>
                    </div>
                </div>
            
                <div className="row">
                    <div className="input-field col s12">
                    <select multiple>
                        <option disabled={true} value="">Choose an option</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="Music">Music</option>
                        <option value="Art">Art</option>
                        <option value="English">English</option>
                        <option value="Other-Languages">Other Languages</option>
                        <option value="Social Studies">Social Studies</option>
                        <option value="History">History</option>
                        <option value="Health">Health</option>
                    </select>   
                        <label htmlFor="bio">What subjects do you feel comfortable teaching?</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select name = "remote" defaultValue = {"default"}>
                            <option disabled={true}  value="default">Choose an option</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <label>Are you available to tutor remotely (online)?</label>
                    </div>
                    <div className="input-field col s6">
                        <select  name = "inperson" defaultValue = {"default"}>
                            <option disabled={true} value="" value="default">Choose an option</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <label>Are you available to tutor in person?</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate"></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"></input>
                        <label htmlFor="password">Create Password</label>
                    </div>
                </div>
                <p className="right-align">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
                </p>
            </form>
        </div>

    )
}

