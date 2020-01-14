"use strict";
exports.__esModule = true;
var computerPart_1 = require("./computerPart");
var Computer_1 = require("./Computer");
var computer = new Computer_1.Computer();
computer.accept(new computerPart_1.ComputerPartDisplayVisitor());
