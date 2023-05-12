import style from './style.module.css';
import { useState } from 'react';
function Tab(childToParent, poke) {
    const childTo = (activeTab) => {
        setActiveTab(activeTab);
        childToParent.childToParent(activeTab);
    }
    const [activeTab, setActiveTab] = useState("tab1");
    
    return (
        // <div className={style.Tabs}>
       
        <ul className={
            style.nav}>
            <li className={activeTab === "tab1" ? style.active : ""} onClick={() => { childTo('tab1')}}>General</li>
            <li className={activeTab === "tab2" ? style.active : ""} onClick={() => { childTo('tab2')}}>Moves</li>
        </ul>
    //   </div>
      )
}
export default Tab;