import { useEffect, useState } from 'react';
import { Body, SubTitle, Title } from '../../assets/text/text';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import './style.css';

export const Displayer = ({ content, repeatedCount }: { content: string | null, repeatedCount: number | null }) => {

    return (
        <div className="displayer">
            <div className="displayer-content">
                {content == null && <Title><>Please upload a file to read</></Title>}
                {content &&
                    <>
                        <div className='text-container displayer-item'>
                            <Body><>{content}</></Body>
                        </div>
                        <div className='counter displayer-item'>
                            <div className='counter-icon'>
                                <FormatListNumberedIcon style={{ width: '33px', height: '33px', color: '#c72222', alignSelf: 'center' }} />
                            </div>
                            <div className='counter-content'>
                                <SubTitle><>{repeatedCount}</></SubTitle>
                                <Body><>Repeated words</></Body>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
