import { useState } from "react";
import './style.css';
import DescriptionIcon from '@mui/icons-material/Description';
import { Body } from "../../assets/text/text";

const Uploader = (props: {onFileChange: (file: React.ChangeEvent<HTMLInputElement>) => void}) => {

    return (
        <div>
            <div className="container">
                <input role="file-input" type="file" onChange={props.onFileChange} accept=".txt"/>
                <div className="uploader-content">
                    <DescriptionIcon style={{ fontSize: '10em', color: '#faaf41' }} />
                    <Body><>Click to upload a .txt file</></Body>
                </div>
            </div>

        </div >
    );
}

export default Uploader;