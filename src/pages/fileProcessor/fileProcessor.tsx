import { Displayer } from "../../components/displayer/displayer";
import Uploader from "../../components/uploader/uploader";
import './style.css';

const FileProcessor = (props: {content: string | null; repeatedCount: number | null, onFileChange: (file: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <div className='content'>
            <div className='item left-side'>
                <Uploader onFileChange={props.onFileChange}/>
            </div>
            <div className='item right-side'>
                <Displayer  content={props.content} repeatedCount={props.repeatedCount}/>
            </div>
        </div>
    );
}

export default FileProcessor;