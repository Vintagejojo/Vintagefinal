import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_main">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="column">
                            <h4>this is a column</h4>
                            <ul className="col_list">
                                <li>1</li>
                                <li>3</li>
                                <li>5</li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="column">
                            <h4>this is a column</h4>
                            <ul className="col_list">
                                <li>1</li>
                                <li>3</li>
                                <li>5</li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="column">
                            <h4>this is a column</h4>
                            <ul className="col_list">
                                <li>1</li>
                                <li>3</li>
                                <li>5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
