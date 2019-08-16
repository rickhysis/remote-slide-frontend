import React, { useEffect, useState, useContext } from "react";
import {AppContext} from '../AppContext';
import './synchronize.css';

function Synchronize({ code }) { 

  return (
    <div className="synchronize">
        <div className="synchronize-col__1">
            <div className="synchronize-mobile__background" >
                <span>{code}</span>
            </div>
        </div>
        <div className="synchronize-col__2">
            <h2>Synchronize your phone with the site</h2>
            <ul>
                <li>
                    <span>Step 1</span>
                    <p>
                        Enter to this site from your phone
                    </p>
                </li>
                <li>
                    <span>Step 2</span>
                    <p>
                        Enter code on the page {code}
                    </p>
                </li>
            </ul>            
        </div>
    </div>
  );
}

export default Synchronize;
