// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventoExemplo {
    event NovoEvento(address indexed de, uint valor);

    function disparaEvento(uint valor) public {
        emit NovoEvento(msg.sender, valor);
    }
}
