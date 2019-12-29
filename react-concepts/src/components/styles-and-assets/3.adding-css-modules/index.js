import React, { Component } from 'react';
import styles from './mymodule.module.css';   // Import css modules stylesheet as styles (index.module.css not working)
//import './another-stylesheet.css';          // Import regular stylesheet

class AddingCSSModules extends Component {
  render() {
    console.log(styles['colortext']);
    return <h3 className={styles.colortext}>Color Text</h3>;
  }
}

export default AddingCSSModules;