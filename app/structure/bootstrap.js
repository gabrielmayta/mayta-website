/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React            from "react";
import Router           from "react-router";
import Routes           from "./routes";


Router.run(Routes, function (Handler) {

    React.render(
        <Handler/>,
        document.getElementById("main")
    );

});