import * as React from 'react';
import './homepage.styles.scss'
import DirectoryComponent from "../../components/directory/directory.component";


function Homepage() {
    return (
        <div className="homepage">
            <DirectoryComponent/>
        </div>
    );
}

export default Homepage