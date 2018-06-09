import css from 'styled-jsx/css';

export const selectStyle = css`
.dropdown {
    height: 23px;
    width: 132px;
    float: right;
    margin-right: 4px;
    position: relative;
    overflow: hidden;
    background: #fafafa;
    border: 1px solid;
    border-color: #E5E5E5;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .dropdown-dark{
    background: #212121;
    border-color: #585858;

  }
  
  .dropdown:before, .dropdown:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 5px;
    right: 10px;
    width: 0;
    height: 0;
    border: 4px dashed;
    border-color: #888888 transparent;
    pointer-events: none;
  }
  
  .dropdown:before {
    border-bottom-style: solid;
    border-top: none;
  }
  
  .dropdown:after {
    margin-top: 7px;
    border-top-style: solid;
    border-bottom: none;
  }
  
  .dropdown-select {
    position: relative;
    width: 130%;
    margin: 0;
    padding: 0px 8px 6px 10px;
    height: 28px;
    line-height: 14px;
    font-size: 11px;
    font-weight: 500;
    color: #769aff;
    text-shadow: 0 1px white;
    background: #f2f2f2; /* Fallback for IE 8 */
    background: rgba(0, 0, 0, 0) !important; /* "transparent" doesn't work with Opera */
    border: 0;
    border-radius: 0;
    outline:none;
    cursor:pointer;
    -webkit-appearance: none;
  }

  .dropdown-select-dark{
    text-shadow: 0 1px #313131;

  }
  

  .dropdown-select > option {
    margin: 3px;
    padding: 6px 8px;
    text-shadow: none;
    background: #f2f2f2;
    border-radius: 3px;
    cursor: pointer;
  }
  
  
  .lt-ie9 .dropdown {
    z-index: 1;
  }
  
  .lt-ie9 .dropdown-select {
    z-index: -1;
  }
  
  .lt-ie9 .dropdown-select:focus {
    z-index: 3;
  }
  
`;