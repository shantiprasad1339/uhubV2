import React from 'react';
import './highlights.css'

const Highlights = () => {
    return (
        <>
       <div className="container mt-3">
       <h5 className="htl-heading">ISBR Bangalore Highlights</h5>
       <p className="htl-para-fnt">Some of the major highlights regarding ISBR Bangalore are mentioned below:</p>
         <TableInfo />
       </div>
        </>
    )
}
export default Highlights;

const TableInfo = () => {
    return (
        <>
        <table className="highlight-table">
        <thead className="tbl-head-pt">
        <tr>
            <th>Particulars</th>
            <th>Statistics</th>
            </tr>
            </thead>
            <tbody className="tbl-body-pt">
             <TableInnerDetail particular="Also known as" statistics="ISBR Bangalore" />
             <TableInnerDetail particular="School type" statistics="Private" />
             <TableInnerDetail particular="Location" statistics="Also known as" />
             <TableInnerDetail particular="Established by" statistics="Bangalore Educational Trust (BET)" />
             <TableInnerDetail particular="Established by" statistics="AICTE and Ministry of HRD, Government of India" />
             <TableInnerDetail particular="Accreditation" statistics="Also known as" />
             <TableInnerDetail particular="Academic collaborations" statistics="Also known as" />
            </tbody>
        </table>
        </>
    );
};

const TableInnerDetail = (props) => {
    return (
        <>
         <tr>
            <td>{props.particular}</td>
            <td>{props.statistics}</td>
         </tr>
        </>
    );
};