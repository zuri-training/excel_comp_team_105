import React from 'react'
import "./edit_properties.css";
import { MdCancelPresentation } from "react-icons/md"

const EditProperties = () => {
  return (
    <div>
        <main className='editmain'>
            <div className='prop'>
                <h3>Properties</h3>
                <MdCancelPresentation className='propicon' />
            </div>
            <div className='propertieslist'>
                <ul>
                    <div className='propflex'>
                        <p className='profp1'> Size</p>
                        <p> 30KB</p>
                    </div>
                    <div className='propflex'>
                        <p className='profp2'> Title</p>
                        <p> Naled-Johannesburg-George Goch Weekly Timetable</p>
                    </div>
                    <div className='propflex'>
                        <p className='profp3'> Tags</p>
                        <p> Add a tag</p>
                    </div>
                    <div className='propflex'>
                        <p className='profp4'>Categories</p>
                        <p> Add a category</p>
                    </div>
                </ul>
            </div>
            <div className='relateddlist'>
                <ul>
                    <h3>
                        Related Dates
                    </h3>
                    <div className='relflex'>
                        <p>Date Modified</p>
                        <p> 26/07/2022</p>
                    </div>
                    <div className='relflex'>
                        <p className='relp1'> Created</p>
                        <p>12/02/2021</p>
                    </div>
                </ul>
            </div>
            <div className='relatedplist'>
                <ul>
                    <h3>
                        Related People
                    </h3>
                    <div className='prflex'>
                        <p className='pr1'>Author</p>
                        <p>Shearly Wilson</p>
                    </div>
                    <div className='prflex'>
                        <p className='pr2'> Last Modified By</p>
                        <p>Gabriel Knox</p>
                    </div>
                </ul>
            </div>
            <div className='versionlist'>
                <ul>
                    <h3>
                        Versions History
                    </h3>
                    <div className='verflex'>
                        <p className='vr1'>Version 1</p>
                        <p className='vr2'> Corrected Errors</p>
                        <p> 12/06/2021</p>
                    </div>
                    <div className='verflex'>
                        <p className='vr1'> Version 2</p>
                        <p className='vr3'>Removed Duplicates</p>
                        <p> 23/06/2022</p>
                    </div>
                    <div className='verflex'>
                        <p className='vr1'> Version 3</p>
                        <p className='vr4'>Highlighted Differences</p>
                        <p> 26/07/2022</p>
                    </div>
                </ul>
            </div>
            <button className='editbtn'>Save Changes</button>
        </main>
    </div>
  )
}

export default EditProperties