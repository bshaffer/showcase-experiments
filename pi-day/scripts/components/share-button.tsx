// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import classnames from "classnames";
import sharedStyles from "../../styles/shared.css";
import { tweet, facebookShare } from "../services/share";

const tweetCopy = "This is one of 31.4 trillion pieces of art you can generate in celebration of Pi Day. " +
    "Generate your own unique design using the Pi Day Google Cloud Showcase experiment at g.co/showcase/piday. #piday #showcaseexperiment"

export class ShareButton extends React.Component<{ classes: string }> {
    state = { active: false }

    render() {
        const classes = classnames(
            sharedStyles.button,
            this.props.classes,
            this.state.active ? sharedStyles.active : ""
        );

        return (
            <div className={ classes } onClick={ () => this.setState( { active: true } ) }>
                SHARE
                <div className={ sharedStyles.buttonShareContainer }>
                    <div className={ sharedStyles.buttonShareOption }
                         onClick={ () => tweet( tweetCopy ) }>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className={ sharedStyles.buttonShareOption }
                         onClick={ () => facebookShare() }>
                        <i className="fab fa-facebook"></i>
                    </div>
                </div>
            </div>
        )
    }
}
