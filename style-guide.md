<!-- Navbar Styles -->

<!-- Just try to rename your class names to this classnames which i mentioned here, if you have different class names change it to these classnames because we need to maintain symentic style guide// Mohith -->

.homelogo{
        width: 300px;
        height: 50px;
        margin: 0px;
    }

.header {
    background-color: white;
    border-radius: 10px;
}

.navbar {
    display: flex;
    background-color: #3e4143;
    justify-content: center;
    margin: 0px;

}

.nav-item {
    padding: 14px 20px;
}

.nav-item a {
    color: #fff;
    text-decoration: none;
    text-align: center;
    display: block;
}

.nav-item a:hover {
    background-color: goldenrod;
    border-radius: 2px;
}

.flex1 {
    display: flex;
    align-items: center;
    gap: 15%;
    flex-direction: row;
}


.flex1 img {
    background: transparent;
}

.homelogo{
    width: 300px;
    height: 50px;
}

.flex1 input {
    width: 400px;
    height: 12px;
    padding: 13px;
}

.flex1 button:hover {
    background-color: black;
    border-radius: 20px;
}

.flex1 button {
    padding: 10px 20px; 
    background-color: grey; 
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 1s ease;
    border-radius: 10px;
    margin-right: 50px;
    width: 90px;
}

.search-container {
    position: relative;
    width: 300px;
}

.search-input {
    width: 100%;
    padding: 10px 10px 10px 40px; 
    font-size: 16px;
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 360px;
    transform: translateY(-50%);
    color: #888;
}