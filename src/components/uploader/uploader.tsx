import { useRef } from "react";
import './style.css';
import DescriptionIcon from '@mui/icons-material/Description';
import { Body } from "../../assets/text/text";

const Uploader = (props: {onFileChange: (file: React.ChangeEvent<HTMLInputElement>) => void}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onFileChange(event);
        if(fileInputRef && fileInputRef.current && fileInputRef.current.value !== undefined){
            fileInputRef.current.value = '';
        }
    }
    return (
        <div>
            <div className="container">
                <input role="file-input" type="file" onChange={handleFileChange} accept=".txt" ref={fileInputRef}/>
                <div className="uploader-content">
                    <DescriptionIcon style={{ fontSize: '10em', color: '#faaf41' }} />
                    <Body><>Click to upload a .txt file</></Body>
                </div>
            </div>

        </div >
    );
}

export default Uploader;