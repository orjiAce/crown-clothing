import * as React from 'react';
import DirectoryComponent from "../../components/directory/directory.component";
import {HomepageContainer} from "./homepage.style";


function Homepage() {
    return (
        <HomepageContainer>
            <DirectoryComponent/>
        </HomepageContainer>
    );
}

export default Homepage