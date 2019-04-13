import React from "react";

function Info() {
    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" class="validate"></input>
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate"></input>
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                <div class="input-field col s12">
                    <input id="bio" type="text" class="validate"></input>
                    <label for="bio">Tell us a little about yourself!</label>
                </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="remote_true" type="text" class="validate"></input>
                        <label for="remote_true">Are you available to tutor remotely (online)?</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="inperson_true" type="text" class="validate"></input>
                        <label for="inperson_true">Are you available to tutor in person?</label>
                    </div>
                </div>
                <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate"></input>
                    <label for="email">Email</label>
                </div>
                </div>
            </form>
        </div>
    )
}